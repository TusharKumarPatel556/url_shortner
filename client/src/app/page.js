import Image from "next/image";
import styles from "./page.module.css";
import UrlBox from "./Components/InputBox/UrlBox";

export default function Home() {
  return (
    <main className={`${styles.main} p-3`}>
      <div className={`${styles.boxContainer} `}>
        <UrlBox />
      </div>
    </main>
  );
}
