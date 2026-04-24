import { useState, useEffect, useRef } from "react";

const NAV = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

const SKILLS = [
  { name: "Python", level: 78 },
  { name: "Data Analysis / EDA", level: 75 },
  { name: "Data Visualization", level: 72 },
  { name: "Machine Learning", level: 62 },
  { name: "SQL", level: 68 },
  { name: "Deep Learning", level: 55 },
  { name: "Feature Engineering", level: 70 },
  { name: "Statistical Analysis", level: 65 },
];

const TOOLS = ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "Jupyter", "Power BI", "MySQL", "GitHub", "VS Code", "Google Colab"];

const PROJECTS = [
  {
    title: "Fertility & Lifestyle Data Analysis",
    date: "Mar 2026",
    tech: ["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter"],
    desc: "Analyzed how lifestyle and medical factors influence fertility diagnoses. Built multi-plot visualizations revealing seasonal environmental patterns and correlations between medical history and outcomes.",
    icon: "🔬",
    color: "#e74c3c",
    github: "https://github.com/mudasiryousuf51",
  },
  {
    title: "Makeup Sales Analysis 2025",
    date: "Mar 2026",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    desc: "Performed comprehensive EDA on global makeup sales data. Engineered time-based features and built a dashboard covering revenue, brand performance, regional trends, and channel behavior.",
    icon: "📊",
    color: "#8e44ad",
    github: "https://github.com/mudasiryousuf51",
  },
  {
    title: "Diabetes Prediction ML Pipeline",
    date: "Oct 2025",
    tech: ["Python", "Scikit-learn", "Pandas", "ML"],
    desc: "Built a supervised ML pipeline to predict diabetes risk. Covered preprocessing, EDA on health features, and model evaluation using accuracy, F1-score, and AUC metrics.",
    icon: "🩺",
    color: "#2980b9",
    github: "https://github.com/mudasiryousuf51",
  },
  {
    title: "Skin Disease Diagnosis — Deep Learning",
    date: "Feb–Sep 2023",
    tech: ["Python", "TensorFlow", "CNN", "HAM10000", "ISIC"],
    desc: "M.IT thesis project: CNN-based model classifying skin conditions using HAM10000 and ISIC datasets. Developed an early-detection pipeline evaluated on diagnostic accuracy metrics.",
    icon: "🧬",
    color: "#27ae60",
    github: "https://github.com/mudasiryousuf51",
  },
];

const CERTS = [
  { name: "Python for Data Science", issuer: "IBM / Cognitive Class", date: "Dec 2025" },
  { name: "Data Analysis with Python", issuer: "IBM / Cognitive Class", date: "Dec 2025" },
  { name: "Data Science 101", issuer: "IBM / Cognitive Class", date: "Dec 2025" },
  { name: "Data Visualization with Python", issuer: "IBM / Cognitive Class", date: "Dec 2025" },
  { name: "SQL & Relational Databases 101", issuer: "IBM / Cognitive Class", date: "Jan 2026" },
  { name: "Machine Learning with Python", issuer: "IBM / Cognitive Class", date: "Jan 2026" },
];

// ── PUT YOUR PHOTO HERE ──────────────────────────────────────────────
// 1. Place your photo (e.g. photo.jpg) inside the /public folder
// 2. Change the line below to: const PHOTO = "/photo.jpg";
const PHOTO = "/photo.jpg";
// ────────────────────────────────────────────────────────────────────

function AnimatedBar({ level, color, delay }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setTimeout(() => setWidth(level), delay || 0);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);
  return (
    <div ref={ref} style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden", marginTop: 6 }}>
      <div style={{ height: "100%", width: `${width}%`, background: color, borderRadius: 2, transition: "width 1s cubic-bezier(0.4,0,0.2,1)" }} />
    </div>
  );
}

function SectionHeader({ label, title, center }) {
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      <div style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c0392b", marginBottom: 10 }}>{label}</div>
      <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, lineHeight: 1.1, margin: 0 }}>{title}</h2>
      <div style={{ width: 48, height: 3, background: "#c0392b", marginTop: 14, ...(center ? { margin: "14px auto 0" } : {}) }} />
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#0d0f14", color: "#e8e4df", minHeight: "100vh", overflowX: "hidden" }}>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(13,15,20,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        transition: "all 0.3s", padding: "0 32px",
      }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: "0.04em" }}>
            <span style={{ color: "#c0392b" }}>M</span>udasir Yousuf
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {NAV.map(n => (
              <button key={n} onClick={() => scrollTo(n)} style={{
                background: active === n ? "rgba(192,57,43,0.12)" : "transparent",
                border: "none",
                color: active === n ? "#e74c3c" : "rgba(255,255,255,0.55)",
                padding: "6px 13px", borderRadius: 3, cursor: "pointer", fontSize: 12.5,
                letterSpacing: "0.04em", fontFamily: "inherit", transition: "color 0.2s",
                borderBottom: active === n ? "2px solid #c0392b" : "2px solid transparent",
              }}>{n}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="About" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 32px", position: "relative" }}>
        <div style={{
          position: "absolute", top: 0, right: 0, width: "50%", height: "100%",
          background: "radial-gradient(ellipse at 80% 50%, rgba(192,57,43,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1080, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center", paddingTop: 80 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c0392b", marginBottom: 18 }}>
              Data Science · Analytics · Machine Learning
            </div>
            <h1 style={{ fontSize: "clamp(38px, 5vw, 66px)", fontWeight: 800, lineHeight: 1.05, marginBottom: 20 }}>
              Mudasir<br /><span style={{ color: "#c0392b" }}>Yousuf</span>
            </h1>
            <p style={{ fontSize: 14.5, lineHeight: 1.85, color: "rgba(255,255,255,0.62)", marginBottom: 14, maxWidth: 480 }}>
              Data Science trainee and M.IT graduate passionate about turning raw data into clear, actionable insights. I enjoy exploratory analysis, building ML pipelines, and learning by shipping real projects.
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 36, maxWidth: 460, lineHeight: 1.7 }}>
              Currently training learners at ILS Srinagar while deepening my own skills in Python, statistics, and applied machine learning. Open to junior data analyst / data science roles.
            </p>
            <div style={{ display: "flex", gap: 28, marginBottom: 36 }}>
              {[
                { val: "4+", lbl: "Projects Shipped" },
                { val: "6", lbl: "IBM Certifications" },
                { val: "6 mo", lbl: "Teaching Experience" },
              ].map(s => (
                <div key={s.lbl}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#c0392b" }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{s.lbl}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("Projects")} style={{
                background: "#c0392b", color: "white", border: "none", padding: "11px 26px",
                borderRadius: 3, cursor: "pointer", fontSize: 13, letterSpacing: "0.08em",
                textTransform: "uppercase", fontFamily: "inherit", fontWeight: 600,
              }}>View Projects</button>
              <a href="mailto:mudasiryousuf51@gmail.com" style={{
                background: "transparent", color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.2)", padding: "11px 26px",
                borderRadius: 3, cursor: "pointer", fontSize: 13, letterSpacing: "0.08em",
                textTransform: "uppercase", fontFamily: "inherit", textDecoration: "none",
                display: "inline-block",
              }}>Hire Me</a>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginTop: 22, padding: "6px 14px", background: "rgba(39,174,96,0.1)", border: "1px solid rgba(39,174,96,0.3)", borderRadius: 20 }}>
              <span style={{ width: 7, height: 7, background: "#27ae60", borderRadius: "50%", boxShadow: "0 0 6px #27ae60" }} />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em" }}>Open to opportunities</span>
            </div>
          </div>

          {/* PHOTO */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <style>{`
                @keyframes photoReveal {
                  0%   { opacity: 0; transform: translateY(36px) scale(0.96); filter: grayscale(1) brightness(0.5); }
                  50%  { filter: grayscale(0.3) brightness(0.85); }
                  100% { opacity: 1; transform: translateY(0) scale(1); filter: grayscale(0) brightness(1); }
                }
                .photo-box { animation: photoReveal 1.1s cubic-bezier(0.4,0,0.2,1) forwards; }
                .photo-box:hover img { transform: scale(1.04); filter: brightness(1.06); }
                .photo-box img { transition: transform 0.5s ease, filter 0.5s ease; display: block; }
              `}</style>
              <div className="photo-box" style={{
                width: 300, height: 380, borderRadius: 6, overflow: "hidden",
                border: "2px solid rgba(192,57,43,0.3)",
                boxShadow: "0 32px 64px rgba(0,0,0,0.6)",
              }}>
                <img src={PHOTO} alt="Mudasir Yousuf"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.background = "linear-gradient(135deg,#1a1f2e,#2c3e50)";
                    e.target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:72px;opacity:0.35">👤</div>`;
                  }}
                />
              </div>
              <div style={{ position: "absolute", bottom: -14, left: "50%", transform: "translateX(-50%)", background: "#1a1d25", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "6px 16px", whiteSpace: "nowrap", fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em" }}>
                📍 Srinagar, Kashmir, India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="Skills" style={{ padding: "96px 32px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SectionHeader label="Technical Skills" title="What I Work With" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, marginTop: 48 }}>
            <div>
              <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.4)", marginBottom: 28, lineHeight: 1.6 }}>
                Skill levels reflect honest self-assessment based on projects completed and training given — not years of industry experience.
              </p>
              {SKILLS.map((s, i) => (
                <div key={s.name} style={{ marginBottom: 18 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                    <span style={{ color: "rgba(255,255,255,0.82)" }}>{s.name}</span>
                    <span style={{ color: "#c0392b", fontSize: 11 }}>{s.level}%</span>
                  </div>
                  <AnimatedBar level={s.level} color="#c0392b" delay={i * 70} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 14 }}>Libraries & Tools</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {TOOLS.map(t => (
                    <span key={t} style={{ padding: "6px 13px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 3, fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ padding: 24, background: "rgba(192,57,43,0.05)", border: "1px solid rgba(192,57,43,0.18)", borderRadius: 6 }}>
                <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>Education</div>
                <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>Master of Information Technology</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>University of Kashmir, Hazratbal</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>2020 – 2023 · Thesis: Skin Disease Diagnosis via CNN</div>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>Bachelor of Information Technology</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>S.P. College, Srinagar</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>2016 – 2020</div>
                </div>
              </div>
              <div style={{ padding: "14px 18px", background: "rgba(41,128,185,0.07)", border: "1px solid rgba(41,128,185,0.2)", borderRadius: 4 }}>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
                  💡 <strong style={{ color: "rgba(255,255,255,0.8)" }}>Learning in progress:</strong> Actively building depth in deep learning, model deployment, and advanced SQL.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="Experience" style={{ padding: "96px 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SectionHeader label="Work History" title="Experience" />
          <div style={{ marginTop: 48, position: "relative" }}>
            <div style={{ position: "absolute", left: 8, top: 16, bottom: 16, width: 2, background: "rgba(192,57,43,0.2)" }} />
            <div style={{ paddingLeft: 44, marginBottom: 48, position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 10, width: 16, height: 16, background: "#c0392b", borderRadius: "50%", border: "3px solid #0d0f14" }} />
              <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 6 }}>
                <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#c0392b", background: "rgba(192,57,43,0.1)", padding: "3px 10px", borderRadius: 2 }}>Oct 2025 – Present</span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>Full-time · On-site</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 3 }}>Data Science & Analytics Trainer</h3>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>ILS Srinagar · Srinagar, Kashmir</div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                {["Teach Python, NumPy, Pandas, Matplotlib & Seaborn to beginner and intermediate learners.",
                  "Design hands-on modules covering data cleaning, EDA, feature engineering, and ML-ready datasets.",
                  "Guide students through probability basics, descriptive statistics, and hypothesis testing.",
                  "Build dashboard prototypes and reporting examples to demonstrate business storytelling with data.",
                  "Contribute to in-house ML demos and model evaluation exercises for curriculum development.",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
                    <span style={{ color: "#c0392b", flexShrink: 0, marginTop: 3 }}>▸</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ paddingLeft: 44, position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 10, width: 16, height: 16, background: "rgba(192,57,43,0.35)", borderRadius: "50%", border: "3px solid #0d0f14" }} />
              <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 6 }}>
                <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(192,57,43,0.7)", background: "rgba(192,57,43,0.07)", padding: "3px 10px", borderRadius: 2 }}>Jan 2025 – Aug 2025</span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>Contract · Remote</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 3 }}>WordPress Developer</h3>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>JKHIRE · jkhire.in</div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                {["Built and launched a WordPress platform for centralized job updates and recruitment alerts for J&K.",
                  "Handled content architecture, plugin integration (SEO, caching, forms), and performance tuning.",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
                    <span style={{ color: "rgba(192,57,43,0.6)", flexShrink: 0, marginTop: 3 }}>▸</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="Projects" style={{ padding: "96px 32px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SectionHeader label="Portfolio" title="Projects" />
          <p style={{ marginTop: 16, fontSize: 13, color: "rgba(255,255,255,0.4)", maxWidth: 520, lineHeight: 1.7 }}>
            Personal and academic projects — each one built to practice a real skill and solve a concrete problem.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 36 }}>
            {PROJECTS.map((p) => (
              <div key={p.title} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 6, padding: 26, borderTop: `3px solid ${p.color}`,
                transition: "transform 0.2s, box-shadow 0.2s", cursor: "default", display: "flex", flexDirection: "column",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,0,0,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <span style={{ fontSize: 24 }}>{p.icon}</span>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{p.date}</span>
                </div>
                <h3 style={{ fontSize: 14.5, fontWeight: 700, marginBottom: 8, lineHeight: 1.35 }}>{p.title}</h3>
                <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.58)", lineHeight: 1.72, marginBottom: 16, flex: 1 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ fontSize: 10, padding: "3px 8px", background: `${p.color}15`, border: `1px solid ${p.color}38`, color: p.color, borderRadius: 2 }}>{t}</span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textDecoration: "none", letterSpacing: "0.06em" }}>
                  ⬡ View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="Certifications" style={{ padding: "96px 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SectionHeader label="Credentials" title="Certifications" />
          <p style={{ marginTop: 14, fontSize: 13, color: "rgba(255,255,255,0.4)", maxWidth: 500, lineHeight: 1.7 }}>
            All certifications are from IBM via the Cognitive Class platform.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 36 }}>
            {CERTS.map((c) => (
              <div key={c.name} style={{ padding: "18px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 5, display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>🏅</span>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 600, lineHeight: 1.4, marginBottom: 5 }}>{c.name}</div>
                  <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.38)" }}>{c.issuer}</div>
                  <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.28)", marginTop: 2 }}>{c.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="Contact" style={{ padding: "96px 32px", background: "rgba(192,57,43,0.04)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <SectionHeader label="Let's Connect" title="Contact" center />
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: 22, marginBottom: 38 }}>
            Actively looking for junior data analyst or data science roles. If you have a project, an opportunity, or just want to chat about data — I'd love to hear from you.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
            {[
              { icon: "✉️", label: "Email", value: "mudasiryousuf51@gmail.com", href: "mailto:mudasiryousuf51@gmail.com" },
              { icon: "📞", label: "Phone", value: "+91 7006248669", href: "tel:+917006248669" },
              { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/mudasir-yousuf", href: "https://linkedin.com/in/mudasir-yousuf" },
              { icon: "🐙", label: "GitHub", value: "github.com/mudasiryousuf51", href: "https://github.com/mudasiryousuf51" },
            ].map(item => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: 14, width: "100%", maxWidth: 420,
                padding: "13px 18px", background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)", borderRadius: 4,
                textDecoration: "none", color: "inherit", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(192,57,43,0.45)"; e.currentTarget.style.background = "rgba(192,57,43,0.07)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              >
                <span style={{ fontSize: 18 }}>{item.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: "22px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}>
        © 2026 Mudasir Yousuf · Srinagar, Kashmir · Built with React
      </footer>
    </div>
  );
}