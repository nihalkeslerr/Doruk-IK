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
import AddShift from "./AddShift";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function Shift() {
  const [activeTab, setActiveTab] = useState("shift");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false); //çalışan ekle modalı için state
  const [editModalIsOpen, setEditModalIsOpen] = useState(false); //Pozisyon güncelleme modalı için state
  const [rowID, setrowID] = useState();

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const toggleEditModal = (RowID) => {
    setEditModalIsOpen(!editModalIsOpen);
    console.log(RowID);
  };
  const data = [
    {
      id: 1,
      start: "5 Temmuz 2023 18:00",
      duration: "1 Saat",
      detail: "-",
      stuation: "Onaylandı",
      dateOfCreation: "31 Ağu 2023 15:20",
    },
  ];

  const columns = [
    {
      name: "Başlangıç",
      selector: (row) => row.start,
      sortable: true,
    },
    {
      name: "Süre",
      selector: (row) => row.duration,
      sortable: true,
    },
    {
      name: "Açıklama",
      selector: (row) => row.detail,
      sortable: true,
    },
    {
      name: "Durum",
      selector: (row) => row.stuation,
      sortable: true,
    },
    {
      name: "  Oluşturulma Tarihi",
      selector: (row) => row.dateOfCreation,
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
      {activeTab === "shift" && (
       <div className="d-flex align-items-center justify-content-between ">
       <div className="filter d-flex align-items-center ">
         <div className="">
           <input type="text" placeholder="Filtrele" />
           <i className="ki-duotone ki-filter fs-2 pr-3">
             <div className="container-icon ">
               <FontAwesomeIcon
                 icon={faFilter}
                 style={{ color: "#9fb9e2" }}
                 size="sm"
               />
             </div>
           </i>
         </div>
       </div>
       <div className="d-flex infoBtn justify-content-end">
         <button
           style={{ padding: "11px 60px !important" }}
           className={activeTab === "shifts" ? "active" : "notActive"}
           onClick={() => handleTabChange("addshift")}
         >
          Mesai Kaydı Ekle
         </button>
       </div>{" "}
     </div>
      )}
      {/* Content Kısmı */}
      {activeTab === "shift" && (
        <div className="Tablee">
          <DataTable
            columns={columns}
            data={data}
            fixedHeader={true}
            style={{ width: "100%" }}
            pagination
          />
        </div>
      )}

      {activeTab === "addshift" && (
        <AddShift
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
        ></AddShift>
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
          <h2> Mesai kaydını silmek istediğinizden emin misiniz?</h2>
          <p>Bu işlem geri alınamaz.</p>
          <button>Vazgeç</button>
          <button>Sil</button>
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

export default Shift