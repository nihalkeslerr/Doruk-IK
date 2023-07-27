import React from "react";
import dropdownHeaderBg from "../../assets/media/misc/dropdown-header-bg.png";
import unitedStates from "../../assets/media/flags/united-states.svg";
import avatar1 from "../../assets/media/avatars/300-16.jpg";
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
            className="cursor-pointer symbol symbol-40px"
            data-kt-menu-trigger="click"
            data-kt-menu-overflow="true"
            data-kt-menu-placement="top-start"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-dismiss="click"
            title="User profile"
          >
            <img src={avatar1} alt="image" />
          </div>

        </div>
    </div>
  );
}

export default Footer;
