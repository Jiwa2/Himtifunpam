import { useState } from "react";
import { Link } from "react-router-dom";
import "./formpemira.css";

export default function Formpemira() {

  const [open, setOpen] = useState(false);

  return (
    <div className="pemira-wrapper">

      {/* NAVBAR */}
      <div className="pemira-navbar">

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

      {/* SIDEBAR */}
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

      {/* CARD */}
      <div className="pemira-card">

        {/* HEADER */}
        <div className="pemira-header">
          <img
            src="/images/logohimtif.png"
            className="logo"
            alt="logo"
          />
        </div>

        {/* TITLE */}
        <h2 className="title">
          FORM PEMIRA HIMTIF
        </h2>

        <p className="desc">
          Silakan isi data diri dan pilih pasangan calon.
        </p>

        {/* FORM */}
        <form className="form">

          {/* INPUT NAMA */}
          <div className="input-group">
            <label>Nama</label>

            <input
              type="text"
              placeholder="Masukkan nama"
            />
          </div>

          {/* INPUT NIM */}
          <div className="input-group">
            <label>NIM</label>

            <input
              type="text"
              placeholder="Masukkan NIM"
            />
          </div>

          {/* INPUT KELAS */}
          <div className="input-group">
            <label>Kelas</label>

            <input
              type="text"
              placeholder="Masukkan kelas"
            />
          </div>

          {/* TITLE PASLON */}
          <h3 className="pilihan-title">
            Pilih Paslon
          </h3>

          {/* CONTAINER PASLON */}
          <div className="paslon-container">

            {/* PASLON 1 */}
            <label className="paslon-card">

              <input
                type="radio"
                name="paslon"
                value="1"
                hidden
              />

              <div className="paslon-header">
                <span>Paslon 1</span>
              </div>

              <div className="paslon-content">

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

            {/* PASLON 2 */}
            <label className="paslon-card">

              <input
                type="radio"
                name="paslon"
                value="2"
                hidden
              />

              <div className="paslon-header">
                <span>Paslon 2</span>
              </div>

              <div className="paslon-content">

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

          {/* BUTTON */}
          <button
            type="submit"
            className="submit-btn"
          >
            Kirim Pilihan
          </button>

        </form>
      </div>
    </div>
  );
}