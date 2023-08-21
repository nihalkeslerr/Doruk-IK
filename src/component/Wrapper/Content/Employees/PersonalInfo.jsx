import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const handleInputChange = (e) => {
    //çalışanlar sayfasındaki inputtaki değişiklikleri employeeInfoya kaydetmek için
    setSendOtherInfo({
      ...sendOtherInfo,
      [e.target.name]: e.target.value,
    });
    console.log("employee Change data :", {
      ...sendOtherInfo,
      [e.target.name]: e.target.value,
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Medeni Hal
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="maritalStatus"
                  value={sendOtherInfo && sendOtherInfo.maritalStatus}
                  onChange={handleInputChange}
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
                <label className="required fw-semibold fs-6 mb-2">
                  Engel Durumu
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="disabilitySituation"
                  value={sendOtherInfo && sendOtherInfo.disabilitySituation}
                  onChange={handleInputChange}
                >
                  <option>Seç</option>
                  <option value="Yok">Yok</option>
                  <option value="1.Derece">1.Derece</option>
                  <option value="2.Derece">2.Derece</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">Uyruk</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="nationality"
                  value={sendOtherInfo && sendOtherInfo.nationality}
                  onChange={handleInputChange}
                >
                  <option>Seç</option>
                  <option value="T.C">T.C</option>
                  <option value="Polonya">Polonya</option>
                  <option value="Amerika">Amerika </option>
                </select>
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
                  onChange={handleInputChange}
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
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="bloodGroup"
                  value={sendOtherInfo && sendOtherInfo.bloodGroup}
                  onChange={handleInputChange}
                >
                  <option>Seç</option>
                  <option value="0-">0-</option>
                  <option value="0+">0+</option>
                  <option value="A-">A-</option>
                  <option value="A+">A+</option>
                  <option value="B-">B-</option>
                  <option value="B+">B+</option>
                  <option value="AB-">AB-</option>
                  <option value="AB+">AB+</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Eğitim Durumu
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="educationStatus"
                  value={sendOtherInfo && sendOtherInfo.educationStatus}
                  onChange={handleInputChange}
                >
                  <option>Seç</option>
                  <option value="Lise">Lise</option>
                  <option value="Ön Lisans">Ön Lisans</option>
                  <option value="Lisans">Lisans</option>
                  <option value="Yüksek Lisans">Yüksek Lisans</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Cinsiyet
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="gender"
                  value={sendOtherInfo && sendOtherInfo.gender}
                  onChange={handleInputChange}
                >
                  <option>Seç</option>
                  <option value="Kadın">Kadın</option>
                  <option value="Erkek">Erkek</option>
                </select>
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
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">Ülke</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="country"
                  value={sendOtherInfo && sendOtherInfo.country}
                  onChange={handleInputChange}
                >
                  <option>Seç</option>
                  <option value="Türkiye">Türkiye</option>
                  <option value="Polonya">Polonya</option>
                  <option value="Amerika">Amerika</option>
                </select>
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
                  onChange={handleInputChange}
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
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="region"
                  value={sendOtherInfo && sendOtherInfo.region}
                  onChange={handleInputChange}
                >
                  <option>Seç</option>
                  <option value="Bahçelievler">Bahçelievler</option>
                  <option value="Avcılar">Avcılar</option>
                  <option value="Beylikdüzü">Beylikdüzü </option>
                </select>
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col">
              <div className="fv-row mb-7">
                <label className="required fw-semibold fs-6 mb-2">
                  Hesap Tipi
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="typeOfAccount"
                  value={sendOtherInfo && sendOtherInfo.typeOfAccount}
                  onChange={handleInputChange}
                >
                  <option>Seç</option>
                  <option value="Çek">Çek</option>
                  <option value="Vadeli">Vadeli</option>
                  <option value="Vadesiz">Vadesiz</option>
                  <option value="Diğer">Diğer</option>
                </select>
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
