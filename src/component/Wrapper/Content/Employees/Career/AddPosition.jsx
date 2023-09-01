import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPosition() {
  const { id } = useParams();
  const options = {
    company: ["Doruk İletişim", "Samsung"],
    branch: ["istanbul", "bursa", "ankara", "izmir", "antalya"],
    department: ["Yazılım", "Satış", "Hukuk"],
    jobType: ["Tam zamanlı", " Yarı Zamanlı", "Stajyer"],
    manager: ["Nihal Selma KESLER"],
    title: [
      " Front-End Geliştirici",
      " PHP Geliştirici",
      "Yazılım Müdürü",
      "  Şirket Avukatı",
      " İnsan Kaynakları çalışanı",
    ],
  };

  const [positionInfo, setPositionInfo] = useState({
    branch: "",
    company: "",
    dateOfFinish: "",
    dateOfStart: "",
    department: "",
    jobType: "",
    manager: "",
    title: "",
    employeeID: id,
  });

  const onChangeInput = (name, value) => {
    setPositionInfo((prevPositionInfo) => ({
      ...prevPositionInfo,
      [name]: value,
    }));
  };
  console.log("positionInfo:", positionInfo);

  const handleAddPosition = () => {
    const allFieldsEmpty =
      !positionInfo.branch ||
      !positionInfo.company ||
      !positionInfo.dateOfFinish ||
      !positionInfo.dateOfStart ||
      !positionInfo.department ||
      !positionInfo.jobType ||
      !positionInfo.manager ||
      !positionInfo.title;

    if (allFieldsEmpty) {
      toast.warning("Alanlar Boş Bırakılamaz.");
    } else {
      axios
        .post("http://localhost:3004/position", positionInfo)
        .then((response) => {
          if (response.status === 201) {
            console.log("Pozisyon Bilgisi Başarıyla Oluşturuldu", response);
            toast.success("Çalışan bilgisi başarıyla kaydedildi.");
          } else {
            toast.error(
              "Çalışan bilgisi kaydedilirken hata meydana geldi.",
              response.statusText
            );
          }
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  return (
    <>
       <div className="py-5 headAdd">
      <h1>Pozisyon Ekle</h1>
    </div>
      <div className="row">
        <div className="col-4">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Şirket</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{
                value: positionInfo.company,
                label: positionInfo.company,
              }}
              name="company"
              options={options.company.map((option) => ({
                value: option,
                label: option,
              }))}q
              onChange={(selectedOption) =>
                onChangeInput("company", selectedOption.value)
              }
            />
          </div>
        </div>

        <div className="col-4">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Şube</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{ value: positionInfo.branch, label: positionInfo.branch }}
              name="branch"
              options={options.branch.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                onChangeInput("branch", selectedOption.value)
              }
            />
          </div>
        </div>
        <div className="col-4">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Departman</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{
                value: positionInfo.department,
                label: positionInfo.department,
              }}
              name="department"
              options={options.department.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                onChangeInput("department", selectedOption.value)
              }
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
              value={{ value: positionInfo.title, label: positionInfo.title }}
              name="title"
              options={options.title.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                onChangeInput("title", selectedOption.value)
              }
            />
          </div>
        </div>

        <div className="col-4">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Yöneticisi</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{
                value: positionInfo.manager,
                label: positionInfo.manager,
              }}
              name="manager"
              options={options.manager.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                onChangeInput("manager", selectedOption.value)
              }
            />
          </div>
        </div>
        <div className="col-4">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Çalışma Şekli</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{
                value: positionInfo.jobType,
                label: positionInfo.jobType,
              }}
              name="jobType"
              options={options.jobType.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                onChangeInput("jobType", selectedOption.value)
              }
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Başlangıç Tarihi</label>
            <input
              type="date"
              name="dateOfStart"
              value={positionInfo.dateOfStart}
              className="form-control form-control-solid mb-3 mb-lg-0"
              onChange={(e) => onChangeInput(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Bitiş Tarihi</label>
            <input
              type="date"
              name="dateOfFinish"
              value={positionInfo.dateOfFinish}
              className="form-control form-control-solid mb-3 mb-lg-0"
              onChange={(e) => onChangeInput(e.target.name, e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="d-flex infoBtn justify-content-end">
      <button
          style={{ padding: "11px 60px !important" }}
        > 
        İptal
        </button>
        <button
          style={{ padding: "11px 60px !important" }}
          onClick={handleAddPosition}
        >
          Kaydet
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default AddPosition;
