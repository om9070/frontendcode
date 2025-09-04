// pages/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.heading}>Page Not Found</h2>
      <p style={styles.text}>
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link href="/" style={styles.link}>
        Go Back Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    color: "#333",
    padding: "20px",
  },
  code: {
    fontSize: "6rem",
    fontWeight: "bold",
    color: "#00dbde",
    margin: 0,
  },
  heading: {
    fontSize: "2rem",
    marginTop: "10px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1rem",
    maxWidth: "400px",
    marginBottom: "20px",
  },
  link: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#00dbde",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
  },
};
