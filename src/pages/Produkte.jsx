import styles from "../styles/Produkte.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";

function Produkte() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: downloadRef, inView: downloadInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className={styles.sectionProdukte}>
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, x: 50 }}
        animate={headingInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className={styles.ProdukteH1}>Products</h1>
      </motion.div>

      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: -100 }}
        animate={textInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className={styles.ProdukteInfo}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
          necessitatibus illo tempora veritatis, tempore quisquam minima
          exercitationem est quae maiores mollitia cumque deleniti dolor
          incidunt aut minus. Saepe, nam illo?
        </p>
      </motion.div>

      <div className={styles.ProdukteDiv}>
        <Tilt scale={1.1}>
          <div className={styles.ProdukteUnterDiv}>
            <img alt="Produkt Bild" />
            <p>Test</p>
          </div>
        </Tilt>

        <Tilt scale={1.1}>
          <div className={styles.ProdukteUnterDiv}>
            <img alt="Produkt Bild" />
            <p>Test</p>
          </div>
        </Tilt>

        <Tilt scale={1.1}>
          <div className={styles.ProdukteUnterDiv}>
            <img alt="Produkt Bild" />
            <p>Test</p>
          </div>
        </Tilt>

        <Tilt scale={1.1}>
          <div className={styles.ProdukteUnterDiv}>
            <img alt="Produkt Bild" />
            <p>Test</p>
          </div>
        </Tilt>
      </div>

      <motion.div
        ref={downloadRef}
        initial={{ opacity: 0, y: 100 }}
        animate={downloadInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className={styles.ProdukteAppText}>
          You want to see more?
          <button className={styles.download}>Download App</button>
        </p>
      </motion.div>
    </section>
  );
}

export default Produkte;
