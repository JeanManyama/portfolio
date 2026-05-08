export default function App() {
  return (
    <div className="container">

      {/* HERO */}
      <header className="hero">
        <h1>Jean Manyama Kapinga</h1>
        <h2>Développeur Fullstack (React / Node.js)</h2>
        <p>
          Spécialisé en développement sécurisé, API REST, CI/CD et déploiement cloud.
        </p>

        <div className="buttons">
          <a href="https://github.com/JeanManyama" target="_blank">GitHub</a>
          <a href="https://deploy-front-vercel-cd.vercel.app" target="_blank">Projet live</a>
        </div>
      </header>

      {/* PROJET */}
      <section className="card">
        <h3>🚀 Projet principal : Kalhyge-Prod</h3>
        <p>
          Application de suivi de production industrielle en temps réel.
          Architecture fullstack avec backend sécurisé et pipeline DevOps.
        </p>

        <ul>
          <li>React / Node.js / PostgreSQL</li>
          <li>CI/CD GitHub Actions</li>
          <li>Tests Jest</li>
          <li>Security (rate limiting, validation, npm audit)</li>
          <li>Déploiement Vercel + Render</li>
        </ul>
      </section>

      {/* COMPÉTENCES */}
      <section className="card">
        <h3>🛠️ Compétences</h3>
        <p>React • Node.js • Express • PostgreSQL • Git • CI/CD • API REST • Sécurité</p>
      </section>

      {/* CONTACT */}
      <footer className="footer">
        <p>📧 jean.manyama@gmail.com</p>
      </footer>

    </div>
  );
}