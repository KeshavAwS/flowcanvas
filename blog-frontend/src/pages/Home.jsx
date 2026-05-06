import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
            const res = await API.get("/posts");
            setPosts(res.data);
        } catch (err) {
            setError("Could not connect to Laravel API. Make sure php artisan serve is running.");
        } finally {
            setLoading(false);
        }
    };

    const deletePost = async (id) => {
        if (!window.confirm("Delete this post?")) return;
        try {
            await API.delete(`/posts/${id}`);
            fetchPosts();
        } catch (err) {
            alert("Failed to delete post.");
        }
    };

    useEffect(() => { fetchPosts(); }, []);

    if (loading) return (
        <div style={styles.centerBox}>
            <div style={styles.spinner}></div>
            <p style={styles.loadingText}>Loading posts...</p>
        </div>
    );

    if (error) return (
        <div style={styles.centerBox}>
            <div style={styles.errorBox}>{error}</div>
        </div>
    );

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <h1 style={styles.heading}>Latest Posts</h1>
                    <p style={styles.subheading}>{posts.length} {posts.length === 1 ? "article" : "articles"} published</p>
                </div>

                {posts.length === 0 ? (
                    <div style={styles.emptyBox}>
                        <p style={styles.emptyIcon}>📝</p>
                        <p style={styles.emptyText}>No posts yet.</p>
                        <Link to="/create" style={styles.emptyBtn}>Create your first post</Link>
                    </div>
                ) : (
                    <div style={styles.grid}>
                        {posts.map((post, index) => (
                            <div key={post.id} style={styles.card}>
                                <div style={{ ...styles.cardAccent, background: getAccent(index) }} />
                                <div style={styles.cardBody}>
                                    <h2 style={styles.cardTitle}>{post.title}</h2>
                                    <p style={styles.cardContent}>
                                        {post.content.length > 150 ? post.content.slice(0, 150) + "..." : post.content}
                                    </p>
                                    <div style={styles.cardFooter}>
                                        <span style={styles.date}>
                                            {new Date(post.created_at).toLocaleDateString("en-US", {
                                                month: "short", day: "numeric", year: "numeric"
                                            })}
                                        </span>
                                        <div style={styles.actions}>
                                            <Link to={`/edit/${post.id}`} style={styles.editBtn}>Edit</Link>
                                            <button onClick={() => deletePost(post.id)} style={styles.deleteBtn}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
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
        "linear-gradient(135deg, #ec4899, #f9a8d4)",
    ];
    return accents[i % accents.length];
};

const styles = {
    page: { minHeight: "calc(100vh - 64px)", padding: "48px 20px" },
    container: { maxWidth: "900px", margin: "0 auto" },
    header: { marginBottom: "40px" },
    heading: { fontSize: "36px", fontWeight: "700", color: "#1a1a2e", letterSpacing: "-1px" },
    subheading: { fontSize: "15px", color: "#888", marginTop: "6px" },
    centerBox: {
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        minHeight: "60vh", gap: "16px",
    },
    spinner: {
        width: "36px", height: "36px",
        border: "3px solid #e5e7eb",
        borderTop: "3px solid #7c6af7",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
    },
    loadingText: { color: "#888", fontSize: "15px" },
    errorBox: {
        background: "#fef2f2", border: "1px solid #fecaca",
        color: "#dc2626", padding: "16px 24px",
        borderRadius: "12px", fontSize: "14px",
    },
    emptyBox: {
        textAlign: "center", padding: "80px 20px",
        background: "white", borderRadius: "20px",
        border: "2px dashed #e5e7eb",
    },
    emptyIcon: { fontSize: "48px", marginBottom: "12px" },
    emptyText: { color: "#888", fontSize: "18px", marginBottom: "20px" },
    emptyBtn: {
        display: "inline-block", backgroundColor: "#219fd5",
        color: "white", padding: "12px 24px",
        borderRadius: "10px", fontWeight: "600", fontSize: "14px",
    },
    grid: { display: "flex", flexDirection: "column", gap: "20px" },
    card: {
        background: "white", borderRadius: "16px",
        overflow: "hidden", display: "flex",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        border: "1px solid #f0f0f0",
        transition: "transform 0.2s, box-shadow 0.2s",
    },
    cardAccent: { width: "6px", flexShrink: 0 },
    cardBody: { padding: "24px 28px", flex: 1 },
    cardTitle: { fontSize: "20px", fontWeight: "600", color: "#1a1a2e", marginBottom: "10px" },
    cardContent: { fontSize: "15px", color: "#666", lineHeight: "1.7", marginBottom: "20px" },
    cardFooter: { display: "flex", justifyContent: "space-between", alignItems: "center" },
    date: { fontSize: "13px", color: "#aaa", fontWeight: "500" },
    actions: { display: "flex", gap: "10px" },
    editBtn: {
        backgroundColor: "#f3f0ff", color: "#7c6af7",
        padding: "7px 16px", borderRadius: "8px",
        fontSize: "13px", fontWeight: "600",
    },
    deleteBtn: {
        backgroundColor: "#fff0f0", color: "#ef4444",
        padding: "7px 16px", borderRadius: "8px",
        border: "none", cursor: "pointer",
        fontSize: "13px", fontWeight: "600",
    },
};

export default Home;