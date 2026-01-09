import styles from './page.module.scss';

export default function CoachingWebsite() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.profileImageWrapper}>
            <div className={styles.profileImage}>
              <span className={styles.initials}>ОМ</span>
            </div>
          </div>
          <h1 className={styles.name}>Оксана Моїсеєнко</h1>
          <p className={styles.tagline}>Жіночий коуч</p>
          <p className={styles.subtitle}>Впевненість | Самоцінність</p>
        </div>
        <div className={styles.heroDecor}></div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Про мене</h2>
          <p className={styles.aboutText}>
            Допомагаю жінкам повернути внутрішню опору і довіру до себе —
            без тиску, насилля над собою і масок.
          </p>
          <div className={styles.values}>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>✨</span>
              <h3>Впевненість</h3>
              <p>Відновлення віри у себе та свої сили</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>💫</span>
              <h3>Самоцінність</h3>
              <p>Усвідомлення власної унікальності</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>🌸</span>
              <h3>Внутрішня опора</h3>
              <p>Міцний фундамент для життєвих рішень</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Що я пропоную</h2>
          <div className={styles.servicesList}>
            <div className={styles.serviceCard}>
              <h3>Індивідуальні сесії</h3>
              <p>Персональна робота над вашими запитами у безпечному просторі</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Сесія Ясності</h3>
              <p>Глибока трансформаційна програма для жінок</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Групові зустрічі</h3>
              <p>Підтримуюче коло однодумниць на шляху до себе</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Зв&apos;язатися зі мною</h2>
          <div className={styles.contactLinks}>
            <a
              href="https://instagram.com/coach_moiseienko"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.linkIcon}>📷</span>
              <span>Instagram</span>
              <span className={styles.handle}>@coach_moiseienko</span>
            </a>
            <a
              href="https://t.me/+J5kncxDwPo05Zjc0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.linkIcon}>✈️</span>
              <span>Telegram</span>
              <span className={styles.handle}>Приєднатися</span>
            </a>
            <a
              href="https://threads.net/@coach_moiseienko"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.linkIcon}>🧵</span>
              <span>Threads</span>
              <span className={styles.handle}>@coach_moiseienko</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Оксана Моїсеєнко</p>
        <p className={styles.footerTagline}>Твій шлях до себе починається тут</p>
      </footer>
    </main>
  );
}
