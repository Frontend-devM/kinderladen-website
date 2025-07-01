import background from "../assets/AppDownload-bg.png";
import { useEffect, useState, lazy, Suspense } from "react";
import styles from "../styles/AppDownload.module.css";
import BlurText from "../components/BlurText";
import Handy from "../assets/Logo-portrait.png";
import Handy3d from "../assets/Logo-left.png";
import Google from "../assets/GoogleDownload.png";
import Apple from "../assets/Appstore.svg";
import { useNavigate } from "react-router-dom";

function AppDownload() {
  const navigate = useNavigate();

  useEffect(() => {
    // Hintergrund setzen
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";

    return () => {
      document.body.style.backgroundImage = 'url("/hintergrundBild.png")';
      document.body.style.backgroundSize = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundPosition = "";
    };
  }, []);

  return (
    <section>
      <button className={styles.back} onClick={() => navigate("/")}>
        ⬅️ Back
      </button>

      <BlurText
        text="Our App"
        delay={150}
        animateBy="words"
        direction="top"
        className={styles.BlurText}
      />

      <hr />

      <div className={styles.SplitText}>
        <p>
          Welcome to المفكر الصغير – a fun shop for kids! Find toys, books, and
          surprises your child will enjoy. It’s easy and fun to shop for your
          little one here!
        </p>
      </div>

      
      <img src={Handy} alt="Smartphone" className={styles.Handy} />
        
      <img src={Handy3d} alt="Smartphone" className={styles.Handy1} />
    
      <div className={styles.downloadDiv}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={styles.Google}
        >
          <img src={Google} alt="Download on Google" />
        </a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={styles.Apple}
        >
          <img src={Apple} alt="Download on Apple" />
        </a>
      </div>
    </section>
  );
}

export default AppDownload;
