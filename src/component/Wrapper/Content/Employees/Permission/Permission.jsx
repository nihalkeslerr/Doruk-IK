import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Select from "react-select";
import axios from "axios";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddPermission from "./addPermission";
function Permission() {
  const { id } = useParams();
  const [permission, setPermission] = useState();
  const [activeTab, setActiveTab] = useState("permission");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  const [modalIsOpen, setModalIsOpen] = useState(false); //çalışan ekle modalı için state
  const [editModalIsOpen, setEditModalIsOpen] = useState(false); //Pozisyon güncelleme modalı için state
  const [rowID, setrowID] = useState();


  const fetchPermissionInfo = () => {
    axios
      .get(`http://localhost:3004/permissionInfo?employeeID=${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("position için response geliyor:", response);
          setPermission(response.data);
          console.log("permission: ", permission);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log("permission: ", permission);
  useEffect(() => {
    if (id) {
      fetchPermissionInfo();
    }
  }, [id]);

  const deletePermission = (choice) => {
    console.log("delete");

    if (choice === "delete") {
      axios
        .delete(`http://localhost:3004/permissionInfo/${rowID}`)
        .then((response) => {
          if (response.status === 200) {
            console.log("İzin Bilgisi silindi:", response);
            fetchPermissionInfo();
          } else {
            console.log("hata");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      toggleModal();
    }
    if (choice === "cancel") {
      toggleModal();
      console.log("cancel");
    }
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const toggleEditModal = (RowID) => {
    setEditModalIsOpen(!editModalIsOpen);
    console.log(RowID);
  };
  const columns = [
    {
      name: "Başlangıç",
      selector: (row) => row.dateOfStart,
      sortable: true,
    },
    {
      name: "Bitiş",
      selector: (row) => row.dateOfFinish,
      sortable: true,
    },
    {
      name: "Süre",
      selector: (row) => row.duration,
      sortable: true,
    },
    {
      name: "İzin Türü",
      selector: (row) => row.typeOfPermission,
      sortable: true,
    },
    {
      name: "Açıklama",
      selector: (row) => row.detail,
      sortable: true,
    },
    {
      name: "Oluşturulma Tarihi",
      selector: (row) => row.dateOfCreation,
      sortable: true,
    },
    {
      name: "Durum",
      selector: (row) => row.stuation,
      sortable: true,
    },
    {
      name: "İmzalandı",
      selector: (row) => row.signed,
      sortable: true,
    },
    {
      cell: (row, index) => (
        <div
          className="d-flex settingEmp"
          onClick={() => {
            setrowID(row.id);
          }}
        >
          <div className="px-1 delete" onClick={toggleModal}>
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div className="px-1 edit" onClick={() => toggleEditModal(row.id)}>
            <FontAwesomeIcon icon={faDownload} />
          </div>
          <div className="px-1 delete" onClick={toggleModal}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
      ),
      allowOverflow: true,
      button: true,
      width: "56px",
    },
  ];

  return (
    <>
{activeTab==="permission" && (
      <div className="d-flex infoBtn justify-content-end">
        <button
          style={{ padding: "11px 60px !important" }}
          className={activeTab === "permissions" ? "active" : "notActive"}
          onClick={() => handleTabChange("addPermission")}
        >
          İzin Talebi Oluştur
        </button>
      </div>
)}
{/* Content Kısmı */}
{activeTab==="permission" && (
  <div>
        <div className="row pt-8">
          <div className="col-3">
            <div className="fv-row mb-7 part bg-light bg-gradient text-center pt-6">
              <p className="fs-5">Toplam Hakedilen</p>
              <label htmlFor="">
                <b>12</b>
              </label>
            </div>
          </div>
          <div className="col-3">
            <div className="fv-row mb-7 part bg-light bg-gradient text-center pt-6">
              <p className="fs-5">Toplam Kullanılan</p>
              <label htmlFor="">
                <b>12</b>
              </label>
            </div>
          </div>
          <div className="col-3">
            <div className="fv-row mb-7 part bg-light bg-gradient text-center pt-6">
              <p className="fs-5">Kalan İzin</p>
              <label htmlFor="">
                <b>12</b>
              </label>
            </div>
          </div>
          <div className="col-3">
            <div className="fv-row mb-7 part bg-light bg-gradient text-center pt-6">
              <p className="fs-5">Yaklaşan İzin Tarihi</p>
              <label htmlFor="">
                <b>12</b>
              </label>
            </div>
          </div>
        </div>

        <div className="Tablee">
          <DataTable
            columns={columns}
            data={permission}
            fixedHeader={true}
            style={{ width: "100%" }}
            pagination
          />
        </div>
      </div>
)}
      

{/*  İzin Talep Et */}
  {activeTab==="addPermission" && (
    <AddPermission setActiveTab={setActiveTab} activeTab={activeTab} handleTabChange={handleTabChange}></AddPermission>
  )}


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="confirmation-modal"
        overlayClassName="about-modal-overlay"
        ariaHideApp={false}
      >
        <div
          className="btn btn-icon btn-sm btn-active-icon-primary modal-close-btn"
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
        <div className="d-flex align-items-center warningInfo justify-content-center;">
          <FontAwesomeIcon
            icon={faCircleExclamation}
            style={{ color: "#bf1514" }}
            size="xl"
          />
          <p className="m-2 fs-5">Warning</p>
        </div>
        <div className="confContent">
          <h2> İzin kaydını silmek istediğinizden emin misiniz?</h2>
          <p>Bu işlem geri alınamaz.</p>
          <button onClick={() => deletePermission("cancel")}>Vazgeç</button>
          <button onClick={() => deletePermission("delete")}>Sil</button>
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

export default Permission;
