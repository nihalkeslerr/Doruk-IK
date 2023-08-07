import React from "react";

function AddEmployees() {
  return (
    <div>
      <div className="container-xxl" id="kt_content_container">
        <div className="card card-flush">
          <div>
            <div>
              <h1>Genel Bilgiler</h1>
              <button>Kaydet</button>
            </div>
            <div className="add_Content">
              <form action="">
                <label htmlFor="">Ad</label>
                <input type="text" />
                <label htmlFor="">Soyad</label>
                <input type="text" />
                <label htmlFor="">E-posta (iş)</label>
                <input type="text" />
                <label htmlFor="">E-posta (Kişisel)</label>
                <input type="text" />
                <label htmlFor="">Telefon (İş)</label>
                <input type="text" />
                <label htmlFor="">Telefon (Kişisel)</label>
                <input type="text" />
                <label htmlFor="">İşe Başlama Tarihi</label>
                <input type="text" />
                <label htmlFor="">Erişim Türü</label>
                <input type="text" />
                <label htmlFor="">Sözleşme Türü</label>
                <input type="text" />
                <label htmlFor="">Sözleşme Bitiş Tarihi</label>
                <input type="text" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployees;
