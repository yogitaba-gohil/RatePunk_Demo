import React from 'react'
import Image from 'next/dist/client/image'
import styles from '../../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
    <div className={styles.logoContainer}><Image alt='logo image'  src="/assets/logo.svg" width="200px" height="200px" />
    </div>
    <div className={styles.menuItem}>
      <div>Chrome Extension</div>
      <div>Price Comparison</div>
      <div>Blog</div>
    </div>
    </div>
  )
}

export default Header
