import React from 'react'
import Image from 'next/dist/client/image'
import styles from '../../styles/Instruction.module.scss'


const Instruction = () => {
  return (
   <>
  
        <div className={styles.container}>
            <div className={styles.imgContainer} >
                <Image alt='mail image' src="/assets/invite.svg" width={180} height={100} />
            </div>
            <div>
                <h5>Step 1</h5>
                <h4>Invite Friends</h4>
                <p className={styles.bigScreenView}>Refer friends with your<br /> unique referral link.</p>
                 <p className={styles.smallScreenView}>Refer friends with your unique referral link.</p>
            </div>
           
        </div>
        <div className={styles.bigScreenView}>
        <div className={styles.container}>
            

        <div className={styles.coinsDiv}>
            <h5>Step 2</h5>
            <h4>COLLECT COINS</h4>
            <p>Get 1 coin for each friend<br /> that installs our extension<br /> using your referral link.</p>
        </div>
        <div>
            <Image alt='mail image' src="/assets/collect-coins.svg" width={180} height={100}/>
        </div>
            </div>
        
    </div>
    <div className={styles.smallScreenView}>
        <div className={styles.container}>
            
        <div className={styles.imgContainer}>
            <Image alt='mail image' src="/assets/collect-coins.svg" width={180} height={100}/>
        </div>
        <div className={styles.coinsDiv}>
            <h5>Step 2</h5>
            <h4>COLLECT COINS</h4>
            <p className={styles.bigScreenView}>Get 1 coin for each friend<br /> that installs our extension<br /> using your referral link.</p>
            <p className={styles.smallScreenView}>Get 1 coin for each friend that installs our extension<br /> using your referral link.</p>
        </div>
        
            </div>
        
    </div>
    <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image alt='mail image' src="/assets/voucher.svg" width={180} height={90}/>
            </div>
            <div>
                <h5>Step 3</h5>
                <h4>GET VOUCHER</h4>
                <p className={styles.bigScreenView}>Redeem for a $20 hotel<br /> booking voucher once you <br /> collect 20 coins.</p>
           <p className={styles.smallScreenView}> Redeem for a $20 hotelbooking voucher<br />  once you  collect 20 coins.</p>
            </div>
           
        </div>
    
    </>

      
   
  )
}

export default Instruction
