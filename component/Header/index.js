import React from 'react'
import Image from 'next/dist/client/image'
import styles from '../../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
    <div className={styles.logoContainer}><Image alt='logo image'  src="/assets/logo.svg" width="200px" height="100px" />
    </div>
    <div className={styles.menuItem}>
      <div>Chrome Extension</div>
      <div>Price Comparison</div>
      <div>Blog</div>
    </div>
    <div className={styles.menuContainer}>
      <button>
      <Image src="/assets/menu.svg" alt='menu icon' width="50px" height="30px"/>
      </button>
    </div>
    </div>
  )
}

export default Header
