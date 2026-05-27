import { useState } from "react";
import { Link } from "react-router-dom";
import "./galeri.css";

export default function Galeri() {
  const [filter, setFilter] = useState("Semua");
  const [open, setOpen] = useState(false);

  const dataKegiatan = [
    {
      nama: "Bukber HIMTIF",
      departemen: "Sosbud",
      tanggal: "Maret 2026",
      deskripsi: "Buka bersama anggota dan pengurus HIMTIF di bulan suci Ramadhan.",
      gambar: ""
    },
    {
      nama: "Himtif Berbagi",
      departemen: "Sosbud",
      tanggal: "Maret 2026",
      deskripsi: "HIMTIF berbagi kepada pondok pesantren.",
      gambar: ""
    },
    {
      nama: "Salam HIMTIF",
      departemen: "Humas",
      tanggal: "Maret 2026",
      deskripsi: "HIMTIF berbagi kepada pondok pesantren.",
      gambar: ""
    },
    {
      nama: "HIMTIF Ajar",
      departemen: "PSDM",
      tanggal: "Maret 2026",
      deskripsi: "HIMTIF berbagi kepada pondok pesantren.",
      gambar: ""
    },
    {
      nama: "Podcast",
      departemen: "Minfo",
      tanggal: "04 April 2025",
      deskripsi: "Kunjungan mahasiswa ke berbagai perusahaan teknologi ternama di Jakarta.",
      gambar: ""
    },
    {
      nama: "Makrab",
      departemen: "PSDM",
      tanggal: "2025",
      deskripsi: "Malam keakraban.",
      gambar: ""
    },
    {
      nama: "Collab HIMTIFxHiMAPTI",
      departemen: "Ristek",
      tanggal: "2025",
      deskripsi: "Malam keakraban.",
      gambar: ""
    },
    {
      nama: "HIMTIF Asri (Aktif Bersinergi)",
      departemen: "PSDM",
      tanggal: "2025",
      deskripsi: ".",
      gambar: ""
    },
    {
      nama: "Rudistif",
      departemen: "Humas",
      tanggal: "05 Mei 2025",
      deskripsi: "Kegiatan penggalangan dana dan pemberian bantuan untuk panti asuhan setempat.",
      gambar: ""
    },
    {
      nama: "Hackaton",
      departemen: "Ristek",
      tanggal: "06 Juni 2025",
      deskripsi: "Workshop pembuatan desain poster dan konten media sosial yang menarik.",
      gambar: ""
    },
  ];

  const categories = ["Semua", "Ristek", "Humas", "Sosbud", "Minfo", "PSDM"];

  const filteredData = filter === "Semua" ? dataKegiatan : dataKegiatan.filter(item => item.departemen === filter);

  return (
    <div className="galeri-wrapper">

      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/">
            <img src="/images/logohimtif.png" alt="HIMTIF" className="navbar-logo" />
          </Link>

          <button className="burger" onClick={() => setOpen(true)}>
            ☰
          </button>
        </div>
      </nav>

      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(false)}>
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setOpen(false)}>✕</button>

            <Link to="/">Home</Link>
            <Link to="/struktur">Struktur Organisasi</Link>
            <Link to="/department">Department</Link>
            <Link to="/produk">Produk HIMTIF</Link>
            <Link to="/pemira">Pemira</Link>
          </div>
        </div>
      )}

      <div className="galeri-container">
        <div className="galeri-header">
          <h2>GALERI KEGIATAN HIMTIF</h2>
          <p>“Dokumentasi berbagai kegiatan dan program kerja yang telah dilaksanakan oleh HIMTIF”</p>
        </div>

        <div className="galeri-filters">
          <div className="filter-label">Kategori :</div>
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="galeri-grid">
          {filteredData.map((item, index) => (
            <div className="galeri-card" key={index}>
              <div className="galeri-image-container">
                {item.gambar ? (
                  <img src={item.gambar} alt={item.nama} />
                ) : (
                  <div className="galeri-placeholder">FOTO</div>
                )}
              </div>
              <div className="galeri-card-content">
                <ul>
                  <li><strong>Nama Kegiatan :</strong> {item.nama}</li>
                  <li><strong>Departemen / Tanggal :</strong> {item.departemen} / {item.tanggal}</li>
                  <li><strong>Deskripsi :</strong> {item.deskripsi}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer galeri-footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-brand">
              <img src="/images/logohimtif.png" alt="logo" className="footer-logo-img" />
              <h3 className="footer-brand-title">Himpunan Teknik<br />Informatika</h3>
            </div>
            <p className="footer-univ"><i>Universitas Pamulang</i></p>
            <div className="footer-icons">
              <img src="/images/tiktok.avif" alt="tiktok" />
              <img src="/images/instagram.png" alt="instagram" />
              <img src="/images/email.png" alt="email" />
              <img src="/images/youtube.png" alt="youtube" />
            </div>
          </div>

          <div className="footer-center">
            <p>
              Jl. Puspitek, Buaran, Kec. Pamulang, Kota<br />
              Tangerang Selatan, Banten 15310
            </p>
          </div>

          <div className="footer-right">
            <div className="footer-right-content">
              <h3><i>Navigasi</i></h3>
              <ul>
                <li><Link to="/">Beranda</Link></li>
                <li><Link to="/#tentang">Tentang Himtif</Link></li>
                <li><Link to="/#filosofi">Kontak Kami</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 HIMTIF UNPAM - Ristek Division
        </div>
      </footer>

    </div>
  );
}