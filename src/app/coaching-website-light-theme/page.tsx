import styles from './page.module.scss';

export default function CoachingWebsite() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.profileImage}>
            <div className={styles.imagePlaceholder}>
              <span>Оксана</span>
            </div>
          </div>
          <h1 className={styles.name}>Оксана Моїсеєнко</h1>
          <p className={styles.title}>Жіночий коуч</p>
          <p className={styles.tagline}>Впевненість | Самоцінність | Внутрішня опора</p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Про мене</h2>
          <div className={styles.aboutContent}>
            <p className={styles.mission}>
              Допомагаю жінкам повернути внутрішню опору і довіру до себе —
              без тиску, насилля над собою і масок 💗
            </p>
            <p className={styles.description}>
              Я вірю, що кожна жінка заслуговує на те, щоб відчувати себе впевнено
              та цінувати себе. Мій підхід — м'який, підтримуючий та ефективний.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Чим я можу допомогти</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>✨</div>
              <h3>Впевненість у собі</h3>
              <p>Знайти внутрішню силу та віру в себе</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🌸</div>
              <h3>Самоцінність</h3>
              <p>Навчитися цінувати та поважати себе</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🌿</div>
              <h3>Внутрішня опора</h3>
              <p>Побудувати стабільний фундамент всередині</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>💫</div>
              <h3>Сесія Ясності</h3>
              <p>Індивідуальна робота для трансформації</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className={styles.approach}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Мій підхід</h2>
          <div className={styles.approachCards}>
            <div className={styles.approachCard}>
              <span className={styles.approachNumber}>01</span>
              <p>Без тиску та поспіху</p>
            </div>
            <div className={styles.approachCard}>
              <span className={styles.approachNumber}>02</span>
              <p>Без насилля над собою</p>
            </div>
            <div className={styles.approachCard}>
              <span className={styles.approachNumber}>03</span>
              <p>Без масок та претензій</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Banner */}
      <section className={styles.event}>
        <div className={styles.container}>
          <div className={styles.eventCard}>
            <div className={styles.eventLabel}>Лекція-практикум</div>
            <h3 className={styles.eventTitle}>Мода і мислення</h3>
            <p className={styles.eventSubtitle}>
              Чому стиль, одяг, самопочуття = впевненість
            </p>
            <p className={styles.eventDescription}>
              Подія, яка змінює з середини
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Зв'язатися зі мною</h2>
          <div className={styles.contactLinks}>
            <a
              href="https://t.me/+J5kncxDwPo05Zjc0"
              className={styles.contactButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.contactIcon}>📱</span>
              Telegram
            </a>
            <a
              href="https://www.instagram.com/coach_moiseienko"
              className={styles.contactButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.contactIcon}>📸</span>
              Instagram
            </a>
            <a
              href="https://www.threads.net/@coach_moiseienko"
              className={styles.contactButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.contactIcon}>🧵</span>
              Threads
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Оксана Моїсеєнко</p>
        <p className={styles.footerTagline}>Твоя впевненість починається тут ✨</p>
      </footer>
    </main>
  );
}
