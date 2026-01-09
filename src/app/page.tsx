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

  useEffect(() => {
    // Try to load the manifest of deployed experiments
    // First try root manifest, then base path manifest
    const manifestUrl = basePath ? `${basePath}/manifest.json` : "/manifest.json";

    fetch(manifestUrl)
      .then((res) => {
        if (res.ok) return res.json();
        // Try alternative path
        return fetch("/manifest.json").then(r => r.ok ? r.json() : { experiments: [] });
      })
      .then((data) => {
        setExperiments(data.experiments || []);
        setLoading(false);
      })
      .catch(() => {
        setExperiments([]);
        setLoading(false);
      });
  }, []);

  // Build the correct href for experiment links
  const getExperimentHref = (path: string) => {
    // On GitHub Pages, experiments are deployed under the repo root
    // The path already includes the leading slash
    return basePath ? `${basePath}${path}` : path;
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
