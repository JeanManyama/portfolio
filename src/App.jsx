import { useMemo, useState } from 'react'

const copy = {
  fr: {
    nav: {
      work: 'Projet',
      experience: 'Expérience',
      engineering: 'Approche',
      about: 'À propos',
      contact: 'Contact',
      cv: 'Télécharger le CV',
    },
    status: 'Ouvert aux opportunités Full Stack',
    heroEyebrow: 'DÉVELOPPEUR FULL STACK JAVASCRIPT',
    heroTitleA: 'Je transforme des besoins métier',
    heroTitleB: 'en applications web fiables.',
    heroIntro:
      "React, Node.js, TypeScript et PostgreSQL. Je conçois des produits complets, de l'interface au déploiement, avec un soin particulier pour le temps réel, la sécurité API, les tests et le CI/CD.",
    viewWork: 'Voir mon travail',
    contactMe: 'Me contacter',
    snapshot: {
      title: 'DEVELOPER SNAPSHOT',
      location: 'LOCALISATION',
      locationValue: 'Bourg-en-Bresse, France',
      current: 'FOCUS',
      currentValue: 'Full Stack JavaScript',
      education: 'CERTIFICATION',
      educationValue: 'CDA · RNCP niveau 6',
      stack: 'STACK',
      stackValue: 'React / Node / PostgreSQL',
      availability: 'STATUT',
      availabilityValue: 'Disponible pour opportunités',
    },
    projectKicker: '01 / ÉTUDE DE CAS',
    projectTitle: 'Kalhyge-Prod',
    projectSubtitle: "De l'observation industrielle à une application web temps réel.",
    projectDescription:
      "Application Full Stack de suivi de production conçue à partir de problématiques observées sur le terrain industriel et soutenue dans le cadre de l'obtention du titre CDA.",
    projectTags: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO', 'Jest', 'GitHub Actions'],
    metrics: [
      ['TEMPS RÉEL', 'Socket.IO'],
      ['BACKEND', 'Node.js / Express / PostgreSQL'],
      ['SÉCURITÉ', 'JWT / rate limiting / validation'],
      ['LIVRAISON', 'Jest / CI/CD / Vercel / Render'],
    ],
    live: 'Application live',
    frontCode: 'Code frontend',
    backCode: 'Code backend',
    experienceKicker: '02 / EXPÉRIENCE',
    experienceTitle: 'Du terrain au produit.',
    experienceIntro:
      "Mon parcours combine développement web et expérience opérationnelle. Cette double lecture m'aide à comprendre les besoins avant de choisir la solution technique.",
    experiences: [
      {
        period: '2026',
        company: 'Makaramedia',
        role: 'Développeur Web Full Stack · Stage',
        text: "Développement d'un agrégateur de réseaux sociaux : intégration des API Pixabay, TikTok, Facebook et Instagram, gestion des médias et planification des publications.",
        stack: 'React · Tailwind CSS · PHP · MySQL · APIs REST',
      },
      {
        period: '2022',
        company: 'SSD Group',
        role: 'Développeur Web · Stage 6 mois',
        text: "Maintenance corrective et évolutive d'applications web, correction de bugs CRUD, ajout de fonctionnalités et manipulation de données clients.",
        stack: 'HTML · CSS · MySQL · SQL Server',
      },
      {
        period: '2021 → Aujourd’hui',
        company: 'Kalhyge',
        role: 'Agent de production · Expédition',
        text: "Préparation et traitement des commandes, utilisation quotidienne du système d'information interne et gestion des reliquats. Une expérience métier à l'origine de Kalhyge-Prod.",
        stack: 'Environnement industriel · SI métier · Process opérationnels',
      },
    ],
    engineeringKicker: '03 / ENGINEERING',
    engineeringTitle: 'Construire. Sécuriser. Tester. Livrer.',
    engineeringIntro:
      "Je cherche une chaîne de développement cohérente plutôt qu'une simple accumulation de technologies.",
    pillars: [
      ['BUILD', 'React · TypeScript · Node.js · REST APIs'],
      ['SECURE', 'JWT · validation · rate limiting · CORS'],
      ['TEST', 'Jest · linting · npm audit'],
      ['SHIP', 'GitHub Actions · CI/CD · Vercel · Render'],
    ],
    aboutKicker: '04 / À PROPOS',
    aboutQuote:
      "Je ne suis pas parti d'un problème théorique. J'ai commencé par observer des problèmes opérationnels réels.",
    aboutText:
      "Mon expérience en environnement industriel m'a donné le goût des outils qui simplifient les processus, rendent l'information visible et améliorent la prise de décision. Aujourd'hui, j'applique cette logique au développement Full Stack.",
    education: 'Concepteur Développeur d’Applications · RNCP niveau 6 · obtenu en 2026',
    contactKicker: '05 / CONTACT',
    contactTitle: 'Un projet ou une opportunité Full Stack ?',
    contactText: 'Parlons-en.',
    mail: 'Écrire un email',
    footer: 'Portfolio conçu et développé avec React.',
  },
  en: {
    nav: {
      work: 'Work',
      experience: 'Experience',
      engineering: 'Engineering',
      about: 'About',
      contact: 'Contact',
      cv: 'Download CV',
    },
    status: 'Open to Full Stack opportunities',
    heroEyebrow: 'FULL STACK JAVASCRIPT DEVELOPER',
    heroTitleA: 'I turn business needs',
    heroTitleB: 'into reliable web applications.',
    heroIntro:
      'React, Node.js, TypeScript and PostgreSQL. I build end-to-end products from interface to deployment, with a strong focus on real-time features, API security, testing and CI/CD.',
    viewWork: 'View my work',
    contactMe: 'Contact me',
    snapshot: {
      title: 'DEVELOPER SNAPSHOT',
      location: 'LOCATION',
      locationValue: 'Bourg-en-Bresse, France',
      current: 'FOCUS',
      currentValue: 'Full Stack JavaScript',
      education: 'CERTIFICATION',
      educationValue: 'CDA · RNCP Level 6',
      stack: 'STACK',
      stackValue: 'React / Node / PostgreSQL',
      availability: 'STATUS',
      availabilityValue: 'Open to opportunities',
    },
    projectKicker: '01 / CASE STUDY',
    projectTitle: 'Kalhyge-Prod',
    projectSubtitle: 'From industrial observation to a real-time web application.',
    projectDescription:
      'A Full Stack production tracking application designed from operational issues observed in an industrial environment and presented as my CDA certification project.',
    projectTags: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO', 'Jest', 'GitHub Actions'],
    metrics: [
      ['REAL-TIME', 'Socket.IO'],
      ['BACKEND', 'Node.js / Express / PostgreSQL'],
      ['SECURITY', 'JWT / rate limiting / validation'],
      ['DELIVERY', 'Jest / CI/CD / Vercel / Render'],
    ],
    live: 'Live application',
    frontCode: 'Frontend code',
    backCode: 'Backend code',
    experienceKicker: '02 / EXPERIENCE',
    experienceTitle: 'From operations to product.',
    experienceIntro:
      'My background combines web development and operational experience. That dual perspective helps me understand the need before choosing the technical solution.',
    experiences: [
      {
        period: '2026',
        company: 'Makaramedia',
        role: 'Full Stack Web Developer · Internship',
        text: 'Contributed to a social media aggregator: Pixabay, TikTok, Facebook and Instagram API integrations, media handling and publication scheduling.',
        stack: 'React · Tailwind CSS · PHP · MySQL · REST APIs',
      },
      {
        period: '2022',
        company: 'SSD Group',
        role: 'Web Developer · 6-month internship',
        text: 'Corrective and evolutionary maintenance of web applications, CRUD bug fixing, feature additions and customer-data handling.',
        stack: 'HTML · CSS · MySQL · SQL Server',
      },
      {
        period: '2021 → Present',
        company: 'Kalhyge',
        role: 'Production / Shipping',
        text: 'Order preparation and processing, daily use of the internal information system and backlog management. This operational experience inspired Kalhyge-Prod.',
        stack: 'Industrial environment · Business IS · Operational processes',
      },
    ],
    engineeringKicker: '03 / ENGINEERING',
    engineeringTitle: 'Build. Secure. Test. Ship.',
    engineeringIntro:
      'I focus on a coherent delivery pipeline rather than a simple list of technologies.',
    pillars: [
      ['BUILD', 'React · TypeScript · Node.js · REST APIs'],
      ['SECURE', 'JWT · validation · rate limiting · CORS'],
      ['TEST', 'Jest · linting · npm audit'],
      ['SHIP', 'GitHub Actions · CI/CD · Vercel · Render'],
    ],
    aboutKicker: '04 / ABOUT',
    aboutQuote:
      "I didn't start from a theoretical problem. I started by observing real operational problems.",
    aboutText:
      'My experience in an industrial environment gave me a strong interest in tools that simplify processes, make information visible and improve decision-making. Today, I apply that mindset to Full Stack development.',
    education: 'Application Designer & Developer · RNCP Level 6 · awarded in 2026',
    contactKicker: '05 / CONTACT',
    contactTitle: 'Have a project or a Full Stack opportunity?',
    contactText: "Let's talk.",
    mail: 'Send an email',
    footer: 'Portfolio designed and built with React.',
  },
}

const links = {
  github: 'https://github.com/JeanManyama',
  linkedin: 'https://www.linkedin.com/in/jean-manyama-kapinga-96275495/',
  live: 'https://kalhyge-prod.vercel.app',
  frontend: 'https://github.com/JeanManyama/kalhyge-prod-frontend',
  backend: 'https://github.com/JeanManyama/kalhyge-prod-backend',
  email: 'mailto:jean.manyama@gmail.com',
  cvFr: '/Jean_Manyama_Kapinga_CV_Developpeur_Full_Stack.pdf',
  cvEn: '/Jean_Manyama_Kapinga_Full_Stack_Developer_CV_EN.pdf',
}

function ExternalLink({ href, children, className = '' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true"> ↗</span>
    </a>
  )
}

function SectionHeader({ kicker, title, intro }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState('fr')
  const t = useMemo(() => copy[lang], [lang])
  const cvHref = lang === 'fr' ? links.cvFr : links.cvEn

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Jean Manyama Kapinga">
          <span className="brand-mark">JM/K</span>
          <span className="brand-name">Jean Manyama</span>
        </a>

        <nav className="nav" aria-label="Navigation principale">
          <a href="#work">{t.nav.work}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#engineering">{t.nav.engineering}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="top-actions">
          <div className="language-switch" aria-label="Choix de langue">
            <button
              className={lang === 'fr' ? 'active' : ''}
              onClick={() => setLang('fr')}
              type="button"
            >
              FR
            </button>
            <span>/</span>
            <button
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
              type="button"
            >
              EN
            </button>
          </div>
          <a className="cv-link" href={cvHref} download>
            {t.nav.cv}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <div className="status-line">
              <span className="status-dot" />
              {t.status}
            </div>
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1>
              <span>{t.heroTitleA}</span>
              <span className="accent-line">{t.heroTitleB}</span>
            </h1>
            <p className="hero-intro">{t.heroIntro}</p>

            <div className="hero-actions">
              <a className="button primary" href="#work">
                {t.viewWork}
              </a>
              <a className="button secondary" href="#contact">
                {t.contactMe}
              </a>
            </div>

            <div className="social-row">
              <ExternalLink href={links.github}>GitHub</ExternalLink>
              <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
              <a href={cvHref} download>
                CV
              </a>
            </div>
          </div>

          <aside className="snapshot">
            <div className="snapshot-head">
              <span>{t.snapshot.title}</span>
              <span className="system-id">JM-2026</span>
            </div>
            <dl>
              <div>
                <dt>{t.snapshot.location}</dt>
                <dd>{t.snapshot.locationValue}</dd>
              </div>
              <div>
                <dt>{t.snapshot.current}</dt>
                <dd>{t.snapshot.currentValue}</dd>
              </div>
              <div>
                <dt>{t.snapshot.education}</dt>
                <dd>{t.snapshot.educationValue}</dd>
              </div>
              <div>
                <dt>{t.snapshot.stack}</dt>
                <dd>{t.snapshot.stackValue}</dd>
              </div>
              <div>
                <dt>{t.snapshot.availability}</dt>
                <dd className="available">{t.snapshot.availabilityValue}</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="case-study" id="work">
          <div className="case-copy">
            <SectionHeader
              kicker={t.projectKicker}
              title={t.projectTitle}
              intro={t.projectSubtitle}
            />
            <p className="case-description">{t.projectDescription}</p>

            <div className="tag-list" aria-label="Technologies">
              {t.projectTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-links">
              <ExternalLink href={links.live} className="text-link">
                {t.live}
              </ExternalLink>
              <ExternalLink href={links.frontend} className="text-link">
                {t.frontCode}
              </ExternalLink>
              <ExternalLink href={links.backend} className="text-link">
                {t.backCode}
              </ExternalLink>
            </div>
          </div>

          <div className="case-visual">
            <div className="image-frame">
              <div className="image-toolbar">
                <span>CASE STUDY / 01</span>
                <span>PRODUCTION / LIVE</span>
              </div>
              <img
                src="/production-dashboard.png"
                alt="Capture de l'application Kalhyge-Prod"
              />
            </div>

            <div className="metric-grid">
              {t.metrics.map(([label, value]) => (
                <div className="metric" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <SectionHeader
            kicker={t.experienceKicker}
            title={t.experienceTitle}
            intro={t.experienceIntro}
          />

          <div className="timeline">
            {t.experiences.map((item, index) => (
              <article className="timeline-item" key={item.company + '-' + item.period}>
                <div className="timeline-index">{String(index + 1).padStart(2, '0')}</div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-main">
                  <h3>{item.company}</h3>
                  <p className="timeline-role">{item.role}</p>
                  <p>{item.text}</p>
                  <p className="timeline-stack">{item.stack}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="engineering-section" id="engineering">
          <SectionHeader
            kicker={t.engineeringKicker}
            title={t.engineeringTitle}
            intro={t.engineeringIntro}
          />

          <div className="pillar-grid">
            {t.pillars.map(([label, value], index) => (
              <article className="pillar" key={label}>
                <span className="pillar-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{label}</h3>
                <p>{value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section-grid" id="about">
          <div>
            <p className="eyebrow">{t.aboutKicker}</p>
            <blockquote>{t.aboutQuote}</blockquote>
          </div>
          <div className="about-copy">
            <p>{t.aboutText}</p>
            <p className="education-line">{t.education}</p>
            <div className="about-links">
              <ExternalLink href={links.github}>GitHub</ExternalLink>
              <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">{t.contactKicker}</p>
          <div className="contact-grid">
            <div>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href={links.email}>
                {t.mail}
              </a>
              <ExternalLink href={links.linkedin} className="button secondary">
                LinkedIn
              </ExternalLink>
            </div>
          </div>
          <a className="email-display" href={links.email}>
            jean.manyama@gmail.com
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Jean Manyama Kapinga</span>
        <span>{t.footer}</span>
        <a href="#top">TOP ↑</a>
      </footer>
    </div>
  )
}
