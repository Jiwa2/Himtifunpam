import { SiteLayout } from "../components/SiteLayout";
import "./struktur.css";

export default function Struktur() {
  return (
    <SiteLayout className="struktur-wrapper">
      <div className="struktur-container">
        <h1 className="judul">STRUKTUR ORGANISASI HIMTIF 2025/2026</h1>
        <div className="bph-grid">
          <Card nama="Saldy Saputra" jabatan="Ketua Umum" foto="/images/Saldy Saputra .png" />
          <Card nama="Fat Khudin" jabatan="Wakil Ketua Umum" foto="/images/himtif/Fat khudin.png" />
        </div>
        <h2 className="judul">BADAN PENGURUS HARIAN</h2>
        <div className="bph-grid">
          <Card nama="Nurlayla Fitri" jabatan="Sekretaris Umum 1" foto="/images/himtif/Nurlayla fitri.png" />
          <Card nama="Aulia Putri" jabatan="Sekretaris Umum 2" foto="/images/himtif/Aulia Putri .png" />
          <Card nama="Medina Fikanti" jabatan="Bendahara Umum 1" foto="/images/himtif/Medina Fikanti.png" />
          <Card nama="Amelia Zahwa H.S" jabatan="Bendahara Umum 2" foto="/images/himtif/Amelia Zahwa Habilla Syifa.png" />
        </div>

        <h2 className="judul">KEPENGURUSAN</h2>

        <h3 className="subjudul">Department Riset dan Teknologi</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Muhammad Jiwa Islamutidar" jabatan="Kepala Department Ristek" foto="/images/ristek/Muhammad Jiwa Islamutidar.png" />
            <Card nama="Ahmad Renaldy" jabatan="Sekretaris Department" foto="/images/ristek/Ahmad Renaldy.png" />
                        <Card nama="Abu Ziyad Al Katani" jabatan="Staff" foto="/images/ristek/Abu Ziyad Al Katani.png" />
            <Card nama="Mohammad Arief Ardiansyah" jabatan="Staff" foto="/images/ristek/Mohammad Arief Ardiansyah.png" />
            <Card nama="Cintya Laura Melagro" jabatan="Staff" foto="/images/ristek/Cintya Laura Melagro.png" />
          </div>
        </div>

        <h3 className="subjudul">Department Humas</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Arkananta Emier Pradipta" jabatan="Kepala Department Humas" foto="/images/humas/ARKANANTA EMIER PRADIPTA.png" />
            <Card nama="Zaydan Azfar" jabatan="Sekretaris Department" foto="/images/humas/ZAYDAN AZFAR.png" />
            <Card nama="Muhammad Rafli Firdaus" jabatan="Staff" foto="/images/humas/MUHAMMAD RAFLI FIRDAUS.png" />
            <Card nama="Paris Nurfadhillah" jabatan="Staff" foto="/images/humas/PARIS NURFADHILLAH.png" />
            <Card nama="Raven Firgiasyah" jabatan="Staff" foto="/images/humas/RAVEN FIRGIASYAH.png" />
            <Card nama="Sihabudin Firmansyah" jabatan="Staff" foto="/images/humas/SIHABUDIN FIRMANSYAH.png" />
          </div>
          <div className="pengurus-row">
          </div>
        </div>

        <h3 className="subjudul">Department Media Informasi</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Bagas Anwar Meiqadr" jabatan="Kepala Department Minfo" foto="/images/minfo/BAGAS ANWAR MEIQADR.png" />
            <Card nama="Lidya Septia Nita Darmawati" jabatan="Sekretaris Department" foto="/images/minfo/LIDYA SEPTIA NITA DARMAWATI.png" />
            <Card nama="Ika Auliya Rusyadah" jabatan="Staff" foto="/images/minfo/IKA AULIYA RUSYADAH.png" />
            <Card nama="Dita Adelia Putri" jabatan="Staff" foto="/images/minfo/DITA ADELIA PUTRI.png" />
            <Card nama="Olivia Ramadhani" jabatan="Staff" foto="/images/minfo/OLIVIA RAMADHANI.png" />
            <Card nama="Suci Oktaviani" jabatan="Staff" foto="/images/minfo/SUCI OKTAVIANI.png" />
          </div>
        </div>

        <h3 className="subjudul">Department Sosial Budaya</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Farid Mardan Aziz" jabatan="Kepala Department Sosbud" foto="/images/sosbud/Farid Mardan Aziz.png" />
            <Card nama="Aldi Athalla Putra" jabatan="Sekretaris Department" foto="/images/sosbud/Aldi Athalla Putra.png" />
            <Card nama="Deden Jamaludin" jabatan="Staff" foto="/images/sosbud/26.png" />
            <Card nama="Amirul Mukminin" jabatan="Staff" foto="/images/sosbud/Amirul Mukminin.png" />
            <Card nama="Muhammad Edward" jabatan="Staff" foto="/images/sosbud/Muhamad Edward.png" />
            <Card nama="Ugem Zilullah" jabatan="Staff" foto="/images/sosbud/Ugem Zilullah.png" />
            <Card nama="Arinta Salsabilla" jabatan="Staff" foto="/images/sosbud/Arinta Salsabilla.png" />
          </div>
        </div>

        <h3 className="subjudul">Department Pengembangan Sumber Daya Manusia</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Rifky Ramadhan" jabatan="Kepala Department PSDM" foto="/images/PSDM/Rifky Ramadhan Putra Permana.png" />
            <Card nama="Bilqis Nilam Cahya" jabatan="Sekretaris Department" foto="/images/PSDM/Bilqis Nilam Cahya.png" />
            <Card nama="Niko Putra Yusanto" jabatan="Staff" foto="/images/PSDM/Niko Putra Yusanto.png" />
            <Card nama="Bening Fajriatul Hawa" jabatan="Staff" foto="/images/PSDM/Bening Fajriatul Hawa.png" />
          </div>
        </div>

        <h2 className="judul">ANGGOTA</h2>

        <h3 className="subjudul">Anggota Riset dan Teknologi</h3>
        <div className="grid">
          <Card nama="Afzal Putra Hariyudha" jabatan="Anggota" foto="/images/anggotaristek/Afzal Putra Hariyudha.jpg" />
          <Card nama="Ahmad Layyinul Labib" jabatan="Anggota" foto="/images/anggotaristek/Ahmad Layyinul Labib.jpg" />
          <Card nama="Danu Ngesti Prasetyo" jabatan="Anggota" foto="/images/anggotaristek/Danu Ngesti Prasetyo_.jpg" />
          <Card nama="Farel Adya Ridhafa" jabatan="Anggota" foto="/images/anggotaristek/Farel Adya Ridhafa.jpg" />
          <Card nama="Ibnu Syuhada Suffera" jabatan="Anggota" foto="/images/anggotaristek/Ibnu Syuhada.png" />
          <Card nama="Haninda Coni Olivia" jabatan="Anggota" foto="/images/anggotaristek/Haninda Coni Olivia.jpg" />
          <Card nama="Ibrahim Surya Kusuma" jabatan="Anggota" foto="/images/anggotaristek/Ibrahim Surya Kusuma.png" />
          <Card nama="Michelle Aniela Wijaya" jabatan="Anggota" foto="/images/anggotaristek/Michelle Aniela Wijaya.jpg" />
          <Card nama="Ni'matul Jannah" jabatan="Anggota" foto="/images/anggotaristek/Ni_ma Tuljannah.jpeg" />
          <Card nama="Rahmat Syafa Firdaus" jabatan="Anggota" foto="/images/anggotaristek/" />
          <Card nama="Rifqi Atha Ramadhan" jabatan="Anggota" foto="/images/anggotaristek/Rifqi Atha Ramadhan_.jpg" />
          <Card nama="Rizky Revaldo" jabatan="Anggota" foto="/images/anggotaristek/Rizky Revaldo.jpg" />
          <Card nama="Rizky Komarullail" jabatan="Anggota" foto="/images/anggotaristek/Rizky Komarullail.jpg" />
        </div>

        <h3 className="subjudul">Anggota Hubungan Masyarakat</h3>
        <div className="grid">
          <Card nama="Angel Ajeng Gita Pertiwi" jabatan="Anggota" foto="/images/humas/Angel Ajeng Gita Pertiwi.png" />
          <Card nama="Dimas Faiz Afzal" jabatan="Anggota" foto="/images/humas/Dimas Faiz Afzal.jpg" />
          <Card nama="Ilham Jaya" jabatan="Anggota" foto="/images/humas/---" />
          <Card nama="Laras Ayu Setyorini" jabatan="Anggota" foto="/images/humas/Laras Ayu Setyorini.jpg" />
          <Card nama="Lingga Arditama" jabatan="Anggota" foto="/images/humas/---" />
          <Card nama="Mochammad Ridwan Prasetyo" jabatan="Anggota" foto="/images/humas/Mochammad Ridwan Prasetyo.jpg" />
          <Card nama="Muhamad Perdiansyah" jabatan="Anggota" foto="/images/humas/Muhammad Perdiansyah.jpg" />
          <Card nama="Rifki Dimas Panuju" jabatan="Anggota" foto="/images/humas/Rifki Dimas Panuju.jpg" />
          <Card nama="Sela Nabila" jabatan="Anggota" foto="/images/humas/Sela Nabila.jpg" />
          <Card nama="Zaid Naufan" jabatan="Anggota" foto="/images/humas/zaid naufan.jpeg" />
          <Card nama="Zaydan Afif Fadhillah" jabatan="Anggota" foto="/images/humas/Zaydan Afif Fadhillah.jpg" />
        </div>

        <h3 className="subjudul">Anggota Media Informasi</h3>
        <div className="grid">
          <Card nama="Aisyah Rahmatussolehah" jabatan="Anggota" foto="/images/anggotaminfo/Aisyah Rahmatussolehah.jpg" />
          <Card nama="Akhmad Syahrul Fauzan" jabatan="Anggota" foto="/images/anggotaminfo/Akhmad Syahrul Fauzan.jpg" />
          <Card nama="Andini Nur Agustina Basuki" jabatan="Anggota" foto="/images/anggotaminfo/Andini Nur Agustina Basuki.jpg" />
          <Card nama="Anggela Merici Moruk" jabatan="Anggota" foto="/images/anggotaminfo/Anggela Merici Moruk.jpg" />
          <Card nama="Fairus Priyogi" jabatan="Anggota" foto="/images/anggotaminfo/Fairus Priyogi-251011400516.jpg" />
          <Card nama="Haura Rana Hafizhah Ramadhani" jabatan="Anggota" foto="/images/anggotaminfo/Haura Rana Hafizhah Ramadhani.jpg" />
          <Card nama="Khairunnisa Syafitri" jabatan="Anggota" foto="/images/anggotaminfo/Khairunnisa Syafitri.png" />
          <Card nama="Putra Wijaya" jabatan="Anggota" foto="/images/anggotaminfo/Putra Wijaya -2510400637.jpg" />
          <Card nama="Salsabillah" jabatan="Anggota" foto="/images/anggotaminfo/Salsabillah_241011402651.png" />
          <Card nama="Syaufa Rajani Laela Suminda" jabatan="Anggota" foto="/images/anggotaminfo/Syaufa Rajani Laela Suminda.JPG" />
          <Card nama="Wahyu Ahmad Padillah" jabatan="Anggota" foto="/images/anggotaminfo/Wahyu Ahmad Padillah.png" />
        </div>

        <h3 className="subjudul">Anggota Sosial Budaya</h3>
        <div className="grid">
          <Card nama="Andrea Nova Fitriani" jabatan="Anggota" foto="/images/anggotasosbud/Andrea Nova Fitriani.jpg" />
          <Card nama="Aurellia Dian Hanifah" jabatan="Anggota" foto="/images/anggotasosbud/Aurellia Dian Hanifah.jpg" />
          <Card nama="Dani Taufikurrohman" jabatan="Anggota" foto="/images/anggotasosbud/Dani Taufiqqurahman.jpg" />
          <Card nama="David Charles Duval" jabatan="Anggota" foto="/images/anggotasosbud/David Charles Duval.jpeg" />
          <Card nama="Dini Yusriah" jabatan="Anggota" foto="/images/anggotasosbud/Dini Yusriah.jpg" />
          <Card nama="Hikbal Maulana" jabatan="Anggota" foto="/images/anggotasosbud/Hikbal Maulana.png" />
          <Card nama="Ibnu Salam Yakin" jabatan="Anggota" foto="/images/anggotasosbud/Ibnu Salam Yakin.jpg" />
          <Card nama="Juliana Moza" jabatan="Anggota" foto="/images/anggotasosbud/Juliana Moza.jpg" />
          <Card nama="Rakha Mazaya Haeru" jabatan="Anggota" foto="/images/anggotasosbud/Rakha Mazaya Haeru.jpg" />
          <Card nama="Rianto Nababan" jabatan="Anggota" foto="/images/anggotasosbud/" />
        </div>

        <h3 className="subjudul">Anggota Pengembangan Sumber Daya Manusia</h3>
        <div className="grid">
          <Card nama="Adiwidya Sastrawijaya" jabatan="Anggota" foto="/images/anggotapsdm/Adiwidya Sastrawijaya.jpg" />
          <Card nama="Alfiyah Syafinahtun Nashah" jabatan="Anggota" foto="/images/anggotapsdm/Alfiyah Syafinahtun Nashah.jpeg" />
          <Card nama="Bunga Alya Ramadhan" jabatan="Anggota" foto="/images/anggotapsdm/Bunga Alya Ramadhan.PNG" />
          <Card nama="Didin Nugraha" jabatan="Anggota" foto="/images/anggotapsdm/Didin Nugraha.jpg" />
          <Card nama="Haya Haifa Hilmy" jabatan="Anggota" foto="/images/anggotapsdm/Haya Haifa Hilmy.png" />
          <Card nama="Miftakhul Fal'ah" jabatan="Anggota" foto="/images/anggotapsdm/Miftakhul Fal_ah - 241011400237.png" />
          <Card nama="Oktanaka" jabatan="Anggota" foto="/images/anggotapsdm/Oktanaka.jpg" />
          <Card nama="Sulthan Arya Satwika" jabatan="Anggota" foto="/images/anggotapsdm/Sulthan Arya Satwika.jpg" />
          <Card nama="Tania Syafilla Gifani" jabatan="Anggota" foto="/images/anggotapsdm/Tania Syafilla Gifani.PNG" />
          <Card nama="Trinancy Harinastiti" jabatan="Anggota" foto="/images/anggotapsdm/Trinancy Harinastiti.webp" />
        </div>
      </div>
    </SiteLayout>
  );
}

function Card({ nama, jabatan, foto }) {
  const src = foto && !foto.endsWith("/") && !foto.endsWith("---") ? foto : "/images/logohimtif.png";

  return (
    <div className="card-struktur">
      <img src={src} alt={`Foto ${nama}`} className="struktur-foto" loading="lazy" />
      <h4>{nama}</h4>
      <p>{jabatan}</p>
    </div>
  );
}

