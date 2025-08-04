import styles from './ServicesSection.module.css';

export default function Circule() {
  return (
    <section className={styles.section}>
      <span className={styles.subtitle}>
        what we're offering
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={styles.icon}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
        </svg>
      </span>
      <h1 className={styles.heading}>
        Services Built Specifically for your Business
      </h1>
      <div className={styles.grid}>
        <div className='d-flex gap-3'>

        <div className={`${styles.card} ${styles.card1}`}>
          <div className={`${styles.circle} ${styles.circle1}`}></div>
          <div className={styles.contentRight}>
            <h2> 🤖 Android <br /> App Development</h2>
            <p>Custom Android apps for all device types.</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <div className={`${styles.circle} ${styles.circle2}`}></div>
          <div className={styles.contentLeft}>
            <h2> 🍎 iPhone <br /> App Development</h2>
            <p>Smooth, secure iOS apps for Apple devices.</p>
          </div>
        </div>
        </div>
        <div className='d-flex gap-3'>
        <div className={`${styles.card} ${styles.card3}`}>
          <div className={`${styles.circle} ${styles.circle3}`}></div>
          <div className={styles.contentRight}>
            <h2>🔄 App <br /> Version Updates</h2>
            <p>Update apps with new features and fixes.</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card4}`}>
          <div className={`${styles.circle} ${styles.circle4}`}></div>
          <div className={styles.contentLeft}>
            <h2> 📲 Play<br /> Store Deployment</h2>
            <p>Publish and manage apps on Google Play.</p>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
