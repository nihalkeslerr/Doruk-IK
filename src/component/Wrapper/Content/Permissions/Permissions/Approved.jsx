import React from 'react'
import DataTable from "react-data-table-component";

function Approved() {
  const data = [
    {
      id: 1,
      firstName:"Melahat Şeyma",
      lastName:"KESLER",
      type:"Yıllık İzin",
      day:"24",
      start: "28 Ağustos 2023 09:00",
      finish:"30 Eylül 2023 18:00"
    },
  ];

  const columns = [
    {
      name: "Ad-Soyad",
      selector: (row) => (row.firstName + " " + row.lastName) ,
      sortable: true,
    },
    {
      name: "Türü",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Gün",
      selector: (row) => row.day,
      sortable: true,
    },
    {
      name: "Başlangıç",
      selector: (row) => row.start,
      sortable: true,
    },
    {
      name: "Bitiş",
      selector: (row) => row.finish,
      sortable: true,
    }
  ];

  return (
    <div className="Tablee">
    <DataTable
      columns={columns}
      data={data}
      fixedHeader={true}
      style={{ width: "100%" }}
      pagination
    />
  </div>
  )
}

export default Approved