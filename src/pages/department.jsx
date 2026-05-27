import { useState } from "react";
import { Link } from "react-router-dom";
import "./department.css";

export default function Department() {
  const [open, setOpen] = useState(false);

  const [openDept, setOpenDept] = useState({});
  const [openProker, setOpenProker] = useState({});

  const toggleDept = (deptId) => {
    setOpenDept((prev) => ({ ...prev, [deptId]: !prev[deptId] }));
  };

  const toggleProker = (prokerId) => {
    setOpenProker((prev) => ({ ...prev, [prokerId]: !prev[prokerId] }));
  };

  const departmentsData = [
    {
      id: "ristek",
      name: "Department RISTEK",
      kadep: "Nama Kadep Ristek",
      desc: "Penjelasan departemen Ristek di sini...",
      prokers: [
        { id: "ristek-p1", name: "Collab Himtif x HMTI UMJ", tgl: "-", desc: "-", status: "(Selesai)" },
        { id: "ristek-p2", name: "Hackaton", tgl: "13 - 18 Juni 2026", desc: "-", status: "(Akan Datang)" },
        { id: "ristek-p3", name: "HIMFEST", tgl: "-", desc: "-", status: "(Akan Datang)" },
      ],
    },
    {
      id: "humas",
      name: "Department HUMAS",
      kadep: "Nama Kadep Humas",
      desc: "Penjelasan departemen Humas di sini...",
      prokers: [
        { id: "humas-p1", name: "Nama Proker Humas 1", tgl: "-", desc: "-", status: "-" },
        { id: "humas-p2", name: "Nama Proker Humas 2", tgl: "-", desc: "-", status: "-" },
        { id: "humas-p3", name: "Nama Proker Humas 3", tgl: "-", desc: "-", status: "-" },
        { id: "humas-p4", name: "Nama Proker Humas 4", tgl: "-", desc: "-", status: "-" },
        { id: "humas-p5", name: "Nama Proker Humas 5", tgl: "-", desc: "-", status: "-" },
      ],
    },
    {
      id: "minfo",
      name: "Department MINFO",
      kadep: "Nama Kadep Minfo",
      desc: "Penjelasan departemen Minfo di sini...",
      prokers: [
        { id: "minfo-p1", name: "Podcast Maha Suara 10", tgl: "18 April 2026", desc: "Podcast santai yang berisi sesi sharing dan pembahasan seputar perkuliahan dan organisasi", status: "Selesai" },
        { id: "minfo-p2", name: "Podcast Maha Suara 11", tgl: "20 Juni 2026", desc: "Podcast santai yang berisi sesi sharing dan pembahasan seputar perkuliahan dan organisasi", status: "Akan Datang" },
        { id: "minfo-p3", name: "Podcast Maha Suara 12", tgl: "12 September 2026", desc: "Podcast santai yang berisi sesi sharing dan pembahasan seputar perkuliahan dan organisasi", status: "Akan Datang" },
        { id: "minfo-p4", name: "Podcast Maha Suara 13", tgl: "13 November 2026", desc: "Podcast santai yang berisi sesi sharing dan pembahasan seputar perkuliahan dan organisasi", status: "Akan Datang" },
        { id: "minfo-p5", name: "Pembelajaran desain", tgl: "11 Juni 2026", desc: "Pembelajaran bersama PSDA mengenai desain grafis dan editing video untuk meningkatkan skill anggota HIMTIF", status: "Akan Datang" }
      ],
    },
    {
      id: "sosbud",
      name: "Department SOSBUD",
      kadep: "Nama Kadep Sosbud",
      desc: "Penjelasan departemen Sosbud di sini...",
      prokers: [
        { id: "sosbud-p1", name: "Buka Bersama (BUKBER)", tgl: "5 Maret 2026", desc: "Buka bersama HIMTIF yang bertujuan untuk mempererat tali silaturahmi dan menumbuhkan rasa kekeluargaan yang kuat antara seluruh anggota dan pengurus HIMTIF", status: "Selesai" },
        { id: "sosbud-p2", name: "Himtif Berbagi (HIMBER)", tgl: "13 Maret 2026", desc: "Program aksi sosial kemasyarakatan yang dirancang untuk meningkatkan rasa kepedulian, empati, dan kotribusi nyata mahasiswa terhadap masyarakat atau sosial", status: "Selesai" },
        { id: "sosbud-p3", name: "Himtif Production (HIMRPO)", tgl: "Setiap hari", desc: "Penjualan merchandise HIMTIF, seperti lanyard, stiker, pernak pernik dan makanan", status: "Berjalan" },
        { id: "sosbud-p4", name: "Dana Usaha (DANUSAN)", tgl: "Setiap Event", desc: "Kegiatan pencarian dana melalui penjualan produk atau makanan di event kampus, seperti PKKMB, Seminar, DLL", status: "Berjalan" },
        { id: "sosbud-p5", name: "Himtif Bussines Corner (HBC)", tgl: "September 2026", desc: "Program yang berfokus pada wadah edukasi dan juga berfungsi sebagai tempat pembelajaran bisnis bagi mahasiswa", status: "Akan Datang" },
        { id: "sosbud-p5", name: "Donor Darah", tgl: "8 Oktober 2026", desc: "Aksi kemanusiaan kerja sama dengan PMI untuk membantu memenuhi stok kebutuhan darah dan meningkatkan kesadaran kesehatan mahasiswa serta masyarakat", status: "Akan Datang" }
      ],
    },
    {
      id: "psdm",
      name: "Department PSDM",
      kadep: "Nama Kadep Psdm",
      desc: "Penjelasan departemen Psdm di sini...",
      prokers: [
        { id: "psdm-p1", name: "Nama Proker Psdm 1", tgl: "-", desc: "-", status: "-" },
        { id: "psdm-p2", name: "Nama Proker Psdm 2", tgl: "-", desc: "-", status: "-" },
        { id: "psdm-p3", name: "Nama Proker Psdm 3", tgl: "-", desc: "-", status: "-" },
        { id: "psdm-p4", name: "Nama Proker Psdm 4", tgl: "-" },
        { id: "psdm-p5", name: "Nama Proker Psdm 5", tgl: "-", desc: "-", status: "-" },
      ],
    },
  ];

  return (
    <div className="department-wrapper">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo-link">
            <img src="/images/logohimtif.png" className="logo-img" alt="Logo HIMTIF" />
          </Link>
          <button className="burger" onClick={() => setOpen(true)}>
            ☰
          </button>
        </div>
      </nav>

      {/* SIDEBAR OVERLAY */}
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(false)}>
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setOpen(false)}>✕</button>
            <Link to="/">Home</Link>
            <Link to="/department">Department</Link>
            <Link to="/galeri">Galeri</Link>
            <Link to="/produk">Produk</Link>
            <Link to="/pemira">Pemira</Link>
          </div>
        </div>
      )}

      {/* MAIN CONTAINER */}
      <div className="department-container">
        <div className="department-header-text">
          <h2 className="judul-halaman">Ada Departemen apa aja sih di HIMTIF?</h2>
          <p className="deskripsi-halaman">
            Udah tahu belum? Ada departemen apa aja sih di HIMTIF Universitas Pamulang? Secara garis besar, 
            kami memiliki beberapa departemen yang mendukung kegiatan dan pengembangan mahasiswa Teknik Informatika 
            dari segala faktor. Simak lebih lanjut di bawah ini yak sobat himtif!
          </p>
        </div>

        {/* LIST DEPARTEMEN AUTOMATION (MAPPING) */}
        <div className="dept-list-wrapper">
          {departmentsData.map((dept) => {
            const isDeptOpen = !!openDept[dept.id];

            return (
              <div className="dept-item" key={dept.id}>
                <button className="dept-toggle-btn" onClick={() => toggleDept(dept.id)}>
                  <span className="toggle-icon">{isDeptOpen ? "−" : "+"}</span> {dept.name}
                </button>
                
                <div className={`dept-collapse-wrapper ${isDeptOpen ? "open" : ""}`}>
                  <div className="dept-content-card">
                    
                    {/* Profil Departemen */}
                    <div className="dept-profile-box">
                      <div className="dept-avatar-circle">
                        <span>Foto</span>
                      </div>
                      <h4 className="dept-kadep-name">{dept.kadep}</h4>
                      <p className="dept-description-text">{dept.desc}</p>
                    </div>

                    {/* Section Proker */}
                    <div className="proker-section">
                      <div className="proker-section-header">List Program Kerja...</div>
                      
                      <div className="proker-list-wrapper">
                        {dept.prokers.map((proker) => {
                          const isProkerOpen = !!openProker[proker.id];

                          return (
                            <div className="proker-item" key={proker.id}>
                              <button className="proker-toggle-btn" onClick={() => toggleProker(proker.id)}>
                                <span className="proker-icon">{isProkerOpen ? "▼" : "▶"}</span> {proker.name}
                              </button>
                              
                              <div className={`proker-collapse-wrapper ${isProkerOpen ? "open" : ""}`}>
                                <div className="proker-detail-panel">
                                  <div className="proker-detail-row">
                                    <span className="detail-dot"></span>
                                    <span className="detail-label">Tanggal Pelaksanaan</span>
                                    <span className="detail-value">: {proker.tgl}</span>
                                  </div>
                                  <div className="proker-detail-row">
                                    <span className="detail-dot"></span>
                                    <span className="detail-label">Deskripsi Proker</span>
                                    <span className="detail-value">: {proker.desc}</span>
                                  </div>
                                  <div className="proker-detail-row">
                                    <span className="detail-dot"></span>
                                    <span className="detail-label">Status Kegiatan</span>
                                    <span className="detail-value">
                                      : <span className="status-badge">{proker.status}</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}