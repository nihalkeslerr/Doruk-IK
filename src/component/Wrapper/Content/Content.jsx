import React from "react";
import PrivateRoutes from "../../../Routing/PrivateRoutes";
function Content() {
  return (
    <>
     <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
     <PrivateRoutes></PrivateRoutes>
    </div>
    </>
  );
}

export default Content;
