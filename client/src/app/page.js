import Image from "next/image";
import styles from "./page.module.css";
import UrlBox from "./Components/InputBox/UrlBox";
import UrlContext from "./context/UrlContext";

export default function Home() {
  return (
    <main className={`${styles.main} p-3`}>
      <div className={`${styles.boxContainer} `}>
        <UrlContext>
          <UrlBox />
        </UrlContext>
      </div>
    </main>
  );
}
