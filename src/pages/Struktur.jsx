import { SiteLayout } from "../components/SiteLayout";
import "./struktur.css";

export default function Struktur() {
  return (
    <SiteLayout className="struktur-wrapper">
      <div className="struktur-container">
        <h1 className="judul">STRUKTUR ORGANISASI HIMTIF 2025/2026</h1>
        <div className="bph-grid">
          <Card nama="Saldy Saputra" jabatan="Ketua Umum" foto="/images/Saldy Saputra .webp" />
          <Card nama="Fat Khudin" jabatan="Wakil Ketua Umum" foto="/images/himtif/Fat khudin.webp" />
        </div>
        <h2 className="judul">BADAN PENGURUS HARIAN</h2>
        <div className="bph-grid">
          <Card nama="Nurlayla Fitri" jabatan="Sekretaris Umum 1" foto="/images/himtif/Nurlayla fitri.webp" />
          <Card nama="Aulia Putri" jabatan="Sekretaris Umum 2" foto="/images/himtif/Aulia Putri .webp" />
          <Card nama="Medina Fikanti" jabatan="Bendahara Umum 1" foto="/images/himtif/Medina Fikanti.webp" />
          <Card nama="Amelia Zahwa H.S" jabatan="Bendahara Umum 2" foto="/images/himtif/Amelia Zahwa Habilla Syifa.webp" />
        </div>

        <h2 className="judul">KEPENGURUSAN</h2>

        <h3 className="subjudul">Department Riset dan Teknologi</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Muhammad Jiwa Islamutidar" jabatan="Kepala Department Ristek" foto="/images/ristek/Muhammad Jiwa Islamutidar.webp" />
            <Card nama="Ahmad Renaldy" jabatan="Sekretaris Department" foto="/images/ristek/Ahmad Renaldy.webp" />
                        <Card nama="Abu Ziyad Al Katani" jabatan="Staff" foto="/images/ristek/Abu Ziyad Al Katani.webp" />
            <Card nama="Mohammad Arief Ardiansyah" jabatan="Staff" foto="/images/ristek/Mohammad Arief Ardiansyah.webp" />
            <Card nama="Cintya Laura Melagro" jabatan="Staff" foto="/images/ristek/Cintya Laura Melagro.webp" />
          </div>
        </div>

        <h3 className="subjudul">Department Humas</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Arkananta Emier Pradipta" jabatan="Kepala Department Humas" foto="/images/humas/ARKANANTA EMIER PRADIPTA.webp" />
            <Card nama="Zaydan Azfar" jabatan="Sekretaris Department" foto="/images/humas/ZAYDAN AZFAR.webp" />
            <Card nama="Muhammad Rafli Firdaus" jabatan="Staff" foto="/images/humas/MUHAMMAD RAFLI FIRDAUS.webp" />
            <Card nama="Paris Nurfadhillah" jabatan="Staff" foto="/images/humas/PARIS NURFADHILLAH.webp" />
            <Card nama="Raven Firgiasyah" jabatan="Staff" foto="/images/humas/RAVEN FIRGIASYAH.webp" />
            <Card nama="Sihabudin Firmansyah" jabatan="Staff" foto="/images/humas/SIHABUDIN FIRMANSYAH.webp" />
          </div>
          <div className="pengurus-row">
          </div>
        </div>

        <h3 className="subjudul">Department Media Informasi</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Bagas Anwar Meiqadr" jabatan="Kepala Department Minfo" foto="/images/minfo/BAGAS ANWAR MEIQADR.webp" />
            <Card nama="Lidya Septia Nita Darmawati" jabatan="Sekretaris Department" foto="/images/minfo/LIDYA SEPTIA NITA DARMAWATI.webp" />
            <Card nama="Ika Auliya Rusyadah" jabatan="Staff" foto="/images/minfo/IKA AULIYA RUSYADAH.webp" />
            <Card nama="Dita Adelia Putri" jabatan="Staff" foto="/images/minfo/DITA ADELIA PUTRI.webp" />
            <Card nama="Olivia Ramadhani" jabatan="Staff" foto="/images/minfo/OLIVIA RAMADHANI.webp" />
            <Card nama="Suci Oktaviani" jabatan="Staff" foto="/images/minfo/SUCI OKTAVIANI.webp" />
          </div>
        </div>

        <h3 className="subjudul">Department Sosial Budaya</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Farid Mardan Aziz" jabatan="Kepala Department Sosbud" foto="/images/sosbud/Farid Mardan Aziz.webp" />
            <Card nama="Aldi Athalla Putra" jabatan="Sekretaris Department" foto="/images/sosbud/Aldi Athalla Putra.webp" />
            <Card nama="Deden Jamaludin" jabatan="Staff" foto="/images/sosbud/26.webp" />
            <Card nama="Amirul Mukminin" jabatan="Staff" foto="/images/sosbud/Amirul Mukminin.webp" />
            <Card nama="Muhammad Edward" jabatan="Staff" foto="/images/sosbud/Muhamad Edward.webp" />
            <Card nama="Ugem Zilullah" jabatan="Staff" foto="/images/sosbud/Ugem Zilullah.webp" />
            <Card nama="Arinta Salsabilla" jabatan="Staff" foto="/images/sosbud/Arinta Salsabilla.webp" />
          </div>
        </div>

        <h3 className="subjudul">Department Pengembangan Sumber Daya Manusia</h3>
        <div className="pengurus-grid">
          <div className="pengurus-row">
            <Card nama="Rifky Ramadhan" jabatan="Kepala Department PSDM" foto="/images/PSDM/Rifky Ramadhan Putra Permana.webp" />
            <Card nama="Bilqis Nilam Cahya" jabatan="Sekretaris Department" foto="/images/PSDM/Bilqis Nilam Cahya.webp" />
            <Card nama="Niko Putra Yusanto" jabatan="Staff" foto="/images/PSDM/Niko Putra Yusanto.webp" />
            <Card nama="Bening Fajriatul Hawa" jabatan="Staff" foto="/images/PSDM/Bening Fajriatul Hawa.webp" />
          </div>
        </div>

        <h2 className="judul">ANGGOTA</h2>

        <h3 className="subjudul">Anggota Riset dan Teknologi</h3>
        <div className="grid">
          <Card nama="Afzal Putra Hariyudha" jabatan="Anggota" foto="/images/anggotaristek/Afzal Putra Hariyudha.webp" />
          <Card nama="Ahmad Layyinul Labib" jabatan="Anggota" foto="/images/anggotaristek/Ahmad Layyinul Labib.webp" />
          <Card nama="Danu Ngesti Prasetyo" jabatan="Anggota" foto="/images/anggotaristek/Danu Ngesti Prasetyo_.webp" />
          <Card nama="Farel Adya Ridhafa" jabatan="Anggota" foto="/images/anggotaristek/Farel Adya Ridhafa.webp" />
          <Card nama="Ibnu Syuhada Suffera" jabatan="Anggota" foto="/images/anggotaristek/Ibnu Syuhada.webp" />
          <Card nama="Haninda Coni Olivia" jabatan="Anggota" foto="/images/anggotaristek/Haninda Coni Olivia.webp" />
          <Card nama="Ibrahim Surya Kusuma" jabatan="Anggota" foto="/images/anggotaristek/Ibrahim Surya Kusuma.webp" />
          <Card nama="Michelle Aniela Wijaya" jabatan="Anggota" foto="/images/anggotaristek/Michelle Aniela Wijaya.webp" />
          <Card nama="Ni'matul Jannah" jabatan="Anggota" foto="/images/anggotaristek/Ni_ma Tuljannah.webp" />
          <Card nama="Rahmat Syafa Firdaus" jabatan="Anggota" foto="/images/anggotaristek/" />
          <Card nama="Rifqi Atha Ramadhan" jabatan="Anggota" foto="/images/anggotaristek/Rifqi Atha Ramadhan_.webp" />
          <Card nama="Rizky Revaldo" jabatan="Anggota" foto="/images/anggotaristek/Rizky Revaldo.webp" />
          <Card nama="Rizky Komarullail" jabatan="Anggota" foto="/images/anggotaristek/Rizky Komarullail.webp" />
        </div>

        <h3 className="subjudul">Anggota Hubungan Masyarakat</h3>
        <div className="grid">
          <Card nama="Angel Ajeng Gita Pertiwi" jabatan="Anggota" foto="/images/humas/Angel Ajeng Gita Pertiwi.webp" />
          <Card nama="Dimas Faiz Afzal" jabatan="Anggota" foto="/images/humas/Dimas Faiz Afzal.webp" />
          <Card nama="Ilham Jaya" jabatan="Anggota" foto="/images/humas/---" />
          <Card nama="Laras Ayu Setyorini" jabatan="Anggota" foto="/images/humas/Laras Ayu Setyorini.webp" />
          <Card nama="Lingga Arditama" jabatan="Anggota" foto="/images/humas/---" />
          <Card nama="Mochammad Ridwan Prasetyo" jabatan="Anggota" foto="/images/humas/Mochammad Ridwan Prasetyo.webp" />
          <Card nama="Muhamad Perdiansyah" jabatan="Anggota" foto="/images/humas/Muhammad Perdiansyah.webp" />
          <Card nama="Rifki Dimas Panuju" jabatan="Anggota" foto="/images/humas/Rifki Dimas Panuju.webp" />
          <Card nama="Sela Nabila" jabatan="Anggota" foto="/images/humas/Sela Nabila.webp" />
          <Card nama="Zaid Naufan" jabatan="Anggota" foto="/images/humas/zaid naufan.webp" />
          <Card nama="Zaydan Afif Fadhillah" jabatan="Anggota" foto="/images/humas/Zaydan Afif Fadhillah.webp" />
        </div>

        <h3 className="subjudul">Anggota Media Informasi</h3>
        <div className="grid">
          <Card nama="Aisyah Rahmatussolehah" jabatan="Anggota" foto="/images/anggotaminfo/Aisyah Rahmatussolehah.webp" />
          <Card nama="Akhmad Syahrul Fauzan" jabatan="Anggota" foto="/images/anggotaminfo/Akhmad Syahrul Fauzan.webp" />
          <Card nama="Andini Nur Agustina Basuki" jabatan="Anggota" foto="/images/anggotaminfo/Andini Nur Agustina Basuki.webp" />
          <Card nama="Anggela Merici Moruk" jabatan="Anggota" foto="/images/anggotaminfo/Anggela Merici Moruk.webp" />
          <Card nama="Fairus Priyogi" jabatan="Anggota" foto="/images/anggotaminfo/Fairus Priyogi-251011400516.webp" />
          <Card nama="Haura Rana Hafizhah Ramadhani" jabatan="Anggota" foto="/images/anggotaminfo/Haura Rana Hafizhah Ramadhani.webp" />
          <Card nama="Khairunnisa Syafitri" jabatan="Anggota" foto="/images/anggotaminfo/Khairunnisa Syafitri.webp" />
          <Card nama="Putra Wijaya" jabatan="Anggota" foto="/images/anggotaminfo/Putra Wijaya -2510400637.webp" />
          <Card nama="Salsabillah" jabatan="Anggota" foto="/images/anggotaminfo/Salsabillah_241011402651.webp" />
          <Card nama="Syaufa Rajani Laela Suminda" jabatan="Anggota" foto="/images/anggotaminfo/Syaufa Rajani Laela Suminda.webp" />
          <Card nama="Wahyu Ahmad Padillah" jabatan="Anggota" foto="/images/anggotaminfo/Wahyu Ahmad Padillah.webp" />
        </div>

        <h3 className="subjudul">Anggota Sosial Budaya</h3>
        <div className="grid">
          <Card nama="Andrea Nova Fitriani" jabatan="Anggota" foto="/images/anggotasosbud/Andrea Nova Fitriani.webp" />
          <Card nama="Aurellia Dian Hanifah" jabatan="Anggota" foto="/images/anggotasosbud/Aurellia Dian Hanifah.webp" />
          <Card nama="Dani Taufikurrohman" jabatan="Anggota" foto="/images/anggotasosbud/Dani Taufiqqurahman.webp" />
          <Card nama="David Charles Duval" jabatan="Anggota" foto="/images/anggotasosbud/David Charles Duval.webp" />
          <Card nama="Dini Yusriah" jabatan="Anggota" foto="/images/anggotasosbud/Dini Yusriah.webp" />
          <Card nama="Hikbal Maulana" jabatan="Anggota" foto="/images/anggotasosbud/Hikbal Maulana.webp" />
          <Card nama="Ibnu Salam Yakin" jabatan="Anggota" foto="/images/anggotasosbud/Ibnu Salam Yakin.webp" />
          <Card nama="Juliana Moza" jabatan="Anggota" foto="/images/anggotasosbud/Juliana Moza.webp" />
          <Card nama="Rakha Mazaya Haeru" jabatan="Anggota" foto="/images/anggotasosbud/Rakha Mazaya Haeru.webp" />
          <Card nama="Rianto Nababan" jabatan="Anggota" foto="/images/anggotasosbud/" />
        </div>

        <h3 className="subjudul">Anggota Pengembangan Sumber Daya Manusia</h3>
        <div className="grid">
          <Card nama="Adiwidya Sastrawijaya" jabatan="Anggota" foto="/images/anggotapsdm/Adiwidya Sastrawijaya.webp" />
          <Card nama="Alfiyah Syafinahtun Nashah" jabatan="Anggota" foto="/images/anggotapsdm/Alfiyah Syafinahtun Nashah.webp" />
          <Card nama="Bunga Alya Ramadhan" jabatan="Anggota" foto="/images/anggotapsdm/Bunga Alya Ramadhan.webp" />
          <Card nama="Didin Nugraha" jabatan="Anggota" foto="/images/anggotapsdm/Didin Nugraha.webp" />
          <Card nama="Haya Haifa Hilmy" jabatan="Anggota" foto="/images/anggotapsdm/Haya Haifa Hilmy.webp" />
          <Card nama="Miftakhul Fal'ah" jabatan="Anggota" foto="/images/anggotapsdm/Miftakhul Fal_ah - 241011400237.webp" />
          <Card nama="Oktanaka" jabatan="Anggota" foto="/images/anggotapsdm/Oktanaka.webp" />
          <Card nama="Sulthan Arya Satwika" jabatan="Anggota" foto="/images/anggotapsdm/Sulthan Arya Satwika.webp" />
          <Card nama="Tania Syafilla Gifani" jabatan="Anggota" foto="/images/anggotapsdm/Tania Syafilla Gifani.webp" />
          <Card nama="Trinancy Harinastiti" jabatan="Anggota" foto="/images/anggotapsdm/Trinancy Harinastiti.webp" />
        </div>
      </div>
    </SiteLayout>
  );
}

function Card({ nama, jabatan, foto }) {
  const src = foto && !foto.endsWith("/") && !foto.endsWith("---") ? foto : "/images/logohimtif.webp";

  return (
    <div className="card-struktur">
      <img src={src} alt={`Foto ${nama}`} className="struktur-foto" loading="lazy" />
      <h4>{nama}</h4>
      <p>{jabatan}</p>
    </div>
  );
}

