import background from "../assets/AppDownload-bg.png";
import { useEffect } from "react";
import styles from "../styles/AppDownload.module.css";
import BlurText from "../components/BlurText";
import SplitText from "../components/AosText.jsx";
import Handy from "../assets/Logo-portrait.png";
import Handy3d from "../assets/Logo-left.png";

function AppDownload() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";

    return () => {
      document.body.style.backgroundImage = "none";
    };
  }, []);

  return (
    <section>
      <BlurText
        text="Our App"
        delay={150}
        animateBy="words"
        direction="top"
        className={styles.BlurText}
      />

      <hr />

      <SplitText
        text="Welcome to Al Mofakir Al Saghir – the magical kids' store!
              Discover toys, books, and fun surprises your child will love.
              Shopping for your little one has never been this easy and joyful!"
        className={styles.SplitText}
        delay={10}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />

      <img src={Handy} alt="Smartphone" className={styles.Handy} />
      <img src={Handy3d} alt="Smartphone" className={styles.Handy1} />
    </section>
  );
}

export default AppDownload;
