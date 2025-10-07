// components/LogoCarousel.jsx
import styles from "../LogoCarousel.module.css";

const logos = [
  "/img/logo-variant.png",
  "/img/logo-variant.png",
  "/img/logo-variant.png",
  "/img/logo-variant.png",
  "/img/logo-variant.png",
  "/img/logo-variant.png",
  "/img/logo-variant.png",
  "/img/logo-variant.png",
];

export default function LogoCarousel() {
  return (
    <div className={`max-w-4xl mx-auto border-dashed border-b-[1.5px] border-black/20 ${styles.carouselWrapper}`} style={{marginTop:"4%"}}>
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
