import { useState } from "react";
import { Link } from "react-router-dom";
import "./department.css"; 

export default function Department() {
  const [open, setOpen] = useState(false);
  
  const [openDept, setOpenDept] = useState({
    ristek: true, 
    humas: false,
    minfo: false,
    sosbud: false,
    psdm: false,
  });

  const [openProker, setOpenProker] = useState({
    proker1: true,
    proker2: false,
    proker3: false,
  });

  const toggleDept = (dept) => {
    setOpenDept((prev) => ({ ...prev, [dept]: !prev[dept] }));
  };

  const toggleProker = (proker) => {
    setOpenProker((prev) => ({ ...prev, [proker]: !prev[proker] }));
  };

  return (
    <div className="department-wrapper">
      
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

      <div className="department-container">
        
        <div className="department-header-text">
          <h2 className="judul-halaman">Ada Departemen apa aja sih di HIMTIF?</h2>
          <p className="deskripsi-halaman">
            Udah tahu belum? Ada departemen apa aja sih di HIMTIF Universitas Pamulang? Secara garis besar, 
            kami memiliki beberapa departemen yang mendukung kegiatan dan pengembangan mahasiswa Teknik Informatika 
            dari segala faktor. Kami memiliki berbagai bidang yang dapat kamu eksplorasi dan kembangkan nih. 
            Simak lebih lanjut di bawah ini yak sobat himtif biar temen-temen tahu nih departemen apa saja yang ada di HIMTIF Universitas Pamulang!
          </p>
        </div>

        <div className="dept-list-wrapper">
          
          {/* ================= DEPARTEMEN RISTEK ================= */}
          <div className="dept-item">
            <button className="dept-toggle-btn" onClick={() => toggleDept("ristek")}>
              <span className="toggle-icon">{openDept.ristek ? "−" : "+"}</span> Department RISTEK
            </button>
            
            <div className={`dept-collapse-wrapper ${openDept.ristek ? "open" : ""}`}>
              <div className="dept-content-card">
                <div className="dept-profile-box">
                  <div className="dept-avatar-circle">
                    <span>Foto</span>
                  </div>
                  <h4 className="dept-kadep-name">Nama dan kadep apa</h4>
                  <p className="dept-description-text">
                    Penjelasan departemen ini tuh ngapain ajaa...
                  </p>
                </div>

                <div className="proker-section">
                  <div className="proker-section-header">List Program Kerja...</div>
                  
                  <div className="proker-list-wrapper">
                    {/* Proker 1 */}
                    <div className="proker-item">
                      <button className="proker-toggle-btn" onClick={() => toggleProker("proker1")}>
                        <span className="proker-icon">{openProker.proker1 ? "▼" : "▶"}</span> Collab Himtif x HMTI UMJ
                      </button>
                      <div className={`proker-collapse-wrapper ${openProker.proker1 ? "open" : ""}`}>
                        <div className="proker-detail-panel">
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Tanggal Pelaksanaan</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Deskripsi Proker</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Status Kegiatan</span>
                            <span className="detail-value">: <span className="status-badge">(Selesai/Akan Datang)</span></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Proker 2 */}
                    <div className="proker-item">
                      <button className="proker-toggle-btn" onClick={() => toggleProker("proker2")}>
                        <span className="proker-icon">{openProker.proker2 ? "▼" : "▶"}</span> Hackaton
                      </button>
                      <div className={`proker-collapse-wrapper ${openProker.proker2 ? "open" : ""}`}>
                        <div className="proker-detail-panel">
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Tanggal Pelaksanaan</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Deskripsi Proker</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Status Kegiatan</span>
                            <span className="detail-value">: <span className="status-badge">(Selesai/Akan Datang)</span></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="proker-item">
                      <button className="proker-toggle-btn" onClick={() => toggleProker("proker3")}>
                        <span className="proker-icon">{openProker.proker3 ? "▼" : "▶"}</span> HIMFEST
                      </button>
                      <div className={`proker-collapse-wrapper ${openProker.proker3 ? "open" : ""}`}>
                        <div className="proker-detail-panel">
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Tanggal Pelaksanaan</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Deskripsi Proker</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Status Kegiatan</span>
                            <span className="detail-value">: <span className="status-badge">(Selesai/Akan Datang)</span></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Proker 3 */}
                    <div className="proker-item">
                      <button className="proker-toggle-btn" onClick={() => toggleProker("proker3")}>
                        <span className="proker-icon">{openProker.proker3 ? "▼" : "▶"}</span> Nama Proker
                      </button>
                      <div className={`proker-collapse-wrapper ${openProker.proker3 ? "open" : ""}`}>
                        <div className="proker-detail-panel">
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Tanggal Pelaksanaan</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Deskripsi Proker</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Status Kegiatan</span>
                            <span className="detail-value">: <span className="status-badge">(Selesai/Akan Datang)</span></span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>



          {/* ================= DEPARTEMEN HUMAS ================= */}
          <div className="dept-item">
            <button className="dept-toggle-btn" onClick={() => toggleDept("ristek")}>
              <span className="toggle-icon">{openDept.ristek ? "−" : "+"}</span> Department RISTEK
            </button>
            
            <div className={`dept-collapse-wrapper ${openDept.ristek ? "open" : ""}`}>
              <div className="dept-content-card">
                <div className="dept-profile-box">
                  <div className="dept-avatar-circle">
                    <span>Foto</span>
                  </div>
                  <h4 className="dept-kadep-name">Nama dan kadep apa</h4>
                  <p className="dept-description-text">
                    Penjelasan departemen ini tuh ngapain ajaa...
                  </p>
                </div>

                <div className="proker-section">
                  <div className="proker-section-header">List Program Kerja...</div>
                  
                  <div className="proker-list-wrapper">
                    {/* Proker 1 */}
                    <div className="proker-item">
                      <button className="proker-toggle-btn" onClick={() => toggleProker("proker1")}>
                        <span className="proker-icon">{openProker.proker1 ? "▼" : "▶"}</span> Collab Himtif x HMTI UMJ
                      </button>
                      <div className={`proker-collapse-wrapper ${openProker.proker1 ? "open" : ""}`}>
                        <div className="proker-detail-panel">
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Tanggal Pelaksanaan</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Deskripsi Proker</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Status Kegiatan</span>
                            <span className="detail-value">: <span className="status-badge">(Selesai/Akan Datang)</span></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Proker 2 */}
                    <div className="proker-item">
                      <button className="proker-toggle-btn" onClick={() => toggleProker("proker2")}>
                        <span className="proker-icon">{openProker.proker2 ? "▼" : "▶"}</span> Hackaton
                      </button>
                      <div className={`proker-collapse-wrapper ${openProker.proker2 ? "open" : ""}`}>
                        <div className="proker-detail-panel">
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Tanggal Pelaksanaan</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Deskripsi Proker</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Status Kegiatan</span>
                            <span className="detail-value">: <span className="status-badge">(Selesai/Akan Datang)</span></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="proker-item">
                      <button className="proker-toggle-btn" onClick={() => toggleProker("proker3")}>
                        <span className="proker-icon">{openProker.proker3 ? "▼" : "▶"}</span> HIMFEST
                      </button>
                      <div className={`proker-collapse-wrapper ${openProker.proker3 ? "open" : ""}`}>
                        <div className="proker-detail-panel">
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Tanggal Pelaksanaan</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Deskripsi Proker</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Status Kegiatan</span>
                            <span className="detail-value">: <span className="status-badge">(Selesai/Akan Datang)</span></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Proker 3 */}
                    <div className="proker-item">
                      <button className="proker-toggle-btn" onClick={() => toggleProker("proker3")}>
                        <span className="proker-icon">{openProker.proker3 ? "▼" : "▶"}</span> Nama Proker
                      </button>
                      <div className={`proker-collapse-wrapper ${openProker.proker3 ? "open" : ""}`}>
                        <div className="proker-detail-panel">
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Tanggal Pelaksanaan</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Deskripsi Proker</span>
                            <span className="detail-value">: -</span>
                          </div>
                          <div className="proker-detail-row">
                            <span className="detail-dot"></span>
                            <span className="detail-label">Status Kegiatan</span>
                            <span className="detail-value">: <span className="status-badge">(Selesai/Akan Datang)</span></span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>



          {/* ================= DEPARTEMEN MINFO ================= */}
          <div className="dept-item">
            <button className="dept-toggle-btn" onClick={() => toggleDept("minfo")}>
              <span className="toggle-icon">{openDept.minfo ? "−" : "+"}</span> Department MINFO
            </button>
            <div className={`dept-collapse-wrapper ${openDept.minfo ? "open" : ""}`}>
              <div className="dept-content-card">
                <p style={{ textAlign: 'center', color: '#fff' }}>Konten Department MINFO</p>
              </div>
            </div>
          </div>

          {/* ================= DEPARTEMEN SOSBUD ================= */}
          <div className="dept-item">
            <button className="dept-toggle-btn" onClick={() => toggleDept("sosbud")}>
              <span className="toggle-icon">{openDept.sosbud ? "−" : "+"}</span> Department SOSBUD
            </button>
            <div className={`dept-collapse-wrapper ${openDept.sosbud ? "open" : ""}`}>
              <div className="dept-content-card">
                <p style={{ textAlign: 'center', color: '#fff' }}>Konten Department SOSBUD</p>
              </div>
            </div>
          </div>

          {/* ================= DEPARTEMEN PSDM ================= */}
          <div className="dept-item">
            <button className="dept-toggle-btn" onClick={() => toggleDept("psdm")}>
              <span className="toggle-icon">{openDept.psdm ? "−" : "+"}</span> Department PSDM
            </button>
            <div className={`dept-collapse-wrapper ${openDept.psdm ? "open" : ""}`}>
              <div className="dept-content-card">
                <p style={{ textAlign: 'center', color: '#fff' }}>Konten Department PSDM</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}