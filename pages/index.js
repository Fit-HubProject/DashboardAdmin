import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container} >
<div className={styles.title}>
<Link href='/login'>
        <a>login</a>
      </Link>
      <Link href='/dashboard'>
        <a>Dashboard</a>
      </Link>
     </div>

      <div className={styles.title}>
     <Link href='/recipe'>
       <a>Recipe</a>
     </Link>
     </div>
      <div className={styles.title}>
      <Link href='/user'>
        <a>User</a>
      </Link>
     </div>
     <div className={styles.title}>
      <Link href='/gym'>
        <a>Gym</a>
      </Link>
     </div>

     <div className={styles.title}>
      <Link href='/coach'>
        <a>Coach</a>
      </Link>
     </div>
      </div>
  )
}
