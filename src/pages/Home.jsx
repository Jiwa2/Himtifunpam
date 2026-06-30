import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";

export default function Home() {
  return (
    <SiteLayout footer className="home-wrapper">
      <section id="beranda" className="hero">
        <div className="hero-content">
          <h1>HIMTIF Universitas Pamulang</h1>
          <p>Website resmi Himpunan Mahasiswa Teknik Informatika untuk informasi organisasi, program kerja, dan kegiatan mahasiswa.</p>
          <div className="hero-actions">
            <Link className="btn-primary" to="/department">Lihat Department</Link>

            <a 
              className="btn-secondary" 
              href="https://sinauin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Belajar Fullstack IT
            </a>
          </div>
        </div>
      </section>

      <section id="tentang" className="page-section tentang">
        <div className="section-container">
          <h2 className="section-title">Tentang HIMTIF</h2>
          <div className="section-kicker"></div>
          <p className="desc-text">
            Himpunan Mahasiswa Teknik Informatika (HIMTIF) adalah organisasi kemahasiswaan yang mewadahi aspirasi, pengembangan, dan kolaborasi mahasiswa Teknik Informatika. Kami berfokus pada peningkatan kompetensi akademik, soft skills, serta networking melalui berbagai program edukatif, pelatihan, dan kegiatan sosial.
          </p>
        </div>
      </section>

      <section id="visi" className="page-section visi">
        <div className="section-container">
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

      <section id="filosofi" className="page-section filosofi">
        <div className="section-container filosofi-wrapper">
          <h2 className="section-title">Filosofi Lambang HIMTIF</h2>
          <div className="section-kicker"></div>

          <div className="filosofi-content">
            <div className="filosofi-logo">
              <img src="/images/LogoHimtifHD.webp" alt="Logo HIMTIF" />
            </div>

            <div className="filosofi-text">
              <h4>Tiga Lingkaran</h4>
              <p>Melambangkan Tri Dharma Perguruan Tinggi: pendidikan, penelitian, dan pengabdian.</p>

              <h4>Arti Warna</h4>
              <ul className="warna-list">
                <li><b style={{ color: "#1E3A8A" }}>Biru:</b> Kepercayaan dan ketenangan, mencerminkan HIMTIF yang profesional.</li>
                <li><b style={{ color: "#16A34A" }}>Hijau:</b> Kebaikan dan kesehatan, menggambarkan gerakan organisasi yang positif.</li>
                <li><b style={{ color: "#F59E0B" }}>Kuning:</b> Kejayaan dan semangat menuju kemajuan.</li>
                <li><b style={{ color: "#DC2626" }}>Merah:</b> Keberanian dalam berpikir dan bertindak untuk mencapai tujuan.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
