import { useState } from "react";
import { Link } from "react-router-dom";
import "./formpemira.css";

export default function Formpemira() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    kelas: "",
    paslon: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.nim || !formData.kelas) {
      alert("Silakan lengkapi data diri Anda terlebih dahulu!");
      return;
    }
    if (!formData.paslon) {
      alert("Silakan pilih salah satu pasangan calon (Paslon)!");
      return;
    }
    
    // Tampilkan data pilihan di console atau integrasikan dengan API backend
    console.log("Data Pemilih & Pilihan:", formData);
    alert(`Terima kasih ${formData.nama}, pilihan Anda berhasil dikirim!`);
  };

  return (
    <div className="formpemira-wrapper">
      <div className="formpemira-container">
        
        <div className="formpemira-card">
          
          <div className="formpemira-navbar">
            <Link to="/">
              <img
                src="/images/logohimtif.png"
                alt="HIMTIF"
                className="logo-img"
              />
            </Link>

            <button
              className="burger"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </div>

          {open && (
            <div
              className="sidebar-overlay"
              onClick={() => setOpen(false)}
            >
              <div
                className="sidebar"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close"
                  onClick={() => setOpen(false)}
                >
                  ✕
                </button>

                <Link to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link to="/struktur" onClick={() => setOpen(false)}>
                  Struktur
                </Link>
                <Link to="/galeri" onClick={() => setOpen(false)}>
                  Galeri
                </Link>
                <Link to="/produk" onClick={() => setOpen(false)}>
                  Produk
                </Link>
                <Link to="/pemira" onClick={() => setOpen(false)}>
                  Pemira
                </Link>
              </div>  
            </div>
          )}

          <div className="formpemira-header">
            <img
              src="/images/logohimtif.png"
              className="logo"
              alt="logo"
            />
          </div>

          <h2 className="title">
            FORM PEMIRA HIMTIF
          </h2>

          <p className="desc">
            Silakan isi data diri dan pilih pasangan calon.
          </p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Nama</label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Masukkan nama"
              />
            </div>

            <div className="input-group">
              <label>NIM</label>
              <input
                type="text"
                name="nim"
                value={formData.nim}
                onChange={handleChange}
                placeholder="Masukkan NIM"
              />
            </div>

            <div className="input-group">
              <label>Kelas</label>
              <input
                type="text"
                name="kelas"
                value={formData.kelas}
                onChange={handleChange}
                placeholder="Masukkan kelas"
              />
            </div>

            <h3 className="pilihan-title">
              Pilih Paslon
            </h3>

            <div className="paslon-container">
              <label className="paslon-card">
                <input
                  type="radio"
                  name="paslon"
                  value="1"
                  checked={formData.paslon === "1"}
                  onChange={handleChange}
                  hidden
                />
                <div className="paslon-header">
                  Paslon 1
                </div>
                <div className="paslon-form-content">
                  <div className="calon">
                    <img
                      src="/images/user.png"
                      alt="Ketua"
                      className="foto"
                    />
                    <p>Ketua</p>
                  </div>
                  <div className="calon">
                    <img
                      src="/images/user.png"
                      alt="Wakil"
                      className="foto"
                    />
                    <p>Wakil</p>
                  </div>
                </div>
              </label>

              <label className="paslon-card">
                <input
                  type="radio"
                  name="paslon"
                  value="2"
                  checked={formData.paslon === "2"}
                  onChange={handleChange}
                  hidden
                />
                <div className="paslon-header">
                  Paslon 2
                </div>
                <div className="paslon-form-content">
                  <div className="calon">
                    <img
                      src="/images/user.png"
                      alt="Ketua"
                      className="foto"
                    />
                    <p>Ketua</p>
                  </div>
                  <div className="calon">
                    <img
                      src="/images/user.png"
                      alt="Wakil"
                      className="foto"
                    />
                    <p>Wakil</p>
                  </div>
                </div>
              </label>
            </div>

            <button
              type="submit"
              className="submit-btn"
            >
              Kirim Pilihan
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}