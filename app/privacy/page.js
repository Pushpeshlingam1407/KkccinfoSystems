import HeroBanner from "../../components/HeroBanner";
import styles from "../common.module.css";

export default function Privacy() {
  return (
    <div>
      <HeroBanner />

      <div className={styles.pageContainer}>
        <hr className={styles.divider} />

        <div className={styles.privacyContainer}>
          <h2 className={styles.pageTitle}>Privacy Policy</h2>

          <p className={styles.paragraph}>
            This privacy policy is for kkccinfo.com, kkccinfo.in,
            telugututorial.in, which is a website of KKCC INFO SYSTEMS
            Educational Institution. We provide Software, Hardware, and Spoken
            English Training to students. This privacy policy informs you about
            how we handle the personal information that you provide to us
            through our website.
          </p>

          <h3 className={styles.sectionTitle}>Information Collection</h3>
          <p className={styles.paragraph}>
            We collect personal information from you when you register on our
            website, fill out a form, or subscribe to our newsletter. The
            information collected may include your name, email address, phone
            number, and other relevant details. We only collect information that
            is necessary to provide you with our services and communicate with
            you effectively.
          </p>

          <h3 className={styles.sectionTitle}>Information Usage</h3>
          <p className={styles.paragraph}>
            We use your personal information to provide you with the services
            that you have requested. We may also use your information to improve
            our website and services, send you updates and newsletters, and
            respond to your queries and feedback. We do not sell or share your
            personal information with third parties for marketing purposes.
          </p>

          <h3 className={styles.sectionTitle}>Information Protection</h3>
          <p className={styles.paragraph}>
            We take reasonable measures to protect your personal information
            from unauthorized access, use, and disclosure. We use secure servers
            and encryption technologies to safeguard your data. However, we
            cannot guarantee the absolute security of your information over the
            internet, and you provide your information at your own risk.
          </p>

          <h3 className={styles.sectionTitle}>Cookies</h3>
          <p className={styles.paragraph}>
            We use cookies on our website to enhance your browsing experience
            and personalize the content we show you. Cookies are small files
            that are stored on your device when you visit a website. You can
            disable cookies in your browser settings if you prefer not to have
            them stored.
          </p>

          <h3 className={styles.sectionTitle}>Third-Party Links</h3>
          <p className={styles.paragraph}>
            Our website may contain links to third-party websites that are not
            under our control. We are not responsible for the privacy practices
            or content of these websites. We encourage you to read the privacy
            policies of any third-party websites you visit.
          </p>

          <h3 className={styles.sectionTitle}>Changes to Privacy Policy</h3>
          <p className={styles.paragraph}>
            We may update our privacy policy from time to time. We will notify
            you of any changes by posting the new policy on our website. It is
            your responsibility to review the privacy policy periodically to
            stay informed about our data handling practices.
          </p>
        </div>

        <hr className={styles.divider} />
      </div>
    </div>
  );
}
