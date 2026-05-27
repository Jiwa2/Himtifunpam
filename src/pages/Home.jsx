import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300);
  };

  return (
    <div className="home-wrapper">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <img
            src="/images/logohimtif.png"
            alt="HIMTIF"
            className="navbar-logo"
          />
          
          {/* Menu Desktop: Otomatis sembunyi di mobile (hidden), muncul di desktop (md:flex) */}
          <ul className="navbar-menu hidden md:flex">
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#tentang">Tentang</a></li>
            <li><a href="#visi">Visi</a></li>
            <li><a href="#filosofi">Filosofi</a></li>
          </ul>

          {/* Tombol Burger Mobile: Otomatis muncul di mobile (block), sembunyi di desktop (md:hidden) */}
          <button 
            type="button"
            className="burger-btn block md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* SIDEBAR MOBILE OVERLAY */}
      {open && (
        <div
          className={`sidebar-overlay ${closing ? "closing" : ""}`}
          onClick={handleClose}
        >
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="close-btn" onClick={handleClose}>
              ✕
            </button>
            <Link to="/struktur" onClick={handleClose}>Struktur Organisasi</Link>
            <Link to="/galeri" onClick={handleClose}>Galeri Proker</Link>
            <Link to="/produk" onClick={handleClose}>Produk HIMTIF</Link>
            <Link to="/pemira" onClick={handleClose}>Pemira</Link>
            <Link to="/department" onClick={handleClose}>Department</Link>
          </div>
        </div>
      )}

      {/* SECTION HERO */}
      <section id="beranda" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Selamat datang di</h1>
          <p>Website Himpunan Mahasiswa Teknik Informatika</p>
        </div>
      </section>

      {/* SECTION TENTANG */}
      <section id="tentang" className="tentang">
        <div className="container">
          <h2>Tentang HIMTIF</h2>
          <div className="line-dec"></div>
          <p className="desc-text">
            Himpunan Mahasiswa Teknik Informatika (HIMTIF) adalah organisasi kemahasiswaan yang mewadahi aspirasi, pengembangan, dan kolaborasi mahasiswa Teknik Informatika. Kami berfokus pada peningkatan kompetensi akademik, soft skills, serta networking melalui berbagai program edukatif, pelatihan, dan kegiatan sosial.
          </p>
        </div>
      </section>

      {/* SECTION VISI MISI */}
      <section id="visi" className="visi">
        <div className="container">
          <div className="visi-misi-grid">
            <div className="visi-box">
              <h2>Visi</h2>
              <div className="line-dec left"></div>
              <p>
                Mewujudkan HIMTIF yang tertata, responsif, dan berdampak melalui penguatan tata kelola organisasi, peningkatan efektivitas program kerja, serta pemenuhan kebutuhan anggota secara berkelanjutan.
              </p>
            </div>
            
            <div className="misi-box">
              <h2>Misi</h2>
              <div className="line-dec left"></div>
              <ul>
                <li>Meningkatkan tata kelola organisasi secara profesional melalui penyusunan SOP sederhana dan penetapan kalender kerja satu periode sebagai acuan kegiatan.</li>
                <li>Memperkuat sistem perencanaan, monitoring, dan evaluasi program kerja melalui rapat koordinasi rutin serta evaluasi berkala yang terukur.</li>
                <li>Mengoptimalkan kinerja dan koordinasi antar departemen dengan penegasan jobdesk serta pendampingan bagi departemen yang membutuhkan penguatan.</li>
                <li>Mendorong peningkatan prestasi dan kompetensi anggota melalui pelatihan berkala serta pembentukan tim kompetisi yang fokus pada bidang tertentu.</li>
                <li>Memberikan ruang pengembangan bagi mahasiswa pasif melalui program pembinaan dasar, mentoring, dan peluang kontribusi non-struktural.</li>
                <li>Membangun citra HIMTIF yang produktif dan kolaboratif melalui optimalisasi media informasi serta kerja sama dengan lembaga kemahasiswaan lain.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FILOSOFI */}
      <section id="filosofi" className="filosofi">
        <div className="container filosofi-wrapper">
          <h2 className="filosofi-title">Filosofi Lambang HIMTIF</h2>
          <div className="line-dec"></div>

          <div className="filosofi-content">
            <div className="filosofi-logo">
              <img src="/images/logohimtif.png" alt="Logo HIMTIF" />
            </div>

            <div className="filosofi-text">
              <h4>Tiga Lingkaran :</h4>
              <p>
                Melambangkan Tri Dharma Perguruan Tinggi (Pendidikan, Penelitian, dan Pengabdian).
              </p>

              <h4>Arti Warna :</h4>
              <ul className="warna-list">
                <li><b style={{color:"#1e3a8a"}}>Biru :</b> Kepercayaan dan ketenangan atau mencerminkan HIMTIF yang profesional dan tidak anarkis.</li>
                <li><b style={{color:"#16a34a"}}>Hijau :</b> Kebaikan dan kesehatan, menggambarkan gerakan organisasi yang positif.</li>
                <li><b style={{color:"#eab308"}}>Kuning :</b> Kejayaan dan semangat, melambangkan semangat menuju kemajuan.</li>
                <li><b style={{color:"#dc2626"}}>Merah :</b> Keberanian, menunjukan kemampuan berpikir dan bertindak untuk mencapai tujuan.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="/images/logohimtif.png" alt="logo" />
              <div>
                <h3>Himpunan Teknik Informatika</h3>
                <p><i>Universitas Pamulang</i></p>
              </div>
            </div>
            <div className="footer-icons">
              <img src="/images/tiktok.avif" alt="tiktok" />
              <img src="/images/instagram.png" alt="instagram" />
              <img src="/images/email.png" alt="email" />
              <img src="/images/youtube.png" alt="youtube" />
            </div>
          </div>

          <div className="footer-center">
            <h3>Alamat Sekretariat</h3>
            <p>
              Jl. Puspitek, Buaran, Kec. Pamulang, Kota Tangerang Selatan, Banten 15310
            </p>
          </div>

          <div className="footer-right">
            <h3>Navigasi</h3>
            <ul>
              <li><a href="#beranda">Beranda</a></li>
              <li><a href="#tentang">Tentang Himtif</a></li>
              <li><a href="#filosofi">Kontak Kami</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; 2026 HIMTIF UNPAM - Ristek Division
        </div>
      </footer>
    </div>
  );
}