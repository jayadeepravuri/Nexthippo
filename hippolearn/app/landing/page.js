export default function LandingPage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to My App 🚀</h1>
        <p style={styles.subtitle}>
          A modern landing page built with React + Next.js
        </p>
        <button style={styles.button}>Get Started</button>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <div style={styles.features}>
          <div style={styles.featureCard}>
            <h3>⚡ Fast</h3>
            <p>Super fast performance with Next.js.</p>
          </div>
          <div style={styles.featureCard}>
            <h3>🔒 Secure</h3>
            <p>Security best practices out of the box.</p>
          </div>
          <div style={styles.featureCard}>
            <h3>🎨 Beautiful</h3>
            <p>Clean, modern UI built with React.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
  },
  header: {
    textAlign: "center",
    padding: "80px 20px",
    background: "#f5f5f5",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    color: "#555",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    background: "black",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
  },
  section: {
    padding: "60px 20px",
  },
  sectionTitle: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2rem",
  },
  features: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  featureCard: {
    width: "250px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    textAlign: "center",
  },
};
