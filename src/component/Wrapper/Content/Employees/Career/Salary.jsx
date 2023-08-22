import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function Salary() {
  return (
    <>
        <table className=" w-100 ">
            <thead className="thead-dark">
              <tr>
                <td scope="col">Geçerlilik Başlangıç</td>
                <td scope="col">Tutar</td>
                <td scope="col">Ödeme Düzeni</td>
                <td scope="col">Ek Ödemeler</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">19 Haziran 2018</td>
                <td>2.700,00TL / Aylık</td>
                <td>Brüt</td>
                <td>-</td>
                <td>
                  {" "}
                  <div className="d-flex settingEmp">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
    </>
  )
}

export default Salary