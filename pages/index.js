import styles from '../styles/Home.module.css'
import Footer from '../component/Footer'
import Header from '../component/Header'
import EmailForm from '../component/EmailForm'
import Instruction from '../component/Instruction'

export default function Home() {
  return (
   <>
    <Header />
    <div className={styles.main}>
      <div className={styles.emailContainer}>

      <EmailForm />
      </div>
      <div className={styles.instContainer}>

      <Instruction />
      </div>
    </div>
    <Footer />
   </>
  )
}
