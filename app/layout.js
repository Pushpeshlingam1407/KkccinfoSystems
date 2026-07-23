import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./layout.module.css";

export const metadata = {
  title: "KKCC INFO SYSTEMS",
  description:
    "KKCC INFO SYSTEMS is a Software and Hardware Training and Servicing centre",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
