import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";
import path from 'path';

const attachmentPath=path.join(process.cwd(), "public", process.env.EMAIL_ATTACHMENT!);
const emailId=process.env.EMAIL_ID!;
const pass=process.env.EMAIL_PASS!;
const subject=process.env.EMAIL_SUBJECT!;
const text=process.env.EMAIL_TEXT!;
const fileName=process.env.FILE_NAME!;


export async function POST(req:Request){
    const body=await req.json();
    const {email}=body;

    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json({ message: 'Invalid email address' },{status:400});
  }
    
    console.log("The email received is ",email);

    try{

    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:emailId,
            pass:pass
        },
        
    });

    const mailOptions={
        from:emailId,
        to:email,
        subject:subject,
        text:text,
        attachments:[{
          filename:fileName,
          path:attachmentPath
        }]
    };
 
   
     await transporter.sendMail(mailOptions);
     return NextResponse.json({message: 'Email sent succesfully'},{status:200});

   }catch(err){
     console.log("Error sending email: ",err);
     return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
   }
   

}