import React from 'react'

function Main() {
  return (
    <div
      className="content d-flex flex-column flex-column-fluid"
      id="kt_content"
    >
        <div className="d-flex d-lg-none align-items-start justify-content-start mb-5" style={{marginLeft:"15px"}} data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}">
            {" "}
            <h1 className="text-dark fw-bold my-0 fs-1">Pano</h1>
          </div>
      <div className="container-xxl" id="kt_content_container">
        <div className="row gy-5 g-xxl-8">
          <div className="col-xxl-4">
            <div className="card card-xl-stretch mb-0 mb-xxl-8">
              <div className="card-header border-0 bg-primary py-5">
                <h3 className="card-title fw-bold text-white">
                  Sales Progress
                </h3>
                <div className="card-toolbar">
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color- border-0 me-n3"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="ki-duotone ki-category fs-6">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                    </i>
                  </button>
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                        Payments
                      </div>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Create Invoice
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link flex-stack px-3">
                        Create Payment
                        <span
                          className="ms-2"
                          data-bs-toggle="tooltip"
                          title="Specify a target name for future usage and reference"
                        >
                          <i className="ki-duotone ki-information fs-6">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </span>
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Generate Bill
                      </a>
                    </div>
                    <div
                      className="menu-item px-3"
                      data-kt-menu-trigger="hover"
                      data-kt-menu-placement="right-end"
                    >
                      <a href="#" className="menu-link px-3">
                        <span className="menu-title">Subscription</span>
                        <span className="menu-arrow"></span>
                      </a>
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Plans
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Billing
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Statements
                          </a>
                        </div>
                        <div className="separator my-2"></div>
                        <div className="menu-item px-3">
                          <div className="menu-content px-3">
                            <label className="form-check form-switch form-check-custom form-check-solid">
                              <input
                                className="form-check-input w-30px h-20px"
                                type="checkbox"
                                value="1"
                                checked="checked"
                                name="notifications"
                              />
                              <span className="form-check-label text-muted fs-6">
                                Recuring
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item px-3 my-1">
                      <a href="#" className="menu-link px-3">
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div
                  className="mixed-widget-12-chart card-rounded-bottom bg-primary"
                  data-kt-color="primary"
                  style={{ height: "250px" }}
                ></div>
                <div className="card-rounded bg-body mt-n10 position-relative card-px py-15">
                  <div className="row g-0 mb-7">
                    <div className="col mx-5">
                      <div className="fs-6 text-gray-400">Avarage Sale</div>
                      <div className="fs-2 fw-bold text-gray-800">$650</div>
                    </div>
                    <div className="col mx-5">
                      <div className="fs-6 text-gray-400">Comissions</div>
                      <div className="fs-2 fw-bold text-gray-800">$29,500</div>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col mx-5">
                      <div className="fs-6 text-gray-400">Revenue</div>
                      <div className="fs-2 fw-bold text-gray-800">$55,000</div>
                    </div>
                    <div className="col mx-5">
                      <div className="fs-6 text-gray-400">Expenses</div>
                      <div className="fs-2 fw-bold text-gray-800">
                        $1,130,600
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-8">
            <div className="card card-xxl-stretch mb-5 mb-xl-8">
              <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bold fs-3 mb-1">
                    Members Statistics
                  </span>
                  <span className="text-muted mt-1 fw-semibold fs-7">
                    Over 500 members
                  </span>
                </h3>
                <div
                  className="card-toolbar"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-trigger="hover"
                  title="Click to add a user"
                >
                  <a
                    href="#"
                    className="btn btn-sm btn-light btn-active-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_invite_friends"
                  >
                    <i className="ki-duotone ki-plus fs-2"></i>New Member
                  </a>
                </div>
              </div>
              <div className="card-body py-3">
                <div className="table-responsive">
                  <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                    <thead>
                      <tr className="fw-bold text-muted">
                        <th className="w-25px">
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="1"
                              data-kt-check="true"
                              data-kt-check-target=".widget-9-check"
                            />
                          </div>
                        </th>
                        <th className="min-w-200px">Authors</th>
                        <th className="min-w-150px">Company</th>
                        <th className="min-w-150px">Progress</th>
                        <th className="min-w-100px text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input widget-9-check"
                              type="checkbox"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-45px me-5">
                              <img
                                src="assets/media/avatars/300-14.jpg"
                                alt=""
                              />
                            </div>
                            <div className="d-flex justify-content-start flex-column">
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary fs-6"
                              >
                                Ana Simmons
                              </a>
                              <span className="text-muted fw-semibold text-muted d-block fs-7">
                                HTML, JS, ReactJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary d-block fs-6"
                          >
                            Intertico
                          </a>
                          <span className="text-muted fw-semibold text-muted d-block fs-7">
                            Web, UI/UX Design
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="d-flex flex-column w-100 me-2">
                            <div className="d-flex flex-stack mb-2">
                              <span className="text-muted me-2 fs-7 fw-bold">
                                50%
                              </span>
                            </div>
                            <div className="progress h-6px w-100">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end flex-shrink-0">
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-switch fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-pencil fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            >
                              <i className="ki-duotone ki-trash fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                              </i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input widget-9-check"
                              type="checkbox"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-45px me-5">
                              <img
                                src="assets/media/avatars/300-2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="d-flex justify-content-start flex-column">
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary fs-6"
                              >
                                Jessie Clarcson
                              </a>
                              <span className="text-muted fw-semibold text-muted d-block fs-7">
                                C#, ASP.NET, MS SQL
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary d-block fs-6"
                          >
                            Agoda
                          </a>
                          <span className="text-muted fw-semibold text-muted d-block fs-7">
                            Houses & Hotels
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="d-flex flex-column w-100 me-2">
                            <div className="d-flex flex-stack mb-2">
                              <span className="text-muted me-2 fs-7 fw-bold">
                                70%
                              </span>
                            </div>
                            <div className="progress h-6px w-100">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "70%" }}
                                aria-valuenow="70"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end flex-shrink-0">
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-switch fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-pencil fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            >
                              <i className="ki-duotone ki-trash fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                              </i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input widget-9-check"
                              type="checkbox"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-45px me-5">
                              <img
                                src="assets/media/avatars/300-5.jpg"
                                alt=""
                              />
                            </div>
                            <div className="d-flex justify-content-start flex-column">
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary fs-6"
                              >
                                Lebron Wayde
                              </a>
                              <span className="text-muted fw-semibold text-muted d-block fs-7">
                                PHP, Laravel, VueJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary d-block fs-6"
                          >
                            RoadGee
                          </a>
                          <span className="text-muted fw-semibold text-muted d-block fs-7">
                            Transportation
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="d-flex flex-column w-100 me-2">
                            <div className="d-flex flex-stack mb-2">
                              <span className="text-muted me-2 fs-7 fw-bold">
                                60%
                              </span>
                            </div>
                            <div className="progress h-6px w-100">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: " 60%" }}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end flex-shrink-0">
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-switch fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-pencil fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            >
                              <i className="ki-duotone ki-trash fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                              </i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input widget-9-check"
                              type="checkbox"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-45px me-5">
                              <img
                                src="assets/media/avatars/300-20.jpg"
                                alt=""
                              />
                            </div>
                            <div className="d-flex justify-content-start flex-column">
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary fs-6"
                              >
                                Natali Goodwin
                              </a>
                              <span className="text-muted fw-semibold text-muted d-block fs-7">
                                Python, PostgreSQL, ReactJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary d-block fs-6"
                          >
                            The Hill
                          </a>
                          <span className="text-muted fw-semibold text-muted d-block fs-7">
                            Insurance
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="d-flex flex-column w-100 me-2">
                            <div className="d-flex flex-stack mb-2">
                              <span className="text-muted me-2 fs-7 fw-bold">
                                50%
                              </span>
                            </div>
                            <div className="progress h-6px w-100">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: " 50%" }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end flex-shrink-0">
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-switch fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-pencil fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            >
                              <i className="ki-duotone ki-trash fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                              </i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input widget-9-check"
                              type="checkbox"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-45px me-5">
                              <img
                                src="assets/media/avatars/300-23.jpg"
                                alt=""
                              />
                            </div>
                            <div className="d-flex justify-content-start flex-column">
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary fs-6"
                              >
                                Kevin Leonard
                              </a>
                              <span className="text-muted fw-semibold text-muted d-block fs-7">
                                HTML, JS, ReactJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary d-block fs-6"
                          >
                            RoadGee
                          </a>
                          <span className="text-muted fw-semibold text-muted d-block fs-7">
                            Art Director
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="d-flex flex-column w-100 me-2">
                            <div className="d-flex flex-stack mb-2">
                              <span className="text-muted me-2 fs-7 fw-bold">
                                90%
                              </span>
                            </div>
                            <div className="progress h-6px w-100">
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: " 90%" }}
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end flex-shrink-0">
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-switch fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-pencil fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            >
                              <i className="ki-duotone ki-trash fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                              </i>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-5 g-xl-8">
          <div className="col-xxl-4">
            <div className="card card-xxl-stretch-50 mb-5 mb-xl-8">
              <div className="card-body p-0">
                <div className="d-flex flex-stack card-p flex-grow-1">
                  <span className="symbol symbol-circle symbol-50px me-2">
                    <span className="symbol-label bg-light-danger">
                      <i className="ki-duotone ki-element-11 fs-2x text-danger">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                      </i>
                    </span>
                  </span>
                  <div className="d-flex flex-column text-end">
                    <span className="text-dark fw-bold fs-2">750$</span>
                    <span className="text-muted fw-semibold mt-1">
                      Weekly Income
                    </span>
                  </div>
                </div>
                <div
                  className="statistics-widget-4-chart card-rounded-bottom"
                  data-kt-chart-color="danger"
                  style={{ height: " 150px" }}
                ></div>
              </div>
            </div>
            <div className="card card-xxl-stretch-50 mb-xxl-8">
              <div className="card-body p-0">
                <div className="d-flex flex-stack card-p flex-grow-1">
                  <span className="symbol symbol-circle symbol-50px me-2">
                    <span className="symbol-label bg-light-success">
                      <i className="ki-duotone ki-basket fs-2x text-success">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                      </i>
                    </span>
                  </span>
                  <div className="d-flex flex-column text-end">
                    <span className="text-dark fw-bold fs-2">+259</span>
                    <span className="text-muted fw-semibold mt-1">
                      Sales Change
                    </span>
                  </div>
                </div>
                <div
                  className="statistics-widget-4-chart card-rounded-bottom"
                  data-kt-chart-color="success"
                  style={{ height: " 150px" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4">
            <div className="card card-xxl-stretch mb-xxl-8">
              <div className="card-header align-items-center border-0 mt-3">
                <h3 className="card-title align-items-start flex-column">
                  <span className="fw-bold text-dark fs-3">My Competitors</span>
                  <span className="text-gray-400 mt-2 fw-semibold fs-6">
                    More than 400+ new members
                  </span>
                </h3>
                <div className="card-toolbar">
                  <button
                    type="button"
                    className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="ki-duotone ki-category fs-6 text-primary">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                    </i>
                  </button>
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                        Quick Actions
                      </div>
                    </div>
                    <div className="separator mb-3 opacity-75"></div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        New Ticket
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        New Customer
                      </a>
                    </div>
                    <div
                      className="menu-item px-3"
                      data-kt-menu-trigger="hover"
                      data-kt-menu-placement="right-start"
                    >
                      <a href="#" className="menu-link px-3">
                        <span className="menu-title">New Group</span>
                        <span className="menu-arrow"></span>
                      </a>
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Admin Group
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Staff Group
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Member Group
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        New Contact
                      </a>
                    </div>
                    <div className="separator mt-3 opacity-75"></div>
                    <div className="menu-item px-3">
                      <div className="menu-content px-3 py-3">
                        <a className="btn btn-primary btn-sm px-4" href="#">
                          Generate Reports
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-5">
                <div className="d-flex mb-7">
                  <div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
                    <img
                      src="assets/media/stock/600x400/img-3.jpg"
                      className="mw-100"
                      alt=""
                    />
                  </div>
                  <div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
                    <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                      <a
                        href="#"
                        className="fs-5 text-gray-800 text-hover-primary fw-bold"
                      >
                        Cup & Green
                      </a>
                      <span className="text-gray-400 fw-semibold fs-7 my-1">
                        Study highway types
                      </span>
                      <span className="text-gray-400 fw-semibold fs-7">
                        By:
                        <a href="#" className="text-primary fw-bold">
                          CoreAd
                        </a>
                      </span>
                    </div>
                    <div className="text-end py-lg-0 py-2">
                      <span className="text-gray-800 fw-bolder fs-3">
                        24,900
                      </span>
                      <span className="text-gray-400 fs-7 fw-semibold d-block">
                        Sales
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex mb-7">
                  <div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
                    <img
                      src="assets/media/stock/600x400/img-4.jpg"
                      className="mw-100"
                      alt=""
                    />
                  </div>
                  <div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
                    <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                      <a
                        href="#"
                        className="fs-5 text-gray-800 text-hover-primary fw-bold"
                      >
                        Yellow Hearts
                      </a>
                      <span className="text-gray-400 fw-semibold fs-7 my-1">
                        Study highway types
                      </span>
                      <span className="text-gray-400 fw-semibold fs-7">
                        By:
                        <a href="#" className="text-primary fw-bold">
                          KeenThemes
                        </a>
                      </span>
                    </div>
                    <div className="text-end py-lg-0 py-2">
                      <span className="text-gray-800 fw-bolder fs-3">
                        70,380
                      </span>
                      <span className="text-gray-400 fs-7 fw-semibold d-block">
                        Sales
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex mb-7">
                  <div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
                    <img
                      src="assets/media/stock/600x400/img-5.jpg"
                      className="mw-100"
                      alt=""
                    />
                  </div>
                  <div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
                    <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                      <a
                        href="#"
                        className="fs-5 text-gray-800 text-hover-primary fw-bold"
                      >
                        Nike & Blue
                      </a>
                      <span className="text-gray-400 fw-semibold fs-7 my-1">
                        Study highway types
                      </span>
                      <span className="text-gray-400 fw-semibold fs-7">
                        By:
                        <a href="#" className="text-primary fw-bold">
                          Invision Inc.
                        </a>
                      </span>
                    </div>
                    <div className="text-end py-lg-0 py-2">
                      <span className="text-gray-800 fw-bolder fs-3">
                        7,200
                      </span>
                      <span className="text-gray-400 fs-7 fw-semibold d-block">
                        Sales
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex mb-7">
                  <div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
                    <img
                      src="assets/media/stock/600x400/img-6.jpg"
                      className="mw-100"
                      alt=""
                    />
                  </div>
                  <div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
                    <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                      <a
                        href="#"
                        className="fs-5 text-gray-800 text-hover-primary fw-bold"
                      >
                        Red Boots
                      </a>
                      <span className="text-gray-400 fw-semibold fs-7 my-1">
                        Study highway types
                      </span>
                      <span className="text-gray-400 fw-semibold fs-7">
                        By:
                        <a href="#" className="text-primary fw-bold">
                          Figma Studio
                        </a>
                      </span>
                    </div>
                    <div className="text-end py-lg-0 py-2">
                      <span className="text-gray-800 fw-bolder fs-3">
                        36,450
                      </span>
                      <span className="text-gray-400 fs-7 fw-semibold d-block">
                        Sales
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
                    <img
                      src="assets/media/stock/600x400/img-7.jpg"
                      className="mw-100"
                      alt=""
                    />
                  </div>
                  <div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
                    <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                      <a
                        href="#"
                        className="fs-5 text-gray-800 text-hover-primary fw-bold"
                      >
                        Desserts platter
                      </a>
                      <span className="text-gray-400 fw-semibold fs-7 my-1">
                        Food trends & reviews
                      </span>
                      <span className="text-gray-400 fw-semibold fs-7">
                        By:
                        <a href="#" className="text-primary fw-bold">
                          Figma Studio
                        </a>
                      </span>
                    </div>
                    <div className="text-end py-lg-0 py-2">
                      <span className="text-gray-800 fw-bolder fs-3">
                        64,753
                      </span>
                      <span className="text-gray-400 fs-7 fw-semibold d-block">
                        Sales
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4">
            <div className="card card-xxl-stretch mb-5 mb-xl-8">
              <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bold text-dark">Trends</span>
                  <span className="text-muted mt-1 fw-semibold fs-7">
                    Latest tech trends
                  </span>
                </h3>
                <div className="card-toolbar">
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="ki-duotone ki-category fs-6">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                    </i>
                  </button>
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                        Payments
                      </div>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Create Invoice
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link flex-stack px-3">
                        Create Payment
                        <span
                          className="ms-2"
                          data-bs-toggle="tooltip"
                          title="Specify a target name for future usage and reference"
                        >
                          <i className="ki-duotone ki-information fs-6">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </span>
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Generate Bill
                      </a>
                    </div>
                    <div
                      className="menu-item px-3"
                      data-kt-menu-trigger="hover"
                      data-kt-menu-placement="right-end"
                    >
                      <a href="#" className="menu-link px-3">
                        <span className="menu-title">Subscription</span>
                        <span className="menu-arrow"></span>
                      </a>
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Plans
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Billing
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Statements
                          </a>
                        </div>
                        <div className="separator my-2"></div>
                        <div className="menu-item px-3">
                          <div className="menu-content px-3">
                            <label className="form-check form-switch form-check-custom form-check-solid">
                              <input
                                className="form-check-input w-30px h-20px"
                                type="checkbox"
                                value="1"
                                checked="checked"
                                name="notifications"
                              />
                              <span className="form-check-label text-muted fs-6">
                                Recuring
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item px-3 my-1">
                      <a href="#" className="menu-link px-3">
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-5">
                <div className="d-flex align-items-sm-center mb-7">
                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img
                        src="assets/media/svg/brand-logos/plurk.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a
                        href="#"
                        className="text-gray-800 text-hover-primary fs-6 fw-bold"
                      >
                        Top Authors
                      </a>
                      <span className="text-muted fw-semibold d-block fs-7">
                        Mark, Rowling, Esther
                      </span>
                    </div>
                    <span className="badge badge-light fw-bold my-2">+82$</span>
                  </div>
                </div>
                <div className="d-flex align-items-sm-center mb-7">
                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img
                        src="assets/media/svg/brand-logos/telegram.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a
                        href="#"
                        className="text-gray-800 text-hover-primary fs-6 fw-bold"
                      >
                        Popular Authors
                      </a>
                      <span className="text-muted fw-semibold d-block fs-7">
                        Randy, Steve, Mike
                      </span>
                    </div>
                    <span className="badge badge-light fw-bold my-2">
                      +280$
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-sm-center mb-7">
                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img
                        src="assets/media/svg/brand-logos/vimeo.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a
                        href="#"
                        className="text-gray-800 text-hover-primary fs-6 fw-bold"
                      >
                        New Users
                      </a>
                      <span className="text-muted fw-semibold d-block fs-7">
                        John, Pat, Jimmy
                      </span>
                    </div>
                    <span className="badge badge-light fw-bold my-2">
                      +4500$
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-sm-center mb-7">
                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img
                        src="assets/media/svg/brand-logos/bebo.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a
                        href="#"
                        className="text-gray-800 text-hover-primary fs-6 fw-bold"
                      >
                        Active Customers
                      </a>
                      <span className="text-muted fw-semibold d-block fs-7">
                        Mark, Rowling, Esther
                      </span>
                    </div>
                    <span className="badge badge-light fw-bold my-2">
                      +686$
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-sm-center mb-7">
                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img
                        src="assets/media/svg/brand-logos/kickstarter.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a
                        href="#"
                        className="text-gray-800 text-hover-primary fs-6 fw-bold"
                      >
                        Bestseller Theme
                      </a>
                      <span className="text-muted fw-semibold d-block fs-7">
                        Disco, Retro, Sports
                      </span>
                    </div>
                    <span className="badge badge-light fw-bold my-2">
                      +726$
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-sm-center">
                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img
                        src="assets/media/svg/brand-logos/fox-hub.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a
                        href="#"
                        className="text-gray-800 text-hover-primary fs-6 fw-bold"
                      >
                        Fox Broker App
                      </a>
                      <span className="text-muted fw-semibold d-block fs-7">
                        Finance, Corporate, Apps
                      </span>
                    </div>
                    <span className="badge badge-light fw-bold my-2">
                      +145$
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-5 g-xl-8">
          <div className="col-xxl-4">
            <div className="card card-xxl-stretch mb-xxl-3">
              <div className="card-header border-0">
                <h3 className="card-title fw-bold text-dark">Todo</h3>
                <div className="card-toolbar">
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="ki-duotone ki-category fs-6">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                    </i>
                  </button>
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                        Payments
                      </div>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Create Invoice
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link flex-stack px-3">
                        Create Payment
                        <span
                          className="ms-2"
                          data-bs-toggle="tooltip"
                          title="Specify a target name for future usage and reference"
                        >
                          <i className="ki-duotone ki-information fs-6">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </span>
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Generate Bill
                      </a>
                    </div>
                    <div
                      className="menu-item px-3"
                      data-kt-menu-trigger="hover"
                      data-kt-menu-placement="right-end"
                    >
                      <a href="#" className="menu-link px-3">
                        <span className="menu-title">Subscription</span>
                        <span className="menu-arrow"></span>
                      </a>
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Plans
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Billing
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Statements
                          </a>
                        </div>
                        <div className="separator my-2"></div>
                        <div className="menu-item px-3">
                          <div className="menu-content px-3">
                            <label className="form-check form-switch form-check-custom form-check-solid">
                              <input
                                className="form-check-input w-30px h-20px"
                                type="checkbox"
                                value="1"
                                checked="checked"
                                name="notifications"
                              />
                              <span className="form-check-label text-muted fs-6">
                                Recuring
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item px-3 my-1">
                      <a href="#" className="menu-link px-3">
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-2">
                <div className="d-flex align-items-center mb-8">
                  <span className="bullet bullet-vertical h-40px bg-success"></span>
                  <div className="form-check form-check-custom form-check-solid mx-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                    >
                      Create FireStone Logo
                    </a>
                    <span className="text-muted fw-semibold d-block">
                      Due in 2 Days
                    </span>
                  </div>
                  <span className="badge badge-light-success fs-8 fw-bold">
                    New
                  </span>
                </div>
                <div className="d-flex align-items-center mb-8">
                  <span className="bullet bullet-vertical h-40px bg-primary"></span>
                  <div className="form-check form-check-custom form-check-solid mx-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                    >
                      Stakeholder Meeting
                    </a>
                    <span className="text-muted fw-semibold d-block">
                      Due in 3 Days
                    </span>
                  </div>
                  <span className="badge badge-light-primary fs-8 fw-bold">
                    New
                  </span>
                </div>
                <div className="d-flex align-items-center mb-8">
                  <span className="bullet bullet-vertical h-40px bg-warning"></span>
                  <div className="form-check form-check-custom form-check-solid mx-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                    >
                      Scoping & Estimations
                    </a>
                    <span className="text-muted fw-semibold d-block">
                      Due in 5 Days
                    </span>
                  </div>
                  <span className="badge badge-light-warning fs-8 fw-bold">
                    New
                  </span>
                </div>
                <div className="d-flex align-items-center mb-8">
                  <span className="bullet bullet-vertical h-40px bg-primary"></span>
                  <div className="form-check form-check-custom form-check-solid mx-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                    >
                      KPI App Showcase
                    </a>
                    <span className="text-muted fw-semibold d-block">
                      Due in 2 Days
                    </span>
                  </div>
                  <span className="badge badge-light-primary fs-8 fw-bold">
                    New
                  </span>
                </div>
                <div className="d-flex align-items-center mb-8">
                  <span className="bullet bullet-vertical h-40px bg-danger"></span>
                  <div className="form-check form-check-custom form-check-solid mx-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                    >
                      Project Meeting
                    </a>
                    <span className="text-muted fw-semibold d-block">
                      Due in 12 Days
                    </span>
                  </div>
                  <span className="badge badge-light-danger fs-8 fw-bold">
                    New
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="bullet bullet-vertical h-40px bg-success"></span>
                  <div className="form-check form-check-custom form-check-solid mx-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                    >
                      Customers Update
                    </a>
                    <span className="text-muted fw-semibold d-block">
                      Due in 1 week
                    </span>
                  </div>
                  <span className="badge badge-light-success fs-8 fw-bold">
                    New
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-8">
            <div className="card card-xxl-stretch mb-5 mb-xl-8">
              <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bold fs-3 mb-1">
                    Members Statistics
                  </span>
                  <span className="text-muted mt-1 fw-semibold fs-7">
                    Over 500 members
                  </span>
                </h3>
                <div
                  className="card-toolbar"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-trigger="hover"
                  title="Click to add a user"
                >
                  <a
                    href="#"
                    className="btn btn-sm btn-light btn-active-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_invite_friends"
                  >
                    <i className="ki-duotone ki-plus fs-2"></i>New Member
                  </a>
                </div>
              </div>
              <div className="card-body py-3">
                <div className="table-responsive">
                  <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                    <thead>
                      <tr className="fw-bold text-muted">
                        <th className="w-25px">
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="1"
                              data-kt-check="true"
                              data-kt-check-target=".widget-9-check"
                            />
                          </div>
                        </th>
                        <th className="min-w-200px">Authors</th>
                        <th className="min-w-150px">Company</th>
                        <th className="min-w-150px">Progress</th>
                        <th className="min-w-100px text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input widget-9-check"
                              type="checkbox"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-45px me-5">
                              <img
                                src="assets/media/avatars/300-14.jpg"
                                alt=""
                              />
                            </div>
                            <div className="d-flex justify-content-start flex-column">
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary fs-6"
                              >
                                Ana Simmons
                              </a>
                              <span className="text-muted fw-semibold text-muted d-block fs-7">
                                HTML, JS, ReactJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary d-block fs-6"
                          >
                            Intertico
                          </a>
                          <span className="text-muted fw-semibold text-muted d-block fs-7">
                            Web, UI/UX Design
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="d-flex flex-column w-100 me-2">
                            <div className="d-flex flex-stack mb-2">
                              <span className="text-muted me-2 fs-7 fw-bold">
                                50%
                              </span>
                            </div>
                            <div className="progress h-6px w-100">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: " 50%" }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end flex-shrink-0">
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-switch fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-pencil fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            >
                              <i className="ki-duotone ki-trash fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                              </i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input widget-9-check"
                              type="checkbox"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-45px me-5">
                              <img
                                src="assets/media/avatars/300-2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="d-flex justify-content-start flex-column">
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary fs-6"
                              >
                                Jessie Clarcson
                              </a>
                              <span className="text-muted fw-semibold text-muted d-block fs-7">
                                C#, ASP.NET, MS SQL
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary d-block fs-6"
                          >
                            Agoda
                          </a>
                          <span className="text-muted fw-semibold text-muted d-block fs-7">
                            Houses & Hotels
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="d-flex flex-column w-100 me-2">
                            <div className="d-flex flex-stack mb-2">
                              <span className="text-muted me-2 fs-7 fw-bold">
                                70%
                              </span>
                            </div>
                            <div className="progress h-6px w-100">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "70%" }}
                                aria-valuenow="70"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end flex-shrink-0">
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-switch fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-pencil fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            >
                              <i className="ki-duotone ki-trash fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                              </i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input widget-9-check"
                              type="checkbox"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-45px me-5">
                              <img
                                src="assets/media/avatars/300-5.jpg"
                                alt=""
                              />
                            </div>
                            <div className="d-flex justify-content-start flex-column">
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary fs-6"
                              >
                                Lebron Wayde
                              </a>
                              <span className="text-muted fw-semibold text-muted d-block fs-7">
                                PHP, Laravel, VueJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary d-block fs-6"
                          >
                            RoadGee
                          </a>
                          <span className="text-muted fw-semibold text-muted d-block fs-7">
                            Transportation
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="d-flex flex-column w-100 me-2">
                            <div className="d-flex flex-stack mb-2">
                              <span className="text-muted me-2 fs-7 fw-bold">
                                60%
                              </span>
                            </div>
                            <div className="progress h-6px w-100">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: " 60%" }}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end flex-shrink-0">
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-switch fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-pencil fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            >
                              <i className="ki-duotone ki-trash fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                              </i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input widget-9-check"
                              type="checkbox"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-45px me-5">
                              <img
                                src="assets/media/avatars/300-20.jpg"
                                alt=""
                              />
                            </div>
                            <div className="d-flex justify-content-start flex-column">
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary fs-6"
                              >
                                Natali Goodwin
                              </a>
                              <span className="text-muted fw-semibold text-muted d-block fs-7">
                                Python, PostgreSQL, ReactJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary d-block fs-6"
                          >
                            The Hill
                          </a>
                          <span className="text-muted fw-semibold text-muted d-block fs-7">
                            Insurance
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="d-flex flex-column w-100 me-2">
                            <div className="d-flex flex-stack mb-2">
                              <span className="text-muted me-2 fs-7 fw-bold">
                                50%
                              </span>
                            </div>
                            <div className="progress h-6px w-100">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: " 50%" }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end flex-shrink-0">
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-switch fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-pencil fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            >
                              <i className="ki-duotone ki-trash fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                              </i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input widget-9-check"
                              type="checkbox"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-45px me-5">
                              <img
                                src="assets/media/avatars/300-23.jpg"
                                alt=""
                              />
                            </div>
                            <div className="d-flex justify-content-start flex-column">
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary fs-6"
                              >
                                Kevin Leonard
                              </a>
                              <span className="text-muted fw-semibold text-muted d-block fs-7">
                                HTML, JS, ReactJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary d-block fs-6"
                          >
                            RoadGee
                          </a>
                          <span className="text-muted fw-semibold text-muted d-block fs-7">
                            Art Director
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="d-flex flex-column w-100 me-2">
                            <div className="d-flex flex-stack mb-2">
                              <span className="text-muted me-2 fs-7 fw-bold">
                                90%
                              </span>
                            </div>
                            <div className="progress h-6px w-100">
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: " 90%" }}
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end flex-shrink-0">
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-switch fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="ki-duotone ki-pencil fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            >
                              <i className="ki-duotone ki-trash fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                              </i>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-5 g-xl-8">
          <div className="col-xl-4">
            <div className="card card-xl-stretch mb-xl-8">
              <div className="card-header border-0">
                <h3 className="card-title fw-bold text-dark">Authors</h3>
                <div className="card-toolbar">
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="ki-duotone ki-category fs-6">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                    </i>
                  </button>
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                        Quick Actions
                      </div>
                    </div>
                    <div className="separator mb-3 opacity-75"></div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        New Ticket
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        New Customer
                      </a>
                    </div>
                    <div
                      className="menu-item px-3"
                      data-kt-menu-trigger="hover"
                      data-kt-menu-placement="right-start"
                    >
                      <a href="#" className="menu-link px-3">
                        <span className="menu-title">New Group</span>
                        <span className="menu-arrow"></span>
                      </a>
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Admin Group
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Staff Group
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Member Group
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        New Contact
                      </a>
                    </div>
                    <div className="separator mt-3 opacity-75"></div>
                    <div className="menu-item px-3">
                      <div className="menu-content px-3 py-3">
                        <a className="btn btn-primary btn-sm px-4" href="#">
                          Generate Reports
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-2">
                <div className="d-flex align-items-center mb-7">
                  <div className="symbol symbol-50px me-5">
                    <img
                      src="assets/media/avatars/300-6.jpg"
                      className=""
                      alt=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <a
                      href="#"
                      className="text-dark fw-bold text-hover-primary fs-6"
                    >
                      Emma Smith
                    </a>
                    <span className="text-muted d-block fw-bold">
                      Project Manager
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-7">
                  <div className="symbol symbol-50px me-5">
                    <img
                      src="assets/media/avatars/300-5.jpg"
                      className=""
                      alt=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <a
                      href="#"
                      className="text-dark fw-bold text-hover-primary fs-6"
                    >
                      Sean Bean
                    </a>
                    <span className="text-muted d-block fw-bold">
                      PHP, SQLite, Artisan CLI
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-7">
                  <div className="symbol symbol-50px me-5">
                    <img
                      src="assets/media/avatars/300-11.jpg"
                      className=""
                      alt=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <a
                      href="#"
                      className="text-dark fw-bold text-hover-primary fs-6"
                    >
                      Brian Cox
                    </a>
                    <span className="text-muted d-block fw-bold">
                      PHP, SQLite, Artisan CLI
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-7">
                  <div className="symbol symbol-50px me-5">
                    <img
                      src="assets/media/avatars/300-9.jpg"
                      className=""
                      alt=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <a
                      href="#"
                      className="text-dark fw-bold text-hover-primary fs-6"
                    >
                      Francis Mitcham
                    </a>
                    <span className="text-muted d-block fw-bold">
                      PHP, SQLite, Artisan CLI
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="symbol symbol-50px me-5">
                    <img
                      src="assets/media/avatars/300-23.jpg"
                      className=""
                      alt=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <a
                      href="#"
                      className="text-dark fw-bold text-hover-primary fs-6"
                    >
                      Dan Wilson
                    </a>
                    <span className="text-muted d-block fw-bold">
                      PHP, SQLite, Artisan CLI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card card-xl-stretch mb-xl-8">
              <div className="card-header border-0">
                <h3 className="card-title fw-bold text-dark">Notifications</h3>
                <div className="card-toolbar">
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="ki-duotone ki-category fs-6">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                    </i>
                  </button>
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                        Payments
                      </div>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Create Invoice
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link flex-stack px-3">
                        Create Payment
                        <span
                          className="ms-2"
                          data-bs-toggle="tooltip"
                          title="Specify a target name for future usage and reference"
                        >
                          <i className="ki-duotone ki-information fs-6">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </span>
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Generate Bill
                      </a>
                    </div>
                    <div
                      className="menu-item px-3"
                      data-kt-menu-trigger="hover"
                      data-kt-menu-placement="right-end"
                    >
                      <a href="#" className="menu-link px-3">
                        <span className="menu-title">Subscription</span>
                        <span className="menu-arrow"></span>
                      </a>
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Plans
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Billing
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Statements
                          </a>
                        </div>
                        <div className="separator my-2"></div>
                        <div className="menu-item px-3">
                          <div className="menu-content px-3">
                            <label className="form-check form-switch form-check-custom form-check-solid">
                              <input
                                className="form-check-input w-30px h-20px"
                                type="checkbox"
                                value="1"
                                checked="checked"
                                name="notifications"
                              />
                              <span className="form-check-label text-muted fs-6">
                                Recuring
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item px-3 my-1">
                      <a href="#" className="menu-link px-3">
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-0">
                <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-7">
                  <i className="ki-duotone ki-abstract-26 text-warning fs-1 me-5">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  <div className="flex-grow-1 me-2">
                    <a
                      href="#"
                      className="fw-bold text-gray-800 text-hover-primary fs-6"
                    >
                      Group lunch celebration
                    </a>
                    <span className="text-muted fw-semibold d-block">
                      Due in 2 Days
                    </span>
                  </div>
                  <span className="fw-bold text-warning py-1">+28%</span>
                </div>
                <div className="d-flex align-items-center bg-light-success rounded p-5 mb-7">
                  <i className="ki-duotone ki-abstract-26 text-success fs-1 me-5">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  <div className="flex-grow-1 me-2">
                    <a
                      href="#"
                      className="fw-bold text-gray-800 text-hover-primary fs-6"
                    >
                      Navigation optimization
                    </a>
                    <span className="text-muted fw-semibold d-block">
                      Due in 2 Days
                    </span>
                  </div>
                  <span className="fw-bold text-success py-1">+50%</span>
                </div>
                <div className="d-flex align-items-center bg-light-danger rounded p-5 mb-7">
                  <i className="ki-duotone ki-abstract-26 text-danger fs-1 me-5">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  <div className="flex-grow-1 me-2">
                    <a
                      href="#"
                      className="fw-bold text-gray-800 text-hover-primary fs-6"
                    >
                      Rebrand strategy planning
                    </a>
                    <span className="text-muted fw-semibold d-block">
                      Due in 5 Days
                    </span>
                  </div>
                  <span className="fw-bold text-danger py-1">-27%</span>
                </div>
                <div className="d-flex align-items-center bg-light-info rounded p-5">
                  <i className="ki-duotone ki-abstract-26 text-info fs-1 me-5">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  <div className="flex-grow-1 me-2">
                    <a
                      href="#"
                      className="fw-bold text-gray-800 text-hover-primary fs-6"
                    >
                      Product goals strategy
                    </a>
                    <span className="text-muted fw-semibold d-block">
                      Due in 7 Days
                    </span>
                  </div>
                  <span className="fw-bold text-info py-1">+8%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card card-xl-stretch mb-5 mb-xl-8">
              <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bold text-dark">Trends</span>
                  <span className="text-muted mt-1 fw-semibold fs-7">
                    Latest tech trends
                  </span>
                </h3>
                <div className="card-toolbar">
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="ki-duotone ki-category fs-6">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                    </i>
                  </button>
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                        Payments
                      </div>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Create Invoice
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link flex-stack px-3">
                        Create Payment
                        <span
                          className="ms-2"
                          data-bs-toggle="tooltip"
                          title="Specify a target name for future usage and reference"
                        >
                          <i className="ki-duotone ki-information fs-6">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </span>
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Generate Bill
                      </a>
                    </div>
                    <div
                      className="menu-item px-3"
                      data-kt-menu-trigger="hover"
                      data-kt-menu-placement="right-end"
                    >
                      <a href="#" className="menu-link px-3">
                        <span className="menu-title">Subscription</span>
                        <span className="menu-arrow"></span>
                      </a>
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Plans
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Billing
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Statements
                          </a>
                        </div>
                        <div className="separator my-2"></div>
                        <div className="menu-item px-3">
                          <div className="menu-content px-3">
                            <label className="form-check form-switch form-check-custom form-check-solid">
                              <input
                                className="form-check-input w-30px h-20px"
                                type="checkbox"
                                value="1"
                                checked="checked"
                                name="notifications"
                              />
                              <span className="form-check-label text-muted fs-6">
                                Recuring
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item px-3 my-1">
                      <a href="#" className="menu-link px-3">
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-5">
                <div className="d-flex align-items-sm-center mb-7">
                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img
                        src="assets/media/svg/brand-logos/plurk.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a
                        href="#"
                        className="text-gray-800 text-hover-primary fs-6 fw-bold"
                      >
                        Top Authors
                      </a>
                      <span className="text-muted fw-semibold d-block fs-7">
                        Mark, Rowling, Esther
                      </span>
                    </div>
                    <span className="badge badge-light fw-bold my-2">+82$</span>
                  </div>
                </div>
                <div className="d-flex align-items-sm-center mb-7">
                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img
                        src="assets/media/svg/brand-logos/telegram.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a
                        href="#"
                        className="text-gray-800 text-hover-primary fs-6 fw-bold"
                      >
                        Popular Authors
                      </a>
                      <span className="text-muted fw-semibold d-block fs-7">
                        Randy, Steve, Mike
                      </span>
                    </div>
                    <span className="badge badge-light fw-bold my-2">
                      +280$
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-sm-center mb-7">
                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img
                        src="assets/media/svg/brand-logos/vimeo.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a
                        href="#"
                        className="text-gray-800 text-hover-primary fs-6 fw-bold"
                      >
                        New Users
                      </a>
                      <span className="text-muted fw-semibold d-block fs-7">
                        John, Pat, Jimmy
                      </span>
                    </div>
                    <span className="badge badge-light fw-bold my-2">
                      +4500$
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-sm-center mb-7">
                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img
                        src="assets/media/svg/brand-logos/bebo.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a
                        href="#"
                        className="text-gray-800 text-hover-primary fs-6 fw-bold"
                      >
                        Active Customers
                      </a>
                      <span className="text-muted fw-semibold d-block fs-7">
                        Mark, Rowling, Esther
                      </span>
                    </div>
                    <span className="badge badge-light fw-bold my-2">
                      +686$
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-sm-center mb-7">
                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img
                        src="assets/media/svg/brand-logos/kickstarter.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a
                        href="#"
                        className="text-gray-800 text-hover-primary fs-6 fw-bold"
                      >
                        Bestseller Theme
                      </a>
                      <span className="text-muted fw-semibold d-block fs-7">
                        Disco, Retro, Sports
                      </span>
                    </div>
                    <span className="badge badge-light fw-bold my-2">
                      +726$
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5 gx-xxl-8">
          <div className="col-xxl-4">
            <div className="card card-xxl-stretch mb-xl-3">
              <div className="card-header border-0 py-5">
                <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bold fs-3 mb-1">Trends</span>
                  <span className="text-muted fw-semibold fs-7">
                    Latest trends
                  </span>
                </h3>
                <div className="card-toolbar">
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="ki-duotone ki-category fs-6">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                    </i>
                  </button>
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                        Payments
                      </div>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Create Invoice
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link flex-stack px-3">
                        Create Payment
                        <span
                          className="ms-2"
                          data-bs-toggle="tooltip"
                          title="Specify a target name for future usage and reference"
                        >
                          <i className="ki-duotone ki-information fs-6">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </span>
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Generate Bill
                      </a>
                    </div>
                    <div
                      className="menu-item px-3"
                      data-kt-menu-trigger="hover"
                      data-kt-menu-placement="right-end"
                    >
                      <a href="#" className="menu-link px-3">
                        <span className="menu-title">Subscription</span>
                        <span className="menu-arrow"></span>
                      </a>
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Plans
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Billing
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Statements
                          </a>
                        </div>
                        <div className="separator my-2"></div>
                        <div className="menu-item px-3">
                          <div className="menu-content px-3">
                            <label className="form-check form-switch form-check-custom form-check-solid">
                              <input
                                className="form-check-input w-30px h-20px"
                                type="checkbox"
                                value="1"
                                checked="checked"
                                name="notifications"
                              />
                              <span className="form-check-label text-muted fs-6">
                                Recuring
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item px-3 my-1">
                      <a href="#" className="menu-link px-3">
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body d-flex flex-column">
                <div
                  className="mixed-widget-5-chart card-rounded-top"
                  data-kt-chart-color="success"
                  style={{ height: " 150px" }}
                ></div>
                <div className="mt-5">
                  <div className="d-flex flex-stack mb-5">
                    <div className="d-flex align-items-center me-2">
                      <div className="symbol symbol-50px me-3">
                        <div className="symbol-label bg-light">
                          <img
                            src="assets/media/svg/brand-logos/plurk.svg"
                            className="h-50"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="fs-6 text-gray-800 text-hover-primary fw-bold"
                        >
                          Top Authors
                        </a>
                        <div className="fs-7 text-muted fw-semibold mt-1">
                          Ricky Hunt, Sandra Trepp
                        </div>
                      </div>
                    </div>
                    <div className="badge badge-light fw-semibold py-4 px-3">
                      +82$
                    </div>
                  </div>
                  <div className="d-flex flex-stack mb-5">
                    <div className="d-flex align-items-center me-2">
                      <div className="symbol symbol-50px me-3">
                        <div className="symbol-label bg-light">
                          <img
                            src="assets/media/svg/brand-logos/figma-1.svg"
                            className="h-50"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="fs-6 text-gray-800 text-hover-primary fw-bold"
                        >
                          Top Sales
                        </a>
                        <div className="fs-7 text-muted fw-semibold mt-1">
                          PitStop Emails
                        </div>
                      </div>
                    </div>
                    <div className="badge badge-light fw-semibold py-4 px-3">
                      +82$
                    </div>
                  </div>
                  <div className="d-flex flex-stack">
                    <div className="d-flex align-items-center me-2">
                      <div className="symbol symbol-50px me-3">
                        <div className="symbol-label bg-light">
                          <img
                            src="assets/media/svg/brand-logos/vimeo.svg"
                            className="h-50"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="py-1">
                        <a
                          href="#"
                          className="fs-6 text-gray-800 text-hover-primary fw-bold"
                        >
                          Top Engagement
                        </a>
                        <div className="fs-7 text-muted fw-semibold mt-1">
                          KT.com
                        </div>
                      </div>
                    </div>
                    <div className="badge badge-light fw-semibold py-4 px-3">
                      +82$
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-8">
            <div className="card card-xxl-stretch mb-5 mb-xxl-8">
              <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bold fs-3 mb-1">
                    Latest Products
                  </span>
                  <span className="text-muted mt-1 fw-semibold fs-7">
                    More than 400 new products
                  </span>
                </h3>
                <div className="card-toolbar">
                  <ul className="nav">
                    <li className="nav-item">
                      <a
                        className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1 active"
                        data-bs-toggle="tab"
                        href="#kt_table_widget_5_tab_1"
                      >
                        Month
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1"
                        data-bs-toggle="tab"
                        href="#kt_table_widget_5_tab_2"
                      >
                        Week
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4"
                        data-bs-toggle="tab"
                        href="#kt_table_widget_5_tab_3"
                      >
                        Day
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body py-3">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="kt_table_widget_5_tab_1"
                  >
                    <div className="table-responsive">
                      <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                        <thead>
                          <tr className="border-0">
                            <th className="p-0 w-50px"></th>
                            <th className="p-0 min-w-150px"></th>
                            <th className="p-0 min-w-140px"></th>
                            <th className="p-0 min-w-110px"></th>
                            <th className="p-0 min-w-50px"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img
                                    src="assets/media/svg/brand-logos/plurk.svg"
                                    className="h-50 align-self-center"
                                    alt=""
                                  />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                              >
                                Brad Simmons
                              </a>
                              <span className="text-muted fw-semibold d-block">
                                Movie Creator
                              </span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              React, HTML
                            </td>
                            <td className="text-end">
                              <span className="badge badge-light-success">
                                Approved
                              </span>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                              >
                                <i className="ki-duotone ki-arrow-right fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img
                                    src="assets/media/svg/brand-logos/telegram.svg"
                                    className="h-50 align-self-center"
                                    alt=""
                                  />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                              >
                                Popular Authors
                              </a>
                              <span className="text-muted fw-semibold d-block">
                                Most Successful
                              </span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              Python, MySQL
                            </td>
                            <td className="text-end">
                              <span className="badge badge-light-warning">
                                In Progress
                              </span>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                              >
                                <i className="ki-duotone ki-arrow-right fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img
                                    src="assets/media/svg/brand-logos/vimeo.svg"
                                    className="h-50 align-self-center"
                                    alt=""
                                  />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                              >
                                New Users
                              </a>
                              <span className="text-muted fw-semibold d-block">
                                Awesome Users
                              </span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              Laravel,Metronic
                            </td>
                            <td className="text-end">
                              <span className="badge badge-light-primary">
                                Success
                              </span>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                              >
                                <i className="ki-duotone ki-arrow-right fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img
                                    src="assets/media/svg/brand-logos/bebo.svg"
                                    className="h-50 align-self-center"
                                    alt=""
                                  />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                              >
                                Active Customers
                              </a>
                              <span className="text-muted fw-semibold d-block">
                                Movie Creator
                              </span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              AngularJS, C#
                            </td>
                            <td className="text-end">
                              <span className="badge badge-light-danger">
                                Rejected
                              </span>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                              >
                                <i className="ki-duotone ki-arrow-right fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img
                                    src="assets/media/svg/brand-logos/kickstarter.svg"
                                    className="h-50 align-self-center"
                                    alt=""
                                  />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                              >
                                Bestseller Theme
                              </a>
                              <span className="text-muted fw-semibold d-block">
                                Best Customers
                              </span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              ReactJS, Ruby
                            </td>
                            <td className="text-end">
                              <span className="badge badge-light-warning">
                                In Progress
                              </span>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                              >
                                <i className="ki-duotone ki-arrow-right fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="kt_table_widget_5_tab_2">
                    <div className="table-responsive">
                      <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                        <thead>
                          <tr className="border-0">
                            <th className="p-0 w-50px"></th>
                            <th className="p-0 min-w-150px"></th>
                            <th className="p-0 min-w-140px"></th>
                            <th className="p-0 min-w-110px"></th>
                            <th className="p-0 min-w-50px"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img
                                    src="assets/media/svg/brand-logos/plurk.svg"
                                    className="h-50 align-self-center"
                                    alt=""
                                  />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                              >
                                Brad Simmons
                              </a>
                              <span className="text-muted fw-semibold d-block">
                                Movie Creator
                              </span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              React, HTML
                            </td>
                            <td className="text-end">
                              <span className="badge badge-light-success">
                                Approved
                              </span>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                              >
                                <i className="ki-duotone ki-arrow-right fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img
                                    src="assets/media/svg/brand-logos/telegram.svg"
                                    className="h-50 align-self-center"
                                    alt=""
                                  />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                              >
                                Popular Authors
                              </a>
                              <span className="text-muted fw-semibold d-block">
                                Most Successful
                              </span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              Python, MySQL
                            </td>
                            <td className="text-end">
                              <span className="badge badge-light-warning">
                                In Progress
                              </span>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                              >
                                <i className="ki-duotone ki-arrow-right fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img
                                    src="assets/media/svg/brand-logos/bebo.svg"
                                    className="h-50 align-self-center"
                                    alt=""
                                  />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                              >
                                Active Customers
                              </a>
                              <span className="text-muted fw-semibold d-block">
                                Movie Creator
                              </span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              AngularJS, C#
                            </td>
                            <td className="text-end">
                              <span className="badge badge-light-danger">
                                Rejected
                              </span>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                              >
                                <i className="ki-duotone ki-arrow-right fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="kt_table_widget_5_tab_3">
                    <div className="table-responsive">
                      <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                        <thead>
                          <tr className="border-0">
                            <th className="p-0 w-50px"></th>
                            <th className="p-0 min-w-150px"></th>
                            <th className="p-0 min-w-140px"></th>
                            <th className="p-0 min-w-110px"></th>
                            <th className="p-0 min-w-50px"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img
                                    src="assets/media/svg/brand-logos/kickstarter.svg"
                                    className="h-50 align-self-center"
                                    alt=""
                                  />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                              >
                                Bestseller Theme
                              </a>
                              <span className="text-muted fw-semibold d-block">
                                Best Customers
                              </span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              ReactJS, Ruby
                            </td>
                            <td className="text-end">
                              <span className="badge badge-light-warning">
                                In Progress
                              </span>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                              >
                                <i className="ki-duotone ki-arrow-right fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img
                                    src="assets/media/svg/brand-logos/bebo.svg"
                                    className="h-50 align-self-center"
                                    alt=""
                                  />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                              >
                                Active Customers
                              </a>
                              <span className="text-muted fw-semibold d-block">
                                Movie Creator
                              </span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              AngularJS, C#
                            </td>
                            <td className="text-end">
                              <span className="badge badge-light-danger">
                                Rejected
                              </span>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                              >
                                <i className="ki-duotone ki-arrow-right fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img
                                    src="assets/media/svg/brand-logos/vimeo.svg"
                                    className="h-50 align-self-center"
                                    alt=""
                                  />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                              >
                                New Users
                              </a>
                              <span className="text-muted fw-semibold d-block">
                                Awesome Users
                              </span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              Laravel,Metronic
                            </td>
                            <td className="text-end">
                              <span className="badge badge-light-primary">
                                Success
                              </span>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                              >
                                <i className="ki-duotone ki-arrow-right fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img
                                    src="assets/media/svg/brand-logos/telegram.svg"
                                    className="h-50 align-self-center"
                                    alt=""
                                  />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                              >
                                Popular Authors
                              </a>
                              <span className="text-muted fw-semibold d-block">
                                Most Successful
                              </span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              Python, MySQL
                            </td>
                            <td className="text-end">
                              <span className="badge badge-light-warning">
                                In Progress
                              </span>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                              >
                                <i className="ki-duotone ki-arrow-right fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main