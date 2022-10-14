import styles from '../styles/Home.module.css'
import Footer from '../component/Footer'
import Header from '../component/Header'
import EmailForm from '../component/EmailForm'

export default function Home() {
  return (
   <>
    <Header />
    <div className={styles.main}>
      <EmailForm />
    </div>
    <Footer />
   </>
  )
}
