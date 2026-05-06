import { useEffect, useState } from "react";
import API from "./api/axios";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={styles.msg}>Loading...</p>;

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Blog</h1>
      <p style={styles.sub}>Thoughts on development, Laravel, and React</p>
      {posts.length === 0 ? (
        <p style={styles.msg}>No posts yet.</p>
      ) : (
        <div style={styles.grid}>
          {posts.map((post, i) => (
            <div key={post.id} style={styles.card}>
              <div style={{ ...styles.accent, background: getAccent(i) }} />
              <div style={styles.body}>
                <h2 style={styles.title}>{post.title}</h2>
                <p style={styles.content}>
                  {post.content.length > 400
                    ? post.content.slice(0, 400) + "..."
                    : post.content}
                </p>
                <span style={styles.date}>
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    month: "short", day: "numeric", year: "numeric",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const getAccent = (i) => {
  const accents = [
    "linear-gradient(135deg, #7c6af7, #a78bfa)",
    "linear-gradient(135deg, #06b6d4, #67e8f9)",
    "linear-gradient(135deg, #f59e0b, #fcd34d)",
    "linear-gradient(135deg, #10b981, #6ee7b7)",
    "linear-gradient(135deg, #ef4444, #fca5a5)",
  ];
  return accents[i % accents.length];
};

const styles = {
  page: { padding: "48px 32px", maxWidth: "860px", margin: "0 auto" },
  heading: { fontSize: "36px", fontWeight: "700", marginBottom: "8px" },
  sub: { color: "#888", fontSize: "15px", marginBottom: "40px" },
  msg: { textAlign: "center", color: "#888", marginTop: "60px" },
  grid: { display: "flex", flexDirection: "column", gap: "20px" },
  card: {
    display: "flex", background: "#4f4f7a",
    borderRadius: "16px", overflow: "hidden",
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
    border: "1px solid #f0f0f0",
  },
  accent: { width: "6px", flexShrink: 0 },
  body: { padding: "24px 28px", flex: 1 },
  title: { color: "white", fontSize: "20px", fontWeight: "600", marginBottom: "10px" },
  content: { fontSize: "15px", color: "#999", lineHeight: "1.7", marginBottom: "16px" },
  date: { fontSize: "13px", color: "#aaa" },
};

export default Blog;