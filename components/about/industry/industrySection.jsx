import styles from './Industries.module.css';
import Image from 'next/image';
import { 
  Heart, 
  ShoppingCart, 
  GraduationCap, 
  Zap, 
  Home, 
  Plane, 
  Video,
  Store,
  Network,
  Factory,
  Truck
} from 'lucide-react';

const industries = [
  { name: 'Healthcare', icon:<i className="fa-solid fa-hospital"></i> },
  { name: 'E-commerce', icon:<i className="fa-solid fa-dumpster-fire"></i> },
  { name: 'Education', icon: <i className="fa-solid fa-school"></i> },
  { name: 'Gym', icon: <i className="fa-solid fa-dumbbell"></i> },
  { name: 'Real-Estate', icon: <i className="fa-solid fa-sign-hanging"></i> },
  { name: 'Travel', icon: <i className="fa-solid fa-plane"></i> },
  { name: 'Event', icon: <i className="fa-solid fa-champagne-glasses"></i> },
  { name: 'Jewellery', icon: <i className="fa-solid fa-gem"></i> },
  { name: 'Networking', icon: <i className="fa-solid fa-users-rays"></i> },
  { name: 'Manufacturing', icon: <i className="fa-solid fa-industry"></i> },
  { name: 'Logistics', icon: <i className="fa-solid fa-truck-fast"></i> },
];

export default function Industries() {
  return (
    <section className={styles.container}>
      <div className={styles.leftImage}>
        <Image src="/global.jpeg" alt="Globe" width={600} height={600} />
      </div>

      <div className={styles.rightContent}>
        <div className={styles.gridIcons}>
          {industries.map((item) => (
            <div className={styles.iconBox} key={item.name}>
              <div className={styles.iconCircle}>
                {item.icon}
              </div>
              <span className='font'>{item.name}</span>
            </div>
          ))}
        </div>
        <h2 className={styles.title}>Industries</h2>
        <p className={styles.description}>
          We have successfully delivered everything from enterprise software to intuitive &
          customer-centric apps for multiple industries, for clients across the globe.
        </p>
      </div>
    </section>
  );
}
