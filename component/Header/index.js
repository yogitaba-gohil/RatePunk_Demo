import React, { useState } from 'react'
import Image from 'next/dist/client/image'
import styles from '../../styles/Header.module.scss'
import Link from 'next/link'

const Header = () => {
  const [active,setActive]= useState(false);

  const handleMenu = () =>{
    setActive(!active);
  }
  return (
    <div className={styles.container}>
    <div className={styles.logoContainer}><Image alt='logo image'  src="/assets/logo.svg" width="180px" height="80px" />
    </div>
    <div className={styles.menuItem}>
    
      <div><Link href="/">Chrome Extension</Link></div>
      <div><Link href="/">Price Comparison </Link></div>
      <div><Link href="/">Blog </Link></div>
    </div>
    <div className={styles.menuContainer}>
      <button onClick={handleMenu}>
      <Image src="/assets/menu.svg" alt='menu icon' width="50px" height="30px"/>
      </button>
      
    </div> 
    {active ? <div className={styles.mobileHeader}> 
    
      <div className={styles.mobileCotainer}>

      <div><Image alt='logo image'  src="/assets/logo.svg" width="100px" height="70px" /></div>
      <div className={styles.closeContainer}><button onClick={handleMenu}><Image alt='logo image'  src="/assets/close.svg" width="60px" height="20px" /> </button></div>
      
    </div>
    <div>
    <div className={styles.linkContainer}><Link href="/">Chrome Extension</Link></div>
    <div className={styles.linkContainer}><Link href="/">Price Comparison</Link></div>
    <div className={styles.linkContainer}><Link href="/">Blog</Link></div>
    </div>
    </div> : null}

    </div>
  )
}

export default Header
