import { useState } from "react";
import { SiteLayout } from "../components/SiteLayout";
import "./department.css";

export default function Department() {
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
      kadep: "Riset Dan Teknologi",
      desc: "Departemen Ristek bertanggung jawab dalam pengembangan teknologi dan kebutuhan digital organisasi HIMTIF, termasuk pembuatan serta pengelolaan website. Selain itu, Ristek juga berperan dalam mengelola berbagai hal yang berkaitan dengan inovasi teknologi dan hal-hal yang relevan dengan program studi Teknik Informatika, agar mendukung aktivitas organisasi menjadi lebih efektif dan modern..",
      prokers: [
        { id: "ristek-p1", name: "Collab Himtif x HMTI UMJ", tgl: "-", desc: "-", status: "(Selesai)" },
        { id: "ristek-p2", name: "Hackaton", tgl: "13 - 18 Juni 2026", desc: "-", status: "(Akan Datang)" },
        { id: "ristek-p3", name: "HIMFEST", tgl: "-", desc: "-", status: "(Akan Datang)" },
      ],
    },
    {
      id: "humas",
      name: "Department HUMAS",
      kadep: "Hubungan Masyarakat",
      desc: "Departemen Humas berperan sebagai penghubung antara HIMTIF dengan pihak luar. Humas menangani surat-menyurat, koordinasi kerja sama, serta komunikasi dengan organisasi atau pihak lain yang berkaitan dengan kegiatan HIMTIF. Departemen ini juga membantu memastikan hubungan eksternal organisasi tetap berjalan baik dan profesional",
      prokers: [
        { id: "humas-p1", name: "Audit HUMAS", tgl: "2 Maret 2026", desc: "-", status: "berjalan" },
        { id: "humas-p2", name: "Nama Proker Humas 2", tgl: "-", desc: "-", status: "-" },
        { id: "humas-p3", name: "Nama Proker Humas 3", tgl: "-", desc: "-", status: "-" },
        { id: "humas-p4", name: "Nama Proker Humas 4", tgl: "-", desc: "-", status: "-" },
        { id: "humas-p5", name: "Nama Proker Humas 5", tgl: "-", desc: "-", status: "-" },
      ],
    },
    {
      id: "minfo",
      name: "Department MINFO",
      kadep: "Media Informasi",
      desc: "Departemen Minfo bertugas mengelola media sosial HIMTIF, membuat desain, serta menyusun konten publikasi. Seluruh tampilan dan informasi yang dibagikan melalui media sosial HIMTIF umumnya merupakan hasil kerja departemen ini. Minfo juga berperan dalam dokumentasi kegiatan agar setiap momen penting organisasi dapat tersampaikan dengan baik.",
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
      kadep: "Sosial Budaya Connect",
      desc: "Departemen Sosbud Connect berfokus pada kegiatan sosial dan kepedulian terhadap lingkungan sekitar. Departemen ini menangani program seperti open donasi, kegiatan sosial, dan bentuk aksi kepedulian lainnya. Sosbud Connect juga pernah terlibat dalam penjualan lanyard dan kegiatan pendukung lain yang bertujuan mempererat kebersamaan serta memberikan manfaat bagi banyak pihak.",
      prokers: [
        { id: "sosbud-p1", name: "Buka Bersama (BUKBER)", tgl: "5 Maret 2026", desc: "Buka bersama HIMTIF yang bertujuan untuk mempererat tali silaturahmi dan menumbuhkan rasa kekeluargaan yang kuat antara seluruh anggota dan pengurus HIMTIF", status: "Selesai" },
        { id: "sosbud-p2", name: "Himtif Berbagi (HIMBER)", tgl: "13 Maret 2026", desc: "Program aksi sosial kemasyarakatan yang dirancang untuk meningkatkan rasa kepedulian, empati, dan kotribusi nyata mahasiswa terhadap masyarakat atau sosial", status: "Selesai" },
        { id: "sosbud-p3", name: "Himtif Production (HIMRPO)", tgl: "Setiap hari", desc: "Penjualan merchandise HIMTIF, seperti lanyard, stiker, pernak pernik dan makanan", status: "Berjalan" },
        { id: "sosbud-p4", name: "Dana Usaha (DANUSAN)", tgl: "Setiap Event", desc: "Kegiatan pencarian dana melalui penjualan produk atau makanan di event kampus, seperti PKKMB, Seminar, DLL", status: "Berjalan" },
        { id: "sosbud-p5", name: "Himtif Bussines Corner (HBC)", tgl: "September 2026", desc: "Program yang berfokus pada wadah edukasi dan juga berfungsi sebagai tempat pembelajaran bisnis bagi mahasiswa", status: "Akan Datang" },
        { id: "sosbud-p6", name: "Donor Darah", tgl: "8 Oktober 2026", desc: "Aksi kemanusiaan kerja sama dengan PMI untuk membantu memenuhi stok kebutuhan darah dan meningkatkan kesadaran kesehatan mahasiswa serta masyarakat", status: "Akan Datang" }
      ],
    },
    {
      id: "psdm",
      name: "Department PSDM",
      kadep: "Pengembangan Sumber Daya Manusia",
      desc: "Departemen PSDM bertugas mengelola dan memperhatikan perkembangan internal anggota HIMTIF. PSDM berperan dalam mengasah minat dan bakat internal HIMTIF, memantau keaktifan anggota dan pengurus, menjaga kenyamanan serta kekompakan dalam organisasi, dan menjadi tempat bagi anggota untuk menyampaikan keluh kesah atau masukan. Departemen ini berperan penting dalam menjaga hubungan internal agar tetap harmonis dan kondusif.",
      prokers: [
        { id: "psdm-p1", name: "HIMTIF Aktif belajar (AJAR)", tgl: "1 kali dalam sebulan", desc: "Program untuk mewadahi anggota sebegai pembekalan selama menjadi anggota HIMTIF, kegiatan ini dirancang untuk memberikan pemahaman kepada anggota tentang peran mereka di HIMTIF", status: "berjalan" },
        { id: "psdm-p2", name: "HIMTIF Aktif Bersinergi (ASRI)", tgl: "1 Kali dalam sebulan", desc: "Program ini dibuat untuk memasukkan kegiatan olahraga ke dalam lingkungan organisasi, sehingga mendorong gaya hidup sehat dan mempererat persaudaraan dalam suasana yang ramah namun kompetitif", status: "berjalan" },
        { id: "psdm-p3", name: "Malam Keakraban (Makrab)", tgl: "24 - 26 April 2026", desc: "Kegiatan ini diselenggarakan dengan tujuan utama untuk membangun solidaritas, chemistry, dan rasa kekeluargaan yang erat antar anggota", status: "Selesai" },
        { id: "psdm-p4", name: "Pemilihan Raya (PEMIRA)", tgl: "Akan Datang", desc: "Kegiatan ini diselenggarakan sebagai sarana demokrasi di lingkungan HIMTIF dalam rangka pemilihan calon ketua dan wakil ketua umum untuk periode kepengurusan selanjutnya", status: "Akan Datang" },
        { id: "psdm-p5", name: "Open Recruitment (OPREC)", tgl: "Akan Datang", desc: "Kegiatan yang diselenggarakan untuk mencari orang yang berbakat yang dapat membawa ide baru dan bekerja sama dengan baik untuk memajukan organisasi", status: "Akan Datang" },
        { id: "psdm-p6", name: "Latihan Dasar Kepemimpinan Organisasi (LDKO)", tgl: "Akan Datang", desc: "Kegiatan ini dibuat untuk mewadahi dan melatih calon pemimpin yang profesional dan berintegritas, kegiatan ini dirancang untuk meningkatkan kemampuan kepemimpinan peserta", status: "Akan Datang" },
        { id: "psdm-p7", name: "Konsultasi", tgl: "Setiap Hari", desc: "Kegiatan ini merupakan komitmen untuk terus memperbaiki komunikasi dan kerja sama antar anggota, denngan program ini setiap anggota dapat menyampaikan harapan, masalah dan ide mereka", status: "Berjalan" },        
      ],
    },
  ];

  return (
    <SiteLayout className="department-wrapper">
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
    </SiteLayout>
  );
}


