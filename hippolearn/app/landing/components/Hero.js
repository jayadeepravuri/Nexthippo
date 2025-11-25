export default function Hero() {
  return (
    <section
      style={{
        maxWidth: 760,
        margin: "0 auto",
        textAlign: "center",
        color: "#f6f2ff",
        display: "grid",
        gap: "1rem",
        justifyItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.7rem",
          marginBottom: "0.5rem",
          letterSpacing: "-0.02em",
          lineHeight: 1.1
        }}
      >
        Learn faster with an AI tutor that quizzes you.
      </h1>

      <p
        style={{
          fontSize: "1.05rem",
          color: "rgba(246, 242, 255, 0.82)",
          marginBottom: "0.5rem"
        }}
      >
        Upload an image or type a topic, and get instant quizzes that help you
        remember what you study.
      </p>

      <button
        style={{
          padding: "0.7rem 1rem",
          borderRadius: "999px",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          background: "linear-gradient(120deg, #8f7bff, #e65fef)",
          color: "#fff",
          boxShadow: "0 15px 40px rgba(137, 108, 255, 0.35)",
          backdropFilter: "blur(6px)",
          fontSize: "1rem",
          cursor: "pointer",
          width: "fit-content",
          maxWidth: "180px",
          margin: "0 auto",      }}
      >
        Start learning
      </button>
    </section>
  );
}
