import styles from "./SimpleText.module.css";

export default function SimpleText() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left: Title + Description */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            <strong>Who</strong> We Are
          </h2>
          <p className={styles.paragraph}>
            We are a team of performance-driven engineers specializing in scalable infrastructure and intelligent load distribution. Our expertise includes advanced caching strategies, microservice architectures, and server-side load balancing to ensure your systems run efficiently—even under heavy traffic. We prioritize speed, stability, and security, with built-in safeguards to prevent data leaks and ensure business continuity.
          </p>
        </div>

        {/* Right: Features Grid */}
        <div className={styles.right}>
          <div className={styles.feature}>
            <div className={styles.icon}>👤</div>
            <div>
              <h3 className={styles.featureTitle}>Client-Side Caching</h3>
              <p className={styles.featureText}>
               Utilize browser caching and service workers to reduce repeated requests, improving speed and minimizing load on backend servers.
              </p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.icon}>📦</div>
            <div>
              <h3 className={styles.featureTitle}>Code Splitting</h3>
              <p className={styles.featureText}>
               Break large JS bundles into smaller chunks, loading only what’s needed per page to reduce the load on both client and server.
              </p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.icon}>⭐</div>
            <div>
              <h3 className={styles.featureTitle}>Round Robin Routing</h3>
              <p className={styles.featureText}>
                Distribute incoming requests evenly across multiple backend servers to ensure no single server is overwhelmed.
              </p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.icon}>💧</div>
            <div>
              <h3 className={styles.featureTitle}>Auto-Scaling Servers</h3>
              <p className={styles.featureText}>
                Use cloud services like AWS, GCP, or Azure to automatically scale backend infrastructure based on traffic demand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
