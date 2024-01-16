import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pages/test">Test</Link>
        </li>

        <li>
          <Link href="/">Contacto</Link>
        </li>

      </ul>
      <h1>Fotitos</h1>
      <Image src="/ima1.jpg" alt="Imagen 1" width={200} height={200}/>
      <Image src="/ima2.jpg" alt="Imagen 1" width={200} height={200}/>
      <Image src="/ima3.jpg" alt="Imagen 1" width={200} height={200}/>
      

    </main>
  );
}
