import { useState } from "react";
import { Link } from "react-router-dom";
import "./formpemira.css";

export default function Formpemira() {
  return (
    <div className="pemira-wrapper">
      <div className="pemira-card">

        {/* HEADER */}
        <div className="pemira-header">
          <img src="/images/logohimtif.png" className="logo" alt="logo" />
        </div>

        {/* TITLE */}
        <h2 className="title">FORM PEMIRA HIMTIF</h2>
        <p className="desc">
          Silakan isi data diri dan pilih pasangan calon.
        </p>

        {/* FORM */}
        <form className="form">

          <div className="input-group">
            <label>Nama</label>
            <input type="text" placeholder="Masukkan nama" />
          </div>

          <div className="input-group">
            <label>NIM</label>
            <input type="text" placeholder="Masukkan NIM" />
          </div>

          <div className="input-group">
            <label>Kelas</label>
            <input type="text" placeholder="Masukkan kelas" />
          </div>

          {/* PILIHAN */}
          <h3 className="pilihan-title">Pilih Paslon</h3>

          <div className="paslon-container">

            {/* PASLON 1 */}
            <label className="paslon-card">
              <input type="radio" name="paslon" value="1" hidden />

              <div className="paslon-header">
                <span>Paslon 1</span>
              </div>

              <div className="paslon-content">
                <div className="calon">
                  <img src="/images/user.png" alt="" className="foto" />
                  <p>Ketua</p>
                </div>

                <div className="calon">
                  <img src="/images/user.png" alt="" className="foto" />
                  <p>Wakil</p>
                </div>
              </div>
            </label>

            {/* PASLON 2 */}
            <label className="paslon-card">
              <input type="radio" name="paslon" value="2" hidden />

              <div className="paslon-header">
                <span>Paslon 2</span>
              </div>

              <div className="paslon-content">
                <div className="calon">
                  <img src="/images/user.png" alt="" className="foto" />
                  <p>Ketua</p>
                </div>

                <div className="calon">
                  <img src="/images/user.png" alt="" className="foto" />
                  <p>Wakil</p>
                </div>
              </div>
            </label>

          </div>

          {/* BUTTON */}
          <button type="submit" className="submit-btn">
            Kirim Pilihan
          </button>

        </form>

      </div>
    </div>
  );
}