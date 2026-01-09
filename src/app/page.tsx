"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";

interface Experiment {
  name: string;
  path: string;
  description?: string;
  createdAt?: string;
}

// Get base path from environment or default to empty
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  const [experiments, setExperiments] = useState<Experiment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Add cache-busting timestamp to avoid stale manifest
    const cacheBuster = `?t=${Date.now()}`;

    // Try multiple manifest locations for robustness
    const manifestUrls = [
      `${basePath}/manifest.json${cacheBuster}`,
      `/wife_sandbox/manifest.json${cacheBuster}`,
      `/manifest.json${cacheBuster}`,
    ].filter((url, i, arr) => arr.indexOf(url) === i); // dedupe

    const fetchManifest = async () => {
      for (const url of manifestUrls) {
        try {
          const res = await fetch(url);
          if (res.ok) {
            const data = await res.json();
            if (data.experiments && Array.isArray(data.experiments)) {
              setExperiments(data.experiments);
              setLoading(false);
              return;
            }
          }
        } catch {
          // Try next URL
        }
      }
      // All URLs failed
      setExperiments([]);
      setLoading(false);
    };

    fetchManifest();
  }, []);

  // Build the correct href for experiment links
  const getExperimentHref = (path: string) => {
    // Construct full URL - path already has leading slash
    // Use /wife_sandbox as base for GitHub Pages
    const base = basePath || "/wife_sandbox";
    return `${base}${path}/`;
  };

  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Creative Sandbox</h1>
        <p className={styles.subtitle}>
          Welcome to your personal playground! This is where all your creative
          experiments live. Each page you create gets its own special place here.
        </p>
      </header>

      <section className={styles.experimentsSection}>
        <h2 className={styles.sectionTitle}>Your Creations</h2>

        {loading ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>...</div>
            <p className={styles.emptyText}>Loading your creations...</p>
          </div>
        ) : error ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>!</div>
            <p className={styles.emptyText}>{error}</p>
          </div>
        ) : experiments.length > 0 ? (
          <div className={styles.experimentsList}>
            {experiments.map((exp) => (
              <a
                key={exp.path}
                href={getExperimentHref(exp.path)}
                className={styles.experimentCard}
              >
                <h3 className={styles.cardTitle}>{exp.name}</h3>
                {exp.description && (
                  <p className={styles.cardDescription}>{exp.description}</p>
                )}
                <span className={styles.cardPath}>{exp.path}</span>
              </a>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>*</div>
            <p className={styles.emptyText}>
              No creations yet! Ask Claude to create a new page for you.
              <br />
              Try saying: &quot;Create a page about my favorite things&quot;
            </p>
          </div>
        )}
      </section>

      <footer className={styles.footer}>
        <p>Made with love - Your Creative Sandbox</p>
      </footer>
    </main>
  );
}
