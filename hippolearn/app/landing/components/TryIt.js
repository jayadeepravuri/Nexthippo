"use client";

import { useState } from "react";

export default function TryIt() {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState([]);

  function handleGenerate(e) {
    e.preventDefault();

    // For now: fake quiz – later this is where AI comes in
    if (!topic.trim()) {
      setQuestions([]);
      return;
    }

    setQuestions([
      `What is the main idea of "${topic}"?`,
      `Explain "${topic}" in your own words.`,
      `Give one example related to "${topic}".`,
    ]);
  }

  return (
    <section
      style={{
        maxWidth: 800,
        margin: "0 auto",
        borderRadius: "16px",
        border: "1px solid #e2e8f0",
        padding: "1.5rem",
        background: "white",
        boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
        Try it out
      </h2>
      <p style={{ fontSize: "0.95rem", color: "#555", marginBottom: "1rem" }}>
        Type a topic or upload an image of your notes. For now, we’ll generate a
        sample quiz based on the topic text.
      </p>

      {/* Simple form */}
      <form
        onSubmit={handleGenerate}
        style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
      >
        <label style={{ fontSize: "0.9rem", fontWeight: 500 }}>
          Topic or description
        </label>
        <textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder='e.g. "Basics of photosynthesis"'
          rows={3}
          style={{
            padding: "0.75rem",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            fontSize: "0.95rem",
            resize: "vertical",
          }}
        />

        <div
          style={{
            marginTop: "0.5rem",
            padding: "0.75rem",
            borderRadius: "10px",
            border: "1px dashed #cbd5e1",
            background: "#f8fafc",
            fontSize: "0.85rem",
          }}
        >
          <strong>Image upload (coming soon):</strong>  
          <br />
          You’ll be able to drop a screenshot of your notes here and get a quiz
          from it.
          <br />
          <br />
          <input type="file" disabled style={{ opacity: 0.6 }} />
        </div>

        <button
          type="submit"
          style={{
            marginTop: "1rem",
            alignSelf: "flex-start",
            padding: "0.6rem 1.4rem",
            borderRadius: "999px",
            border: "none",
            background: "black",
            color: "white",
            cursor: "pointer",
            fontSize: "0.95rem",
          }}
        >
          Generate quiz
        </button>
      </form>

      {/* Show fake quiz */}
      {questions.length > 0 && (
        <div style={{ marginTop: "1.5rem" }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            Sample quiz
          </h3>
          <ol
            style={{
              paddingLeft: "1.1rem",
              display: "grid",
              gap: "0.4rem",
              fontSize: "0.95rem",
            }}
          >
            {questions.map((q, idx) => (
              <li key={idx}>{q}</li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}
