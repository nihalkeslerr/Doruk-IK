import React from 'react'
import DataTable from "react-data-table-component";

function MonthlyLeave() {
    const data = [
        {
            order: 1,
            firstName: "John",
            lastName: "Doe",
            idNumber: "12345",
            typeOfLeave: "Annual",
            internalCode: "ABC123",
            dateOfStart: "2023-09-01",
            dateOfFinish: "2023-09-05",
            numberOfDaysUsed: 5,
            detail: "Annual leave request",
            approvalStatus: "Approved",
            signed: "signed",
          },
          {
            order: 2,
            firstName: "Alice",
            lastName: "Smith",
            idNumber: "67890",
            typeOfLeave: "Sick",
            internalCode: "XYZ789",
            dateOfStart: "2023-08-15",
            dateOfFinish: "2023-08-18",
            numberOfDaysUsed: 4,
            detail: "Sick leave request",
            approvalStatus: "Pending",
            signed: "Not Signed",
          },
          {
            order: 3,
            firstName: "David",
            lastName: "Johnson",
            idNumber: "54321",
            typeOfLeave: "Maternity",
            internalCode: "MNO456",
            dateOfStart: "2023-10-10",
            dateOfFinish: "2023-11-10",
            numberOfDaysUsed: 32,
            detail: "Maternity leave request",
            approvalStatus: "Rejected",
            signed: "Not Signed",
          },
      ];
      const columns = [
        {
          name: "Sıra",
          selector: (row) => (row.order),
          sortable: true,
        },
        {
          name: "Ad",
          selector: (row) => row.firstName,
          sortable: true,
        },
        {
          name: "Soyad",
          selector: (row) => row.lastName,
          sortable: true,
        },
        {
          name: "Kimlik Numarası",
          selector: (row) => row.idNumber,
          sortable: true,
        },
        {
          name: "İzin Türü",
          selector: (row) => row.typeOfLeave,
          sortable: true,
        },
        {
          name: "Dahili Kod",
          selector: (row) => row.internalCode,
          sortable: true,
        },
        {
          name: "Başlangıç Tarihi",
          selector: (row) => row.dateOfStart,
          sortable: true,
        },
        {
          name: "Bitiş Tarihi",
          selector: (row) => row.dateOfFinish,
          sortable: true,
        },
        {
          name: "Kullanılan Gün Sayısı",
          selector: (row) => row.numberOfDaysUsed,
          sortable: true,
        },
        {
          name: "Açıklama",
          selector: (row) => row.detail,
          sortable: true,
        },
        {
          name: "Onay Durumu",
          selector: (row) => row.approvalStatus,
          sortable: true,
        },
        {
          name: "İmzalı",
          selector: (row) => row.signed,
          sortable: true,
        },
      ];
      
    
      return (
        <>
        
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

export default MonthlyLeave