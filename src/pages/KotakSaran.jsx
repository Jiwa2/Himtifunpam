import { useState } from "react";
import { SiteLayout } from "../components/SiteLayout";
import { FaUser, FaEnvelope, FaPen, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import "./KotakSaran.css";

export default function KotakSaran() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Aspirasi Anda berhasil dikirim!");
    setFormData({ nama: "", email: "", pesan: "" });
  };

  return (
    <SiteLayout className="saran-shell" footer={true}>
      <div className="saran-wrapper">
        <div className="saran-banner">
          <div className="saran-banner-inner">
            <img src="/images/logohimtif.png" alt="Logo HIMTIF" className="saran-logo" />
            <div className="saran-banner-text">
              <h1>KOTAK SARAN HIMTIF</h1>
              <div className="saran-line-dots"></div>
              <p>Punya kritik, saran, atau aspirasi untuk HIMTIF Universitas Pamulang? Sampaikan kepada kami agar HIMTIF menjadi lebih baik lagi ke depannya.</p>
              <div className="saran-badge">
                <FaCheckCircle />
                <span>Identitas Anda akan kami jaga kerahasiaannya.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="saran-content">
          <div className="saran-left">
            <div className="saran-left-title">
              <FaCheckCircle className="check-icon" />
              <h2>Sampaikan Aspirasi Anda</h2>
            </div>
            <p>Tuliskan kritik, saran, atau ide Anda untuk kemajuan HIMTIF. Setiap masukan yang Anda berikan sangat berarti bagi kami.</p>
          </div>

          <div className="saran-right">
            <form onSubmit={handleSubmit} className="saran-form">
              <div className="saran-field">
                <label>Nama Lengkap</label>
                <div className="saran-input-wrapper">
                  <FaUser className="input-icon" />
                  <input type="text" name="nama" value={formData.nama} onChange={handleChange} placeholder="Masukkan nama Anda" required />
                </div>
              </div>

              <div className="saran-field">
                <label>Email Aktif</label>
                <div className="saran-input-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Masukkan email Anda" required />
                </div>
              </div>

              <div className="saran-field">
                <label>Pesan / Aspirasi</label>
                <div className="saran-input-wrapper textarea-wrapper">
                  <FaPen className="input-icon textarea-icon" />
                  <textarea name="pesan" value={formData.pesan} onChange={handleChange} placeholder="Tuliskan kritik, saran, atau ide Anda di sini..." rows="4" required></textarea>
                </div>
              </div>

              <button type="submit" className="saran-submit-btn">
                <FaPaperPlane />
                <span>Kirim Aspirasi Anda</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}