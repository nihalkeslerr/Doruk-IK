import React, { useState } from "react";

function GeneralInfo() {
  const [selected, setSelected] = useState("seç");
  return (
    <div>
      <div>
        <div>
          <div className="row">
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">İsim</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  placeholder="İsim"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Soyisim
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  placeholder="Soyisim"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  placeholder="ornek@gmail.com"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Telefon
                </label>
                <input
                  type="number"
                  name="phoneNumber"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  placeholder="(5--) --- -- --"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">Unvan</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={selected}
                  name="title"
                >
                  <option>Seç</option>
                  <option value="Front-End Geliştirici">
                    Front-End Geliştirici
                  </option>
                  <option value="PHP Geliştirici">PHP Geliştirici</option>
                  <option value="Yazılım Müdürü">Yazılım Müdürü</option>
                  <option value="Şirket Avukatı">Şirket Avukatı</option>
                  <option value="İnsan Kaynakları çalışanı">
                    İnsan Kaynakları çalışanı
                  </option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Departman
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={selected}
                  name="departman"
                >
                  <option>Seç</option>
                  <option value="Yazılım">Yazılım</option>
                  <option value="Satış">Satış</option>
                  <option value="Hukuk">Hukuk</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Çalışma Şekli
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={selected}
                  name="jobType"
                >
                  <option>Seç</option>
                  <option value="Tam zamanlı">Tam zamanlı</option>
                  <option value="Yarı Zamanlı">Yarı Zamanlı</option>
                  <option value="Stajyer">Stajyer</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Çalışan Tipi
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={selected}
                  name="employeeType"
                >
                  <option>Seç</option>
                  <option value="Danışman">Danışman</option>
                  <option value="Stajyer">Stajyer</option>
                  <option value="Normal">Normal</option>
                  <option value="Sözleşmeli">Sözleşmeli</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  İşe Başlama Tarihi
                </label>
                <input
                  type="date"
                  name="dateOfStart"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  placeholder="ornek@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
