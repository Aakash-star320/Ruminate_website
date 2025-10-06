"use client";

import { useEffect, useState } from "react";
import "./global.css";

interface Member {
  name: string;
  role: string;
  img: string;
}

const categories = [
  "Faculties",
  "Alumni",
  "Core Team 2025-2026",
  "Developers",
];

export default function TeamPage() {
  const [team, setTeam] = useState<Member[]>([]);
  const [activeCategory, setActiveCategory] = useState("Faculties");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/team?category=${encodeURIComponent(activeCategory)}`);
        if (!res.ok) {
          throw new Error('Failed to fetch team data');
        }
        const data = await res.json();
        setTeam(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching team:", err);
        setTeam([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, [activeCategory]);

  return (
    <main className="team-main">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <h1 className="hero-text">
            Together <span className="highlight-orange">as a team</span>, we{" "}
            <span className="highlight-orange">dream bigger</span>,{" "}
            <span className="highlight-orange">work harder</span>, and achieve{" "}
            <span className="highlight-gradient">the impossible</span>.
          </h1>
          <p className="hero-description">
            Meet the passionate individuals who make Ruminate&apos;s vision a reality. 
            From experienced faculty mentors to dedicated student leaders, our team 
            brings together diverse expertise and unwavering commitment to fostering 
            entrepreneurial excellence.
          </p>
        </div>

        <div className="hero-right">
          <div className="image-layer">
            <div className="back-layer"></div>
            <img
              className="front-image"
              src="/images/some2.jpg"
              alt="Team Photo"
            />
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="category-nav">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-button ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Team Display */}
      <section className="team">
        <h2>{activeCategory}</h2>
        
        {loading ? (
          <div className="loading">
            Loading team members...
          </div>
        ) : team.length === 0 ? (
          <div className="empty">
            <h3>No team members found</h3>
            <p>We&apos;re currently updating this section. Check back soon!</p>
          </div>
        ) : (
          <div className="team-grid">
            {team.map((member, index) => (
              <div className="card" key={index}>
                <img
                  src={`/images/${member.img}`}
                  alt={member.name}
                  onError={(e) => {
                    e.currentTarget.src = '/images/some2.jpg'; // Fallback image
                  }}
                />
                <div className="info">
                  <p className="name">{member.name}</p>
                  <p className="role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
