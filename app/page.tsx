"use client";

import { useState } from "react";
import Scaler from "./Scaler";

const A = "/assets/";
const dream = (name: string) => encodeURI(`${A}Dream world • ${name}.png`);
const blurred = (name: string) => encodeURI(`${A}Blurred background • ${name}.png`);

type Pos = {
  l?: number;
  t?: number;
  w?: number;
  h?: number;
  o?: number;
  blur?: number;
  cat?: boolean;
  className?: string;
};

function Deco({ src, l, t, w, h, o, blur, cat, className }: Pos & { src: string }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`${cat ? "abs cat" : "abs"} ${className || ""}`}
      style={{
        left: l,
        top: t,
        width: w,
        height: h,
        opacity: o,
        filter: blur ? `blur(${blur}px)` : undefined,
      }}
    />
  );
}

const DUST = [
  [8, 4, 0, 11, -6],
  [24, 5, 3.5, 13, 8],
  [41, 3.5, 7, 10, -4],
  [58, 4.5, 1.5, 14, 6],
  [74, 3.5, 5.5, 12, -8],
  [90, 5, 9, 15, 5],
];

function DustWord({ color, children, offset = 0 }: { color: string; children: string; offset?: number }) {
  return (
    <span className="dust-word" style={{ color }}>
      {children}
      {DUST.map(([left, size, delay, dur, drift], i) => (
        <i
          key={i}
          aria-hidden="true"
          className="dust"
          style={
            {
              left: `${left}%`,
              width: size,
              height: size,
              animationDelay: `${delay + offset}s`,
              animationDuration: `${dur}s`,
              "--drift": `${drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </span>
  );
}

const projects = [
  {
    id: "pawwatch",
    tag: "Personal project",
    tagColor: "#ff7a45",
    kind: "Community cat rescue app",
    name: "PawWatch",
    desc: "A mobile-first platform for stray cat sightings, care tracking, and community rescue coordination.",
    className: "card-pawwatch",
    image: "/assets/PawWatch Portofolio Showcase 1.png",
    link: "https://canva.link/4n6pfc96z927mju",
  },
  {
    id: "foodlink",
    tag: "University group project",
    tagColor: "#7bd68a",
    kind: "Food donation platform",
    name: "Food Link",
    desc: "A collaborative web platform connecting food donors with local food banks and community support networks.",
    className: "card-foodlink",
    image: "/assets/FoodLink Portofolio Showcase 2.png",
    link: "https://canva.link/xfek1shollhdpga",
  },
];

const links = [
  ["Introduction", "#introduction"],
  ["Experience", "#experience"],
  ["Portfolio", "#portfolio"],
  ["Tech", "#tech"],
  ["Contact", "#contact"],
];

const techs = ["Flutter", "Next.js", "Laravel", "Firebase", "MySQL", "SQLite", "Docker", "GitHub"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Scaler>
      <main className="stage" id="top">
        <Deco src={blurred("kitty silhouette")} l={-30} t={380} o={0.9} className="decor-glow decor-silhouette" />
        <Deco src={`${A}BLurKitten.png`} l={-40} t={905} o={0.18} blur={14} className="decor-glow" />
        <Deco src={`${A}BlurEllipse.png`} l={-80} t={120} o={0.6} className="decor-glow" />
        <Deco src={`${A}Blur2Ellipse.png`} l={1000} t={1250} className="decor-glow" />
        <Deco src={`${A}Blur4Ellipse.png`} l={560} t={300} o={0.5} className="decor-glow" />
        <Deco src={`${A}Blur5Ellipse.png`} l={1180} t={700} o={0.5} className="decor-glow" />
        <Deco src={blurred("cloud cottage")} l={1100} t={2100} o={0.5} className="decor-glow" />

        <Deco src={`${A}FrameThread.png`} l={0} t={0} w={1440} className="thread-line" />
        <Deco src={`${A}waypoint1.png`} l={1082} t={1169} className="waypoint-dot waypoint-1" />
        <Deco src={`${A}waypoint2.png`} l={541} t={1974} className="waypoint-dot waypoint-2" />
        <Deco src={`${A}waypoint3.png`} l={1295} t={2340} className="waypoint-dot waypoint-3" />

        <header className="nav">
          <a href="#top" className="brand" aria-label="Christian Lauren Samuel home">
            <img src={`${A}cat.png`} alt="" width={32} height={32} />
            <span>Christian Lauren Samuel</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {links.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={menuOpen ? "bar open" : "bar"} />
            <span className={menuOpen ? "bar open" : "bar"} />
            <span className={menuOpen ? "bar open" : "bar"} />
          </button>

          <nav className={menuOpen ? "mobile-nav open" : "mobile-nav"} aria-label="Mobile">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        <section aria-labelledby="hero-title" className="hero-section">
          <span id="introduction" className="anchor anchor-intro" />
          <h1 id="hero-title" className="hero-title">
            Hi! I’m Christian
            <br />
            Lauren Samuel (Tian).
          </h1>
          <p className="hero-sub">
            I build <DustWord color="#6fd36f">innovative</DustWord> and{" "}
            <DustWord color="#f0c33c" offset={4}>helpful</DustWord> web and
            <br />
            mobile apps for <DustWord color="#3fa4e8" offset={8}>communities</DustWord>.
          </p>

          <Deco cat src={`${A}Dreamy cat sketch.png`} l={1130} t={108} className="cat-moon" />
          <Deco cat src={dream("sleepy kitten hanging on the thread")} l={200} t={470} className="cat-hanging" />

          <div className="avatar">
            <img src="/assets/profilepic.jpeg" alt="Portrait of Christian Lauren Samuel (Tian)" />
          </div>

          <p className="intro">
            Fullstack developer and product engineer based in Jakarta, Indonesia. I create meaningful and practical digital products for
            people and communities.
          </p>

          <Deco cat src={dream("sleepy kitten on a cloud")} l={1130} t={1030} className="cat-cloud" />
        </section>

        <section aria-labelledby="exp-title" className="exp-section">
          <span id="experience" className="anchor anchor-exp" />
          <p className="eyebrow">Experience</p>
          <h2 id="exp-title" className="h2">
            Fullstack and mobile engineering for community-first products for 2+ years.
          </h2>
          <div className="cv-container">
            <div className="cv-frame">
              <a
                href="https://drive.google.com/file/d/1L8hA4DJkDvH_Ttvoudj0aJfhMCMOtYCr/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="shot cv-shot"
                data-label="View CV ↗"
                aria-label="CV preview"
              >
                <img src="/assets/cvthumbnail.png" alt="Curriculum Vitae Preview" />
              </a>
            </div>
            <span className="small-note">
              A concise overview of my experience and tools.
            </span>
          </div>
        </section>

        <section aria-labelledby="port-title" className="port-section">
          <span id="portfolio" className="anchor anchor-port" />
          <Deco cat src={dream("sleepy kitten lounging on a laptop")} l={148} t={1642} className="cat-laptop" />
          <p className="eyebrow">Portfolio</p>
          <h2 id="port-title" className="h2">
            Quick portfolio previews.
          </h2>
          <div className="portfolio-cards">
            {projects.map((p) => (
              <article key={p.id} className={`card ${p.className}`}>
                <p className="tag" style={{ color: p.tagColor }}>{p.tag}</p>
                <p className="tag" style={{ color: "#9a98ab" }}>{p.kind}</p>
                <h3>{p.name}</h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="shot"
                  data-label="View portfolio slides ↗"
                  aria-label={`${p.name} portfolio preview`}
                >
                  <img src={encodeURI(p.image)} alt={`${p.name} preview`} />
                </a>
                <p className="card-desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="tech-title" className="tech-section">
          <span id="tech" className="anchor anchor-tech" />
          <p className="eyebrow">Tech stack</p>
          <h2 id="tech-title" className="h2">
            Tools and platforms.
          </h2>
          <ul className="techs" aria-label="Tools and platforms">
            {techs.map((name, i) => (
              <li
                key={name}
                className="tech"
                data-label={name}
                role="img"
                aria-label={name}
                tabIndex={0}
                style={{ backgroundPosition: `-${i * 132}px 0` }}
              />
            ))}
          </ul>
        </section>

        <section className="contact contact-section" aria-labelledby="contact-title">
          <span id="contact" className="anchor anchor-contact" />
          <Deco cat src={dream("sleepy kitten waving goodnight")} l={100} t={2646} className="cat-waving" />
          <h2 id="contact-title" className="contact-me">CONTACT ME</h2>
          <p className="intro">
            I’m Christian Lauren Samuel (Tian), a fullstack developer and product engineer in
            Jakarta, Indonesia. Reach out for community-facing or any types of web and mobile
            projects.
          </p>
          <Deco src={`${A}FrameLiftOff.png`} l={1140} t={2631} className="liftoff-badge" />
        </section>

        <footer className="site-footer">
          <div className="foot-brand">
            <span>Christian Lauren Samuel</span>
          </div>
          <p className="copy">© 2026 Tian. Made with care.</p>
          <div className="socials">
            {[
              ["GitHub", "https://github.com/tian573", "GitHub"],
              ["LinkedIn", "https://www.linkedin.com/in/christian-l-191904317/", "LinkedIn"],
              [
                "Gmail",
                "https://mail.google.com/mail/?view=cm&fs=1&to=tianlauren8@gmail.com",
                "gmail",
              ],
            ].map(([name, href, icon]) => (
              <a
                key={name}
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                aria-label={name}
              >
                <img src={`${A}${icon}.png`} alt="" width={24} height={24} />
              </a>
            ))}
          </div>
          <a href="#top" className="back">
            Back to launch pad{" "}
            <img src={`${A}arrowup.png`} alt="" width={11} height={11} />
          </a>
        </footer>
      </main>
    </Scaler>
  );
}
