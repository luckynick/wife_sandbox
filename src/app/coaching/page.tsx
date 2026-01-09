import styles from './page.module.scss';

export default function CoachingPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.greeting}>Привіт, я</p>
            <h1 className={styles.name}>Оксана Моїсеєнко</h1>
            <p className={styles.title}>Жіночий коуч</p>
            <p className={styles.tagline}>Впевненість • Самоцінність • Внутрішня опора</p>
            <p className={styles.mission}>
              Допомагаю жінкам повернути внутрішню опору і довіру до себе —
              без тиску, насилля над собою і масок 💗
            </p>
            <a href="https://t.me/+J5kncxDwPo05Zjc0" className={styles.ctaButton}>
              Написати в Telegram
            </a>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageFrame}>
              <div className={styles.imagePlaceholder}>
                <span>Фото</span>
              </div>
            </div>
            <div className={styles.decorLeaf1}></div>
            <div className={styles.decorLeaf2}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Про мене</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                Я вірю, що кожна жінка заслуговує на те, щоб відчувати себе цінною
                та впевненою — просто тому, що вона є.
              </p>
              <p>
                Мій підхід — це м'яка підтримка без тиску. Разом ми знаходимо
                твою внутрішню силу, яка вже є в тобі.
              </p>
              <p>
                Не потрібно ставати кимось іншим. Потрібно повернутися до себе справжньої.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Як я можу допомогти</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🌿</div>
              <h3>Індивідуальний коучинг</h3>
              <p>Персональна робота над твоїми цілями та внутрішніми бар'єрами</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>✨</div>
              <h3>Сесія Ясності</h3>
              <p>Глибока сесія для розуміння себе та своїх справжніх бажань</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🌸</div>
              <h3>Групові програми</h3>
              <p>Трансформаційні програми в колі підтримки однодумниць</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Мої цінності</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <span className={styles.valueNumber}>01</span>
              <h3>Без тиску</h3>
              <p>Кожна йде своїм темпом. Немає "правильної" швидкості змін.</p>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueNumber}>02</span>
              <h3>Без масок</h3>
              <p>Справжність — це найбільша сила. Тут можна бути собою.</p>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueNumber}>03</span>
              <h3>Без насилля над собою</h3>
              <p>М'який шлях до себе через прийняття, а не боротьбу.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Відгуки</h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "Оксана допомогла мені побачити себе з іншого боку. Нарешті відчуваю,
                що маю право на свої бажання."
              </p>
              <p className={styles.testimonialAuthor}>— Клієнтка</p>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "М'який підхід без тиску — саме те, що мені було потрібно.
                Дякую за простір для змін."
              </p>
              <p className={styles.testimonialAuthor}>— Клієнтка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Давай знайомитись</h2>
          <p className={styles.contactText}>
            Якщо відчуваєш, що готова до змін — напиши мені.
            Перша розмова ні до чого не зобов'язує.
          </p>
          <div className={styles.contactLinks}>
            <a href="https://t.me/+J5kncxDwPo05Zjc0" className={styles.contactLink}>
              <span className={styles.contactIcon}>📱</span>
              Telegram
            </a>
            <a href="https://www.instagram.com/coach_moiseienko" className={styles.contactLink}>
              <span className={styles.contactIcon}>📸</span>
              Instagram
            </a>
            <a href="https://www.threads.net/@coach_moiseienko" className={styles.contactLink}>
              <span className={styles.contactIcon}>🧵</span>
              Threads
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Оксана Моїсеєнко • Жіночий коуч</p>
      </footer>
    </main>
  );
}
