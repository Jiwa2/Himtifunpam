import { useState } from "react";
import { SiteLayout } from "../components/SiteLayout";
import { FaWhatsapp, FaTags, FaShoppingBag } from "react-icons/fa";
import "./Produk.css";

const dummyProducts = [
  {
    id: 1,
    nama: "gantungan Kunci HIMTIF",
    kategori: "aksesoris",
    harga: "Rp 5.000",
    status: "Pre-Order",
    gambar: "/images/logohimtif.png"
  },
  {
    id: 2,
    nama: "Stiker HIMTIF",
    kategori: "aksesoris",
    harga: "Rp 5.000",
    status: "Terlaris",
    gambar: "/images/logohimtif.png"
  },
  {
    id: 3,
    nama: "Lanyard Teknik Informatika",
    kategori: "aksesoris",
    harga: "Rp 15.000",
    status: "Tersedia",
    gambar: "/images/logohimtif.png"
  },
  {
    id: 4,
    nama: "cilok setan",
    kategori: "Food and Beverage",
    harga: "Rp 10.000",
    status: "Tersedia",
    gambar: "/images/logohimtif.png"
  },
];

export default function Produk() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = activeFilter === "all"
    ? dummyProducts
    : dummyProducts.filter(p => p.kategori === activeFilter);

  const handleBeli = (namaProduk) => {
    const pesan = `Halo Admin HIMTIF Store, saya tertarik untuk memesan produk: ${namaProduk}. Apakah slot masih tersedia?`;
    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  return (
    <SiteLayout className="produk-shell" footer={true}>
      <div className="produk-wrapper">
        
        <div className="produk-hero">
          <div className="produk-hero-content">
            <span className="hero-tag">HIMTIF OFFICIAL STORE</span>
            <h1>Gear Up, Code in Style</h1>
            <p>Dukung identitas organisasimu dengan koleksi merchandise eksklusif dan produk digital berkualitas tinggi buatan Himpunan Teknik Informatika.</p>
          </div>
        </div>

        <div className="produk-filter-bar">
          <button className={activeFilter === "all" ? "active" : ""} onClick={() => setActiveFilter("all")}>Semua</button>
          <button className={activeFilter === "apparel" ? "active" : ""} onClick={() => setActiveFilter("apparel")}>Apparel</button>
          <button className={activeFilter === "aksesoris" ? "active" : ""} onClick={() => setActiveFilter("aksesoris")}>Aksesoris</button>
          <button className={activeFilter === "Food and Beverage" ? "active" : ""} onClick={() => setActiveFilter("Food and Beverage")}>Food and Beverage</button>
        </div>

        <div className="produk-grid">
          {filteredProducts.map((produk) => (
            <div key={produk.id} className="produk-card">
              <div className="produk-img-box">
                <span className={`produk-status-tag ${produk.status.toLowerCase().replace(" ", "-")}`}>{produk.status}</span>
                <img src={produk.gambar} alt={produk.nama} />
              </div>
              
              <div className="produk-info">
                <span className="produk-category-label">
                  <FaTags /> {produk.kategori}
                </span>
                <h3>{produk.nama}</h3>
                <div className="produk-footer-action">
                  <span className="produk-price">{produk.harga}</span>
                  <button onClick={() => handleBeli(produk.nama)} className="produk-btn">
                    <FaWhatsapp />
                    <span>Pesan</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SiteLayout>
  );
}