import React, { useContext, useEffect, useState } from "react";
import profilePhoto from "../../../../assets/media/avatars/300-6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { GenerealContext } from "../../../../Context/GeneralContext";

function Employees() {
  const {employeeInfo, setemployeeInfo,onChangeInput,employees,setEmployees} = useContext(GenerealContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  

  useEffect(() => {
      console.log("employee: ", employees)
  }, [employees]);


  console.log("employeeInfo", employeeInfo);

  return (
    <>
      <div
        className="d-flex d-lg-none align-items-start justify-content-start mb-5"
        style={{ marginLeft: "15px" }}
        data-kt-swapper="true"
        data-kt-swapper-mode="prepend"
        data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}"
      >
        {" "}
        <h1 className="text-dark fw-bold my-0 fs-1">Çalışanlar</h1>
      </div>

      <div className="container-xxl" id="kt_content_container">
        <div className="card card-flush">
          <div className="card-header border-0 pt-6">
            <div className="card-title">
              <div className="d-flex align-items-center position-relative my-1">
                <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-5">
                  <div className="container-icon ">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ color: "#898989" }}
                      size="sm"
                    />
                  </div>
                </i>
                <input
                  type="text"
                  data-kt-user-table-filter="search"
                  className="form-control form-control-solid w-250px ps-13"
                  placeholder=" Ara"
                />
              </div>
            </div>
            <div className="card-toolbar">
              <div
                className="d-flex justify-content-end"
                data-kt-user-table-toolbar="base"
              >
                <button
                  type="button"
                  className="btn btnSub me-3"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <i className="ki-duotone ki-filter fs-2 pr-3">
                    <div className="container-icon ">
                      <FontAwesomeIcon
                        icon={faFilter}
                        style={{ color: "#1a4489" }}
                        size="sm"
                      />
                    </div>
                  </i>
                  Filtre
                </button>
                <div
                  className="menu menu-sub menu-sub-dropdown w-300px w-md-325px"
                  data-kt-menu="true"
                >
                  <div className="px-7 py-5">
                    <div className="fs-5 text-dark fw-bold">Filter Options</div>
                  </div>
                  <div className="separator border-gray-200"></div>
                  <div className="px-7 py-5" data-kt-user-table-filter="form">
                    <div className="mb-10">
                      <label className="form-label fs-6 fw-semibold">
                        Role:
                      </label>
                      <select
                        className="form-select form-select-solid fw-bold"
                        data-kt-select2="true"
                        data-placeholder="Select option"
                        data-allow-clear="true"
                        data-kt-user-table-filter="role"
                        data-hide-search="true"
                      >
                        <option></option>
                        <option value="Administrator">Administrator</option>
                        <option value="Analyst">Analyst</option>
                        <option value="Developer">Developer</option>
                        <option value="Support">Support</option>
                        <option value="Trial">Trial</option>
                      </select>
                    </div>
                    <div className="mb-10">
                      <label className="form-label fs-6 fw-semibold">
                        Two Step Verification:
                      </label>
                      <select
                        className="form-select form-select-solid fw-bold"
                        data-kt-select2="true"
                        data-placeholder="Select option"
                        data-allow-clear="true"
                        data-kt-user-table-filter="two-step"
                        data-hide-search="true"
                      >
                        <option></option>
                        <option value="Enabled">Enabled</option>
                      </select>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="reset"
                        className="btn btn-light btn-active-light-primary fw-semibold me-2 px-6"
                        data-kt-menu-dismiss="true"
                        data-kt-user-table-filter="reset"
                      >
                        Reset
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary fw-semibold px-6"
                        data-kt-menu-dismiss="true"
                        data-kt-user-table-filter="filter"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btnSub me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_export_users"
                >
                  <i className="ki-duotone ki-exit-up fs-2">
                    <div className="container-icon">
                      <FontAwesomeIcon
                        icon={faFileExport}
                        style={{ color: "#1a4489" }}
                        size="sm"
                      />
                    </div>
                  </i>
                  Dışa Aktar
                </button>
                <Link to="#">
                  <button
                    type="button"
                    className="btn btnAdd"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_add_user"
                    onClick={toggleModal}
                  >
                    <i className="ki-duotone ki-plus fs-2"></i>Çalışan Ekle
                  </button>
                </Link>
              </div>
              <div
                className="d-flex justify-content-end align-items-center d-none"
                data-kt-user-table-toolbar="selected"
              >
                <div className="fw-bold me-5">
                  <span
                    className="me-2"
                    data-kt-user-table-select="selected_count"
                  ></span>
                  Selected
                </div>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-kt-user-table-select="delete_selected"
                >
                  Delete Selected
                </button>
              </div>
              <div
                className="modal fade"
                id="kt_modal_export_users"
                tabIndex="-1"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered mw-650px">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h2 className="fw-bold">Export Users</h2>
                      <div
                        className="btn btn-icon btn-sm btn-active-icon-primary"
                        data-kt-users-modal-action="close"
                      >
                        <i className="ki-duotone ki-cross fs-1">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>
                    </div>
                    <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                      <form
                        id="kt_modal_export_users_form"
                        className="form"
                        action="#"
                      >
                        <div className="fv-row mb-10">
                          <label className="fs-6 fw-semibold form-label mb-2">
                            Select Roles:
                          </label>
                          <select
                            name="role"
                            data-control="select2"
                            data-placeholder="Select a role"
                            data-hide-search="true"
                            className="form-select form-select-solid fw-bold"
                          >
                            <option></option>
                            <option value="Administrator">Administrator</option>
                            <option value="Analyst">Analyst</option>
                            <option value="Developer">Developer</option>
                            <option value="Support">Support</option>
                            <option value="Trial">Trial</option>
                          </select>
                        </div>
                        <div className="fv-row mb-10">
                          <label className="required fs-6 fw-semibold form-label mb-2">
                            Select Export Format:
                          </label>
                          <select
                            name="format"
                            data-control="select2"
                            data-placeholder="Select a format"
                            data-hide-search="true"
                            className="form-select form-select-solid fw-bold"
                          >
                            <option></option>
                            <option value="excel">Excel</option>
                            <option value="pdf">PDF</option>
                            <option value="cvs">CVS</option>
                            <option value="zip">ZIP</option>
                          </select>
                        </div>
                        <div className="text-center">
                          <button
                            type="reset"
                            className="btn btn-light me-3"
                            data-kt-users-modal-action="cancel"
                          >
                            Discard
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            data-kt-users-modal-action="submit"
                          >
                            <span className="indicator-label">Submit</span>
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
                      <div
                        className="modal-header"
                        id="kt_modal_add_user_header"
                      >
                        <h2 className="fw-bold">Çalışan Ekle</h2>
                        <div
                          className="btn btn-icon btn-sm btn-active-icon-primary"
                          data-kt-users-modal-action="close"
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
                        <form
                          id="kt_modal_add_user_form"
                          className="form"
                          action="#"
                        >
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
                                <div class="row">
                                  <div class="col">
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
                                  <div class="col">
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
                                <div class="row">
                                  <div class="col">
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
                                  <div class="col">
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
                              <div class="row">
                                <div class="col">
                                  <div className="fv-row mb-7">
                                    <label className="required fw-semibold fs-6 mb-2">
                                      Departman
                                    </label>
                                    <select
                                      class="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option selected>
                                       Seç
                                      </option>
                                      <option value="1">Yazılım</option>
                                      <option value="2">Satış</option>
                                      <option value="3">Hukuk</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="col">
                                  <div className="fv-row mb-7">
                                    <label className="required fw-semibold fs-6 mb-2">
                                    Çalışma Şekli
                                    </label>
                                    <select
                                      class="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option selected>
                                       Seç
                                      </option>
                                      <option value="1">Tam zamanlı</option>
                                      <option value="2">Yarı Zamanlı</option>
                                      <option value="3">Stajyer</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div className="fv-row mb-7">
                                    <label className="required fw-semibold fs-6 mb-2">
                                      Erişim Türü
                                    </label>
                                    <select
                                      class="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option selected>
                                        Seç
                                      </option>
                                      <option value="1">Hesap Sahibi</option>
                                      <option value="2">Yönetici</option>
                                      <option value="3">Çalışan</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="col">
                                  <div className="fv-row mb-7">
                                    <label className="required fw-semibold fs-6 mb-2">
                                    Çalışan Tipi
                                    </label>
                                    <select
                                      class="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option selected>
                                       Seç
                                      </option>
                                      <option value="1">Danışman</option>
                                      <option value="2">Stajyer</option>
                                      <option value="3">Normal</option>
                                      <option value="3">Sözleşmeli</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                             
                            </div>

                            <div className="border-bottom mb-6">
                              <p className="fs-12">İşe Giriş Bilgileri</p>
                            </div>


                            <div>
                            <div class="row">
                                <div class="col">
                                  <div className="fv-row mb-7">
                                    <label className="required fw-semibold fs-6 mb-2">
                                      İşe Başlama Tarihi
                                    </label>
                                    <input
                                      type="date"
                                      name="email"
                                      className="form-control form-control-solid mb-3 mb-lg-0"
                                      placeholder="ornek@gmail.com"
                                    />
                                  </div>
                                </div>
                                <div class="col">
                                  <div className="fv-row mb-7">
                                    <label className="required fw-semibold fs-6 mb-2">
                                      Telefon
                                    </label>
                                    <input
                                      type="number"
                                      name="phoneNumber"
                                      className="form-control form-control-solid mb-3 mb-lg-0"
                                      placeholder="(5--) --- -- --"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>



                            {/* <div className="mb-5">
                              <label className="required fw-semibold fs-6 mb-5">
                                Rolü
                              </label>
                              <div className="d-flex fv-row">
                                <div className="form-check form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input me-3"
                                    name="user_role"
                                    type="radio"
                                    value="0"
                                    id="kt_modal_update_role_option_0"
                                    checked="checked"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="kt_modal_update_role_option_0"
                                  >
                                    <div className="fw-bold text-gray-800">
                                      Administrator
                                    </div>
                                    <div className="text-gray-600">
                                      Best for business owners and company
                                      administrators
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className="separator separator-dashed my-5"></div>
                              <div className="d-flex fv-row">
                                <div className="form-check form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input me-3"
                                    name="user_role"
                                    type="radio"
                                    value="1"
                                    id="kt_modal_update_role_option_1"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="kt_modal_update_role_option_1"
                                  >
                                    <div className="fw-bold text-gray-800">
                                      Developer
                                    </div>
                                    <div className="text-gray-600">
                                      Best for developers or people primarily
                                      using the API
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className="separator separator-dashed my-5"></div>
                              <div className="d-flex fv-row">
                                <div className="form-check form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input me-3"
                                    name="user_role"
                                    type="radio"
                                    value="2"
                                    id="kt_modal_update_role_option_2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="kt_modal_update_role_option_2"
                                  >
                                    <div className="fw-bold text-gray-800">
                                      Analyst
                                    </div>
                                    <div className="text-gray-600">
                                      Best for people who need full access to
                                      analytics data, but don't need to update
                                      business settings
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className="separator separator-dashed my-5"></div>
                              <div className="d-flex fv-row">
                                <div className="form-check form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input me-3"
                                    name="user_role"
                                    type="radio"
                                    value="3"
                                    id="kt_modal_update_role_option_3"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="kt_modal_update_role_option_3"
                                  >
                                    <div className="fw-bold text-gray-800">
                                      Support
                                    </div>
                                    <div className="text-gray-600">
                                      Best for employees who regularly refund
                                      payments and respond to disputes
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className="separator separator-dashed my-5"></div>
                              <div className="d-flex fv-row">
                                <div className="form-check form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input me-3"
                                    name="user_role"
                                    type="radio"
                                    value="4"
                                    id="kt_modal_update_role_option_4"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="kt_modal_update_role_option_4"
                                  >
                                    <div className="fw-bold text-gray-800">
                                      Trial
                                    </div>
                                    <div className="text-gray-600">
                                      Best for people who need to preview
                                      content data, but don't need to make any
                                      updates
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div> */}
                          </div>

                          <div className="text-center pt-10">
                            <button
                              type="reset"
                              className="btn btn-light me-3"
                              data-kt-users-modal-action="cancel"
                            >
                              Discard
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              data-kt-users-modal-action="submit"
                            >
                              <span className="indicator-label">Submit</span>
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
            </div>
          </div>
          <div className="card-body">
            <table
              className="table align-middle table-row-dashed fs-6 gy-5"
              id="kt_table_users"
            >
              <thead className="theadEmp">
                <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                  <th className="min-w-125px">Ad-Soyad</th>
                  <th className="min-w-125px">Unvan</th>
                  <th className="min-w-125px">E-posta</th>
                  <th className="min-w-125px">Telefon</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 fw-semibold">



                {
                  employees.map((employee)=>(
                    <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <Link to="general">
                        <div className="symbol-label">
                          <img
                            src={profilePhoto}
                            alt="Emma Smith"
                            className="w-100"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="d-flex flex-column">
                      <Link
                        to="general"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                       {employee.fullName}
                      </Link>
                    </div>
                  </td>
                  <td>{employee.title}</td>

                  <td>{employee.email}</td>
                  <td>{employee.phoneNumber}</td>
                </tr>
                  ))
                }
            

  {/*          
                      <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <Link to="general">
                        <div className="symbol-label">
                          <img
                            src={profilePhoto}
                            alt="Emma Smith"
                            className="w-100"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="d-flex flex-column">
                      <Link
                        to="general"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Emma Smith
                      </Link>
                    </div>
                  </td>
                  <td>Administrator</td>

                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                  <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <Link to="general">
                        <div className="symbol-label">
                          <img
                            src={profilePhoto}
                            alt="Emma Smith"
                            className="w-100"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="d-flex flex-column">
                      <Link
                        to="general"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                      </Link>
                    </div>
                  </td>
                  <td>Administrator</td>

                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
           

                 <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-danger text-danger">
                          MM
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Melody Macy
                      </a>
                    </div>
                  </td>
                  <td>Analyst</td>

                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img
                            src={profilePhoto}
                            alt="Max Smith"
                            className="w-100"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Max Smith
                      </a>
                    </div>
                  </td>
                  <td>Developer</td>

                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img
                            src={profilePhoto}
                            alt="Sean Bean"
                            className="w-100"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Sean Bean
                      </a>
                    </div>
                  </td>
                  <td>Support</td>

                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img
                            src={profilePhoto}
                            alt="Brian Cox"
                            className="w-100"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Brian Cox
                      </a>
                    </div>
                  </td>
                  <td>Developer</td>

                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-warning text-warning">
                          C
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Mikaela Collins
                      </a>
                    </div>
                  </td>
                  <td>Administrator</td>

                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img
                            src={profilePhoto}
                            alt="Francis Mitcham"
                            className="w-100"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Francis Mitcham
                      </a>
                    </div>
                  </td>
                  <td>Trial</td>
                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-danger text-danger">
                          O
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Olivia Wild
                      </a>
                    </div>
                  </td>
                  <td>Administrator</td>
                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-primary text-primary">
                          N
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Neil Owen
                      </a>
                    </div>
                  </td>
                  <td>Analyst</td>
                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img
                            src={profilePhoto}
                            alt="Dan Wilson"
                            className="w-100"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Dan Wilson
                      </a>
                    </div>
                  </td>
                  <td>Developer</td>
                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-danger text-danger">
                          E
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Emma Bold
                      </a>
                    </div>
                  </td>
                  <td>Support</td>
                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img
                            src={profilePhoto}
                            alt="Ana Crown"
                            className="w-100"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Ana Crown
                      </a>
                    </div>
                  </td>
                  <td>Developer</td>
                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-info text-info">
                          A
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Robert Doe
                      </a>
                    </div>
                  </td>
                  <td>Administrator</td>
                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img
                            src={profilePhoto}
                            alt="John Miller"
                            className="w-100"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        John Miller
                      </a>
                    </div>
                  </td>
                  <td>Trial</td>
                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-success text-success">
                          L
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Lucy Kunic
                      </a>
                    </div>
                  </td>
                  <td>Administrator</td>
                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-danger text-danger">
                          M
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Melody Macy
                      </a>
                    </div>
                  </td>
                  <td>Analyst</td>
                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img
                            src={profilePhoto}
                            alt="Max Smith"
                            className="w-100"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="../../demo7/dist/apps/user-management/users/view.html"
                        className="text-gray-800 text-hover-primary mb-1"
                      >
                        Max Smith
                      </a>
                    </div>
                  </td>
                  <td>Developer</td>
                  <td>deneme@gmail.com</td>
                  <td>0 (524) 532 54 63</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employees;
