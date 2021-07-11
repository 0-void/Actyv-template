import Link from 'next/link'
import {useRouter} from 'next/router'

import styles from './navlinks.module.css'

const Navlinks = () => {
  const path = useRouter().pathname.toString()
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">
          <a className={path === '/' ? styles.highlight : undefined}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/team">
          <a className={path === '/team' ? styles.highlight : undefined}>Team</a>
        </Link>
      </li>
      <li className={styles.products}>
        <Link href="/products">
          <>
            <a className={path === '/products' ? styles.highlight : undefined}>Products</a>
            <div className={styles.dropdown}>
              <div>list item one</div>
              <div>list item two</div>
            </div>
          </>
        </Link>
      </li>
      <li>
        <Link href="/career">
          <a className={path === '/career' ? styles.highlight : undefined}>Career</a>
        </Link>
      </li>
    </ul>
  )
}

export default Navlinks
