import React from "react";
import styles from "../../styles/EmailForm.module.scss";

const EmailForm = () => {
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.titleContainer}>
          
          REFER FRIENDS AND GET REWARDS
        </div>
        <div className={styles.textContainer}>
          Refer your friends to us and earn hotel <br /> booking vouchers. We will give
          you 1 coin for <br /> each friend that installs our extension. <br /> Minimum
          cash-out at 20 coins.
        </div>
        <div className={styles.inputContainer}>
          <div>
          <input  placeholder="Enter your email address" type="text" />
          </div>
        
          <button>Get Referral Link</button>
        
        </div>
      </form>
      <div className={styles.noteContainer}>Limits on max rewards apply.</div>
    </div>
  );
};

export default EmailForm;
