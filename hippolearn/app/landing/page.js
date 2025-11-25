"use client";

import CardNav from "./components/CardNav";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import TryIt from "./components/TryIt";
import Prism from "./components/Prism";
import logo from "@/public/logo.svg";
import "./landing.css";

export default function LandingPage() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <>
      <section className="landing-prism-hero">
        <div className="prism-bg">
          <Prism
            animationType="3drotate"
            timeScale={0.45}
            height={3.8}
            baseWidth={6}
            scale={3.9}
            hueShift={0.55}
            colorFrequency={1.1}
            noise={0.4}
            glow={1.05}
            bloom={1.15}
          />
        </div>
        <div className="prism-overlay" />

        <div className="landing-prism-content">
          <CardNav
            className="glass-nav"
            logo={logo}
            logoAlt="Company Logo"
            items={items}
            baseColor="rgba(255, 255, 255, 0.08)"
            menuColor="#F7F5FF"
            buttonBgColor="rgba(255, 255, 255, 0.12)"
            buttonTextColor="#F7F5FF"
            ease="power3.out"
          />

          <div className="hero-shell">
            <Hero />
          </div>
        </div>
      </section>

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
          padding: "3rem 1.5rem"
        }}
      >
        <HowItWorks />
        <TryIt />
      </main>
    </>
  );
}
