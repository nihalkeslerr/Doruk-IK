import React from 'react'

function Permissions() {
  return (
      <div className="container-xxl" id="kt_content_container">
        <div className="card card-flush">
          <div className="card-header mt-6">
            <div className="card-title">
              <div className="d-flex align-items-center position-relative my-1 me-5">
                <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-5">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
                <input type="text" data-kt-permissions-table-filter="search" className="form-control form-control-solid w-250px ps-13" placeholder="Search Permissions" />
              </div>
            </div>
            <div className="card-toolbar">
              <button type="button" className="btn btn-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_permission">
              <i className="ki-duotone ki-plus-square fs-3">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
              </i>Add Permission</button>
            </div>
          </div>
          <div className="card-body pt-0">
            <table className="table align-middle table-row-dashed fs-6 gy-5 mb-0" id="kt_permissions_table">
              <thead>
                <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                  <th className="min-w-125px">Name</th>
                  <th className="min-w-250px">Assigned to</th>
                  <th className="min-w-125px">Created Date</th>
                  <th className="text-end min-w-100px">Actions</th>
                </tr>
              </thead>
              <tbody className="fw-semibold text-gray-600">
                <tr>
                  <td>User Management</td>
                  <td>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-primary fs-7 m-1">Administrator</a>
                  </td>
                  <td>10 Mar 2023, 11:05 am</td>
                  <td className="text-end">
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_update_permission">
                      <i className="ki-duotone ki-setting-3 fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-permissions-table-filter="delete_row">
                      <i className="ki-duotone ki-trash fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Content Management</td>
                  <td>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-primary fs-7 m-1">Administrator</a>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-danger fs-7 m-1">Developer</a>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-success fs-7 m-1">Analyst</a>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-info fs-7 m-1">Support</a>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-warning fs-7 m-1">Trial</a>
                  </td>
                  <td>24 Jun 2023, 10:30 am</td>
                  <td className="text-end">
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_update_permission">
                      <i className="ki-duotone ki-setting-3 fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-permissions-table-filter="delete_row">
                      <i className="ki-duotone ki-trash fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Financial Management</td>
                  <td>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-primary fs-7 m-1">Administrator</a>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-success fs-7 m-1">Analyst</a>
                  </td>
                  <td>15 Apr 2023, 10:30 am</td>
                  <td className="text-end">
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_update_permission">
                      <i className="ki-duotone ki-setting-3 fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-permissions-table-filter="delete_row">
                      <i className="ki-duotone ki-trash fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Reporting</td>
                  <td>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-primary fs-7 m-1">Administrator</a>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-success fs-7 m-1">Analyst</a>
                  </td>
                  <td>10 Mar 2023, 5:30 pm</td>
                  <td className="text-end">
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_update_permission">
                      <i className="ki-duotone ki-setting-3 fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-permissions-table-filter="delete_row">
                      <i className="ki-duotone ki-trash fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Payroll</td>
                  <td>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-primary fs-7 m-1">Administrator</a>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-success fs-7 m-1">Analyst</a>
                  </td>
                  <td>10 Mar 2023, 9:23 pm</td>
                  <td className="text-end">
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_update_permission">
                      <i className="ki-duotone ki-setting-3 fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-permissions-table-filter="delete_row">
                      <i className="ki-duotone ki-trash fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Disputes Management</td>
                  <td>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-primary fs-7 m-1">Administrator</a>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-danger fs-7 m-1">Developer</a>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-info fs-7 m-1">Support</a>
                  </td>
                  <td>20 Dec 2023, 8:43 pm</td>
                  <td className="text-end">
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_update_permission">
                      <i className="ki-duotone ki-setting-3 fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-permissions-table-filter="delete_row">
                      <i className="ki-duotone ki-trash fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>API Controls</td>
                  <td>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-primary fs-7 m-1">Administrator</a>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-danger fs-7 m-1">Developer</a>
                  </td>
                  <td>05 May 2023, 10:10 pm</td>
                  <td className="text-end">
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_update_permission">
                      <i className="ki-duotone ki-setting-3 fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-permissions-table-filter="delete_row">
                      <i className="ki-duotone ki-trash fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Database Management</td>
                  <td>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-primary fs-7 m-1">Administrator</a>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-danger fs-7 m-1">Developer</a>
                  </td>
                  <td>24 Jun 2023, 8:43 pm</td>
                  <td className="text-end">
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_update_permission">
                      <i className="ki-duotone ki-setting-3 fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-permissions-table-filter="delete_row">
                      <i className="ki-duotone ki-trash fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Repository Management</td>
                  <td>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-primary fs-7 m-1">Administrator</a>
                    <a href="../../demo7/dist/apps/user-management/roles/view.html" className="badge badge-light-danger fs-7 m-1">Developer</a>
                  </td>
                  <td>19 Aug 2023, 8:43 pm</td>
                  <td className="text-end">
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_update_permission">
                      <i className="ki-duotone ki-setting-3 fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                    <button className="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-permissions-table-filter="delete_row">
                      <i className="ki-duotone ki-trash fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="modal fade" id="kt_modal_add_permission" tabindex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered mw-650px">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="fw-bold">Add a Permission</h2>
                <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-permissions-modal-action="close">
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </div>
              </div>
              <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                <form id="kt_modal_add_permission_form" className="form" action="#">
                  <div className="fv-row mb-7">
                    <label className="fs-6 fw-semibold form-label mb-2">
                      <span className="required">Permission Name</span>
                      <span className="ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="Permission names is required to be unique.">
                        <i className="ki-duotone ki-information fs-7">
                          <span className="path1"></span>
                          <span className="path2"></span>
                          <span className="path3"></span>
                        </i>
                      </span>
                    </label>
                    <input className="form-control form-control-solid" placeholder="Enter a permission name" name="permission_name" />
                  </div>
                  <div className="fv-row mb-7">
                    <label className="form-check form-check-custom form-check-solid me-9">
                      <input className="form-check-input" type="checkbox" value="" name="permissions_core" id="kt_permissions_core" />
                      <span className="form-check-label" htmlFor="kt_permissions_core">Set as core permission</span>
                    </label>
                  </div>
                  <div className="text-gray-600">Permission set as a
                  <strong className="me-1">Core Permission</strong>will be locked and
                  <strong className="me-1">not editable</strong>in future</div>
                  <div className="text-center pt-15">
                    <button type="reset" className="btn btn-light me-3" data-kt-permissions-modal-action="cancel">Discard</button>
                    <button type="submit" className="btn btn-primary" data-kt-permissions-modal-action="submit">
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
        <div className="modal fade" id="kt_modal_update_permission" tabindex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered mw-650px">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="fw-bold">Update Permission</h2>
                <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-permissions-modal-action="close">
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </div>
              </div>
              <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                  <i className="ki-duotone ki-information fs-2tx text-warning me-4">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                  </i>
                  <div className="d-flex flex-stack flex-grow-1">
                    <div className="fw-semibold">
                      <div className="fs-6 text-gray-700">
                      <strong className="me-1">Warning!</strong>By editing the permission name, you might break the system permissions functionality. Please ensure you're absolutely certain before proceeding.</div>
                    </div>
                  </div>
                </div>
                <form id="kt_modal_update_permission_form" className="form" action="#">
                  <div className="fv-row mb-7">
                    <label className="fs-6 fw-semibold form-label mb-2">
                      <span className="required">Permission Name</span>
                      <span className="ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="Permission names is required to be unique.">
                        <i className="ki-duotone ki-information fs-7">
                          <span className="path1"></span>
                          <span className="path2"></span>
                          <span className="path3"></span>
                        </i>
                      </span>
                    </label>
                    <input className="form-control form-control-solid" placeholder="Enter a permission name" name="permission_name" />
                  </div>
                  <div className="text-center pt-15">
                    <button type="reset" className="btn btn-light me-3" data-kt-permissions-modal-action="cancel">Discard</button>
                    <button type="submit" className="btn btn-primary" data-kt-permissions-modal-action="submit">
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
  )
}

export default Permissions