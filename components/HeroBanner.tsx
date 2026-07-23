import Image from "next/image";
import styles from "./HeroBanner.module.css";

interface HeroBannerProps {
  imageSrc?: string;
  altText?: string;
}

export default function HeroBanner({
  imageSrc = "/images/banner1.jpg",
  altText = "Banner",
}: HeroBannerProps) {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerContainer}>
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className={styles.bannerImage}
        />
      </div>
    </div>
  );
}
