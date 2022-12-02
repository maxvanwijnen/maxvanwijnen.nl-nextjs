import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PhotoshootTileMenu }from '../components/PhotoshootTileMenu/PhotoshootTileMenu';


export default function Home() {
  return (

    <div className={styles.container}>
        <PhotoshootTileMenu />
    </div>
  )
}
