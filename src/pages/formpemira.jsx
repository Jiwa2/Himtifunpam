import { useState } from "react";
import { SiteLayout } from "../components/SiteLayout";
import { supabase } from "../supabaseClient";
import "./formpemira.css";

const initialFormData = {
  nama: "",
  nim: "",
  kelas: "",
  jabatan: "",
  paslon: "",
};

export default function Formpemira() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    setMessage(null);
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.nama || !formData.nim || !formData.kelas || !formData.jabatan || !formData.paslon) {
      setMessage({ type: "error", text: "Lengkapi data diri dan pilih salah satu paslon terlebih dahulu." });
      return;
    }

    setLoading(true);
    setMessage(null);

    const { error } = await supabase.from("votes").insert([
      {
        nama: formData.nama,
        nim: formData.nim,
        kode_kelas: formData.kelas,
        jabatan: formData.jabatan,
        paslon: formData.paslon,
      },
    ]);

    setLoading(false);

    if (error) {
      setMessage({
        type: "error",
        text: error.code === "23505"
          ? "NIM atau kelas ini sudah terdaftar untuk memberikan suara."
          : `Terjadi kesalahan sistem: ${error.message}`,
      });
      return;
    }

    setMessage({ type: "success", text: `Terima kasih ${formData.nama}, suara Anda berhasil dikirim.` });
    setFormData(initialFormData);
  };

  return (
    <SiteLayout className="formpemira-wrapper">
      <section className="formpemira-container">
        <div className="formpemira-card">
          <div className="formpemira-header">
            <img src="/images/logohimtif.png" className="logo" alt="Logo HIMTIF" />
          </div>

          <h1 className="title">Form PEMIRA HIMTIF</h1>
          <p className="desc">Silakan isi data diri dan pilih pasangan calon.</p>

          {message && (
            <div className={`form-message ${message.type}`} role="status">
              {message.text}
            </div>
          )}

          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="nama">Nama</label>
              <input id="nama" type="text" name="nama" value={formData.nama} onChange={handleChange} placeholder="Masukkan nama" required />
            </div>

            <div className="input-group">
              <label htmlFor="nim">NIM</label>
              <input id="nim" type="text" name="nim" value={formData.nim} onChange={handleChange} placeholder="Masukkan NIM" required />
            </div>

            <div className="input-group">
              <label htmlFor="kelas">Kelas</label>
              <input id="kelas" type="text" name="kelas" value={formData.kelas} onChange={handleChange} placeholder="Contoh: 06TPLP001" required />
            </div>

            <div className="input-group">
              <label htmlFor="jabatan">Jabatan</label>
              <select id="jabatan" name="jabatan" value={formData.jabatan} onChange={handleChange} required>
                <option value="" disabled>Pilih jabatan</option>
                <option value="Ketua Kelas">Ketua Kelas</option>
                <option value="Wakil Kelas">Wakil Kelas</option>
              </select>
            </div>

            <h2 className="pilihan-title">Pilih Paslon</h2>

            <div className="paslon-container">
              <PaslonOption id="1" checked={formData.paslon === "1"} onChange={handleChange} />
              <PaslonOption id="2" checked={formData.paslon === "2"} onChange={handleChange} />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Mengirim Pilihan..." : "Kirim Pilihan"}
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function PaslonOption({ id, checked, onChange }) {
  return (
    <label className="paslon-card">
      <input type="radio" name="paslon" value={id} checked={checked} onChange={onChange} />
      <div className="paslon-header">Paslon {id}</div>
      <div className="paslon-form-content">
        <div className="calon">
          <img src="/images/logohimtif.png" alt={`Ketua paslon ${id}`} className="foto" loading="lazy" />
          <p>Ketua</p>
        </div>
        <div className="calon">
          <img src="/images/logohimtif.png" alt={`Wakil paslon ${id}`} className="foto" loading="lazy" />
          <p>Wakil</p>
        </div>
      </div>
    </label>
  );
}
