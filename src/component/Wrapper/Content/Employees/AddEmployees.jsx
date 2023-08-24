import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import profilePhoto from "../../../../assets/media/avatars/300-6.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Select from "react-select";

function AddEmployees({ props }) {
  const [modalIsOpen, setModalIsOpen] = useState(false); //çalışan ekle modalı için state
  const [selected, setSelected] = useState("seç");
  const [addEmployee, setAddEmployee] = useState({
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
    dateOfFinish: "Devam Ediyor",
    status: "aktif",
  });
  const toggleModal = () => {
    //çalışan ekle modalı için
    setModalIsOpen(!modalIsOpen);
  };
  const onChangeInput = (name, value) => {
    console.log("butona basıldıııı");
    setAddEmployee((prevPositionInfo) => ({
      ...prevPositionInfo,
      [name]: value,
    }));
    console.log("employee list:", addEmployee);
  };
  console.log("addEmployee", addEmployee);

  const addEmployeeSubmit = () => {
    const allFieldsEmpty =
      !addEmployee.firstName ||
      !addEmployee.lastName ||
      !addEmployee.title ||
      !addEmployee.email ||
      !addEmployee.phoneNumber ||
      !addEmployee.departman ||
      !addEmployee.jobType ||
      !addEmployee.accessType ||
      !addEmployee.employeeType ||
      !addEmployee.dateOfStart;

    if (allFieldsEmpty) {
      toast.warning("Alanlar Boş Bırakılamaz.");
    } else {
      axios
        .post("http://localhost:3004/employees", addEmployee)
        .then((response) => {
          if (response.status === 201) {
            console.log("Başarıyla oluşturuldu", response);
            props.setEmployees((prevEmployees) => [
              ...prevEmployees,
              addEmployee,
            ]);
            toggleModal();
            toast.success("Çalışan bilgisi başarıyla kaydedildi.");
            setAddEmployee("");
          } else {
            console.log("işlem gerçekleşemedi", response.statusText);
            toast.error("Çalışan bilgisi kaydedilirken hata meydana geldi.");
          }
        })
        .catch((error) => {
          toast.error(error);
        });
      props.fetchEmployees();
    }
  };

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
    accessType: ["Hesap Sahibi", "Yönetici", "Çalışan"],
  };

  return (
    <>
      <button
        type="button"
        className="btn btnAdd"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_add_user"
        onClick={toggleModal}
      >
        <i className="ki-duotone ki-plus fs-2"></i>Çalışan Ekle
      </button>
      {/* Burası çalışan ekle Modalı */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
        ariaHideApp={false}
      >
        <div className="  " id="kt_modal_add_user" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header" id="kt_modal_add_user_header">
                <h2 className="fw-bold">Çalışan Ekle</h2>
                <div
                  className="btn btn-icon btn-sm btn-active-icon-primary"
                  data-kt-users-modal-action="close"
                  onClick={toggleModal}
                >
                  <i className="ki-duotone ki-cross fs-1">
                    <div className="container-icon">
                      <FontAwesomeIcon
                        icon={faXmark}
                        style={{ color: "#1a4489" }}
                        size="sm"
                      />
                    </div>
                  </i>
                </div>
              </div>
              <div className="modal-body px-5 my-7">
                <form id="kt_modal_add_user_form" className="form" action="#">
                  <div
                    className="d-flex flex-column scroll-y px-5 px-lg-10"
                    id="kt_modal_add_user_scroll"
                    data-kt-scroll="true"
                    data-kt-scroll-activate="true"
                    data-kt-scroll-max-height="auto"
                    data-kt-scroll-dependencies="#kt_modal_add_user_header"
                    data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                    data-kt-scroll-offset="300px"
                  >
                    <div className="border-bottom mb-6">
                      <p className="fs-12">Kişisel bilgiler</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className=" mb-7">
                        <label className="d-block fw-semibold fs-6 mb-5">
                          Fotoğraf
                        </label>
                        <div
                          className="image-input image-input-outline image-input-placeholder"
                          data-kt-image-input="true"
                        >
                          <div
                            className="image-input-wrapper w-125px h-125px"
                            style={{
                              backgroundImage: `url(${profilePhoto})`,
                            }}
                          ></div>
                          <label
                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                            data-kt-image-input-action="change"
                            data-bs-toggle="tooltip"
                            title="Change avatar"
                          >
                            <i className="ki-duotone ki-pencil fs-7">
                              <div className="container-icon">
                                <FontAwesomeIcon
                                  icon={faPenToSquare}
                                  style={{ color: "#1a4489" }}
                                  size="sm"
                                />
                              </div>
                            </i>
                            <input
                              type="file"
                              name="avatar"
                              accept=".png, .jpg, .jpeg"
                            />
                            <input type="hidden" name="avatar_remove" />
                          </label>
                          <span
                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                            data-kt-image-input-action="cancel"
                            data-bs-toggle="tooltip"
                            title="Cancel avatar"
                          >
                            <i className="ki-duotone ki-cross fs-2">
                              <div className="container-icon">
                                <FontAwesomeIcon
                                  icon={faXmark}
                                  style={{ color: "#1a4489" }}
                                  size="sm"
                                />
                              </div>
                            </i>
                          </span>
                          <span
                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                            data-kt-image-input-action="remove"
                            data-bs-toggle="tooltip"
                            title="Remove avatar"
                          >
                            <i className="ki-duotone ki-cross fs-2">
                              <div className="container-icon">
                                <FontAwesomeIcon
                                  icon={faXmark}
                                  style={{ color: "#1a4489" }}
                                  size="xs"
                                />
                              </div>
                            </i>
                          </span>
                        </div>
                        {/*   <div className="form-text">
                                  Kabul edilen fotoğraf <br /> formatları: 
                                  png, jpg, jpeg.
                                </div> */}
                      </div>

                      <div className="ml-5 information">
                        <div className="row">
                          <div className="col">
                            <div className="fv-row mb-7">
                              <label className="required fw-semibold fs-6 mb-2">
                                İsim
                              </label>
                              <input
                                type="text"
                                name="firstName"
                                className="form-control form-control-solid mb-3 mb-lg-0"
                                placeholder="İsim"
                                onChange={onChangeInput}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="fv-row mb-7">
                              <label className="required fw-semibold fs-6 mb-2">
                                Soyisim
                              </label>
                              <input
                                type="text"
                                name="lastName"
                                className="form-control form-control-solid mb-3 mb-lg-0"
                                placeholder="Soyisim"
                                onChange={onChangeInput}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="fv-row mb-7">
                              <label className="required fw-semibold fs-6 mb-2">
                                E-posta
                              </label>
                              <input
                                type="email"
                                name="email"
                                className="form-control form-control-solid mb-3 mb-lg-0"
                                placeholder="ornek@gmail.com"
                                onChange={onChangeInput}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="fv-row mb-7">
                              <label className="required fw-semibold fs-6 mb-2">
                                Telefon
                              </label>
                              <input
                                type="number"
                                name="phoneNumber"
                                className="form-control form-control-solid mb-3 mb-lg-0"
                                placeholder="(5--) --- -- --"
                                onChange={onChangeInput}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-bottom mb-6">
                      <p className="fs-12">Çalışma Bilgileri</p>
                    </div>
                    <div className="ml-5">
                      <div className="row">
                        <div className="col">
                          <div className="fv-row mb-7">
                            <label className="required fw-semibold fs-6 mb-2">
                              Unvan
                            </label>

                            <Select
                              className=""
                              classNamePrefix="select"
                              defaultValue={selected}
                              name="title"
                              value={{
                                value: addEmployee.title,
                                label: addEmployee.title,
                              }}
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
                        <div className="col">
                          <div className="fv-row mb-7">
                            <label className="required fw-semibold fs-6 mb-2">
                              Departman
                            </label>

                            <Select
                              className=""
                              classNamePrefix="select"
                              defaultValue={selected}
                              name="department"
                              value={{
                                value: addEmployee.department,
                                label: addEmployee.department,
                              }}
                              options={options.department.map((option) => ({
                                value: option,
                                label: option,
                              }))}
                              onChange={(selectedOption) =>
                                onChangeInput(
                                  "department",
                                  selectedOption.value
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="fv-row mb-7">
                            <label className="required fw-semibold fs-6 mb-2">
                              Çalışma Şekli
                            </label>

                            <Select
                              className=""
                              classNamePrefix="select"
                              defaultValue={selected}
                              name="jobType"
                              value={{
                                value: addEmployee.jobType,
                                label: addEmployee.jobType,
                              }}
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
                        <div className="col">
                          <div className="fv-row mb-7">
                            <label className="required fw-semibold fs-6 mb-2">
                              Çalışan Tipi
                            </label>
                            <Select
                              className=""
                              classNamePrefix="select"
                              defaultValue={selected}
                              name="employeeType"
                              value={{
                                value: addEmployee.employeeType,
                                label: addEmployee.employeeType,
                              }}
                              options={options.employeeType.map((option) => ({
                                value: option,
                                label: option,
                              }))}
                              onChange={(selectedOption) =>
                                onChangeInput("employeeType", selectedOption.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="fv-row mb-7">
                            <label className="required fw-semibold fs-6 mb-2">
                              İşe Başlama Tarihi
                            </label>
                            <input
                              type="date"
                              name="dateOfStart"
                              className="form-control form-control-solid mb-3 mb-lg-0"
                              placeholder="ornek@gmail.com"
                              onChange={onChangeInput}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="fv-row mb-7">
                            <label className="required fw-semibold fs-6 mb-2">
                              Erişim Türü
                            </label>

                            <Select
                              className=""
                              classNamePrefix="select"
                              defaultValue={selected}
                              name="accessType"
                              value={{
                                value: addEmployee.accessType,
                                label: addEmployee.accessType,
                              }}
                              options={options.accessType.map((option) => ({
                                value: option,
                                label: option,
                              }))}
                              onChange={(selectedOption) =>
                                onChangeInput("accessType", selectedOption.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-10">
                    <button
                      type="button"
                      className="btn border addEmp"
                      data-kt-users-modal-action="submit"
                      onClick={() => addEmployeeSubmit()}
                    >
                      <span className="indicator-label">Kaydet</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
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

export default AddEmployees;
