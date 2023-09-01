import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddSalary() {
  const { id } = useParams();
  const options = {
    unit: ["₺", "€", "$"],
    paymentPeriod: ["Aylık", "Günlük"],
  };

  const [salaryInfo, setSalaryInfo] = useState({
    validityStart: "",
    amount: "",
    paymentScheme: "",
    additionalPayments: "",
    paymentPeriod: "",
    employeeID: id,
  });

  const onChangeInput = (name, value) => {
    setSalaryInfo((prevSalaryInfo) => ({
      ...prevSalaryInfo,
      [name]: value,
    }));
  };
  console.log("salaryInfo:", salaryInfo);

  const handleAddSalary = () => {
    const allFieldsEmpty =
      !salaryInfo.validityStart ||
      !salaryInfo.amount ||
      !salaryInfo.paymentScheme ||
      !salaryInfo.paymentPeriod;

    if (allFieldsEmpty) {
      toast.warning("Alanlar Boş Bırakılamaz.");
    } else {
      axios
        .post("http://localhost:3004/salary", salaryInfo)
        .then((response) => {
          if (response.status === 201) {
            console.log("Salary Bilgisi Başarıyla Oluşturuldu", response);
            toast.success("Maaş bilgisi başarıyla kaydedildi.");
          } else {
            toast.error(
              "Maaş bilgisi kaydedilirken hata meydana geldi.",
              response.statusText
            );
          }
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  const [wageisChecked, setWageIsChecked] = useState(false);
  const [schemeisChecked, setSchemeIsChecked] = useState(false);

  const handlechecked = ({ variable }) => {

    if (variable === "minimumWage") {
      setWageIsChecked(!wageisChecked);
      if (!wageisChecked) {
        // Check if isChecked is false
        setSalaryInfo((prevSalaryInfo) => ({
          ...prevSalaryInfo,
          amount: "13000", // Update the amount field
          unit:"₺"
        }));
      } else {
        setSalaryInfo((prevSalaryInfo) => ({
          ...prevSalaryInfo,
          amount: "", // Update the amount field
        }));
      }
    }

    if (variable === "paymentScheme") {
      setSchemeIsChecked(!schemeisChecked);
      if (!schemeisChecked) {
        // Check if isChecked is false
        setSalaryInfo((prevSalaryInfo) => ({
          ...prevSalaryInfo,
          paymentScheme: "Brüt", // Update the amount field
        }));
      } else {
        setSalaryInfo((prevSalaryInfo) => ({
          ...prevSalaryInfo,
          paymentScheme: "Net", // Update the amount field
        }));
      }
    }
  };

  useEffect(() => {
    console.log("wageisChecked: ", wageisChecked);
  });
  return (
    <>
     <div className="py-5 headAdd">
      <h1>Maaş Ekle</h1>
    </div>
      <div className="row">
        <div className="col-4">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Tutar</label>
            <input
              type="text"
              name="amount"
              className="form-control form-control-solid mb-3 mb-lg-0"
              placeholder="Tutar"
              value={salaryInfo.amount}
              onChange={(e) => onChangeInput(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="col-4">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Birim</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{
                value: salaryInfo.unit,
                label: salaryInfo.unit,
              }}
              name="unit"
              options={options.unit.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                onChangeInput("unit", selectedOption.value)
              }
            />
          </div>
        </div>
        <div className="col-4 d-flex align-items-center">
          <div className="fv-row mb-0 d-flex align-items-center">
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => handlechecked({ variable: "minimumWage" })}
              />

              <span className="slider round"></span>
            </label>
            <label htmlFor="">Asgari ücret</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 ">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">
              Geçerlilik Başlangıç
            </label>
            <input
              type="date"
              name="validityStart"
              className="form-control form-control-solid mb-3 mb-lg-0"
              value={salaryInfo.validityStart}
              onChange={(e) => onChangeInput(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="col-4">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Maaş Periyodu</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{
                value: salaryInfo.paymentPeriod,
                label: salaryInfo.paymentPeriod,
              }}
              name="paymentPeriod"
              options={options.paymentPeriod.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                onChangeInput("paymentPeriod", selectedOption.value)
              }
            />
          </div>
        </div>
        <div className="col-4 d-flex align-items-center">
          <div className="fv-row mb-0 d-flex align-items-center">
            <label className="switch ">
              <input type="checkbox"  onChange={() => handlechecked({ variable: "paymentScheme" })}/>
              <span className="slider round"></span>
            </label>
            <label htmlFor="">Brüt</label>
          </div>
        </div>
      </div>
      <div className="d-flex infoBtn justify-content-end">
        <button
          style={{ padding: "11px 60px !important" }}
          onClick={handleAddSalary}
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

export default AddSalary;
