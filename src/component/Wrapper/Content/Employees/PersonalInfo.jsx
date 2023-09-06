import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";

function PersonalInfo() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(); //Tek bir kullanıcı bilgisini depolamak için
  const [otherInfo, setOtherInfo] = useState([]);

  useEffect(() => {
    const getOtherInfo = () => {
      axios
        .get(`http://localhost:3004/otherInfo?employeeID=${id}`)
        .then((response) => {
          console.log("otherInfo response:", response);
          setOtherInfo(response.data[0]);
          console.log("otherInfo:", otherInfo);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getOtherInfo();
  }, [id]);

  const [sendOtherInfo, setSendOtherInfo] = useState({
    address: "",
    city: "",
    postCode: "",
    region: "",
    country: "",
    bankName: "",
    typeOfAccount: "",
    numberOfAccount: "",
    ibanNumber: "",
    dateOfBirth: "",
    id_number: "",
    gender: "",
    maritalStatus: "",
    disabilitySituation: "",
    nationality: "",
    numberOfChildren: "",
    bloodGroup: "",
    educationStatus: "",
    employeeID: id,
  });

  const options = {
    maritalStatus: [
      "Evli",
      "Bekar",
      "Belirtimemiş",
    ],
    disabilitySituation: ["Yok", "1.Derece", "2.Derece'"],
    nationality: ["T.C", "Polonya","Amerika"],
    bloodGroup: ["0-","0+","A-","A+","B-","B+","AB+","AB-"],
    educationStatus: ["Danışman", "Stajyer", "Normal", "Sözleşmeli"],
    gender: ["Kadın", "Erkek"],
    country: ["Türkiye","Polonya","Amerika"],
    city: ["İstanbul", "İzmir", "Ankara"],
    region: ["Bahçelevler", "Avcılar", "Beylikdüzü", "Sözleşmeli"],
    typeOfAccount: ["Çek", "Vadeli", "Vadesiz", "Diğer"],
  };
  const putInfo = () => {
    //bu fonksiyon yapılan değişiklikleri employeeInfo stateine kaydetmek için kullanılıyor.
    setSendOtherInfo({
      address: otherInfo.address || "",
      city: otherInfo.city || "",
      postCode: otherInfo.postCode || "",
      region: otherInfo.region || "",
      country: otherInfo.country || "",
      bankName: otherInfo.bankName || "",
      typeOfAccount: otherInfo.typeOfAccount || "",
      numberOfAccount: otherInfo.numberOfAccount || "",
      ibanNumber: otherInfo.ibanNumber || "",
      dateOfBirth: otherInfo.dateOfBirth || "",
      id_number: otherInfo.id_number || "",
      gender: otherInfo.gender || "",
      maritalStatus: otherInfo.maritalStatus || "",
      disabilitySituation: otherInfo.disabilitySituation || "",
      nationality: otherInfo.nationality || "",
      numberOfChildren: otherInfo.numberOfChildren || "",
      bloodGroup: otherInfo.bloodGroup || "",
      educationStatus: otherInfo.educationStatus || "",
      employeeID: id,
    });
  };
  const handleInputChange = (name, value) => {
    //çalışanlar sayfasındaki inputtaki değişiklikleri employeeInfoya kaydetmek için
    setSendOtherInfo((prevPositionInfo) => ({
      ...prevPositionInfo,
      [name]: value,
    }));
    console.log("employee Change data :", {
      ...sendOtherInfo,
      [name]: value,
    });
  };

  const handleOtherInfoSubmit = () => {
    if (otherInfo) {
      axios
        .put(`http://localhost:3004/otherInfo/${otherInfo.id}`, sendOtherInfo)
        .then((response) => {
          console.log("response:", response);
          toast.success("Diğer çalışan bilgileri başarıyla güncellendi.");
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      axios
        .post(`http://localhost:3004/otherInfo/`, sendOtherInfo)
        .then((response) => {
          console.log("response:", response);
          toast.success("Diğer çalışan bilgileri başarıyla güncellendi.");
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };
  const fetchEmployee = () => { //İd bilgisine göre çalışan bilgisi çekme fonksiyonu
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
  }
  useEffect(() => {
    if (id) {
      fetchEmployee(id);
    }
  }, [id]);
  useEffect(() => {
    if (otherInfo) {
      putInfo();
    }
  }, [otherInfo]);




  return (
    <div>
        <div className="d-flex infoBtn justify-content-end" >
          <button  onClick={handleOtherInfoSubmit}  style={{padding:"11px 60px !important"}}>KAYDET</button>
      </div>
      {employee && (
        <div>
          <div className="border-bottom mb-6">
            <p className="fs-3">Diğer Bilgiler</p>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Doğum Tarihi
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  value={sendOtherInfo && sendOtherInfo.dateOfBirth}
                  onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Kimlik Numarası
                </label>
                <input
                  type="text"
                  name="id_number"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  placeholder="Kimlik Numarası"
                  value={sendOtherInfo && sendOtherInfo.id_number}
                  onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Medeni Hal
                </label>

                <Select
              className=""
              classNamePrefix="select"
              value={{
                value: sendOtherInfo.maritalStatus,
                label: sendOtherInfo.maritalStatus,
              }}
              name="maritalStatus"
              options={options.maritalStatus.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                handleInputChange("maritalStatus", selectedOption.value)
              }
            />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Engel Durumu
                </label>
                <Select
              className=""
              classNamePrefix="select"
              value={{
                value: sendOtherInfo.disabilitySituation,
                label: sendOtherInfo.disabilitySituation,
              }}
              name="disabilitySituation"
              options={options.disabilitySituation.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                handleInputChange("disabilitySituation", selectedOption.value)
              }
            />
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">Uyruk</label>
                <Select
              className=""
              classNamePrefix="select"
              value={{
                value: sendOtherInfo.nationality,
                label: sendOtherInfo.nationality,
              }}
              name="nationality"
              options={options.nationality.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                handleInputChange("nationality", selectedOption.value)
              }
            />
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Çocuk Sayısı
                </label>
                <input
                  type="number"
                  name="numberOfChildren"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  placeholder="Çocuk Sayısı"
                  value={sendOtherInfo && sendOtherInfo.numberOfChildren}
                  onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Kan Grubu
                </label>
                <Select
              className=""
              classNamePrefix="select"
              value={{
                value: sendOtherInfo.bloodGroup,
                label: sendOtherInfo.bloodGroup,
              }}
              name="bloodGroup"
              options={options.bloodGroup.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                handleInputChange("bloodGroup", selectedOption.value)
              }
            />
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Eğitim Durumu
                </label>
                <Select
              className=""
              classNamePrefix="select"
              value={{
                value: sendOtherInfo.educationStatus,
                label: sendOtherInfo.educationStatus,
              }}
              name="educationStatus"
              options={options.educationStatus.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                handleInputChange("educationStatus", selectedOption.value)
              }
            />
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Cinsiyet
                </label>
                <Select
              className=""
              classNamePrefix="select"
              value={{
                value: sendOtherInfo.gender,
                label: sendOtherInfo.gender,
              }}
              name="gender"
              options={options.gender.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                handleInputChange("gender", selectedOption.value)
              }
            />
              </div>
            </div>
          </div>
          <div className="border-bottom mb-6">
            <p className="fs-3">Adres Bilgileri</p>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">Adres</label>
                <input
                  type="text"
                  name="address"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  placeholder="Address"
                  value={sendOtherInfo && sendOtherInfo.address}
                  onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">Ülke</label>
                <Select
              className=""
              classNamePrefix="select"
              value={{
                value: sendOtherInfo.country,
                label: sendOtherInfo.country,
              }}
              name="country"
              options={options.country.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                handleInputChange("country", selectedOption.value)
              }
            />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">Şehir</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="city"
                  value={sendOtherInfo && sendOtherInfo.city}
                  onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
                >
                  <option>Seç</option>
                  <option value="İstanbul">İstanbul</option>
                  <option value="İzmir">İzmir</option>
                  <option value="Ankara">Ankara</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">İlçe</label>
                <Select
              className=""
              classNamePrefix="select"
              value={{
                value: sendOtherInfo.region,
                label: sendOtherInfo.region,
              }}
              name="region"
              options={options.region.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                handleInputChange("region", selectedOption.value)
              }
            />
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Posta kodu
                </label>
                <input
                  type="text"
                  name="postCode"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  value={sendOtherInfo && sendOtherInfo.postCode}
                  onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="border-bottom mb-6">
            <p className="fs-3">Banka Bilgileri</p>
          </div>

          <div className="row">
            <div className="col">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Banka Adı
                </label>
                <input
                  type="text"
                  name="bankName"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  value={sendOtherInfo && sendOtherInfo.bankName}
                  onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Hesap Tipi
                </label>
                <Select
              className=""
              classNamePrefix="select"
              value={{
                value: sendOtherInfo.typeOfAccount,
                label: sendOtherInfo.typeOfAccount,
              }}
              name="typeOfAccount"
              options={options.typeOfAccount.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                handleInputChange("typeOfAccount", selectedOption.value)
              }
            />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Hesap Numarası
                </label>
                <input
                  type="text"
                  name="numberOfAccount"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  value={sendOtherInfo && sendOtherInfo.numberOfAccount}
                  onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  IBAN Numarası
                </label>
                <input
                  type="text"
                  name="ibanNumber"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  value={sendOtherInfo && sendOtherInfo.ibanNumber}
                  onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    
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
    </div>
  );
}

export default PersonalInfo;
