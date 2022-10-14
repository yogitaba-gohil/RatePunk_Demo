import React from 'react'
import styles from '../../styles/EmailForm.module.scss'


const EmailForm = () => {
  return (
    <div className={styles.container}>
    <form>
     <div className={styles.titleContainer}> REFER FRIENDS AND GET REWARDS</div>
     <div>Refer your friends to us and earn hotel booking vouchers. We will give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</div>
    <input />
    <button>Get Referral Link</button>
    </form>
    </div>
  )
}

export default EmailForm
