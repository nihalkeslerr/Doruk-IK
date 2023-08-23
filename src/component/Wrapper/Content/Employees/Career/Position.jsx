import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Select from "react-select";
import axios from "axios";
import "../../../../../assets/css/flags.css";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Position({ props }) {
  const { id } = useParams();
  const [position, setposition] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false); //çalışan ekle modalı için state
  const [editModalIsOpen, setEditModalIsOpen] = useState(false); //Pozisyon güncelleme modalı için state
  const [rowID, setrowID] = useState();
  const [editPosition, setEditPosition] = useState();

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const toggleEditModal = (RowID) => {
    setEditModalIsOpen(!editModalIsOpen);
    console.log(RowID);
      setEditPosition(position.find((pos) => pos.id === RowID)) 
  };

  useEffect(() => {
    if (editPosition) {
      console.log('editPosition:', editPosition);
    }
  }, [editPosition]);


  const fetchPositionInfo = () => {
    axios
      .get(`http://localhost:3004/position?employeeID=${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("position için response geliyor:", response);
          setposition(response.data);
          console.log("position: ", position);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log("position: ", position);
  useEffect(() => {
    if (id) {
      fetchPositionInfo();
    }
  }, [id]);

  const deletePosition = (choice) => {
    console.log("delete");

    if (choice === "delete") {
      axios
        .delete(`http://localhost:3004/position/${rowID}`)
        .then((response) => {
          if (response.status === 200) {
            console.log("Pozisyon Bilgisi silindi:", response);
            fetchPositionInfo();
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
      name: "Çalışma Şekli",
      selector: (row) => row.jobType,
      sortable: true,
    },
    {
      name: "Yönetici",
      selector: (row) => row.manager,
      sortable: true,
    },
    {
      name: "Şirket",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "Şube",
      selector: (row) => row.branch,
      sortable: true,
    },
    {
      name: "Departman",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Unvan",
      selector: (row) => row.title,
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
          <div className="px-1 edit" onClick={()=>toggleEditModal(row.id)}>
            <FontAwesomeIcon icon={faPenToSquare} />
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

  const options = {
    company: ["Doruk İletişim", "Samsung"],
    department: ["op1", "op2", "op3"],
    branch: ["istanbul", "bursa", "ankara", "izmir", "antalya"],
    department: ["Yazılım", "Satış", "Hukuk"],
    jobType: ["Tam zamanlı", " Yarı Zamanlı", "Stajyer"],
    manager: ["Nihal Selma KESLER"],
    title: [
      " Front-End Geliştirici",
      " PHP Geliştirici",
      "Yazılım Müdürü",
      "  Şirket Avukatı",
      " İnsan Kaynakları çalışanı",
    ],
  };

  const onChangeInput = (name, value) => {
    setEditPosition((prevEditPosition) => ({
      ...prevEditPosition,
      [name]: value,
    }));
  };

  const handleEditPosition =()=>{
    axios
    .put(`http://localhost:3004/position/${rowID}`, editPosition)
    .then((response) => {
      if (response.status === 200) {
        console.log("response:", response);
        toast.success("Pozisyon bilgisi başarıyla güncellendi.");
        fetchPositionInfo()
        toggleEditModal()
      } else {
        toast.error("Çalışan bilgisi güncellenirken hata meydana geldi.");
      }
    })
    .catch((error) => {
      toast.error(error);
    });
    fetchPositionInfo()
  }

  return (
    <>
      <div className="Tablee">
        <DataTable
          columns={columns}
          data={position}
          fixedHeader={true}
          style={{ width: "100%" }}
          pagination
        />
      </div>

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
          <h2> Pozisyon kaydını silmek istediğinizden emin misiniz?</h2>
          <p>Bu işlem geri alınamaz.</p>
          <button onClick={() => deletePosition("cancel")}>Vazgeç</button>
          <button onClick={() => deletePosition("delete")}>Sil</button>
        </div>
      </Modal>

      <Modal
       isOpen={editModalIsOpen}
       onRequestClose={toggleEditModal}
       className="about-modal editpoz p-20 "
       style={{  height: "60% !important"}}
       overlayClassName="about-modal-overlay"
       ariaHideApp={false}>
         <div
          className="btn btn-icon btn-sm btn-active-icon-primary modal-close-btn"
          data-kt-users-modal-action="close"
          onClick={toggleEditModal}
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
      {
        editPosition && (
          <>
          <h2 className="fw-bold mb-5"> Güncelleme Ekranı</h2>
      <div className="row">
        <div className="col-4">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Şirket</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{
                label: editPosition.company,
              }}
              name="company"
              options={options.company.map((option) => ({
                value: option,
                label: option,
              }))}q
              onChange={(selectedOption) =>
                onChangeInput("company", selectedOption.value)
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
              value={{ value: editPosition.branch, label: editPosition.branch }}
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
        <div className="col-4">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Departman</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{
                value: editPosition.department,
                label: editPosition.department,
              }}
              name="department"
              options={options.department.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                onChangeInput("department", selectedOption.value)
              }
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Unvan</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{ value: editPosition.title, label: editPosition.title }}
              name="title"
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

        <div className="col-4">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Yöneticisi</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{
                value: editPosition.manager,
                label: editPosition.manager,
              }}
              name="manager"
              options={options.manager.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(selectedOption) =>
                onChangeInput("manager", selectedOption.value)
              }
            />
          </div>
        </div>
        <div className="col-4">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Çalışma Şekli</label>
            <Select
              className=""
              classNamePrefix="select"
              value={{
                value: editPosition.jobType,
                label: editPosition.jobType,
              }}
              name="jobType"
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
      </div>
      <div className="row">
        <div className="col">
          <div className="fv-row mb-7">
            <label className=" fw-semibold fs-6 mb-2">Başlangıç Tarihi</label>
            <input
              type="date"
              name="dateOfStart"
              value={editPosition.dateOfStart}
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
              value={editPosition.dateOfFinish}
              className="form-control form-control-solid mb-3 mb-lg-0"
              onChange={(e) => onChangeInput(e.target.name, e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="d-flex infoBtn justify-content-end">
        <button style={{ padding: "11px 60px !important", marginRight:"10px", backgroundColor:"white", border:"1px solid gray" }} onClick={toggleEditModal}>
          İptal
        </button>
        <button
          style={{ padding: "11px 60px !important" }}
          onClick={handleEditPosition}
        >
          Kaydet
        </button>
      </div>
    
    </>
        )
      }
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

export default Position;
