import React from "react";
import styles from "../../styles/Footer.module.scss";
import Image from "next/dist/client/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <div>
          <Image
            alt="logo image"
            src="/assets/logo.svg"
            width="125px"
            height="32px"
          />
        </div>
        <div className={styles.textDiv}>
          
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you’re getting the best deal!
          
        </div>
        <div className={styles.textDiv}>
        © 2021 Ratepunk. All Rights Reserved.

        </div>
        
      </div>
      <div className={styles.itemContainer}>
        
        <h3>Quick Links</h3>
        <li>Price Comparison</li>
        <li>Chrome Extension</li>
        <li>How It Works</li>
        <li>Ratepunk Blog</li>
        <li>Privacy Policy</li> 
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.contactContainer}>
        <h3>Contact</h3>
        <div className={styles.mailContainer}>
        <Image alt="social media icon" src='/assets/email.svg' width="25px"
            height="10px"/>
        <span>hi@ratepunk.com</span>
        </div>
        </div>
        
        
       <div className={styles.socialMediaContainer}>

        <h4>SOCIAL</h4>
        <div className={styles.iconContainer}>
          <div className={styles.iconDiv}>

          <Image alt="social media icon" src='/assets/facebook.svg' width="80px"
            height="35px"/>
          </div>
          <div className={styles.iconDiv}>

          <Image alt="social media icon" src="/assets/linkedin.svg" width="80px"
             height="35px"/>
          </div>
          <div className={styles.iconDiv}>

          <Image alt="social media icon" src="/assets/twitter.svg" width="80px"
            height="35px"/>
          </div>
          <div className={styles.iconDiv}>

          <Image alt="social media icon" src="/assets/instagram.svg" width="80px"
            height="35px" />
          </div>
          <div className={styles.iconDiv}>

          <Image alt="social media icon" src="/assets/tiktok.svg" width="80px"
            height="35px"/>
          </div>



        </div>
       </div>
      </div>
    </div>
  );
};

export default Footer;
