import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
function Career() {
  const [activeTab, setActiveTab] = useState("position");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="permitMenu d-flex">
          <div
            className={
              activeTab === "position" || activeTab === "addPosition"
                ? "active"
                : "notActive"
            }
            onClick={() => handleTabChange("position")}
          >
            {" "}
            Pozisyon
          </div>
          <div
            className={activeTab === "salary" ? "active" : "notActive"}
            onClick={() => handleTabChange("salary")}
          >
            {" "}
            Maaş{" "}
          </div>
          <div
            className={activeTab === "Çalışma" ? "active" : "notActive"}
            onClick={() => handleTabChange("Çalışma")}
          >
            {" "}
            Çalışma Takvimleri
          </div>
        </div>
        {activeTab === "position" && (
          <div className="d-flex infoBtn justify-content-end">
            <button
              style={{ padding: "11px 60px !important" }}
              className={activeTab === "addPosition" ? "active" : "notActive"}
              onClick={() => handleTabChange("addPosition")}
            >
              Pozisyon Ekle
            </button>
          </div>
        )}
        {activeTab === "salary" && (
          <div className="d-flex infoBtn justify-content-end">
            <button
              style={{ padding: "11px 60px !important" }}
              className={activeTab === "addPosition" ? "active" : "notActive"}
              onClick={() => handleTabChange("addPosition")}
            >
              Maaş Ekle
            </button>
          </div>
        )}
        {activeTab === "addPosition" && (
          <div className="d-flex infoBtn justify-content-end">
            <button
              style={{ padding: "11px 60px !important" }}
            >
              Kaydet
            </button>
          </div>
        )}
      </div>
      <div className="careerTable">
        {activeTab === "position" && (
          <table className=" w-100 ">
            <thead className="thead-dark">
              <tr>
                <td scope="col">Başlangıç</td>
                <td scope="col">Bitiş</td>
                <td scope="col">Çalışma Şekli</td>
                <td scope="col">Yönetici</td>
                <td scope="col">Şirket</td>
                <td scope="col">Şube</td>
                <td scope="col">Departman</td>
                <td scope="col">Unvan</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">01.01.2020</td>
                <td>15.06.2021</td>
                <td>Tam Zamanlı</td>
                <td>Ahmet Yılmaz</td>
                <td>ABC Ltd.</td>
                <td>İstanbul</td>
                <td>Finans</td>
                <td>Muhasebeci</td>
                <td> <div className="d-flex settingEmp">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div></td>
              </tr>
            </tbody>
          </table>
        )}
        
        {activeTab === "addPosition" && (
          <div>
            <div className="row">
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">
                    Şirket
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="maritalStatus"
                  >
                    <option>Seç</option>
                    <option value="Bekar">Bekar</option>
                    <option value="Evli">Evli</option>
                    <option value="Belirtilmemiş">Belirtilmemiş</option>
                  </select>
                </div>
              </div>

              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">Şube</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="maritalStatus"
                  >
                    <option>Seç</option>
                    <option value="Bekar">Bekar</option>
                    <option value="Evli">Evli</option>
                    <option value="Belirtilmemiş">Belirtilmemiş</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">
                    Departman
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="maritalStatus"
                  >
                    <option>Seç</option>
                    <option value="Bekar">Bekar</option>
                    <option value="Evli">Evli</option>
                    <option value="Belirtilmemiş">Belirtilmemiş</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">
                    Unvan
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="maritalStatus"
                  >
                    <option>Seç</option>
                    <option value="Bekar">Bekar</option>
                    <option value="Evli">Evli</option>
                    <option value="Belirtilmemiş">Belirtilmemiş</option>
                  </select>
                </div>
              </div>

              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">
                    Yöneticisi
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="maritalStatus"
                  >
                    <option>Seç</option>
                    <option value="Bekar">Bekar</option>
                    <option value="Evli">Evli</option>
                    <option value="Belirtilmemiş">Belirtilmemiş</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">
                    Çalışma Şekli
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="maritalStatus"
                  >
                    <option>Seç</option>
                    <option value="Bekar">Bekar</option>
                    <option value="Evli">Evli</option>
                    <option value="Belirtilmemiş">Belirtilmemiş</option>
                  </select>
                </div>
              </div>
          
            </div>
            <div className="row">


              <div className="col">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">
                    Başlangıç Tarihi
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    className="form-control form-control-solid mb-3 mb-lg-0"
                  />
                </div>
              </div>
              <div className="col">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">
                    Bitiş Tarihi
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    className="form-control form-control-solid mb-3 mb-lg-0"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "salary" && (
          <table className=" w-100 ">
            <thead className="thead-dark">
              <tr>
                <td scope="col">Geçerlilik Başlangıç</td>
                <td scope="col">Tutar</td>
                <td scope="col">Ödeme Düzeni</td>
                <td scope="col">Ek Ödemeler</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">19 Haziran 2018</td>
                <td>2.700,00TL / Aylık</td>
                <td>Brüt</td>
                <td>-</td>
                <td> <div className="d-flex settingEmp">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div></td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Career;
