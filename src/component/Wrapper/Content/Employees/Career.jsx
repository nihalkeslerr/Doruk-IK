import React from "react";

function Career() {
  return (
    <div>
      <div>
        <div className="permitMenu d-flex">
          <div>Pozisyon</div>
          <div>Maaş</div>
          <div>Çalışma Takvimleri</div>
        </div>

        <div>
        <table>
    <thead>
        <tr>
            <th>Başlangıç</th>
            <th>Bitiş</th>
            <th>Çalışma Şekli</th>
            <th>Yönetici</th>
            <th>Şirket</th>
            <th>Şube</th>
            <th>Departman</th>
            <th>Unvan</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>01.01.2020</td>
            <td>15.06.2021</td>
            <td>Tam Zamanlı</td>
            <td>Ahmet Yılmaz</td>
            <td>ABC Ltd.</td>
            <td>İstanbul</td>
            <td>Finans</td>
            <td>Muhasebeci</td>
        </tr>
    </tbody>
</table>

        </div>
        


      </div>
    </div>
  );
}

export default Career;
