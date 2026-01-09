import styles from "./page.module.scss";

export default function WelcomePage() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome!</h1>

        <p className={styles.message}>
          This is an example page to show you how pages look in your Creative
          Sandbox. Each page you create will have its own unique style and
          content!
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>*</span>
            <h3>Create Anything</h3>
            <p>Recipe collections, photo galleries, quotes, stories - you name it!</p>
          </div>

          <div className={styles.feature}>
            <span className={styles.featureIcon}>+</span>
            <h3>Always Available</h3>
            <p>Your creations stay online and accessible anytime.</p>
          </div>

          <div className={styles.feature}>
            <span className={styles.featureIcon}>=</span>
            <h3>Easy to Share</h3>
            <p>Share your pages with friends and family using a simple link.</p>
          </div>
        </div>

        <a href="../" className={styles.backLink}>
          Back to Home
        </a>
      </div>
    </main>
  );
}
