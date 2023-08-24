import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddSalary() {
  const { id } = useParams();
  const options = {
    validityStart: ["Doruk İletişim", "Samsung"],
    amount: ["istanbul", "bursa", "ankara", "izmir", "antalya"],
    paymentScheme: ["Yazılım", "Satış", "Hukuk"],
    additionalPayments: ["Tam zamanlı", " Yarı Zamanlı", "Stajyer"],
  };

  const [salaryInfo, setSalaryInfo] = useState({
    validityStart: "",
    amount: "",
    paymentScheme: "",
    additionalPayments: "",
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
      !salaryInfo.additionalPayments 

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
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Geçerlilik Başlangıç</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{
                value: salaryInfo.validityStart,
                label: salaryInfo.validityStart,
              }}
              name="validityStart"
              options={options.validityStart.map((option) => ({
                value: option,
                label: option,
              }))}
              q
              onChange={(selectedOption) =>
                onChangeInput("validityStart", selectedOption.value)
              }
            />
            
          </div>
        </div>

        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Tutar</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{ value: salaryInfo.amount, label: salaryInfo.amount }}
              name="amount"
              options={options.amount.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                onChangeInput("amount", selectedOption.value)
              }
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Ödeme Düzeni</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{ value: salaryInfo.paymentScheme, label: salaryInfo.paymentScheme }}
              name="paymentScheme"
              options={options.paymentScheme.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                onChangeInput("paymentScheme", selectedOption.value)
              }
            />
          </div>
        </div>

        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Ek Ödemeler</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{
                value: salaryInfo.additionalPayments,
                label: salaryInfo.additionalPayments,
              }}
              name="additionalPayments"
              options={options.additionalPayments.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                onChangeInput("additionalPayments", selectedOption.value)
              }
            />
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
