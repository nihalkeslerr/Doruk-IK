import React from 'react'

function Employees() {
  return (
      <div className="container-xxl" id="kt_content_container">
        <div className="card card-flush">
          <div className="card-header border-0 pt-6">
            <div className="card-title">
              <div className="d-flex align-items-center position-relative my-1">
                <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-5">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
                <input type="text" data-kt-user-table-filter="search" className="form-control form-control-solid w-250px ps-13" placeholder="Search user" />
              </div>
            </div>
            <div className="card-toolbar">
              <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                <button type="button" className="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                <i className="ki-duotone ki-filter fs-2">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>Filter</button>
                <div className="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">
                  <div className="px-7 py-5">
                    <div className="fs-5 text-dark fw-bold">Filter Options</div>
                  </div>
                  <div className="separator border-gray-200"></div>
                  <div className="px-7 py-5" data-kt-user-table-filter="form">
                    <div className="mb-10">
                      <label className="form-label fs-6 fw-semibold">Role:</label>
                      <select className="form-select form-select-solid fw-bold" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="role" data-hide-search="true">
                        <option></option>
                        <option value="Administrator">Administrator</option>
                        <option value="Analyst">Analyst</option>
                        <option value="Developer">Developer</option>
                        <option value="Support">Support</option>
                        <option value="Trial">Trial</option>
                      </select>
                    </div>
                    <div className="mb-10">
                      <label className="form-label fs-6 fw-semibold">Two Step Verification:</label>
                      <select className="form-select form-select-solid fw-bold" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="two-step" data-hide-search="true">
                        <option></option>
                        <option value="Enabled">Enabled</option>
                      </select>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="reset" className="btn btn-light btn-active-light-primary fw-semibold me-2 px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="reset">Reset</button>
                      <button type="submit" className="btn btn-primary fw-semibold px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="filter">Apply</button>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-light-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_export_users">
                <i className="ki-duotone ki-exit-up fs-2">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>Export</button>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_user">
                <i className="ki-duotone ki-plus fs-2"></i>Add User</button>
              </div>
              <div className="d-flex justify-content-end align-items-center d-none" data-kt-user-table-toolbar="selected">
                <div className="fw-bold me-5">
                <span className="me-2" data-kt-user-table-select="selected_count"></span>Selected</div>
                <button type="button" className="btn btn-danger" data-kt-user-table-select="delete_selected">Delete Selected</button>
              </div>
              <div className="modal fade" id="kt_modal_export_users" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered mw-650px">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h2 className="fw-bold">Export Users</h2>
                      <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">
                        <i className="ki-duotone ki-cross fs-1">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>
                    </div>
                    <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                      <form id="kt_modal_export_users_form" className="form" action="#">
                        <div className="fv-row mb-10">
                          <label className="fs-6 fw-semibold form-label mb-2">Select Roles:</label>
                          <select name="role" data-control="select2" data-placeholder="Select a role" data-hide-search="true" className="form-select form-select-solid fw-bold">
                            <option></option>
                            <option value="Administrator">Administrator</option>
                            <option value="Analyst">Analyst</option>
                            <option value="Developer">Developer</option>
                            <option value="Support">Support</option>
                            <option value="Trial">Trial</option>
                          </select>
                        </div>
                        <div className="fv-row mb-10">
                          <label className="required fs-6 fw-semibold form-label mb-2">Select Export Format:</label>
                          <select name="format" data-control="select2" data-placeholder="Select a format" data-hide-search="true" className="form-select form-select-solid fw-bold">
                            <option></option>
                            <option value="excel">Excel</option>
                            <option value="pdf">PDF</option>
                            <option value="cvs">CVS</option>
                            <option value="zip">ZIP</option>
                          </select>
                        </div>
                        <div className="text-center">
                          <button type="reset" className="btn btn-light me-3" data-kt-users-modal-action="cancel">Discard</button>
                          <button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
                            <span className="indicator-label">Submit</span>
                            <span className="indicator-progress">Please wait...
                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal fade" id="kt_modal_add_user" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered mw-650px">
                  <div className="modal-content">
                    <div className="modal-header" id="kt_modal_add_user_header">
                      <h2 className="fw-bold">Add User</h2>
                      <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">
                        <i className="ki-duotone ki-cross fs-1">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>
                    </div>
                    <div className="modal-body px-5 my-7">
                      <form id="kt_modal_add_user_form" className="form" action="#">
                        <div className="d-flex flex-column scroll-y px-5 px-lg-10" id="kt_modal_add_user_scroll" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_user_header" data-kt-scroll-wrappers="#kt_modal_add_user_scroll" data-kt-scroll-offset="300px">
                          <div className="fv-row mb-7">
                            <label className="d-block fw-semibold fs-6 mb-5">Avatar</label>
                            <div className="image-input image-input-outline image-input-placeholder" data-kt-image-input="true">
                              <div className="image-input-wrapper w-125px h-125px" style={{backgroundImage:" url(assets/media/avatars/300-6.jpg);"}}></div>
                              <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                <i className="ki-duotone ki-pencil fs-7">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                <input type="hidden" name="avatar_remove" />
                              </label>
                              <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                <i className="ki-duotone ki-cross fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </span>
                              <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                <i className="ki-duotone ki-cross fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </span>
                            </div>
                            <div className="form-text">Allowed file types: png, jpg, jpeg.</div>
                          </div>
                          <div className="fv-row mb-7">
                            <label className="required fw-semibold fs-6 mb-2">Full Name</label>
                            <input type="text" name="user_name" className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Full name" value="Emma Smith" />
                          </div>
                          <div className="fv-row mb-7">
                            <label className="required fw-semibold fs-6 mb-2">Email</label>
                            <input type="email" name="user_email" className="form-control form-control-solid mb-3 mb-lg-0" placeholder="example@domain.com" value="smith@kpmg.com" />
                          </div>
                          <div className="mb-5">
                            <label className="required fw-semibold fs-6 mb-5">Role</label>
                            <div className="d-flex fv-row">
                              <div className="form-check form-check-custom form-check-solid">
                                <input className="form-check-input me-3" name="user_role" type="radio" value="0" id="kt_modal_update_role_option_0" checked='checked' />
                                <label className="form-check-label" for="kt_modal_update_role_option_0">
                                  <div className="fw-bold text-gray-800">Administrator</div>
                                  <div className="text-gray-600">Best for business owners and company administrators</div>
                                </label>
                              </div>
                            </div>
                            <div className='separator separator-dashed my-5'></div>
                            <div className="d-flex fv-row">
                              <div className="form-check form-check-custom form-check-solid">
                                <input className="form-check-input me-3" name="user_role" type="radio" value="1" id="kt_modal_update_role_option_1" />
                                <label className="form-check-label" for="kt_modal_update_role_option_1">
                                  <div className="fw-bold text-gray-800">Developer</div>
                                  <div className="text-gray-600">Best for developers or people primarily using the API</div>
                                </label>
                              </div>
                            </div>
                            <div className='separator separator-dashed my-5'></div>
                            <div className="d-flex fv-row">
                              <div className="form-check form-check-custom form-check-solid">
                                <input className="form-check-input me-3" name="user_role" type="radio" value="2" id="kt_modal_update_role_option_2" />
                                <label className="form-check-label" for="kt_modal_update_role_option_2">
                                  <div className="fw-bold text-gray-800">Analyst</div>
                                  <div className="text-gray-600">Best for people who need full access to analytics data, but don't need to update business settings</div>
                                </label>
                              </div>
                            </div>
                            <div className='separator separator-dashed my-5'></div>
                            <div className="d-flex fv-row">
                              <div className="form-check form-check-custom form-check-solid">
                                <input className="form-check-input me-3" name="user_role" type="radio" value="3" id="kt_modal_update_role_option_3" />
                                <label className="form-check-label" for="kt_modal_update_role_option_3">
                                  <div className="fw-bold text-gray-800">Support</div>
                                  <div className="text-gray-600">Best for employees who regularly refund payments and respond to disputes</div>
                                </label>
                              </div>
                            </div>
                            <div className='separator separator-dashed my-5'></div>
                            <div className="d-flex fv-row">
                              <div className="form-check form-check-custom form-check-solid">
                                <input className="form-check-input me-3" name="user_role" type="radio" value="4" id="kt_modal_update_role_option_4" />
                                <label className="form-check-label" for="kt_modal_update_role_option_4">
                                  <div className="fw-bold text-gray-800">Trial</div>
                                  <div className="text-gray-600">Best for people who need to preview content data, but don't need to make any updates</div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center pt-10">
                          <button type="reset" className="btn btn-light me-3" data-kt-users-modal-action="cancel">Discard</button>
                          <button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
                            <span className="indicator-label">Submit</span>
                            <span className="indicator-progress">Please wait...
                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
              <thead>
                <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                  <th className="w-10px pe-2">
                    <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                      <input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_table_users .form-check-input" value="1" />
                    </div>
                  </th>
                  <th className="min-w-125px">User</th>
                  <th className="min-w-125px">Role</th>
                  <th className="min-w-125px">Two-step</th>
                  <th className="min-w-125px">Joined Date</th>
                  <th className="text-end min-w-100px">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 fw-semibold">
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img src="assets/media/avatars/300-6.jpg" alt="Emma Smith" className="w-100" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Emma Smith</a>
                      <span>smith@kpmg.com</span>
                    </div>
                  </td>
                  <td>Administrator</td>
                
                  <td></td>
                  <td>20 Dec 2023, 10:10 pm</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-danger text-danger">M</div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Melody Macy</a>
                      <span>melody@altbox.com</span>
                    </div>
                  </td>
                  <td>Analyst</td>
                  
                  <td>
                    <div className="badge badge-light-success fw-bold">Enabled</div>
                  </td>
                  <td>21 Feb 2023, 11:30 am</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img src="assets/media/avatars/300-1.jpg" alt="Max Smith" className="w-100" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Max Smith</a>
                      <span>max@kt.com</span>
                    </div>
                  </td>
                  <td>Developer</td>
                
                  <td></td>
                  <td>20 Dec 2023, 6:43 am</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img src="assets/media/avatars/300-5.jpg" alt="Sean Bean" className="w-100" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Sean Bean</a>
                      <span>sean@dellito.com</span>
                    </div>
                  </td>
                  <td>Support</td>
              
                  <td>
                    <div className="badge badge-light-success fw-bold">Enabled</div>
                  </td>
                  <td>25 Jul 2023, 5:30 pm</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img src="assets/media/avatars/300-25.jpg" alt="Brian Cox" className="w-100" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Brian Cox</a>
                      <span>brian@exchange.com</span>
                    </div>
                  </td>
                  <td>Developer</td>
                
                  <td>
                    <div className="badge badge-light-success fw-bold">Enabled</div>
                  </td>
                  <td>20 Dec 2023, 11:05 am</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-warning text-warning">C</div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Mikaela Collins</a>
                      <span>mik@pex.com</span>
                    </div>
                  </td>
                  <td>Administrator</td>
              
                  <td></td>
                  <td>19 Aug 2023, 10:30 am</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img src="assets/media/avatars/300-9.jpg" alt="Francis Mitcham" className="w-100" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Francis Mitcham</a>
                      <span>f.mit@kpmg.com</span>
                    </div>
                  </td>
                  <td>Trial</td>
                  <td></td>
                  <td>10 Mar 2023, 10:10 pm</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-danger text-danger">O</div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Olivia Wild</a>
                      <span>olivia@corpmail.com</span>
                    </div>
                  </td>
                  <td>Administrator</td>
                  <td></td>
                  <td>21 Feb 2023, 9:23 pm</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-primary text-primary">N</div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Neil Owen</a>
                      <span>owen.neil@gmail.com</span>
                    </div>
                  </td>
                  <td>Analyst</td>
                  <td>
                    <div className="badge badge-light-success fw-bold">Enabled</div>
                  </td>
                  <td>15 Apr 2023, 11:05 am</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img src="assets/media/avatars/300-23.jpg" alt="Dan Wilson" className="w-100" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Dan Wilson</a>
                      <span>dam@consilting.com</span>
                    </div>
                  </td>
                  <td>Developer</td>
                  <td></td>
                  <td>22 Sep 2023, 9:23 pm</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-danger text-danger">E</div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Emma Bold</a>
                      <span>emma@intenso.com</span>
                    </div>
                  </td>
                  <td>Support</td>
                  <td>
                    <div className="badge badge-light-success fw-bold">Enabled</div>
                  </td>
                  <td>10 Mar 2023, 11:30 am</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img src="assets/media/avatars/300-12.jpg" alt="Ana Crown" className="w-100" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Ana Crown</a>
                      <span>ana.cf@limtel.com</span>
                    </div>
                  </td>
                  <td>Developer</td>
                  <td>
                    <div className="badge badge-light-success fw-bold">Enabled</div>
                  </td>
                  <td>10 Mar 2023, 10:10 pm</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-info text-info">A</div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Robert Doe</a>
                      <span>robert@benko.com</span>
                    </div>
                  </td>
                  <td>Administrator</td>
                  <td></td>
                  <td>20 Dec 2023, 5:30 pm</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img src="assets/media/avatars/300-13.jpg" alt="John Miller" className="w-100" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">John Miller</a>
                      <span>miller@mapple.com</span>
                    </div>
                  </td>
                  <td>Trial</td>
                  <td></td>
                  <td>21 Feb 2023, 11:30 am</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-success text-success">L</div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Lucy Kunic</a>
                      <span>lucy.m@fentech.com</span>
                    </div>
                  </td>
                  <td>Administrator</td>
                  <td></td>
                  <td>15 Apr 2023, 10:30 am</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-danger text-danger">M</div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Melody Macy</a>
                      <span>melody@altbox.com</span>
                    </div>
                  </td>
                  <td>Analyst</td>
                  <td>
                    <div className="badge badge-light-success fw-bold">Enabled</div>
                  </td>
                  <td>21 Feb 2023, 8:43 pm</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img src="assets/media/avatars/300-1.jpg" alt="Max Smith" className="w-100" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Max Smith</a>
                      <span>max@kt.com</span>
                    </div>
                  </td>
                  <td>Developer</td>
                  <td></td>
                  <td>25 Jul 2023, 9:23 pm</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img src="assets/media/avatars/300-5.jpg" alt="Sean Bean" className="w-100" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Sean Bean</a>
                      <span>sean@dellito.com</span>
                    </div>
                  </td>
                  <td>Support</td>
                  <td>
                    <div className="badge badge-light-success fw-bold">Enabled</div>
                  </td>
                  <td>15 Apr 2023, 11:30 am</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img src="assets/media/avatars/300-25.jpg" alt="Brian Cox" className="w-100" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Brian Cox</a>
                      <span>brian@exchange.com</span>
                    </div>
                  </td>
                  <td>Developer</td>
                  <td>
                    <div className="badge badge-light-success fw-bold">Enabled</div>
                  </td>
                  <td>20 Dec 2023, 6:05 pm</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label fs-3 bg-light-warning text-warning">C</div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Mikaela Collins</a>
                      <span>mik@pex.com</span>
                    </div>
                  </td>
                  <td>Administrator</td>
                  <td></td>
                  <td>22 Sep 2023, 2:40 pm</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href="../../demo7/dist/apps/user-management/users/view.html">
                        <div className="symbol-label">
                          <img src="assets/media/avatars/300-9.jpg" alt="Francis Mitcham" className="w-100" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Francis Mitcham</a>
                      <span>f.mit@kpmg.com</span>
                    </div>
                  </td>
                  <td>Trial</td>
                  <td></td>
                  <td>25 Oct 2023, 8:43 pm</td>
                  <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <a href="../../demo7/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default Employees