import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPermission({handleTabChange}) {
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
      <h1>İzin Talep Et</h1>
    </div>
      <div className="row">
        <div className="col-8">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">İzin Türü</label>
            <Select
              className=""
              classNamePrefix="select"
              name="company"
              options={options.company.map((option) => ({
                value: option,
                label: option,
              }))}q
            />
          </div>
        </div>

        <div className="col-4">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Şube</label>
            <Select
              className=""
              classNamePrefix="select"
              name="branch"
              options={options.branch.map((option) => ({
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
            <label className=" fw-semibold fs-6 mb-2">Başlangıç Tarihi</label>
            <input
              type="date"
              name="dateOfStart"
              className="form-control form-control-solid mb-3 mb-lg-0"
            />
          </div>
        </div>
        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Bitiş Tarihi</label>
            <input
              type="date"
              name="dateOfFinish"
              className="form-control form-control-solid mb-3 mb-lg-0"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Açıklama  <span style={{color:"gray"}}> opsiyonel</span></label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Yerine Bakacak Kişi  <span style={{color:"gray"}}>opsiyonel</span></label>
            <Select
              className=""
              classNamePrefix="select"
              name="company"
              options={options.company.map((option) => ({
                value: option,
                label: option,
              }))}
            />
          </div>
        </div>
        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Dönüş Tarihi</label>
            <input
              type="date"
              name="dateOfStart"
              className="form-control form-control-solid mb-3 mb-lg-0"
            />
          </div>
        </div>
        </div>
      <div className="d-flex infoBtn justify-content-end">
      <button className="mx-5 bg-light bg-gradient"
          style={{ padding: "11px 60px !important" }}
          onClick={()=>handleTabChange("permission")}
        > 
        İptal
        </button>
        <button
          style={{ padding: "11px 60px !important" }}
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

export default AddPermission