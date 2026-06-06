import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaEnvelope, FaInstagram, FaTimes, FaTiktok, FaYoutube } from "react-icons/fa";
import "./SiteLayout.css";

const navItems = [
  { label: "Beranda", to: "/" },
  { label: "Struktur", to: "/struktur" },
  { label: "Department", to: "/department" },
  { label: "Galeri", to: "/galeri" },
  { label: "Produk", to: "/produk" },
  { label: "Pemira", to: "/pemira" },
];

export function SiteLayout({ children, footer = false, className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`site-shell ${className}`}>
      <header className="site-header">
        <nav className="site-nav" aria-label="Navigasi utama">
          <Link to="/" className="site-brand" aria-label="HIMTIF UNPAM">
            <img src="/images/logohimtif.png" alt="Logo HIMTIF" />
            <span>HIMTIF UNPAM</span>
          </Link>

          <div className="site-nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            className="site-menu-button"
            onClick={() => setOpen(true)}
            aria-label="Buka menu navigasi"
            aria-expanded={open}
          >
            <FaBars aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* FIXED: Menggunakan class 'is-open' untuk trigger animasi CSS smooth */}
      <div 
        className={`site-drawer-backdrop ${open ? "is-open" : ""}`} 
        onClick={() => setOpen(false)}
      >
        <aside 
          className={`site-drawer ${open ? "is-open" : ""}`} 
          onClick={(event) => event.stopPropagation()} 
          aria-label="Menu navigasi"
        >
          <button
            type="button"
            className="site-drawer-close"
            onClick={() => setOpen(false)}
            aria-label="Tutup menu navigasi"
          >
            <FaTimes aria-hidden="true" />
          </button>
          
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </aside>
      </div>

      <main>{children}</main>

      {footer && <SiteFooter />}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <section className="site-footer-brand">
          <div className="site-footer-logo">
            <img src="/images/logohimtif.png" alt="Logo HIMTIF" />
            <div>
              <h3>Himpunan Teknik Informatika</h3>
              <p>Universitas Pamulang</p>
            </div>
          </div>
          <div className="site-socials" aria-label="Media sosial">
            <a href="https://www.tiktok.com" aria-label="TikTok HIMTIF">
              <FaTiktok aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram HIMTIF">
              <FaInstagram aria-hidden="true" />
            </a>
            <a href="mailto:himtif@unpam.ac.id" aria-label="Email HIMTIF">
              <FaEnvelope aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube HIMTIF">
              <FaYoutube aria-hidden="true" />
            </a>
          </div>
        </section>

        <section>
          <h3>Alamat Sekretariat</h3>
          <p>Jl. Puspitek, Buaran, Kec. Pamulang, Kota Tangerang Selatan, Banten 15310</p>
        </section>

        <section>
          <h3>Navigasi</h3>
          <div className="site-footer-links">
            <Link to="/">Beranda</Link>
            <Link to="/struktur">Struktur Organisasi</Link>
            <Link to="/department">Department</Link>
            <Link to="/pemira">Pemira</Link>
          </div>
        </section>
      </div>
      <div className="site-footer-bottom">Copyright 2026 HIMTIF UNPAM - Ristek Division</div>
    </footer>
  );
}