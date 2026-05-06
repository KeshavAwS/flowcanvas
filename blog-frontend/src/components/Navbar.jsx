import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <Link to="/" style={styles.brand}>
          <span style={styles.brandIcon}>✦</span>
          BlogApp
        </Link>
        <Link to="/create" style={styles.btn}>
          + New Post
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: "linear-gradient(135deg, #16213e 45%, #219fd5 100%)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    padding: "0 32px",
    height: "64px",
    display: "flex",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
  },
  inner: {
    maxWidth: "900px",
    margin: "0 auto",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    color: "white",
    fontSize: "22px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    letterSpacing: "-0.5px",
  },
  brandIcon: {
    color: "#219fd5",
    fontSize: "20px",
  },
  btn: {
    backgroundColor: "#16213e",
    color: "white",
    padding: "9px 20px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.2s",
    boxShadow: "0 4px 12px rgba(124,106,247,0.4)",
  },
};

export default Navbar;