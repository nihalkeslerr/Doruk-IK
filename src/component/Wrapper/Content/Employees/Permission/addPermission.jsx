
import React, { useState,useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPermission({handleTabChange}) {
    const { id } = useParams();
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = () => {
      axios
        .get("http://localhost:3004/employees")
        .then((response) => {
          if (response.status === 200) {

            setEmployees( response.data.map((employee) =>( employee.firstName + " " +employee.lastName)));
          } else {
            console.log("hata");
          }
        })
        .catch((error) => {
          toast.error(error);
        });
    };
    
  useEffect(() => {
    fetchEmployees();
  }, []);




  const [permissionInfo, setPermissionInfo] = useState({
    typeOfPer:"",
    branch: "",
    dateOfFinish: "",
    dateOfStart: "",
    detail: "",
    personToReplace:"",
    dateOfReturn:"",
    employeeID: id,
  });

  const onChangeInput = (name, value) => {
    setPermissionInfo((prevPermissionInfo) => ({
      ...prevPermissionInfo,
      [name]: value,
    }));
  };
  console.log("permissionInfo:", permissionInfo);

  const handleAddPermission = () => {
    const allFieldsEmpty =
      !permissionInfo.branch ||
      !permissionInfo.typeOfPer ||
      !permissionInfo.dateOfFinish ||
      !permissionInfo.dateOfStart ||
      !permissionInfo.detail ||
      !permissionInfo.personToReplace ||
      !permissionInfo.dateOfReturn;

    if (allFieldsEmpty) {
      toast.warning("Alanlar Boş Bırakılamaz.");
    } else {
      axios
        .post("http://localhost:3004/permissionInfo", permissionInfo)
        .then((response) => {
          if (response.status === 201) {
            console.log("İzin Bilgisi Başarıyla Eklendi", response);
            toast.success("İzin bilgisi başarıyla Eklendi.");
          } else {
            toast.error(
              "İzim bilgisi eklenirken hata meydana geldi.",
              response.statusText
            );
          }
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };






  const options = {
    typeOfPer: ["Yıllık İzin","Doğum İzni ","Doğum Sonrası İzni","Evlilik İzni","Süt İzni","Yol İzni","Hastalık İzni","Mazeret İzni","Ücretsiz İzin","Eğitim İzni","Askerlik İzni","İş Arama İzni",],
    branch: ["istanbul", "bursa", "ankara", "izmir", "antalya"],
    personToReplace: employees,
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
              name="typeOfPer"
              options={options.typeOfPer.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                onChangeInput("typeOfPer", selectedOption.value)
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
      </div>
    
      <div className="row">
        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Başlangıç Tarihi</label>
            <input
              type="date"
              name="dateOfStart"
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
              className="form-control form-control-solid mb-3 mb-lg-0"
              onChange={(e) => onChangeInput(e.target.name, e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Açıklama  <span style={{color:"gray"}}> opsiyonel</span></label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="detail"  onChange={(e) => onChangeInput(e.target.name, e.target.value)}></textarea>
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
              name="personToReplace"
              options={options.personToReplace.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                onChangeInput("personToReplace", selectedOption.value)
              }
            />
          </div>
        </div>
        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Dönüş Tarihi</label>
            <input
              type="date"
              name="dateOfReturn"
              className="form-control form-control-solid mb-3 mb-lg-0"
              onChange={(e) => onChangeInput(e.target.name, e.target.value)}
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
          onClick={handleAddPermission}
        >
          Kaydet
        </button>
      </div>
      <ToastContainer
        permission="top-center"
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