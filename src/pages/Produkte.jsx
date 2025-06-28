import styles from "../styles/Produkte.module.css";

function Produkte() {
  return (
    <section className={styles.sectionProdukte}>
      <h1 className={styles.ProdukteH1}>Products</h1>
      <p className={styles.ProdukteInfo}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
        necessitatibus illo tempora veritatis, tempore quisquam minima
        exercitationem est quae maiores mollitia cumque deleniti dolor incidunt
        aut minus. Saepe, nam illo?
      </p>
      <div className={styles.ProdukteDiv}>
        <div className={styles.ProdukteUnterDiv}>
          <img  alt="Produkt Bild" />
          <p>Test</p>
        </div>
        <div className={styles.ProdukteUnterDiv}>
          <img  alt="Produkt Bild" />
          <p>Test</p>
        </div>
        <div className={styles.ProdukteUnterDiv}>
          <img  alt="Produkt Bild" />
          <p>Test</p>
        </div>
        <div className={styles.ProdukteUnterDiv}>
          <img  alt="Produkt Bild" />
          <p>Test</p>
        </div>
      </div>
      <p className={styles.ProdukteAppText}>You want to see more?
         <button className={styles.download}>Download App</button>
      </p>
    </section>
  );
}

export default Produkte;
