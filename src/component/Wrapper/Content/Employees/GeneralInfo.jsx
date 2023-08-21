import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function GeneralInfo() {
  const { id } = useParams();
  console.log("infodaki ID:", id);
  const [selected, setSelected] = useState("seç");

  const [employee, setEmployee] = useState(); //Tek bir kullanıcı bilgisini depolamak için

  const handleInputChange = (e) => {
    //çalışanlar sayfasındaki inputtaki değişiklikleri employeeInfoya kaydetmek için
    setemployeeInfo({
      ...employeeInfo,
      [e.target.name]: e.target.value,
    });
    console.log("employeeInfo Change data :", {
      ...employeeInfo,
      [e.target.name]: e.target.value,
    });
  };

  const [employeeInfo, setemployeeInfo] = useState({
    // Çalışanların bilgilerini update etmek için kullanılan tablo, employees state'indeki bilgileri bu state üzerine yüklüyoruz ve o şekilde servera gönderiyoruz.
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phoneNumber: "",
    departman: "",
    jobType: "",
    accessType: "",
    employeeType: "",
    dateOfStart: "",
    dateOfFinish: "",
    status: "",
  });
  const putInfo = () => {
    //bu fonksiyon yapılan değişiklikleri employeeInfo stateine kaydetmek için kullanılıyor.
    if (employee) {
      setemployeeInfo({
        firstName: employee.firstName || "",
        lastName: employee.lastName || "",
        phoneNumber: employee.phoneNumber || "",
        title: employee.title || "",
        email: employee.email || "",
        departman: employee.departman || "",
        jobType: employee.jobType || "",
        accessType: employee.accessType || "",
        employeeType: employee.employeeType || "",
        dateOfStart: employee.dateOfStart || "",
        dateOfFinish: employee.dateOfFinish || "",
        status: employee.status || "",
      });
    }
  };

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

  useEffect(() => {
    if (id) {
      fetchEmployee(id);
    }
  }, [id]);

  useEffect(() => {
    putInfo();
  }, [employee]);

  const handleEmployeeSubmit = () => {
    axios
      .put(`http://localhost:3004/employees/${id}`, employeeInfo)
      .then((response) => {
        if (response.status === 200) {
          console.log("response:", response);
          toast.success("Çalışan bilgisi başarıyla güncellendi.");
          setemployeeInfo(response.data);
        } else {
          toast.error("Çalışan bilgisi güncellenirken hata meydana geldi.");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
    fetchEmployee(id);
  };

  return (
    <div>
      <div>
        <div className="d-flex infoBtn justify-content-end">
          <button onClick={handleEmployeeSubmit}>KAYDET</button>
        </div>
        {employee && (
          <div className="pt-7">
            <div className="row">
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">İsim</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control form-control-solid mb-3 mb-lg-0"
                    placeholder="İsim"
                    onChange={handleInputChange}
                    value={employeeInfo.firstName}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">Soyisim</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control form-control-solid mb-3 mb-lg-0"
                    placeholder="Soyisim"
                    value={employeeInfo.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">E-posta</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-solid mb-3 mb-lg-0"
                    placeholder="ornek@gmail.com"
                    value={employeeInfo.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">Telefon</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="form-control form-control-solid mb-3 mb-lg-0"
                    placeholder="(5--) --- -- --"
                    value={employeeInfo.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">Unvan</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={employeeInfo.title}
                    onChange={handleInputChange}
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
                  <label className=" fw-semibold fs-6 mb-2">Departman</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue={selected}
                    name="departman"
                    value={employeeInfo.departman}
                    onChange={handleInputChange}
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
                  <label className=" fw-semibold fs-6 mb-2">
                    Çalışma Şekli
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="jobType"
                    value={employeeInfo.jobType}
                    onChange={handleInputChange}
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
                  <label className=" fw-semibold fs-6 mb-2">Çalışan Tipi</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue={selected}
                    name="employeeType"
                    value={employeeInfo.employeeType}
                    onChange={handleInputChange}
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
                  <label className=" fw-semibold fs-6 mb-2">
                    İşe Başlama Tarihi
                  </label>
                  <input
                    type="date"
                    name="dateOfStart"
                    className="form-control form-control-solid mb-3 mb-lg-0"
                    placeholder="ornek@gmail.com"
                    value={employeeInfo.dateOfStart}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
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
    </div>
  );
}

export default GeneralInfo;
