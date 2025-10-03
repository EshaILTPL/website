// components/LogoCarousel.jsx
import styles from "../LogoCarousel.module.css";

const logos = [
  "/img/logo-variant.png",
  "/img/logo-variant.png",
  "/img/logo-variant.png",
  "/img/logo-variant.png",
  "/img/logo-variant.png",
];

export default function LogoCarousel() {
  return (
    <div className={`${styles.carouselWrapper}`} style={{marginTop:"4%"}}>
      <div className={styles.carousel}>
        {/* Duplicate logos for seamless loop */}
        {[...logos, ...logos].map((logo, idx) => (
          <div className={styles.logo} key={idx}>
            <img src={logo} alt={`Logo ${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
