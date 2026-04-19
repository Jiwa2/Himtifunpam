import "./pemira.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Pemira() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pemira-wrapper">

      <div className="pemira-container">

        <div className="pemira-navbar">
          <Link to="/">
            <img
              src="/images/logohimtif.png"
              alt="HIMTIF"
              className="logo-img"
            />
          </Link>

          <button className="burger" onClick={() => setOpen(true)}>
            ☰
          </button>
        </div>

        {open && (
          <div className="sidebar-overlay" onClick={() => setOpen(false)}>
            <div className="sidebar" onClick={(e) => e.stopPropagation()}>

              <button className="close" onClick={() => setOpen(false)}>
                ✕
              </button>

              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/struktur" onClick={() => setOpen(false)}>Struktur</Link>
              <Link to="/galeri" onClick={() => setOpen(false)}>Galeri</Link>
              <Link to="/produk" onClick={() => setOpen(false)}>Produk</Link>
              <Link to="/pemira" onClick={() => setOpen(false)}>Pemira</Link>

            </div>
          </div>
        )}

        <h1 className="pemira-title">
          E-Voting / PEMIRA HIMTIF
        </h1>

        <p className="pemira-desc">
          Pemira merupakan kegiatan pemungutan suara untuk memilih ketua dan wakil ketua secara demokratis.
        </p>

        <div className="paslon">
          <h2 className="paslon-title">PASLON 1</h2>

          <div className="paslon-content">

            <div className="paslon-foto">
              <div className="card-foto">
                <span>Nama</span>
                <span>Ketua</span>
              </div>

              <div className="card-foto">
                <span>Nama</span>
                <span>Wakil</span>
              </div>
            </div>

            <div className="visi-misi">
              <div className="box">
                <h4>VISI</h4>
                <div className="box-content">(Deskripsi)</div>
              </div>

              <div className="box">
                <h4>MISI</h4>
                <div className="box-content">(Deskripsi)</div>
              </div>
            </div>

          </div>
        </div>

        <div className="paslon">
          <h2 className="paslon-title right">PASLON 2</h2>

          <div className="paslon-content reverse">

            <div className="paslon-foto">
              <div className="card-foto">
                <span>Nama</span>
                <span>Ketua</span>
              </div>

              <div className="card-foto">
                <span>Nama</span>
                <span>Wakil</span>
              </div>
            </div>

            <div className="visi-misi">
              <div className="box">
                <h4 style={{ textAlign: "right" }}>VISI</h4>
                <div className="box-content">(Deskripsi)</div>
              </div>

              <div className="box">
                <h4 style={{ textAlign: "right" }}>MISI</h4>
                <div className="box-content">(Deskripsi)</div>
              </div>
            </div>

          </div>
        </div>

        <div className="cta">
          <p>
            “Gunakan hak pilihmu dan ikut berpartisipasi dalam Pemira.”
          </p>

          <Link to="/Formpemira" 
          className="cta-btn">
          Tentukan Pilihanmu Sekarang!
          </Link>
        </div>

      </div>
    </div>
  );
}
