import React from 'react'
import DataTable from "react-data-table-component";

function Rules() {
  const data = [
    {
      id: 1,
      name:"Örnek Türk İş Kanunu Kuralı ",
      typesOfPermissions:"13 tür",
      detail:"İzin kuralı ve türleri Türk İş Kanunu'nu temel almaktadır.",
      numberOfEmployees: "11 çalışan",
    },
  ];

  const columns = [
    {
      name: "İsim",
      selector: (row) => (row.name) ,
      sortable: true,
    },
    {
      name: "İzin Türleri",
      selector: (row) => row.typesOfPermissions,
      sortable: true,
    },
    {
      name: "Çalışan Sayısı ",
      selector: (row) => row.numberOfEmployees,
      sortable: true,
    },
    {
      name: "Açıklama ",
      selector: (row) => row.detail,
      sortable: true,
    }
  ];

  return (
    <>
     <div className="d-flex infoBtn justify-content-end">
            <button
              style={{ padding: "11px 60px !important" }}
            >
Yeni Kural Oluştur
            </button>
          </div>
    <div className="Tablee">
    <DataTable
      columns={columns}
      data={data}
      fixedHeader={true}
      style={{ width: "100%" }}
      pagination
    />
  </div></>
  )
}

export default Rules