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
import AddPayments from "./AddPayments";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
function Payments() {
  const [activeTab, setActiveTab] = useState("payment");

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
      type: "Asker",
      date: "12-02-2021",
      stuation: "Onaylandı",
      amount: "67.679,00 TL",
      gross: "Net",
      detail: "-",
      dateOfCreation: "31 Ağu 2023 15:20",
      paid: "Ödendi",
    },
  ];

  const columns = [
    {
      name: "Tür",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Tarih",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Durum",
      selector: (row) => row.stuation,
      sortable: true,
    },
    {
      name: "Tutar",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "Brüt/Net",
      selector: (row) => row.gross,
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
      name: "Ödendi",
      selector: (row) => row.paid,
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
      {activeTab === "payment" && (
        <div className="d-flex align-items-center justify-content-between ">
          <div className="filter ">
            <div className="">
              <input type="text" placeholder="Ödeme Türü" />

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
              className={activeTab === "payments" ? "active" : "notActive"}
              onClick={() => handleTabChange("addpayment")}
            >
              Ödeme Ekle
            </button>
          </div>{" "}
        </div>
      )}
      {/* Content Kısmı */}
      {activeTab === "payment" && (
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

      {/*  İzin Talep Et */}
      {activeTab === "addpayment" && (
        <AddPayments
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
        ></AddPayments>
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
          <h2> Ödeme kaydını silmek istediğinizden emin misiniz?</h2>
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

export default Payments;
