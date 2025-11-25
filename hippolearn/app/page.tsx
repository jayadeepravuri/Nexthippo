export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {/* Hero */}
      <section style={{ maxWidth: 600, textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Learn faster with an AI tutor that quizzes you.
        </h1>
        <p style={{ fontSize: "1.05rem", color: "#555", marginBottom: "1.5rem" }}>
          Upload an image or type a topic, and get instant quizzes that help you
          remember what you study.
        </p>
        <button
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            border: "none",
            background: "black",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Start learning
        </button>
      </section>

      {/* How it works */}
      <section style={{ maxWidth: 700 }}>
        <h2 style={{ fontSize: "1.8rem", textAlign: "center", marginBottom: "1rem" }}>
          How it works
        </h2>
        <ol
          style={{
            listStyle: "decimal",
            paddingLeft: "1.2rem",
            display: "grid",
            gap: "0.75rem",
            fontSize: "1rem",
            color: "#444",
          }}
        >
          <li>
            <strong>Upload an image</strong> of your notes, textbook page, or slide.
          </li>
          <li>
            <strong>Or type a topic</strong> you want to learn (e.g. “Python basics”).
          </li>
          <li>
            <strong>Get an instant quiz</strong> with smart questions to test your
            understanding.
          </li>
        </ol>
      </section>
    </main>
  );
}
