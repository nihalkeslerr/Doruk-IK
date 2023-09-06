import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
function GeneralInfo() {
  const { id } = useParams();
  console.log("infodaki ID:", id);
  const [selected, setSelected] = useState("seç");

  const [employee, setEmployee] = useState(); //Tek bir kullanıcı bilgisini depolamak için

  const options = {
    title: [
      " Front-End Geliştirici",
      " PHP Geliştirici",
      "Yazılım Müdürü",
      "  Şirket Avukatı",
      " İnsan Kaynakları çalışanı",
    ],
    department: ["Yazılım", "Satış", "Hukuk"],
    jobType: ["Tam zamanlı", " Yarı Zamanlı", "Stajyer"],
    employeeType: ["Danışman", "Stajyer", "Normal", "Sözleşmeli"],
  };

  const handleInputChange = (name, value) => {
    //çalışanlar sayfasındaki inputtaki değişiklikleri employeeInfoya kaydetmek için
    setemployeeInfo((prevPositionInfo) => ({
      ...prevPositionInfo,
      [name]: value,
    }));
    console.log("employeeInfo Change data :", {
      ...employeeInfo,
      [name]: value,
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
                    onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
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
                    onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
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
                    onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
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
                    onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">Unvan</label>
                  <Select
                    className=""
                    classNamePrefix="select"
                    value={{
                      value: employeeInfo.title,
                      label: employeeInfo.title,
                    }}
                    name="title"
                    options={options.title.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                    onChange={(selectedOption) =>
                      handleInputChange("title", selectedOption.value)
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
                      value: employeeInfo.departman,
                      label: employeeInfo.departman,
                    }}
                    name="departman"
                    options={options.department.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                    onChange={(selectedOption) =>
                      handleInputChange("departman", selectedOption.value)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">
                    Çalışma Şekli
                  </label>
                  <Select
                    className=""
                    classNamePrefix="select"
                    value={{
                      value: employeeInfo.jobType,
                      label: employeeInfo.jobType,
                    }}
                    name="jobType"
                    options={options.department.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                    onChange={(selectedOption) =>
                      handleInputChange("jobType", selectedOption.value)
                    }
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="fv-row mb-7">
                  <label className=" fw-semibold fs-6 mb-2">Çalışan Tipi</label>
                  <Select
                    className=""
                    classNamePrefix="select"
                    value={{
                      value: employeeInfo.employeeType,
                      label: employeeInfo.employeeType,
                    }}
                    name="employeeType"
                    options={options.department.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                    onChange={(selectedOption) =>
                      handleInputChange("employeeType", selectedOption.value)
                    }
                  />
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
                    onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
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
