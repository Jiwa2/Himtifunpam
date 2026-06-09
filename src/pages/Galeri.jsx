import { useMemo, useState } from "react";
import { SiteLayout } from "../components/SiteLayout";
import "./galeri.css";

const DATA_KEGIATAN = [
  {
    nama: "Bukber HIMTIF",
    departemen: "Sosbud",
    tanggal: "Maret 2026",
    deskripsi: "Buka bersama anggota dan pengurus HIMTIF di bulan suci Ramadhan.",
    gambar: "",
  },
  {
    nama: "Himtif Berbagi",
    departemen: "Sosbud",
    tanggal: "Maret 2026",
    deskripsi: "HIMTIF berbagi kepada pondok pesantren.",
    gambar: "",
  },
  {
    nama: "Salam HIMTIF",
    departemen: "Humas",
    tanggal: "Maret 2026",
    deskripsi: "Program silaturahmi dan komunikasi untuk memperkuat hubungan internal dan eksternal HIMTIF.",
    gambar: "",
  },
  {
    nama: "HIMTIF Ajar",
    departemen: "PSDM",
    tanggal: "Maret 2026",
    deskripsi: "Program pembelajaran untuk mendukung pengembangan anggota HIMTIF.",
    gambar: "",
  },
  {
    nama: "Podcast",
    departemen: "Minfo",
    tanggal: "04 April 2026",
    deskripsi: "Sesi bincang santai seputar perkuliahan, organisasi, dan dunia teknologi.",
    gambar: "",
  },
  {
    nama: "Makrab",
    departemen: "PSDM",
    tanggal: "2026",
    deskripsi: "Malam keakraban untuk mempererat hubungan antar anggota.",
    gambar: "",
  },
  {
    nama: "Collab HIMTIF x HMAPTI",
    departemen: "Ristek",
    tanggal: "27 - 28 April 2026",
    deskripsi: "Kegiatan kolaborasi lintas organisasi mahasiswa informatika.",
    gambar: "",
  },
  {
    nama: "HIMTIF Asri",
    departemen: "PSDM",
    tanggal: "2026",
    deskripsi: "Kegiatan aktif bersinergi untuk menjaga kebugaran dan kekompakan anggota.",
    gambar: "",
  },
  {
    nama: "Rudistif",
    departemen: "Humas",
    tanggal: "29 Mei 2026",
    deskripsi: "Kegiatan penggalangan dana dan pemberian bantuan untuk masyarakat.",
    gambar: "",
  },
  {
    nama: "Hackathon",
    departemen: "Ristek",
    tanggal: "08 - 22 Juni 2026",
    deskripsi: "Kompetisi dan workshop teknologi untuk mengasah kemampuan problem solving mahasiswa.",
    gambar: "",
  },
];

const CATEGORIES = ["Semua", "Ristek", "Humas", "Sosbud", "Minfo", "PSDM"];

export default function Galeri() {
  const [filter, setFilter] = useState("Semua");

  const filteredData = useMemo(() => {
    return filter === "Semua"
      ? DATA_KEGIATAN
      : DATA_KEGIATAN.filter((item) => item.departemen === filter);
  }, [filter]);

  return (
    <SiteLayout footer className="galeri-wrapper">
      <section className="galeri-container">
        <div className="galeri-header">
          <h1>Galeri Kegiatan HIMTIF</h1>
          <p>Dokumentasi kegiatan dan program kerja yang telah dilaksanakan oleh HIMTIF.</p>
        </div>

        <div className="galeri-filters" aria-label="Filter kategori galeri">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="galeri-grid">
          {filteredData.map((item) => (
            <article className="galeri-card" key={`${item.nama}-${item.tanggal}`}>
              <div className="galeri-image-container">
                {item.gambar ? (
                  <img src={item.gambar} alt={`Dokumentasi ${item.nama}`} loading="lazy" />
                ) : (
                  <div className="galeri-placeholder" aria-label="Foto belum tersedia">Foto</div>
                )}
              </div>
              <div className="galeri-card-content">
                <span className="galeri-chip">{item.departemen}</span>
                <h2>{item.nama}</h2>
                <p className="galeri-date">{item.tanggal}</p>
                <p>{item.deskripsi}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
