import Head from 'next/head'

import styles from './page.module.css'
import Navbar from '../Navbar/index'

const Page = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple website template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Page
