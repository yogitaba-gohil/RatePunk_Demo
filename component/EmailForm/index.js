import React, {useState} from 'react';
import styles from "../../styles/EmailForm.module.scss";
import Image from 'next/dist/client/image'


const EmailForm = () => {
  const [message, setMessage] = useState('');
  const [error,setError] = useState('');
  const [success, setSuccess] =useState();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleInputChange = (e)=>{
   setMessage(e.target.value);
   if (message.trim().length !== 0 && isValidEmail(message)) {
    setError('');

  } else {
    setError('error state')
  }
  }
  const handleClick = event => {
    event.preventDefault();
    setSuccess(error ? false : true);
  };
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
            { error ? <span style={{color:'red'}}>{error}</span> : null}
            {success ? <div className={styles.successDiv}><Image src='/assets/success.svg' alt='success image' width={20} height={15} /><span>Your email is confirmed!</span></div> : null}
          <input  placeholder="Enter your email address"  type="email" onChange={(e) => handleInputChange(e)}/>
          </div>
        
          <button onClick={handleClick}>Get Referral Link</button>
        
        </div>
      </form>
      <div className={styles.noteContainer}>Limits on max rewards apply.</div>
    </div>
  );
};

export default EmailForm;
