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
    <div>

      <nav className="navbar">
        <div className="navbar-inner">

          <img
            src="/images/logohimtif.png"
            alt="HIMTIF"
            className="navbar-logo"
          />
          <ul className="navbar-menu">
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#tentang">Tentang</a></li>
            <li><a href="#visi">Visi</a></li>
            <li><a href="#filosofi">Filosofi</a></li>
          </ul>
          <button 
            className="burger bg-transparent border-none outline-none focus:outline-none active:bg-transparent"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

        </div>
      </nav>

      {open && (
        <div
          className={`sidebar-overlay ${closing ? "closing" : ""}`}
          onClick={handleClose}
        >
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>

            <button className="close" onClick={handleClose}>
              ✕
            </button>

            <Link to="/struktur" onClick={handleClose}>Struktur Organisasi</Link>
            <Link to="/galeri" onClick={handleClose}>Galeri Proker</Link>
            <Link to="/produk" onClick={handleClose}>Produk HIMTIF</Link>
            <Link to="/pemira" onClick={handleClose}>Pemira</Link>


          </div>
        </div>
      )}

      <section id="beranda" className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Selamat datang di</h1>
          <p>Website Himpunan Mahasiswa Teknik Informatika</p>
        </div>
      </section>

      <section id="tentang" className="tentang">
        <div className="container">
          <h2>Tentang HIMTIF</h2>
          <p>
Himpunan Mahasiswa Teknik Informatika (HIMTIF) adalah organisasi kemahasiswaan yang mewadahi aspirasi, pengembangan, dan kolaborasi mahasiswa Teknik Informatika. Kami berfokus pada peningkatan kompetensi akademik, soft skills, serta networking melalui berbagai program edukatif, pelatihan, dan kegiatan sosial.
          </p>
        </div>
      </section>

      <section id="visi" className="visi">
        <div className="container">
          <h2>Visi & Misi</h2>
          <h2>Visi</h2>
          <p>
            Mewujudkan HIMTIF yang tertata, responsif, dan berdampak melalui penguatan tata kelola organisasi, peningkatan efektivitas program kerja, serta pemenuhan kebutuhan anggota secara berkelanjutan.
          </p>
          <h2>Misi</h2>
          <p>Meningkatkan tata kelola organisasi secara profesional melalui penyusunan SOP sederhana dan penetapan kalender kerja satu periode sebagai acuan kegiatan.
Memperkuat sistem perencanaan, monitoring, dan evaluasi program kerja melalui rapat koordinasi rutin serta evaluasi berkala yang terukur.
Mengoptimalkan kinerja dan koordinasi antar departemen dengan penegasan jobdesk serta pendampingan bagi departemen yang membutuhkan penguatan.
Mendorong peningkatan prestasi dan kompetensi anggota melalui pelatihan berkala serta pembentukan tim kompetisi yang fokus pada bidang tertentu.
Memberikan ruang pengembangan bagi mahasiswa pasif melalui program pembinaan dasar, mentoring, dan peluang kontribusi non-struktural.
Membangun citra HIMTIF yang produktif dan kolaboratif melalui optimalisasi media informasi serta kerja sama dengan lembaga kemahasiswaan lain.</p>
        </div>
      </section>

    <section id="filosofi" className="filosofi">
      <div className="container filosofi-wrapper">

        <h2 className="filosofi-title">Filosofi Lambang HIMTIF</h2>

        <div className="filosofi-content">

          <div className="filosofi-logo">
            <img src="/images/logohimtif.png" alt="Logo HIMTIF" />
          </div>

          <div className="filosofi-text">

            <h4>Tiga Lingkaran :</h4>
            <p>
              Melambangkan Tri Dharma Perguruan Tinggi (Pendidikan,
              Penelitian, dan Pengabdian).
            </p>

            <h4>Warna :</h4>
            <p><b style={{color:"#1e3a8a"}}>Biru :</b> Kepercayaan dan ketenangan.</p>
            <p><b style={{color:"#16a34a"}}>Hijau :</b> Kebaikan dan kesehatan.</p>
            <p><b style={{color:"#eab308"}}>Kuning :</b> Kejayaan dan semangat.</p>
            <p><b style={{color:"#dc2626"}}>Merah :</b> Keberanian dan tindakan.</p>

          </div>

        </div>

      </div>
    </section>

      <footer className="footer">
        © {new Date().getFullYear()} HIMTIF Universitas Pamulang
      </footer>

    </div>
  );
}
