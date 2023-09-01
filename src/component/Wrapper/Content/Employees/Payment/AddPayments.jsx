import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPayments({ handleTabChange }) {
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

  return (
    <>
      <div className="py-5 headAdd">
        <h1>Ödeme Ekle</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Tutar</label>
            <input
              type="text"
              name="id_number"
              className="form-control form-control-solid mb-3 mb-lg-0"
              placeholder="Tutar"
            />
          </div>
        </div>

        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Tarih</label>
            <input
              type="date"
              name="date"
              className="form-control form-control-solid mb-3 mb-lg-0"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Ücret Tipi</label>
            <Select
              className=""
              classNamePrefix="select"
              name="typeOfFee"
              options={options.company.map((option) => ({
                value: option,
                label: option,
              }))}
            />
          </div>
        </div>
        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Açıklama</label>
            <input
              type="text"
              name="detail"
              className="form-control form-control-solid mb-3 mb-lg-0"
              placeholder="Açıklama"
            />
          </div>
        </div>
      </div>
      <div className="col-4  align-items-center">
        <div className="fv-row mb-5 d-flex align-items-center">
          <label className="switch ">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <label className="mx-5" htmlFor="">
            Ödendi
          </label>
        </div>
        <div className="fv-row mb-5 mr-5 d-flex align-items-center">
          <label className="switch ">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <label htmlFor="" className="mx-5">
            Onay sürecini atla ve onayla
          </label>
        </div>
        <div className="fv-row mb-5 mr-5 d-flex align-items-center">
          <label className="switch ">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <label htmlFor="" className="mx-5">
            Bordroya dahil et
          </label>
        </div>
      </div>

      <div className="d-flex infoBtn justify-content-end">
        <button
          className="mx-5 bg-light bg-gradient"
          style={{ padding: "11px 60px !important" }}
          onClick={() => handleTabChange("permission")}
        >
          İptal
        </button>
        <button style={{ padding: "11px 60px !important" }}>Kaydet</button>
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

export default AddPayments;
