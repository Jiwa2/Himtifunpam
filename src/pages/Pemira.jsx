import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import "./pemira.css";

const PASLON = [
  {
    id: 1,
    title: "Paslon 1",
    ketua: "Nama Ketua",
    wakil: "Nama Wakil",
    visi: "Visi pasangan calon akan ditampilkan di sini.",
    misi: "Misi pasangan calon akan ditampilkan di sini.",
  },
  {
    id: 2,
    title: "Paslon 2",
    ketua: "Nama Ketua",
    wakil: "Nama Wakil",
    visi: "Visi pasangan calon akan ditampilkan di sini.",
    misi: "Misi pasangan calon akan ditampilkan di sini.",
  },
];

export default function Pemira() {
  return (
    <SiteLayout className="pemira-wrapper">
      <section className="pemira-container">
        <div className="pemira-header">
          <h1>E-Voting PEMIRA HIMTIF</h1>
          <p>Pemira merupakan kegiatan pemungutan suara untuk memilih ketua dan wakil ketua secara demokratis.</p>
        </div>

        <div className="paslon-list">
          {PASLON.map((paslon) => (
            <article className="paslon" key={paslon.id}>
              <div className="paslon-heading">
                <span>{paslon.title}</span>
              </div>

              <div className="paslon-content">
                <div className="paslon-foto">
                  <CandidateCard name={paslon.ketua} role="Ketua" />
                  <CandidateCard name={paslon.wakil} role="Wakil" />
                </div>

                <div className="visi-misi">
                  <section className="box">
                    <h2>Visi</h2>
                    <p>{paslon.visi}</p>
                  </section>

                  <section className="box">
                    <h2>Misi</h2>
                    <p>{paslon.misi}</p>
                  </section>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="cta">
          <p>Gunakan hak pilihmu dan ikut berpartisipasi dalam Pemira.</p>
          <Link to="/Formpemira" className="cta-btn">Tentukan Pilihanmu Sekarang</Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function CandidateCard({ name, role }) {
  return (
    <div className="card-foto">
      <img src="/images/logohimtif.png" alt={`Foto ${role}`} loading="lazy" />
      <strong>{name}</strong>
      <span>{role}</span>
    </div>
  );
}
