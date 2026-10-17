import { useEffect, useMemo, useState } from "react";
import "./index.css";

const starterBooks = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", category: "Programming", status: "Available" },
  { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Programming", status: "Available" },
  { id: 3, title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", status: "Borrowed" },
  { id: 4, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", status: "Available" },
];
const categories = ["Programming", "Science", "History", "Fiction", "Business", "Other"];

function readBooks() {
  try {
    const saved = localStorage.getItem("digital-library-books-v1");
    return saved ? JSON.parse(saved) : starterBooks;
  } catch {
    return starterBooks;
  }
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("123456");
  const [loginError, setLoginError] = useState("");
  const [books, setBooks] = useState(readBooks);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All categories");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [notice, setNotice] = useState("");
  const [form, setForm] = useState({ title: "", author: "", category: "Programming", status: "Available" });

  useEffect(() => {
    localStorage.setItem("digital-library-books-v1", JSON.stringify(books));
  }, [books]);

  const visibleBooks = useMemo(() => books.filter((book) => {
    const term = search.trim().toLowerCase();
    const matchesText = !term || `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(term);
    const matchesCategory = categoryFilter === "All categories" || book.category === categoryFilter;
    return matchesText && matchesCategory;
  }), [books, search, categoryFilter]);

  const availableCount = books.filter((book) => book.status === "Available").length;
  const borrowedCount = books.length - availableCount;

  function handleLogin(event) {
    event.preventDefault();
    if (!username.trim()) return setLoginError("Please enter your username.");
    if (password.length < 6) return setLoginError("Password must contain at least 6 characters.");
    setLoginError("");
    setLoggedIn(true);
  }

  function openAdd() {
    setEditingId(null);
    setForm({ title: "", author: "", category: "Programming", status: "Available" });
    setModalOpen(true);
  }

  function openEdit(book) {
    setEditingId(book.id);
    setForm({ title: book.title, author: book.author, category: book.category, status: book.status });
    setModalOpen(true);
  }

  function saveBook(event) {
    event.preventDefault();
    const title = form.title.trim();
    const author = form.author.trim();
    if (!title || !author || !form.category) {
      setNotice("Please complete all required fields.");
      return;
    }
    if (editingId !== null) {
      setBooks((current) => current.map((book) => book.id === editingId ? { ...book, ...form, title, author } : book));
      setNotice("Book details updated successfully.");
    } else {
      setBooks((current) => [{ ...form, title, author, id: Date.now() }, ...current]);
      setNotice("Book added to your library.");
    }
    setModalOpen(false);
    window.setTimeout(() => setNotice(""), 3000);
  }

  function deleteBook(id) {
    if (!window.confirm("Delete this book from the library?")) return;
    setBooks((current) => current.filter((book) => book.id !== id));
    setNotice("Book deleted.");
    window.setTimeout(() => setNotice(""), 3000);
  }

  if (!loggedIn) {
    return <main className="login-page">
      <section className="login-art" aria-label="Digital library introduction">
        <div className="brand brand-light"><span className="brand-mark">L</span><span>Libra<span className="brand-accent">ry</span></span></div>
        <div className="login-art-copy"><span className="eyebrow">YOUR KNOWLEDGE, ORGANIZED</span><h1>A world of stories,<br /><em>one library.</em></h1><p>A calmer, smarter way to manage your books and keep your learning journey moving.</p></div>
        <div className="book-stack" aria-hidden="true"><span className="book book-one">READ<br/>MORE</span><span className="book book-two">IDEAS<br/>LIVE HERE</span><span className="book book-three">THE<br/>NEXT CHAPTER</span><span className="plant">✳</span></div>
        <div className="art-footer"><span>DISCOVER · LEARN · GROW</span><span>✦</span></div>
      </section>
      <section className="login-side"><div className="login-card"><div className="mobile-brand brand"><span className="brand-mark">L</span><span>Library</span></div><span className="eyebrow">LIBRARIAN PORTAL</span><h2>Welcome back</h2><p className="muted">Sign in to manage your digital library.</p>
        <form onSubmit={handleLogin} className="login-form"><label htmlFor="username">Username</label><input id="username" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" required /><label htmlFor="password">Password</label><input id="password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" required minLength={6} />{loginError && <p className="form-error" role="alert">{loginError}</p>}<button className="primary-button login-button" type="submit">Sign in <span>→</span></button></form>
        <div className="demo-hint"><span className="hint-icon">i</span><span><strong>Demo access</strong><br/>Username: admin · Password: 123456</span></div><p className="login-foot">A little order for your love of reading.</p></div></section>
    </main>;
  }

  return <div className="app-shell">
    <aside className="sidebar"><div className="brand"><span className="brand-mark">L</span><span>Libra<span className="brand-accent">ry</span></span></div><div className="side-label">WORKSPACE</div><div className="nav-item active"><span>▦</span> Overview</div><div className="nav-item"><span>▤</span> Book collection <span className="nav-count">{books.length}</span></div><div className="side-bottom"><div className="help-card"><div className="help-symbol">✦</div><strong>Keep exploring</strong><p>Every book opens a new door.</p></div><button className="logout-button" onClick={() => setLoggedIn(false)}><span>↪</span> Sign out</button></div></aside>
    <main className="main-area"><header className="topbar"><div><div className="breadcrumb">Workspace <span>/</span> Overview</div><p className="topbar-date">Your personal library dashboard</p></div><div className="profile"><div className="avatar">{username.trim().charAt(0).toUpperCase() || "A"}</div><div><strong>{username}</strong><small>Librarian</small></div><span className="profile-dot" /></div></header>
      <section className="content"><div className="page-heading"><div><span className="eyebrow">MONDAY, YOUR NEXT CHAPTER STARTS HERE</span><h1>Good to see you, {username} <span className="wave">✳</span></h1><p>Here’s what’s happening in your library today.</p></div><button className="primary-button add-top" onClick={openAdd}><span>＋</span> Add a book</button></div>
      {notice && <div className="toast" role="status"><span>✓</span>{notice}<button onClick={() => setNotice("")} aria-label="Dismiss message">×</button></div>}
      <section className="stats-grid"><article className="stat-card stat-primary"><div className="stat-top"><span>Total books</span><span className="stat-icon">▤</span></div><strong>{books.length.toString().padStart(2, "0")}</strong><div className="stat-bottom"><span className="stat-dot" /> Your growing collection</div><div className="stat-watermark">▤</div></article><article className="stat-card"><div className="stat-top"><span>Available now</span><span className="stat-icon green">✓</span></div><strong>{availableCount.toString().padStart(2, "0")}</strong><div className="stat-bottom"><span className="mini-dot green-dot" /> Ready to be discovered</div></article><article className="stat-card"><div className="stat-top"><span>Currently borrowed</span><span className="stat-icon orange">↗</span></div><strong>{borrowedCount.toString().padStart(2, "0")}</strong><div className="stat-bottom"><span className="mini-dot orange-dot" /> Out with readers</div></article></section>
      <section className="collection-panel"><div className="collection-heading"><div><span className="eyebrow">THE CATALOGUE</span><h2>Your book collection</h2><p>Manage, find, and update the books you love.</p></div><span className="collection-count">{visibleBooks.length} {visibleBooks.length === 1 ? "book" : "books"}</span></div><div className="toolbar"><div className="search-box"><span>⌕</span><input aria-label="Search books" placeholder="Search by title, author, or category..." value={search} onChange={(e) => setSearch(e.target.value)} /><kbd>⌘ K</kbd></div><select aria-label="Filter by category" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}><option>All categories</option>{categories.map((category) => <option key={category}>{category}</option>)}</select></div>
        <div className="table-wrap"><table><thead><tr><th>BOOK TITLE</th><th>CATEGORY</th><th>STATUS</th><th className="actions-heading">ACTIONS</th></tr></thead><tbody>{visibleBooks.map((book, index) => <tr key={book.id}><td><div className="book-cell"><div className={`cover cover-${index % 4}`}><span>{book.title.split(/\s+/).slice(0, 2).map((word) => word[0]).join("").toUpperCase()}</span></div><div><strong>{book.title}</strong><small>by {book.author}</small></div></div></td><td><span className="category-pill">{book.category}</span></td><td><span className={`status-pill ${book.status === "Available" ? "available" : "borrowed"}`}><span />{book.status}</span></td><td><div className="row-actions"><button className="icon-button" onClick={() => openEdit(book)} aria-label={`Edit ${book.title}`} title="Edit book">✎</button><button className="icon-button delete-action" onClick={() => deleteBook(book.id)} aria-label={`Delete ${book.title}`} title="Delete book">⌫</button></div></td></tr>)}</tbody></table>{visibleBooks.length === 0 && <div className="empty-state"><span>⌕</span><strong>No books found</strong><p>Try a different search or add a new book to your collection.</p><button className="secondary-button" onClick={openAdd}>Add your first match</button></div>}</div>
        <div className="table-footer"><span>Showing <strong>{visibleBooks.length}</strong> of <strong>{books.length}</strong> books</span><span className="saved-label"><span /> Changes save automatically on this device</span></div>
      </section><footer className="page-footer"><span>© 2026 Library Workspace</span><span>Made for curious minds <b>✦</b></span></footer></section>
    </main>
    {modalOpen && <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}><section className="book-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div className="modal-heading"><div><span className="eyebrow">LIBRARY CATALOGUE</span><h2 id="modal-title">{editingId !== null ? "Edit book details" : "Add a new book"}</h2><p>Fill in the details below to keep your catalogue up to date.</p></div><button className="close-button" onClick={() => setModalOpen(false)} aria-label="Close dialog">×</button></div><form onSubmit={saveBook} className="book-form"><label htmlFor="book-title">Book title <span>*</span></label><input id="book-title" autoFocus value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Atomic Habits" required maxLength={100} /><label htmlFor="book-author">Author <span>*</span></label><input id="book-author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} placeholder="e.g. James Clear" required maxLength={80} /><div className="form-row"><div><label htmlFor="book-category">Category <span>*</span></label><select id="book-category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required>{categories.map((category) => <option key={category}>{category}</option>)}</select></div><div><label htmlFor="book-status">Availability</label><select id="book-status" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}><option>Available</option><option>Borrowed</option></select></div></div><div className="modal-actions"><button type="button" className="secondary-button" onClick={() => setModalOpen(false)}>Cancel</button><button className="primary-button" type="submit">{editingId !== null ? "Save changes" : "Add book"} <span>→</span></button></div></form></section></div>}
  </div>;
}

export default App;
