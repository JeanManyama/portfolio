export default function App() {
  return (
    <div className="container">

      {/* HEROOOO */}
      <header className="hero">
        <h1>Jean Manyama Kapinga</h1>
        <h2>Développeur Fullstack (React / Node.js)</h2>
        <p>
          Spécialisé en développement sécurisé, API REST, CI/CD et déploiement cloud.
        </p>

        <div className="buttons">
          <a href="https://github.com/JeanManyama" target="_blank">GitHub</a>
          <a href="https://deploy-front-vercel-cd.vercel.app" target="_blank">Projet live</a>
          <a href="https://github.com/JeanManyama/kalhyge-prod-frontend" target="_blank">
  Frontend GitHub
</a>

<a href="https://github.com/JeanManyama/kalhyge-prod-backend" target="_blank">
  Backend GitHub
</a>
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
        <img src="/production-dashboard.png" alt="production-dashboard" className="dashboard-img"/>
      </section>

                  {/* FONCTIONNALITES*/}
            <section className="card">
            <h3>⚙️ Fonctionnalités</h3>
            <ul>
  <li>Authentification JWT</li>
  <li>Suivi de production en temps réel</li>
  <li>Communication temps réel avec Socket.IO</li>
  <li>Pipeline CI/CD automatisée</li>
  <li>Rate limiting et sécurité API</li>
  <li>Tests unitaires avec Jest</li>
</ul>
      </section>

      {/* COMPÉTENCES */}
      <section className="card">
        <h3>🛠️ Compétences</h3>
        <p>React • Vue.js • Node.js • Express • PostgreSQL • Docker • Github Actions • CI/CD • API REST • Sécurité</p>
      </section>

      {/* CONTACT */}
      <footer className="footer">
        <p>📧 jean.manyama@gmail.com</p>
      </footer>

    </div>
  );
}