import Image from "next/image";
import HeroBanner from "../../components/HeroBanner";
import styles from "../common.module.css";

export default function About() {
  return (
    <div>
      <HeroBanner />

      <div className={styles.pageContainer}>
        <hr className={styles.divider} />

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.pageTitle}>About KKCC</h2>
            <p className={styles.paragraph}>
              KKCC Info Systems, Ongole is an IT solution provider for projects
              and it provides courses for students. Their approach focuses on
              teaching the students in a practical Environment, making them
              involve to be a part of institution by sending to the people where
              software solutions and hardware problems are dealt, combining IT
              innovation and adoption while also leveraging an organization
              current IT assets.
            </p>
            <p className={styles.paragraph}>
              A strategy where we architect, integrate and manage technology
              services and solutions-we call it AIM for success. A robust
              offshore development methodology and reduced demand on customer
              resources, a focus on the use of reusable frameworks to provide
              cost and times benefits.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/InstituteImage.jpg"
                alt="Institute"
                fill
                className={styles.imageCover}
              />
            </div>
          </div>
        </div>

        <hr className={styles.divider} />
      </div>
    </div>
  );
}
