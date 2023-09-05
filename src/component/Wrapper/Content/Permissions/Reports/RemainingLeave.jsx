import React from 'react'
import DataTable from "react-data-table-component";

function RemainingLeave() {
  const data = [
    {
      id: 1,
      firstName: "Nihal Selma",
      lastName: "KESLER",
      order: 1, // Sıra
      idNumber: "1234567890", // Kimlik Numarası
      company: "ABC Şirketi", // Şirket
      branch: "Ankara Şubesi", // Şube
      department: "İnsan Kaynakları", // Departman
      title: "İnsan Kaynakları Uzmanı", // Unvan
      dateOfStart: "01 Ocak 2022", // İşe Giriş Tarihi
      dateOfPaymentProgress: "01 Temmuz 2023", // İzne Esas Hak Ediş Tarihi
      extraPermission: "Evet", // Ekstra İzinler
      totalTransferLosses: 0, // Toplam Hak Edilen
      rolloverLosses: 0, // Devir Kayıpları
      leaveTransferCurrent: 0, // Güncel Döneme Devreden İzin Hakkı
      availableTransferLeave: 0, // Kullanılabilir Devreden İzin Hakkı
      recentlyDeserved: 0, // Son Dönemde Hak Edilen
      currentVestingPeriod: "2023", // Güncel Hak Ediş Dönemi
      leaveBeginningCurrent: 0, // Güncel Dönem Başındaki İzin Hakkı
      usedCurrentPeriod: 0, // Güncel Dönemde Kullanılan
      totalUsed: 0, // Toplam Kullanılan
      currentBalance: 0, // Güncel Bakiye
      postDatedPermits: "Hayır", // Güncel Dönemdeki İleri Tarihli İzinler
      dateOfnextLeaveProgress: "01 Ocak 2024", // Sonraki İzin Hak Ediş Tarihi
      approvedLeavesNextTerm: "Evet", // Sonraki Dönem İçin Onaylanmış İzinler
      dateRange: "01 Ağustos 2023 - 31 Ağustos 2023", // Tarih Aralığı
      balanceBeginningDateRange: 0, // Tarih Aralığı Başındaki Bakiye
      ApprovedPermissions: "Hayır", // Tarih Aralığı için Onaylanmış İzinler
      balanceatEndDateRange: 0, // Tarih Aralığı Sonundaki Bakiye
      permissionsPendingApproval: "Evet", // Tarih Aralığı için Onay Bekleyen İzinler
      workingStatus: "Aktif" // Çalışma Durumu
    },
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      order: 2, // Sıra
      idNumber: "9876543210", // Kimlik Numarası
      company: "XYZ Şirketi", // Şirket
      branch: "İstanbul Şubesi", // Şube
      department: "Finans", // Departman
      title: "Muhasebe Müdürü", // Unvan
      dateOfStart: "15 Şubat 2021", // İşe Giriş Tarihi
      dateOfPaymentProgress: "15 Temmuz 2023", // İzne Esas Hak Ediş Tarihi
      extraPermission: "Hayır", // Ekstra İzinler
      totalTransferLosses: 5, // Toplam Hak Edilen
      rolloverLosses: 2, // Devir Kayıpları
      leaveTransferCurrent: 3, // Güncel Döneme Devreden İzin Hakkı
      availableTransferLeave: 1, // Kullanılabilir Devreden İzin Hakkı
      recentlyDeserved: 4, // Son Dönemde Hak Edilen
      currentVestingPeriod: "2023", // Güncel Hak Ediş Dönemi
      leaveBeginningCurrent: 2, // Güncel Dönem Başındaki İzin Hakkı
      usedCurrentPeriod: 1, // Güncel Dönemde Kullanılan
      totalUsed: 3, // Toplam Kullanılan
      currentBalance: 1, // Güncel Bakiye
      postDatedPermits: "Evet", // Güncel Dönemdeki İleri Tarihli İzinler
      dateOfnextLeaveProgress: "15 Ocak 2024", // Sonraki İzin Hak Ediş Tarihi
      approvedLeavesNextTerm: "Evet", // Sonraki Dönem İçin Onaylanmış İzinler
      dateRange: "01 Eylül 2023 - 30 Eylül 2023", // Tarih Aralığı
      balanceBeginningDateRange: 2, // Tarih Aralığı Başındaki Bakiye
      ApprovedPermissions: "Evet", // Tarih Aralığı için Onaylanmış İzinler
      balanceatEndDateRange: 4, // Tarih Aralığı Sonundaki Bakiye
      permissionsPendingApproval: "Hayır", // Tarih Aralığı için Onay Bekleyen İzinler
      workingStatus: "Aktif" // Çalışma Durumu
    }
  ];
  

  const columns = [
    {
      name: "Sıra",
      selector: (row) => (row.order) ,
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
      name: "	Kimlik Numarası",
      selector: (row) => row.idNumber,
      sortable: true,
    },
    {
      name: "Şirket",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "Şube",
      selector: (row) => (row.branch) ,
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
      name: "	İşe Giriş Tarihi",
      selector: (row) => row.dateOfStart,
      sortable: true,
    },
    {
      name: "İzne Esas Hak Ediş Tarihi",
      selector: (row) => row.dateOfPaymentProgress,
      sortable: true,
      style:"normal"
    },
    {
      name: "Ekstra İzinler",
      selector: (row) => (row.extraPermission) ,
      sortable: true,
    },
    {
      name: "	Toplam Hak Edilen",
      selector: (row) => row.totalTransferLosses,
      sortable: true,
    },
    {
      name: "	Devir Kayıpları",
      selector: (row) => row.rolloverLosses,
      sortable: true,
    },
    {
      name: "Güncel Döneme Devreden İzin Hakkı",
      selector: (row) => row.leaveTransferCurrent ,
      sortable: true,
    },
    {
      name: "Kullanılabilir Devreden İzin Hakkı	",
      selector: (row) => row.availableTransferLeave,
      sortable: true,
    },
    {
      name: "Son Dönemde Hak Edilen",
      selector: (row) => (row.recentlyDeserved) ,
      sortable: true,
    },
    {
      name: "Güncel Hak Ediş Dönemi",
      selector: (row) => row.currentVestingPeriod,
      sortable: true,
    },
    {
      name: "	Güncel Dönem Başındaki İzin Hakkı",
      selector: (row) => row.leaveBeginningCurrent,
      sortable: true,
    },
    {
      name: "	Güncel Dönemde Kullanılan",
      selector: (row) => row.usedCurrentPeriod,
      sortable: true,
    },
    {
      name: "Toplam Kullanılan",
      selector: (row) => row.totalUsed,
      sortable: true,
    },
    {
      name: "Güncel Bakiye",
      selector: (row) => (row.currentBalance) ,
      sortable: true,
    },
    {
      name: "Güncel Dönemdeki İleri Tarihli İzinler",
      selector: (row) => row.postDatedPermits,
      sortable: true,
    },
    {
      name: "Sonraki İzin Hak Ediş Tarihi",
      selector: (row) => row.dateOfnextLeaveProgress,
      sortable: true,
    },
    {
      name: "Sonraki Dönem İçin Onaylanmış İzinler	",
      selector: (row) => row.approvedLeavesNextTerm,
      sortable: true,
    },
    {
      name: "Tarih Aralığı",
      selector: (row) => (row.dateRange) ,
      sortable: true,
    },
    {
      name: "Tarih Aralığı Başındaki Bakiye",
      selector: (row) => row.balanceBeginningDateRange,
      sortable: true,
    },
    {
      name: "	Tarih Aralığı için Onaylanmış İzinler",
      selector: (row) => row.ApprovedPermissions,
      sortable: true,
    },
    {
      name: "	Tarih Aralığı Sonundaki Bakiye",
      selector: (row) => row.balanceatEndDateRange,
      sortable: true,
    },
    {
      name: "Tarih Aralığı için Onay Bekleyen İzinler",
      selector: (row) => row.permissionsPendingApproval,
      sortable: true,
    },
    {
      name: "Çalışma Durumu",
      selector: (row) => (row.workingStatus) ,
      sortable: true,
    },
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

export default RemainingLeave