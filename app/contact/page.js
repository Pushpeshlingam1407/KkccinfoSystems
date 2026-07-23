import HeroBanner from "../../components/HeroBanner";
import styles from "../common.module.css";

export default function Contact() {
  return (
    <div>
      <HeroBanner />

      <div className={styles.pageContainer}>
        <hr className={styles.divider} />

        <div className={styles.contactGrid}>
          <div>
            <h2 className={styles.pageTitle}>Contact</h2>
            <div className={styles.contactInfoCard}>
              <h4 className={styles.contactSubtitle}>
                KKCC INFO SYSTEMS, ONGOLE.
              </h4>
              <p className={styles.addressText}>
                UpStairs Canara Bank
                <br />
                South by-pass Road,
                <br />
                ONGOLE,
                <br />
                PIN:523001
                <br />
                Prakasam Dist.
              </p>
              <p className={styles.addressText}>
                Ph: +91 944 193 8380
                <br />
                <a
                  href="mailto:info@kkccinfo.com"
                  className={styles.contactLink}
                >
                  info@kkccinfo.com
                </a>
              </p>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1s0x3a4bb4ca660d37bb%3A0xc3ce1a5e1eb2586!2sCanara%20Bank!5e0!3m2!1sen!2sin!4v1709664426868!5m2!1sen!2sin"
              width="100%"
              height="450"
              className={styles.mapFrame}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <hr className={styles.divider} />
      </div>
    </div>
  );
}
