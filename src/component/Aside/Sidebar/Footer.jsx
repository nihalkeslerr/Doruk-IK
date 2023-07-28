import React from "react";
import avatar1 from "../../../assets/media/avatars/300-16.jpg";
function Footer() {
  return (
    <div
      classNameName="aside-footer d-flex flex-column align-items-center flex-column-auto sidebarFooter"
      id="kt_aside_footer"
    >
      <div
        className="d-flex align-items-center mb-10"
        id="kt_header_user_menu_toggle"
      >
        <div
          className="cursor-pointer symbol symbol-40px d-flex  justify-content-center align-items-center mb-0"
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-dismiss="click"
          title="User profile"
        >
          <img src={avatar1} alt="image" />
          <p className="mb-0 pl-1 cursor-pointer d-none d-lg-block ">Hesabım</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
