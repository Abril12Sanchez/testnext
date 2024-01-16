import Link from "next/link";
import Head from "next/head";
import Footer from "@/components/Footer";
// import Image from "next/image";
// import styles from "./page.module.css";
import styles from "@/styles/styles.module.css";

export default function Home() {
  return (
<div className={styles.container}>
  <Head>
    {/* con mayusculas, es componente y agregarlo con link */}
    <title>Solo mi pagina</title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

  </Head>

  {/* barra de navegacion */}
  <nav className={styles.navbar}>
    <a href="#" className={styles.navbarBrand}>Home</a>

    <ul className={styles.navbarNav}>
      <li className={styles.navItem }>
        <a href="#" className={styles.navLink}>Ayuda</a>
      </li>

      <li className={styles.navItem }>
        <a href="#" className={styles.navLink}>Sesión</a>
      </li>
    </ul>

  </nav>  

  {/* contenido principal */}

  <div className={styles.content}>
    <h1> hola mundo 🍓</h1>
  </div>

  {/* componente footer */}
    <Footer/>


</div>
   )
}
