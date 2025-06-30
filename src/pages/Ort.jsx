import styles from "../styles/Ort.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MyMap from "../components/MyMap.jsx";
import GradientText from "../components/GradientText.jsx";

function Produkte() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });


  return (
    <section className={styles.sectionProdukte} id="location">
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, x: 50 }}
        animate={headingInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className={styles.ProdukteH1}>Location</h1>
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

      <MyMap />
      <br />
      <br />
      <br />
      <GradientText className={styles.GradientText}>
        Visit Us!
      </GradientText>
      <br />

    </section>
  );
}

export default Produkte;
