/*import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const cred=JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON!);

const auth = new google.auth.GoogleAuth({
  credentials: cred,
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

const drive = google.drive({ version: "v3", auth });

const FOLDER_IDS=[
  "1KfRTCIIkH20h0c-i7hHdeZ1nnr8lZtm7",
  "1txg2er4W8VdDXX1BQ4xd4E_oL4wefjUu",
  "1x1YlP5WVl-VXY5viAR04KahxJX5_5ebY",
  "1xI0I-ryAK5qpjd_cK5GX4rGh1MKj9p3Q",
  "13ozNrlYIeYL_PNSEEmHLbEl_DOQq2-o7",
  "1uN108KNRhOMGKOBJuT-XFu745te5aXbi",
  "1pk8pHzXa49ABVDR6BSEgV7Qg7m9JZbaR",
  "1kkMZFMQOmWkp4_I2s_MUoU174wypK5me",
  "1cB1G3NFOhmlL82q59KTa82LVSdpR-EPI",
  "1RI7V3ji8AZXdNvkIX-wKgnJgZoZ5y-C5",
  "17Q_WS-fgB_hbfZyeCkl4-kKX2ef1mfsL",
  "1TXNm9It1tjHE5tPDEtokB3QGLrlc571W",
  "18z08Ywwk9aKCCHjT_KcRf-e5zT9qArjU",
  "1Pwcpqt6LJDAZxGAPU5mom2U7fw2gXvIb",
  "1dtxeXlSkhQwQeCv16mHArje01u5DuuvC"
];

async function listFilesInFolder(folderId: string) {
  const res = await drive.files.list({
    q: `'${folderId}' in parents and trashed=false`,
    fields: "files(id, name, mimeType)",
    pageSize: 1000,
  });
  return res.data.files;
};

export async function GET(req:NextRequest){
    try{
        const {searchParams}=new URL(req.url);
        const fileId=searchParams.get("fileId");

        if (fileId) {
      // Optionally serve a single file
      const meta = await drive.files.get({ fileId, fields: "name,mimeType" });
      return NextResponse.json({ id: fileId, name: meta.data.name });
    }
    }catch(err){
        console.error(err);
        return NextResponse.json({ error: "Unable to fetch files from Drive" }, { status: 500 });
    }
}

import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const cred = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON!);

const auth = new google.auth.GoogleAuth({
  credentials: cred,
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

const drive = google.drive({ version: "v3", auth });

// Pick one folder ID to test
const TEST_FOLDER_ID = "1dtxeXlSkhQwQeCv16mHArje01u5DuuvC";

async function listFilesInFolder(folderId: string) {
  try {
    const res = await drive.files.list({
      q: `'${folderId}' in parents and trashed=false`,
      fields: "files(id, name, mimeType)",
      pageSize: 100,
    });
    return res.data.files;
  } catch (error: any) {
    console.error("Error listing files:", error.message);
    throw error;
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const fileId = searchParams.get("fileId");

    if (fileId) {
      const meta = await drive.files.get({ fileId, fields: "id, name, mimeType, owners" });
      console.log("Drive metadata:", meta.data); // 👈 Add this line
      return NextResponse.json(meta.data);
    }

    return NextResponse.json({ message: "No fileId provided" });
  } catch (err: any) {
    console.error("Drive error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
*/
