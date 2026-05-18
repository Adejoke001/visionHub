import React from "react";
import styles from "./news.module.css";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { assets } from "@/assets/assets";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.newsWrapper}>
        <div className={styles.ourNews}>
          <div className={styles.imageSection}>
            <Image 
              src={assets.couple1} 
              alt="couple" 
              className={styles.coupleImage}
            />
          </div>

          <div className={styles.contentSection}>
            <h1 className={styles.title}>
              Feeling like your world is crashing?
              <br /> You're not alone
            </h1>
            
            <p className={styles.description}>
              Let's help you get through this phase and put a bright smile on
              your face again. You get access to experts who prioritize your
              healing, and are willing to help you get a new beginning.
            </p>
            
            <div className={styles.servicesContainer}>
              <div className={styles.servicesWrapper}>
                <ul className={styles.servicesList}>
                  <li className={styles.serviceItem}>
                    <Icon.ArrowRightIcon className={styles.arrowIcon} />
                    <Link href="#" className={styles.serviceLink}>We care</Link>
                  </li>

                  <li className={styles.serviceItem}>
                    <Icon.ArrowRightIcon className={styles.arrowIcon} />
                    <Link href="#" className={styles.serviceLink}>We listen, we don't judge</Link>
                  </li>

                  <li className={styles.serviceItem}>
                    <Icon.ArrowRightIcon className={styles.arrowIcon} />
                    <Link href="#" className={styles.serviceLink}>Your mental health matters.</Link>
                  </li>

                  <li className={styles.serviceItem}>
                    <Icon.ArrowRightIcon className={styles.arrowIcon} />
                    <Link href="#" className={styles.serviceLink}>Your solution is here</Link>
                  </li>
                </ul>
                
                <button className={styles.journeyButton}>
                  Journey with us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;