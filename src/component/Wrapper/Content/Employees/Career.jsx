import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { GenerealContext } from "../../../../Context/GeneralContext";
import axios from "axios";
function Career() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(); //Tek bir kullanıcı bilgisini depolamak için

  const fetchEmployee = () => {
    //İd bilgisine göre çalışan bilgisi çekme fonksiyonu
    setEmployee();
    axios
      .get(`http://localhost:3004/employees/${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("response:", response);
          setEmployee(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [position, setposition] = useState();

  const fetchPositionInfo = () => {
    //İd bilgisine göre çalışan bilgisi çekme fonksiyonu
    setEmployee();
    axios
      .get(`http://localhost:3004/position?employeeID=${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("position için response geliyor:", response);
          setposition(response.data);
          console.log("position: ", position);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log("position: ", position);

  useEffect(() => {
    if (id) {
      fetchEmployee(id);
      fetchPositionInfo(id);
    }
  }, [id]);

  const [activeTab, setActiveTab] = useState("position");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const options = {
    company: ["istanbul", "bursa", "ankara", "izmir", "antalya"],
    department: ["op1", "op2", "op3"],
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
            <button style={{ padding: "11px 60px !important" }}>Kaydet</button>
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
              {position && position.map((position) => (
                <tr>
                  <td scope="row">{position.dateOfStart}</td>
                  <td>{position.dateOfFinish}</td>
                  <td>{position.jobType}</td>
                  <td>{position.manager}</td>
                  <td>{position.company}</td>
                  <td>{position.branch}</td>
                  <td>{position.department}</td>
                  <td>{position.title}</td>
                  <td>
                    <div className="d-flex settingEmp">
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === "addPosition" && (
          <div>
            <div className="row">
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">Şirket</label>
                  <Select
                    className=""
                    classNamePrefix="select"
                    defaultValue={options.company[0]}
                    name="compony"
                    options={options.company.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </div>
              </div>

              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">Şube</label>
                  <Select
                    className=""
                    classNamePrefix="select"
                    defaultValue={options.department[0]}
                    name="compony"
                    options={options.department.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">Departman</label>
                  <Select
                    className=""
                    classNamePrefix="select"
                    defaultValue={options.department[0]}
                    name="compony"
                    options={options.department.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">Unvan</label>
                  <Select
                    className=""
                    classNamePrefix="select"
                    defaultValue={options.department[0]}
                    name="compony"
                    options={options.department.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </div>
              </div>

              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">Yöneticisi</label>
                  <Select
                    className=""
                    classNamePrefix="select"
                    defaultValue={options.department[0]}
                    name="compony"
                    options={options.department.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">
                    Çalışma Şekli
                  </label>
                  <Select
                    className=""
                    classNamePrefix="select"
                    defaultValue={options.department[0]}
                    name="compony"
                    options={options.department.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
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
                  <label className=" fw-semibold fs-6 mb-2">Bitiş Tarihi</label>
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
                <td>
                  {" "}
                  <div className="d-flex settingEmp">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Career;
