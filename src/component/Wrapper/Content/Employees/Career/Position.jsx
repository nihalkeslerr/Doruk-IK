import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "../../../../../assets/css/flags.css";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function Position({ props }) {
  const { id } = useParams();
  const [position, setposition] = useState();

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
      fetchPositionInfo(id);
    }
  }, [id]);
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
      cell: (row) => (
        <FontAwesomeIcon
          style={{ color: "#aeaeae" }}
          className=" settingEmp"
          icon={faEllipsisVertical}
          row={row}
        />
      ),
      allowOverflow: true,
      button: true,
      width: "56px",
    },
  ];
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

      {/* <table className=" w-100 ">
        <thead className="thead-dark">
          <tr>
            <td scope="col">Başlangıç</td>
            <td scope="col">Bitiş</td>
            <td scope="col">Çalışma Şekli</td>
            <td scope="col">Yönetici</td>
            <td scope="col">Şirket</td>
            <td scope="col">Şube</td>
            <td scope="col">Departman</td>
            <td scope="col">Unvan</td>
          </tr>
        </thead>
        <tbody>
          {position &&
            position.map((position) => (
              <tr>
                <td scope="row">{position.dateOfStart}</td>
                <td>{position.dateOfFinish}</td>
                <td>{position.jobType}</td>
                <td>{position.manager}</td>
                <td>{position.company}</td>
                <td>{position.branch}</td>
                <td>{position.department}</td>
                <td>{position.title}</td>
                <td>
                  <div className="d-flex settingEmp">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table> */}
    </>
  );
}

export default Position;
