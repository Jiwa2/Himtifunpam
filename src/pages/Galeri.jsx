import { useState } from "react";
import "./galeri.css";

export default function Galeri() {
  const [filter, setFilter] = useState("Semua");

  const dataKegiatan = [
    {
      nama: "Makrab HIMTIF",
      departemen: "PSDA",
      tanggal: "01 Januari 2025",
      deskripsi: "Kegiatan pengenalan anggota baru yang bertujuan untuk mempererat tali persaudaraan.",
      gambar: ""
    },
    {
      nama: "Seminar IT Nasional",
      departemen: "Ristek",
      tanggal: "02 Februari 2025",
      deskripsi: "Seminar tentang perkembangan teknologi AI dan dampaknya pada industri masa depan.",
      gambar: ""
    },
    {
      nama: "Lomba UI/UX",
      departemen: "Ristek",
      tanggal: "03 Maret 2025",
      deskripsi: "Kompetisi desain antarmuka aplikasi tingkat universitas se-Indonesia.",
      gambar: ""
    },
    {
      nama: "Kunjungan Industri",
      departemen: "Humas",
      tanggal: "04 April 2025",
      deskripsi: "Kunjungan mahasiswa ke berbagai perusahaan teknologi ternama di Jakarta.",
      gambar: ""
    },
    {
      nama: "Bakti Sosial",
      departemen: "Sosbud",
      tanggal: "05 Mei 2025",
      deskripsi: "Kegiatan penggalangan dana dan pemberian bantuan untuk panti asuhan setempat.",
      gambar: ""
    },
    {
      nama: "Pelatihan Desain",
      departemen: "Minfo",
      tanggal: "06 Juni 2025",
      deskripsi: "Workshop pembuatan desain poster dan konten media sosial yang menarik.",
      gambar: ""
    },
    {
      nama: "Malam Keakraban",
      departemen: "PSDA",
      tanggal: "07 Juli 2025",
      deskripsi: "Acara tahunan untuk menyambut dan mengakrabkan mahasiswa baru teknik informatika.",
      gambar: ""
    },
    {
      nama: "HIMTIF Mengajar",
      departemen: "Sosbud",
      tanggal: "08 Agustus 2025",
      deskripsi: "Program pengabdian masyarakat dengan mengajarkan dasar komputer di sekolah dasar.",
      gambar: ""
    },
    {
      nama: "Studi Banding",
      departemen: "Humas",
      tanggal: "09 September 2025",
      deskripsi: "Kegiatan studi banding dengan himpunan mahasiswa dari universitas lain.",
      gambar: ""
    },
    {
      nama: "Podcast IT Series",
      departemen: "Minfo",
      tanggal: "10 Oktober 2025",
      deskripsi: "Sesi diskusi interaktif seputar dunia perkuliahan IT dan prospek karir ke depan.",
      gambar: ""
    },
    {
      nama: "Workshop Web Dev",
      departemen: "Ristek",
      tanggal: "11 November 2025",
      deskripsi: "Pelatihan komprehensif pembuatan website dari dasar hingga tingkat mahir.",
      gambar: ""
    },
    {
      nama: "Upgrading Pengurus",
      departemen: "PSDA",
      tanggal: "12 Desember 2025",
      deskripsi: "Kegiatan peningkatan kapasitas kepemimpinan dan soft skill pengurus himpunan.",
      gambar: ""
    }
  ];

  const categories = ["Semua", "Ristek", "Humas", "Sosbud", "Minfo", "PSDA"];

  const filteredData = filter === "Semua" ? dataKegiatan : dataKegiatan.filter(item => item.departemen === filter);

  return (
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
  );
}