import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import API from "../api/axios";

function EditPost() {
  const { id } = useParams();
  const [form, setForm] = useState({ title: "", content: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/posts/${id}`)
      .then((res) => { setForm({ title: res.data.title, content: res.data.content }); setLoading(false); })
      .catch(() => { alert("Could not load post."); navigate("/"); });
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setErrors({});
    try {
      await API.put(`/posts/${id}`, form);
      navigate("/");
    } catch (err) {
      if (err.response?.status === 422) setErrors(err.response.data.errors);
      else alert("Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
      <p style={{ color: "#888" }}>Loading post...</p>
    </div>
  );

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <Link to="/" style={styles.back}>← Back to posts</Link>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h1 style={styles.heading}>Edit Post</h1>
            <p style={styles.subheading}>Update your article</p>
          </div>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.field}>
              <label style={styles.label}>Title</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                style={styles.input}
              />
              {errors.title && <p style={styles.error}>⚠ {errors.title[0]}</p>}
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Content</label>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                style={styles.textarea}
                rows={10}
              />
              {errors.content && <p style={styles.error}>⚠ {errors.content[0]}</p>}
            </div>
            <button type="submit" style={styles.btn} disabled={saving}>
              {saving ? "Saving..." : "Update Post"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: "calc(100vh - 64px)", padding: "48px 20px", background: "#f8f9fc" },
  container: { maxWidth: "720px", margin: "0 auto" },
  back: { color: "#7c6af7", fontSize: "14px", fontWeight: "500", display: "inline-block", marginBottom: "24px" },
  card: {
    background: "white", borderRadius: "20px",
    overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
    border: "1px solid #f0f0f0",
  },
  cardHeader: {
    padding: "32px 40px 24px",
    borderBottom: "1px solid #f5f5f5",
    background: "linear-gradient(135deg, #f8f6ff 0%, #f0f9ff 100%)",
  },
  heading: { fontSize: "26px", fontWeight: "700", color: "#1a1a2e", letterSpacing: "-0.5px" },
  subheading: { fontSize: "14px", color: "#888", marginTop: "6px" },
  form: { padding: "32px 40px", display: "flex", flexDirection: "column", gap: "24px" },
  field: { display: "flex", flexDirection: "column", gap: "8px" },
  label: { fontSize: "14px", fontWeight: "600", color: "#374151" },
  input: {
    padding: "12px 16px", borderRadius: "10px",
    border: "1.5px solid #e5e7eb", fontSize: "15px",
    outline: "none", color: "#1a1a2e",
  },
  textarea: {
    padding: "12px 16px", borderRadius: "10px",
    border: "1.5px solid #e5e7eb", fontSize: "15px",
    outline: "none", color: "#1a1a2e", resize: "vertical",
    fontFamily: "Inter, sans-serif", lineHeight: "1.7",
  },
  error: { color: "#ef4444", fontSize: "13px" },
  btn: {
    backgroundColor: "#219fd5", color: "white",
    padding: "14px", borderRadius: "10px",
    border: "none", fontSize: "15px",
    fontWeight: "600", cursor: "pointer",
    boxShadow: "0 4px 12px rgba(124,106,247,0.4)",
    alignSelf: "flex-start", minWidth: "160px",
  },
};

export default EditPost;