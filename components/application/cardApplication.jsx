import React from "react";
import styles from "./EventPlanningUI.module.css";
// import Circule from "../circuleSection/circule";
import Link from "next/link";
import LoadingSpinner from "@/app/loading";
import dynamic from "next/dynamic";

const Circule = dynamic(
  () => import("../circuleSection/circule"),
  {
    loading: () => <LoadingSpinner />,
  }
);

// import { Heart, Users, Cake } from 'lucide-react';

export default function CardApplication() {
  return (
    <>



      <Circule />


      <div className={styles.container}>
        {/* Background Image */}
        <div className={styles.backgroundImage}>
          {/* Left Side Cards */}
          <div className={styles.leftCards}>
            {/* Planning Card */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                {/* <Heart className={styles.icon} /> */}
                <i className="fa-solid fa-mobile-alt"></i>
              </div>
              <h3 className={styles.cardTitle}>Cross-Platform Apps</h3>
              <p className={styles.cardDescription}>
                One codebase, multiple platforms. We use Flutter and React Native to create apps that run seamlessly on both Android and iOS, reducing cost and time.
              </p>
              <Link className={styles.learnMore} href="/contact">learn more</Link>
            </div>

            {/* Cake Card */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                {/* <Cake className={styles.icon} /> */}
                <i className="fa-solid fa-mobile-alt"></i>
              </div>
              <h3 className={styles.cardTitle}>E-commerce Apps</h3>
              <p className={styles.cardDescription}>
                Fully functional mobile storefronts with product catalogs, payments, order tracking, and customer support—optimized for conversions.
              </p>
              <Link className={styles.learnMore} href="/contact">learn more</Link>
            </div>
          </div>

          {/* mid side section */}
          <div className={styles.leftCards}>
            {/* Planning Card */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                {/* <Heart className={styles.icon} /> */}
                <i className="fa-solid fa-mobile-alt"></i>
              </div>
              <h3 className={styles.cardTitle}>Booking & Appointment Apps</h3>
              <p className={styles.cardDescription}>
                Custom solutions for doctors, salons, tutors, or services—manage appointments, calendars, and reminders all in one place.
              </p>
              <Link className={styles.learnMore} href="/contact">learn more</Link>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className={styles.rightCards}>
            {/* Party Outfits Card */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                {/* <Users className={styles.icon} /> */}
                <i className="fa-solid fa-mobile-alt"></i>
              </div>
              <h3 className={styles.cardTitle}>Social & Messaging Apps</h3>
              <p className={styles.cardDescription}>
                Build engaging platforms with real-time chat, media sharing, notifications, and user profiles—designed to scale.
              </p>
              <Link className={styles.learnMore} href="/contact">learn more</Link>
            </div>

            {/* Bottom Planning Card */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                {/* <Heart className={styles.icon} /> */}
                <i className="fa-solid fa-mobile-alt"></i>
              </div>
              <h3 className={styles.cardTitle}>On-Demand Service Apps</h3>
              <p className={styles.cardDescription}>
                Uber-like apps with features like geo-tracking, live status updates, user ratings, and instant bookings for services or delivery.
              </p>
              <Link className={styles.learnMore} href="/contact">learn more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
