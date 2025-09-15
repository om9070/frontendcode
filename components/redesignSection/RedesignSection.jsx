// components/RedesignSection.js

import Image from 'next/image';
import styles from './RedesignSection.module.css';

const RedesignSection = () => {
  const features = [
    { icon: '✨', text: 'Modern UI/UX',description:"Clean, responsive, and user-friendly designs that match the latest trends." },
    { icon: '⚡', text: 'Performance Optimization',description:"Faster loading speed, mobile responsiveness, and smooth navigation." },
    { icon: '🔍', text: 'SEO-Friendly Structure',description:"Updated for search engines to improve visibility and rankings." },
    { icon: '🎨', text: 'Brand Refresh',description:"Align your website’s look & feel with your current brand identity." },
    { icon: '🛠️', text: 'Latest Technology Stack',description:"Migration to modern frameworks like React.js, Next.js, Node.js, with secure and scalable architecture." },
    { icon: '📱', text: 'Cross-Platform Compatibility',description:"Optimized for desktop, tablet, and mobile users." },
  ];

  return (
    <section className={styles.redesignContainer}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Website Redesign & Modernization</h2>
        <p className={styles.description}>
          At Vanapex Technologies, we help businesses transform their old or outdated websites into modern, trending, and high-performing platforms.
        </p>
        <ul className={styles.featureList}>
          {features.map((feature, index) => (
            <li key={index} >
                <div className={styles.featureItem}>
              <span className={styles.icon}>{feature.icon}</span>
              {feature.text}
                </div>
                <p style={{color:"#6b7280"}}>-{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src="/seo/website.png" // IMPORTANT: Update this path
          alt="Modern Website Redesign Showcase"
          width={500}
          height={450}
          className={styles.serviceImage}
        />
      </div>
    </section>
  );
};

export default RedesignSection;