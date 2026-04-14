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
            <button className="close" onClick={() => setOpen(false)}>✕</button>

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

        <div className="bph-grid">
          <Card nama="Saldy Saputra" jabatan="Ketua Umum" foto="/images/Saldy Saputra .png" />
          <Card nama="Fat Khudin" jabatan="Wakil Ketua Umum" foto="/images/himtif/Fat khudin.png" />

          <Card nama="Nurlayla Fitri" jabatan="Sekretaris Umum 1" foto="/images/himtif/Nurlayla fitri.png" />
          <Card nama="Aulia Putri" jabatan="Sekretaris Umum 2" foto="/images/himtif/Aulia Putri .png" />
          <Card nama="Medina Fikanti" jabatan="Bendahara umum 1" foto="/images/himtif/Medina Fikanti.png" />
          <Card nama="Amelia Zahwa H.S" jabatan="Bendahara umum 2" foto="/images/himtif/Amelia Zahwa Habilla Syifa.png" />
        </div>

        <h2 className="judul">KEPENGURUSAN</h2>

        <h3 className="subjudul">Department Ristek</h3>
        <div className="grid">
          <Card nama="Muhammad Jiwa Islamutidar" jabatan="Kepala Department Ristek" foto="/images/ristek/Muhammad Jiwa Islamutidar.png" />
          <Card nama="Ahmad Renaldy" jabatan="Sekretaris Department" foto="/images/ristek/Ahmad Renaldy.png" />
          <Card nama="Mohammad Arief Ardiansyah" jabatan="Staff" foto="/images/ristek/Mohammad Arief Ardiansyah.png" />
          <Card nama="Cintya Laura Melagro" jabatan="Staff" foto="/images/ristek/Cintya Laura Melagro.png" />
          <Card nama="Abu Ziyad Al Katani" jabatan="Staff" foto="/images/ristek/Abu Ziyad Al Katani.png" />
        </div>

        <h3 className="subjudul">Department Humas</h3>
        <div className="grid">
          <Card nama="Arkananta Emier Pradipta" jabatan="Kepala Department Humas" foto="/images/humas/ARKANANTA EMIER PRADIPTA.png" />
          <Card nama="Zaydan Azfar" jabatan="Sekretaris Department" foto="/images/humas/ZAYDAN AZFAR.png" />
          <Card nama="Raven Firgiasyah" jabatan="Staff" foto="/images/humas/RAVEN FIRGIASYAH.png" />
          <Card nama="Sihabudin Firmansyah" jabatan="Staff" foto="/images/humas/SIHABUDIN FIRMANSYAH.png" />
          <Card nama="Muhammad Rafli Firdaus" jabatan="Staff" foto="/images/humas/MUHAMMAD RAFLI FIRDAUS.png" />
          <Card nama="Paris Nurfadhillah" jabatan="Staff" foto="/images/humas/PARIS NURFADHILLAH.png" />
        </div>

        <h3 className="subjudul">Department Minfo</h3>
        <div className="grid">
          <Card nama="Bagas Anwar Meiqadr" jabatan="Kepala Department Minfo" foto="/images/minfo/BAGAS ANWAR MEIQADR.png" />
          <Card nama="Lidya Septia Nita Darmawati" jabatan="Sekretaris Department" foto="/images/minfo/LIDYA SEPTIA NITA DARMAWATI.png" />
          <Card nama="Ika Auliya Rusyadah" jabatan="Staff" foto="/images/minfo/IKA AULIYA RUSYADAH.png" />
          <Card nama="Dita Adelia Putri" jabatan="Staff" foto="/images/minfo/DITA ADELIA PUTRI.png" />
          <Card nama="Olivia Ramadhani" jabatan="Staff" foto="/images/minfo/OLIVIA RAMADHANI.png" />
          <Card nama="Suci Oktaviani" jabatan="Staff" foto="/images/minfo/SUCI OKTAVIANI.png" />
        </div>

        <h3 className="subjudul">Department Sosbud</h3>
        <div className="grid">
          <Card nama="Farid Mardan Aziz" jabatan="Kepala Department Sosbud" foto="/images/sosbud/Farid Mardan Aziz.png" />
          <Card nama="Aldi Athalla Putra" jabatan="Sekretaris Department" foto="/images/sosbud/Aldi Athalla Putra.png" />
          <Card nama="Deden Jamaludin" jabatan="Staff" foto="/images/sosbud/26.png" />
          <Card nama="Amirul Mukminin" jabatan="Staff" foto="/images/sosbud/Amirul Mukminin.png" />
          <Card nama="Muhammad Edward" jabatan="Staff" foto="/images/sosbud/Muhamad Edward.png" />
          <Card nama="Ugem Zilullah" jabatan="Staff" foto="/images/sosbud/Ugem Zilullah.png" />
          <Card nama="Arinta Salsabilla" jabatan="Staff" foto="/images/sosbud/Arinta Salsabilla.png" />
        </div>

        <h3 className="subjudul">Department PSDM</h3>
        <div className="grid">
          <Card nama="Rifky Ramadhan" jabatan="Kepala Department PSDM" foto="/images/PSDM/Rifky Ramadhan Putra Permana.png" />
          <Card nama="Bilqis Nilam Cahya" jabatan="Sekretaris Department" foto="/images/PSDM/Bilqis Nilam Cahya.png" />
          <Card nama="Niko Putra Yusanto" jabatan="Staff" foto="/images/PSDM/Niko Putra Yusanto.png" />
          <Card nama="Bening Fajriatul Hawa" jabatan="Staff" foto="/images/PSDM/Bening Fajriatul Hawa.png" />
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
