import React, { useContext, useEffect, useState } from "react";
import profilePhoto from "../../../../assets/media/avatars/300-6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as XLSX from "xlsx";
import "jspdf-autotable";
import html2pdf from "html2pdf.js";
import AddEmployees from "./AddEmployees";
import DataTable from "react-data-table-component";

function Employees() {
  const [employees, setEmployees] = useState([]); //Çalışanların bütün bilgilerinin yüklendiği state

  useEffect(() => {
    console.log("employees: ", employees);
  }, [employees]);
  const [selected, setSelected] = useState("seç");

  const [searchQuery, setSearchQuery] = useState("");

  const fetchEmployees = () => {
    axios
      .get("http://localhost:3004/employees")
      .then((response) => {
        if (response.status === 200) {
          console.log("response:", response);
          setEmployees(response.data);
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

  const excelExport = () => {
    const exportData = employees.map((employee) => ({
      İSİM: employee.firstName,
      SOYİSİM: employee.lastName,
      UNVAN: employee.title,
      EPOSTA: employee.email,
      TELEFON: employee.phoneNumber,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employee Data");

    XLSX.writeFile(workbook, "employee_data.xlsx");
  };

  const pdfExport = () => {
    const content = `
  <h2 style="text-align: center; margin-bottom: 20px">Çalışanlar Listesi</h2>
  <table style="width: 100%; border-collapse: collapse; margin-left: auto; margin-right: auto;">
    <thead>
      <tr>
        <th style="border: 0.5px solid gray; padding: 8px;">İSİM</th>
        <th style="border: 0.5px solid gray; padding: 8px;">SOYİSİM</th>
        <th style="border: 0.5px solid gray; padding: 8px;">UNVAN</th>
        <th style="border: 0.5px solid gray; padding: 8px;">E-POSTA</th>
        <th style="border: 0.5px solid gray; padding: 8px;">TELEFON</th>
      </tr>
    </thead>
    <tbody>
      ${employees
        .map(
          (employee) => `
          <tr>
            <td style="border: 0.5px solid gray; padding: 8px;">${employee.firstName}</td>
            <td style="border: 0.5px solid gray; padding: 8px;">${employee.lastName}</td>
            <td style="border: 0.5px solid gray; padding: 8px;">${employee.title}</td>
            <td style="border: 0.5px solid gray; padding: 8px;">${employee.email}</td>
            <td style="border: 0.5px solid gray; padding: 8px;">${employee.phoneNumber}</td>
          </tr>
        `
        )
        .join("")}
    </tbody>
  </table>
  `;

    const pdfOptions = {
      margin: 20,
      filename: "employee_data.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(content).set(pdfOptions).save();
  };

  const csvExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "İSİM,SOYİSİM,UNVAN,E-POSTA,TELEFON\n" +
      employees
        .map(
          (employee) =>
            `${employee.firstName},${employee.lastName},${employee.title},${employee.email},${employee.phoneNumber}`
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "employee_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onChangeSearchInput = (e, headQuery) => {
    const inputValue = e.target.value.trim();

    if (headQuery === "name") {
      axios
        .get(`http://localhost:3004/employees?firstName_like=${inputValue}`)
        .then((response) => {
          if (response.status === 200) {
            setEmployees(response.data);
          }
        })
        .catch((error) => {
          console.error("Error in search by name:", error);
        });
    }

    if (headQuery === "title") {
      axios
        .get(`http://localhost:3004/employees?title_like=${inputValue}`)
        .then((response) => {
          if (response.status === 200) {
            setEmployees(response.data);
          }
        })
        .catch((error) => {
          console.error("Error in search by title:", error);
        });
    }
    if (headQuery === "email") {
      axios
        .get(`http://localhost:3004/employees?email_like=${inputValue}`)
        .then((response) => {
          if (response.status === 200) {
            setEmployees(response.data);
          }
        })
        .catch((error) => {
          console.error("Error in search by title:", error);
        });
    }
    if (headQuery === "phoneNumber") {
      axios
        .get(`http://localhost:3004/employees?phoneNumber_like=${inputValue}`)
        .then((response) => {
          if (response.status === 200) {
            setEmployees(response.data);
          }
        })
        .catch((error) => {
          console.error("Error in search by title:", error);
        });
    }

    if (!inputValue) {
      fetchEmployees();
    }
  };

  console.log("searchQuery:", searchQuery);
  const columns = [
    {
      name: "AD-SOYAD",
      selector: (row) => row.firstName,
      sortable: true,
      cell: (row) => (
        <NavLink
          to={{
            pathname: `${row.id}/general`,
          }}
          className="d-flex align-items-center text-dark"
        >
          <div className="symbol symbol-circle symbol-50px overflow-hidden me-3 my-3">
            <div className="symbol-label">
              <img src={profilePhoto} alt="Emma Smith" className="w-100" />
            </div>
          </div>
          {row.firstName} {row.lastName}
        </NavLink>
      ),
      style:{width:'25%'}
    },
    {
      name: "UNVAN",
      selector: (row) => row.title,
      sortable: true,
      style:{width:'25%'}
    },
    {
      name: "E-POSTA",
      selector: (row) => row.email,
      sortable: true,
       style:{width:'25%'}
    },
    {
      name: "TELEFON",
      selector: (row) => row.phoneNumber,
      sortable: true,
      style:{width:'25%'}
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  // Diğer kodları burada alalım...

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedEmployees = employees.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );
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
        <div className="card card-flush infoCard">
          <div className="card-header border-0 pt-6 px-0">
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
                className="d-flex justify-content-end align-items-start"
                data-kt-user-table-toolbar="base"
              >
                <div>
                  <div
                    title="Export Excel"
                    type="button"
                    className="btn btnSub  me-3"
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
                    <div className="dropdown-content">
                      <div onClick={pdfExport}>PDF</div>
                      <div onClick={excelExport}>EXCEL</div>
                      <div onClick={csvExport}>CSV</div>
                    </div>
                  </div>
                </div>
                <AddEmployees
                  employees={employees}
                  setEmployees={setEmployees}
                  fetchEmployees={fetchEmployees}
                ></AddEmployees>
              </div>
            </div>
          </div>

          <div className="filter d-flex justify-content-center">
            <div className="w-25 mx-5 my-5">
              <input
                type="text"
                placeholder="Filtrele"
                onChange={(e) => onChangeSearchInput(e, "name")}
              />
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
            <div className="w-25 mx-5 my-5">
              <input
                type="text"
                placeholder="Filtrele"
                onChange={(e) => onChangeSearchInput(e, "title")}
              />

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
            <div className="w-25 mx-5 my-5">
              <input
                type="text"
                placeholder="Filtrele"
                onChange={(e) => onChangeSearchInput(e, "email")}
              />

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
            <div className="w-25 mx-5 my-5">
              <input
                type="text"
                placeholder="Filtrele"
                onChange={(e) => onChangeSearchInput(e, "phoneNumber")}
              />
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
          <DataTable
            columns={columns}
            data={paginatedEmployees}
            fixedHeader={true}
            style={{ width: "100%" }}
            pagination
            paginationServer
            paginationTotalRows={employees.length}
            paginationPerPage={perPage}
            paginationRowsPerPageOptions={[10, 20, 30]} // Sayfa başına görüntülenecek veri sayıları
            onChangePage={handlePageChange}
          />
          <div className="card-body">
            {/*   <table
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
                <tr className="filter">
                  <td>
                    <div>
                      <input
                        type="text"
                        placeholder="Filtrele"
                        onChange={(e) => onChangeSearchInput(e, "name")}
                      />
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
                  </td>
                  <td>
                    <div>
                      <input
                        type="text"
                        placeholder="Filtrele"
                        onChange={(e) => onChangeSearchInput(e, "title")}
                      />

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
                  </td>
                  <td>
                    <div>
                      <input
                        type="text"
                        placeholder="Filtrele"
                        onChange={(e) => onChangeSearchInput(e, "email")}
                      />

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
                  </td>
                  <td>
                    <div>
                      <input
                        type="text"
                        placeholder="Filtrele"
                        onChange={(e) => onChangeSearchInput(e, "phoneNumber")}
                      />
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
                  </td>
                </tr>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="d-flex align-items-center">
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <NavLink
                          to={{
                            pathname: `${employee.id}/general`,
                            state: { employeeID: employee.id },
                          }}
                        >
                          <div className="symbol-label">
                            <img
                              src={profilePhoto}
                              alt="Emma Smith"
                              className="w-100"
                            />
                          </div>
                        </NavLink>
                      </div>
                      <div className="d-flex flex-column">
                        <NavLink
                          to={{ pathname: `${employee.id}/general` }}
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          {employee.firstName} {employee.lastName}
                        </NavLink>
                      </div>
                    </td>
                    <td>{employee.title}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phoneNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>
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
    </>
  );
}

export default Employees;
