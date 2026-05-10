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

        {/* ================= BPH ================= */}
        <h2 className="judul">BADAN PENGURUS HARIAN</h2>

        <div className="bph-grid">
          <Card nama="Saldy Saputra" jabatan="Ketua Umum" foto="/images/Saldy Saputra .png" />
          <Card nama="Fat Khudin" jabatan="Wakil Ketua Umum" foto="/images/himtif/Fat khudin.png" />

          <Card nama="Nurlayla Fitri" jabatan="Sekretaris Umum 1" foto="/images/himtif/Nurlayla fitri.png" />
          <Card nama="Aulia Putri" jabatan="Sekretaris Umum 2" foto="/images/himtif/Aulia Putri .png" />
          <Card nama="Medina Fikanti" jabatan="Bendahara Umum 1" foto="/images/himtif/Medina Fikanti.png" />
          <Card nama="Amelia Zahwa H.S" jabatan="Bendahara Umum 2" foto="/images/himtif/Amelia Zahwa Habilla Syifa.png" />
        </div>

        {/* ================= PENGURUS ================= */}
        <h2 className="judul">KEPENGURUSAN</h2>

        {/* RISTEK */}
        <h3 className="subjudul">Department Riset dan Teknologi</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Muhammad Jiwa Islamutidar" jabatan="Kepala Department Ristek" foto="/images/ristek/Muhammad Jiwa Islamutidar.png" />
            <Card nama="Ahmad Renaldy" jabatan="Sekretaris Department" foto="/images/ristek/Ahmad Renaldy.png" />
            <Card nama="Mohammad Arief Ardiansyah" jabatan="Staff" foto="/images/ristek/Mohammad Arief Ardiansyah.png" />
          </div>
          <div className="pengurus-row">
            <Card nama="Cintya Laura Melagro" jabatan="Staff" foto="/images/ristek/Cintya Laura Melagro.png" />
            <Card nama="Abu Ziyad Al Katani" jabatan="Staff" foto="/images/ristek/Abu Ziyad Al Katani.png" />
          </div>
        </div>

        {/* HUMAS */}
        <h3 className="subjudul">Department Humas</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Arkananta Emier Pradipta" jabatan="Kepala Department Humas" foto="/images/humas/ARKANANTA EMIER PRADIPTA.png" />
            <Card nama="Zaydan Azfar" jabatan="Sekretaris Department" foto="/images/humas/ZAYDAN AZFAR.png" />
            <Card nama="Raven Firgiasyah" jabatan="Staff" foto="/images/humas/RAVEN FIRGIASYAH.png" />
          </div>
          <div className="pengurus-row">
            <Card nama="Sihabudin Firmansyah" jabatan="Staff" foto="/images/humas/SIHABUDIN FIRMANSYAH.png" />
            <Card nama="Muhammad Rafli Firdaus" jabatan="Staff" foto="/images/humas/MUHAMMAD RAFLI FIRDAUS.png" />
            <Card nama="Paris Nurfadhillah" jabatan="Staff" foto="/images/humas/PARIS NURFADHILLAH.png" />
          </div>
        </div>

        {/* MINFO */}
        <h3 className="subjudul">Department Media Informasi</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Bagas Anwar Meiqadr" jabatan="Kepala Department Minfo" foto="/images/minfo/BAGAS ANWAR MEIQADR.png" />
            <Card nama="Lidya Septia Nita Darmawati" jabatan="Sekretaris Department" foto="/images/minfo/LIDYA SEPTIA NITA DARMAWATI.png" />
            <Card nama="Ika Auliya Rusyadah" jabatan="Staff" foto="/images/minfo/IKA AULIYA RUSYADAH.png" />
          </div>
          <div className="pengurus-row">
            <Card nama="Dita Adelia Putri" jabatan="Staff" foto="/images/minfo/DITA ADELIA PUTRI.png" />
            <Card nama="Olivia Ramadhani" jabatan="Staff" foto="/images/minfo/OLIVIA RAMADHANI.png" />
            <Card nama="Suci Oktaviani" jabatan="Staff" foto="/images/minfo/SUCI OKTAVIANI.png" />
          </div>
        </div>

        {/* SOSBUD */}
        <h3 className="subjudul">Department Sosial Budaya</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Farid Mardan Aziz" jabatan="Kepala Department Sosbud" foto="/images/sosbud/Farid Mardan Aziz.png" />
            <Card nama="Aldi Athalla Putra" jabatan="Sekretaris Department" foto="/images/sosbud/Aldi Athalla Putra.png" />
            <Card nama="Deden Jamaludin" jabatan="Staff" foto="/images/sosbud/26.png" />
            <Card nama="Amirul Mukminin" jabatan="Staff" foto="/images/sosbud/Amirul Mukminin.png" />
          </div>
          <div className="pengurus-row">
            <Card nama="Muhammad Edward" jabatan="Staff" foto="/images/sosbud/Muhamad Edward.png" />
            <Card nama="Ugem Zilullah" jabatan="Staff" foto="/images/sosbud/Ugem Zilullah.png" />
            <Card nama="Arinta Salsabilla" jabatan="Staff" foto="/images/sosbud/Arinta Salsabilla.png" />
          </div>
        </div>

        {/* PSDM */}
        <h3 className="subjudul">Department Pengembangan Sumber Daya Manusia</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Rifky Ramadhan" jabatan="Kepala Department PSDM" foto="/images/PSDM/Rifky Ramadhan Putra Permana.png" />
            <Card nama="Bilqis Nilam Cahya" jabatan="Sekretaris Department" foto="/images/PSDM/Bilqis Nilam Cahya.png" />
          </div>
          <div className="pengurus-row">
            <Card nama="Niko Putra Yusanto" jabatan="Staff" foto="/images/PSDM/Niko Putra Yusanto.png" />
            <Card nama="Bening Fajriatul Hawa" jabatan="Staff" foto="/images/PSDM/Bening Fajriatul Hawa.png" />
          </div>
        </div>

        {/* ================= ANGGOTA ================= */}
        <h2 className="judul">ANGGOTA</h2>

        {/* ANGGOTA RISTEK */}
        <h3 className="subjudul">Anggota Riset dan Teknologi</h3>
        <div className="grid">
          <Card nama="Afzal Putra Hariyudha" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Ahmad Layyinul Labib" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Danu Ngesti Prasetyo" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Farel Adya Ridhafa" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Ibnu Syuhada Suffera" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Haninda Coni Olivia" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Ibrahim Surya Kusuma" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Michelle Aniela Wijaya" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Ni'matul Jannah" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Rahmat Syafa Firdaus" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Rifqi Atha Ramadhan" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Rizky Revaldo" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Rizqi Komarullail" jabatan="Anggota" foto="/images/default.png" />
        </div>

        {/* ANGGOTA HUMAS */}
        <h3 className="subjudul">Anggota Hubungan Masyarakat</h3>
        <div className="grid">
          <Card nama="Angel Ajeng Gita Pertiwi" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Dimas Faiz Afzal" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Ilham Jaya" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Laras Ayu Setyorini" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Lingga Arditama" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Mochammad Ridwan Prasetyo" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Muhamad Perdiansyah" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Rifki Dimas Panuju" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Sela Nabila" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Zaid Naufan" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Zaydan Afif Fadhillah" jabatan="Anggota" foto="/images/default.png" />
        </div>

        {/* ANGGOTA MEDIA */}
        <h3 className="subjudul">Anggota Media Informasi</h3>
        <div className="grid">
          <Card nama="Aisyah Rahmatussolehah" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Akhmad Syahrul Fauzan" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Andini Nur Agustina Basuki" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Anggela Merici Moruk" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Fairus Priyogi" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Haura Rana Hafizhah Ramadhani" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Khairunnisa Syafitri" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Putra Wijaya" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Salsabillah" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Syaufa Rajani Laela Suminda" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Wahyu Ahmad Padillah" jabatan="Anggota" foto="/images/default.png" />
        </div>

        {/* ANGGOTA SOSBUD */}
        <h3 className="subjudul">Anggota Sosial Budaya</h3>
        <div className="grid">
          <Card nama="Andrea Nova Fitriani" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Aurellia Dian Hanifah" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Dani Taufikurrohman" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="David Charles Duval" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Dini Yusriah" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Hikbal Maulana" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Ibnu Salam Yakin" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Juliana Moza" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Rakha Mazaya Haeru" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Rianto Nababan" jabatan="Anggota" foto="/images/default.png" />
        </div>

        {/* ANGGOTA PSDM */}
        <h3 className="subjudul">Anggota Pengembangan Sumber Daya Manusia</h3>
        <div className="grid">
          <Card nama="Adiwidya Sastrawijaya" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Alfiyah Syafinahtun Nashah" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Bunga Alya Ramadhan" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Didin Nugraha" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Haya Haifa Hilmy" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Miftakhul Fal'ah" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Oktanaka" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Sulthan Arya Satwika" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Tania Syafilla Gifani" jabatan="Anggota" foto="/images/default.png" />
          <Card nama="Trinancy Hadinastiti" jabatan="Anggota" foto="/images/default.png" />
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