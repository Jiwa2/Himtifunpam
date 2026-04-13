import { useState } from "react";
import { Link } from "react-router-dom";
import "./struktur.css";

export default function Struktur() {
  const [open, setOpen] = useState(false);

  return (
    <div className="struktur-wrapper">

      <nav className="navbar">
        <div className="navbar-inner">

          <Link to="/">
            <img src="/images/logohimtif.png" className="logo-img" />
          </Link>

          <button className="burger" onClick={() => setOpen(true)}>
            ☰
          </button>

        </div>
      </nav>

      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(false)}>
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>

            <button className="close" onClick={() => setOpen(false)}>
              ✕
            </button>

            <Link to="/">Home</Link>
            <Link to="/struktur">Struktur</Link>
            <Link to="/galeri">Galeri</Link>
            <Link to="/produk">Produk</Link>
            <Link to="/pemira">Pemira</Link>

          </div>
        </div>
      )}

      <div className="container">

        <h2 className="judul">BADAN PENGURUS HARIAN</h2>

        <div className="bph-wrapper">

          <div className="bph-top">
            <Card nama="Nama" jabatan="Ketua Umum" foto="/images/user.png" />
            <Card nama="Nama" jabatan="Wakil Ketua Umum" foto="/images/user.png" />
          </div>

          <div className="bph-bottom">
            <Card nama="Nama" jabatan="Sekretaris Umum 1" foto="/images/ketua.jpg" />
            <Card nama="Nama" jabatan="Sekretaris Umum 2" foto="/images/wakil.jpg" />
            <Card nama="Nama" jabatan="Bendahara umum 1" foto="/images/user.png" />
            <Card nama="Nama" jabatan="Bendahara umum 2" foto="/images/user.png" />
          </div>

        </div>

        <h2 className="judul">KEPENGURUSAN</h2>

        <div className="grid">

          <Card nama="Nama" jabatan="Kepala Department Ristek" foto="/images/user.png" />
          <Card nama="Nama" jabatan="Kepala Department Humas" foto="/images/user.png" />
          <Card nama="Nama" jabatan="Kepala Department Minfo" foto="/images/user.png" />
          <Card nama="Nama" jabatan="Kepala Department Sosbud" foto="/images/user.png" />
          <Card nama="Nama" jabatan="Kepala Department PSDM" foto="/images/user.png" />

          <Card nama="Nama" jabatan="Sekretaris Department" foto="/images/user.png" />
          <Card nama="Nama" jabatan="Sekretaris Department" foto="/images/user.png" />
          <Card nama="Nama" jabatan="Sekretaris Department" foto="/images/user.png" />
          <Card nama="Nama" jabatan="Sekretaris Department" foto="/images/user.png" />
          <Card nama="Nama" jabatan="Sekretaris Department" foto="/images/user.png" />

          <Card nama="Nama" jabatan="Staff" foto="/images/user.png" />
          <Card nama="Nama" jabatan="Staff" foto="/images/user.png" />
          <Card nama="Nama" jabatan="Staff" foto="/images/user.png" />
          <Card nama="Nama" jabatan="Staff" foto="/images/user.png" />
          <Card nama="Nama" jabatan="Staff" foto="/images/user.png" />

        </div>

      </div>
    </div>
  );
}

function Card({ nama, jabatan, foto }) {
  return (
    <div className="card-struktur">
      <img src={foto} className="foto" />
      <h4>{nama}</h4>
      <p>{jabatan}</p>
    </div>
  );
}