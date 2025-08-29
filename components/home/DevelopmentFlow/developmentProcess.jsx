import React from 'react';
import styles from './DevelopmentProcess.module.css';

const DevelopmentProcess = () => {
  const processSteps = [
    {
      icon: (
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <circle cx="12" cy="10" r="3"/>
          <path d="m9 9 2 2 4-4"/>
        </svg>
      ),
      title: "POST YOUR PROJECT REQUIREMENTS",
      description: "Our analysts will thoroughly review your project requirements and select the most experienced developers best suited for your project."
    },
    {
      icon: (
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="m7 11 2-2-2-2"/>
          <path d="m13 17 6-6"/>
          <path d="m17 11 2 2-2 2"/>
        </svg>
      ),
      title: "DISCUSS PROJECT DETAILS WITH OUR ANALYSTS",
      description: "Our experts will contact you within no time to discuss your project related queries and to offer the best solution for your project development."
    },
    {
      icon: (
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <circle cx="12" cy="10" r="2"/>
        </svg>
      ),
      title: "CHOOSE ENGAGEMENT TERMS & TIMELINES",
      description: "Based on the project consultation provided by our experts, you can choose the engagement timelines for your project execution."
    },
    // {
    //   icon: (
    //     <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    //       <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    //       <line x1="8" y1="21" x2="16" y2="21"/>
    //       <line x1="12" y1="17" x2="12" y2="21"/>
    //       <path d="M9 9h6v6H9z"/>
    //       <path d="m9 12 2 2 4-4"/>
    //     </svg>
    //   ),
    //   title: "REVIEW AND SIGN THE PROJECT AGREEMENT",
    //   description: "Formalize your project with a tailored contract, ensuring transparency and mutual commitment before project development begins."
    // }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleBlue}>OUR DEVELOPMENT </span>
            <span className={styles.titleRed}>PROCESS</span>
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.description}>
            We deliver highest level of customer service by deploying innovative and collaborative 
            project management systems to build the most professional, robust and highly scalable 
            web & mobile solutions with highest quality standards.
          </p>
        </div>

        {/* Process Steps */}
        <div className={styles.grid}>
          {processSteps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              {/* Icon Circle */}
              <div className={styles.iconCircle}>
                <div className={styles.icon}>
                  {step.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className={styles.stepTitle}>
                {step.title}
              </h3>
              
              {/* Description */}
              <p className={styles.stepDescription}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;