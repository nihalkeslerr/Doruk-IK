import React from "react";

function Calendar() {
  return (
      <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="container-xxl" id="kt_content_container">
          <div class="card">
            <div class="card-header">
              <h2 class="card-title fw-bold">Calendar</h2>
              <div class="card-toolbar">
                <button class="btn btn-flex btn-primary" data-kt-calendar="add">
                  <i class="ki-duotone ki-plus fs-2"></i>Add Event
                </button>
              </div>
            </div>
            <div class="card-body">
              <div id="kt_calendar_app">
                {/*Burası Eklenen takvim kısmı-start*/}

                <div
                  id="kt_calendar_app"
                  class="fc fc-media-screen fc-direction-ltr fc-theme-standard"
                >
                  <div class="fc-header-toolbar fc-toolbar fc-toolbar-ltr">
                    <div class="fc-toolbar-chunk">
                      <div class="fc-button-group">
                        <button
                          type="button"
                          title="Previous month"
                          aria-pressed="false"
                          class="fc-prev-button fc-button fc-button-primary"
                        >
                          <span class="fc-icon fc-icon-chevron-left"></span>
                        </button>
                        <button
                          type="button"
                          title="Next month"
                          aria-pressed="false"
                          class="fc-next-button fc-button fc-button-primary"
                        >
                          <span class="fc-icon fc-icon-chevron-right"></span>
                        </button>
                      </div>
                      <button
                        type="button"
                        title="This month"
                        aria-pressed="false"
                        class="fc-today-button fc-button fc-button-primary"
                        disabled=""
                      >
                        today
                      </button>
                    </div>
                    <div class="fc-toolbar-chunk">
                      <h2 class="fc-toolbar-title" id="fc-dom-1">
                        August 2023
                      </h2>
                    </div>
                    <div class="fc-toolbar-chunk">
                      <div class="fc-button-group">
                        <button
                          type="button"
                          title="month view"
                          aria-pressed="true"
                          class="fc-dayGridMonth-button fc-button fc-button-primary fc-button-active"
                        >
                          month
                        </button>
                        <button
                          type="button"
                          title="week view"
                          aria-pressed="false"
                          class="fc-timeGridWeek-button fc-button fc-button-primary"
                        >
                          week
                        </button>
                        <button
                          type="button"
                          title="day view"
                          aria-pressed="false"
                          class="fc-timeGridDay-button fc-button fc-button-primary"
                        >
                          day
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-labelledby="fc-dom-1"
                    class="fc-view-harness fc-view-harness-active"
                    style={{ height: " 603.704px;" }}
                  >
                    <div class="fc-daygrid fc-dayGridMonth-view fc-view">
                      <table
                        role="grid"
                        class="fc-scrollgrid  fc-scrollgrid-liquid"
                      >
                        <thead role="rowgroup">
                          <tr
                            role="presentation"
                            class="fc-scrollgrid-section fc-scrollgrid-section-header "
                          >
                            <th role="presentation">
                              <div class="fc-scroller-harness">
                                <div
                                  class="fc-scroller"
                                  style={{ overflow: " hidden;" }}
                                >
                                  <table
                                    role="presentation"
                                    class="fc-col-header "
                                    style={{ width: " 812px;" }}
                                  >
                                    <colgroup></colgroup>
                                    <thead role="presentation">
                                      <tr role="row">
                                        <th
                                          role="columnheader"
                                          class="fc-col-header-cell fc-day fc-day-sun"
                                        >
                                          <div class="fc-scrollgrid-sync-inner">
                                            <a
                                              aria-label="Sunday"
                                              class="fc-col-header-cell-cushion "
                                            >
                                              Sun
                                            </a>
                                          </div>
                                        </th>
                                        <th
                                          role="columnheader"
                                          class="fc-col-header-cell fc-day fc-day-mon"
                                        >
                                          <div class="fc-scrollgrid-sync-inner">
                                            <a
                                              aria-label="Monday"
                                              class="fc-col-header-cell-cushion "
                                            >
                                              Mon
                                            </a>
                                          </div>
                                        </th>
                                        <th
                                          role="columnheader"
                                          class="fc-col-header-cell fc-day fc-day-tue"
                                        >
                                          <div class="fc-scrollgrid-sync-inner">
                                            <a
                                              aria-label="Tuesday"
                                              class="fc-col-header-cell-cushion "
                                            >
                                              Tue
                                            </a>
                                          </div>
                                        </th>
                                        <th
                                          role="columnheader"
                                          class="fc-col-header-cell fc-day fc-day-wed"
                                        >
                                          <div class="fc-scrollgrid-sync-inner">
                                            <a
                                              aria-label="Wednesday"
                                              class="fc-col-header-cell-cushion "
                                            >
                                              Wed
                                            </a>
                                          </div>
                                        </th>
                                        <th
                                          role="columnheader"
                                          class="fc-col-header-cell fc-day fc-day-thu"
                                        >
                                          <div class="fc-scrollgrid-sync-inner">
                                            <a
                                              aria-label="Thursday"
                                              class="fc-col-header-cell-cushion "
                                            >
                                              Thu
                                            </a>
                                          </div>
                                        </th>
                                        <th
                                          role="columnheader"
                                          class="fc-col-header-cell fc-day fc-day-fri"
                                        >
                                          <div class="fc-scrollgrid-sync-inner">
                                            <a
                                              aria-label="Friday"
                                              class="fc-col-header-cell-cushion "
                                            >
                                              Fri
                                            </a>
                                          </div>
                                        </th>
                                        <th
                                          role="columnheader"
                                          class="fc-col-header-cell fc-day fc-day-sat"
                                        >
                                          <div class="fc-scrollgrid-sync-inner">
                                            <a
                                              aria-label="Saturday"
                                              class="fc-col-header-cell-cushion "
                                            >
                                              Sat
                                            </a>
                                          </div>
                                        </th>
                                      </tr>
                                    </thead>
                                  </table>
                                </div>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody role="rowgroup">
                          <tr
                            role="presentation"
                            class="fc-scrollgrid-section fc-scrollgrid-section-body  fc-scrollgrid-section-liquid"
                          >
                            <td role="presentation">
                              <div class="fc-scroller-harness fc-scroller-harness-liquid">
                                <div
                                  class="fc-scroller fc-scroller-liquid-absolute"
                                  style={{ overflow: " hidden auto;" }}
                                >
                                  <div
                                    class="fc-daygrid-body fc-daygrid-body-balanced "
                                    style={{ width: " 812px;" }}
                                  >
                                    <table
                                      role="presentation"
                                      class="fc-scrollgrid-sync-table"
                                      style={{
                                        width: " 812px; height: 555px;",
                                      }}
                                    >
                                      <colgroup></colgroup>
                                      <tbody role="presentation">
                                        <tr role="row">
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-sun fc-day-past fc-day-other"
                                            data-date="2023-07-30"
                                            aria-labelledby="fc-dom-774"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-774"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to July 30, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  30
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-mon fc-day-past fc-day-other"
                                            data-date="2023-07-31"
                                            aria-labelledby="fc-dom-776"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-776"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to July 31, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  31
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                  style={{
                                                    top: " 0px; left: 0px; right: -116px;",
                                                  }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-primary"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-event-main">
                                                      <div class="fc-event-main-frame">
                                                        <div class="fc-event-title-container">
                                                          <div class="fc-event-title fc-sticky">
                                                            Conference
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="fc-event-resizer fc-event-resizer-end"></div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{
                                                    marginTop: " 30px;",
                                                  }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-tue fc-day-today "
                                            data-date="2023-08-01"
                                            aria-labelledby="fc-dom-778"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-778"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 1, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  1
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                  style={{
                                                    visibility:
                                                      " hidden; top: 0px; left: 0px; right: 0px;",
                                                  }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-today fc-event-danger fc-event-solid-warning"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-event-main">
                                                      <div class="fc-event-main-frame">
                                                        <div class="fc-event-title-container">
                                                          <div class="fc-event-title fc-sticky">
                                                            All Day Event
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="fc-event-resizer fc-event-resizer-end"></div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                  style={{
                                                    visibility:
                                                      " hidden; top: 0px; left: 0px; right: 0px;",
                                                  }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-dot-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-today"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-daygrid-event-dot"></div>
                                                    <div class="fc-event-time">
                                                      10:30a
                                                    </div>
                                                    <div class="fc-event-title">
                                                      Meeting
                                                    </div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                  style={{
                                                    visibility:
                                                      " hidden; top: 0px; left: 0px; right: 0px;",
                                                  }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-dot-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-today fc-event-info"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-daygrid-event-dot"></div>
                                                    <div class="fc-event-time">
                                                      12p
                                                    </div>
                                                    <div class="fc-event-title">
                                                      Lunch
                                                    </div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                  style={{
                                                    visibility:
                                                      " hidden; top: 0px; left: 0px; right: 0px;",
                                                  }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-dot-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-today fc-event-warning"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-daygrid-event-dot"></div>
                                                    <div class="fc-event-time">
                                                      2:30p
                                                    </div>
                                                    <div class="fc-event-title">
                                                      Meeting
                                                    </div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                  style={{
                                                    visibility:
                                                      " hidden; top: 0px; left: 0px; right: 0px;",
                                                  }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-dot-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-today fc-event-info"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-daygrid-event-dot"></div>
                                                    <div class="fc-event-time">
                                                      5:30p
                                                    </div>
                                                    <div class="fc-event-title">
                                                      Happy Hour
                                                    </div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{
                                                    marginTop: " 30px;",
                                                  }}
                                                >
                                                  <a
                                                    class="fc-daygrid-more-link fc-more-link"
                                                    title="Show 5 more events"
                                                    aria-expanded="false"
                                                    aria-controls=""
                                                    tabindex="0"
                                                  >
                                                    +5 more
                                                  </a>
                                                </div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-wed fc-day-future"
                                            data-date="2023-08-02"
                                            aria-labelledby="fc-dom-780"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-780"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 2, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  2
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-event-harness"
                                                  style={{ marginTop: " 0px;" }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future fc-event-primary"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-event-main">
                                                      <div class="fc-event-main-frame">
                                                        <div class="fc-event-title-container">
                                                          <div class="fc-event-title fc-sticky">
                                                            Company Trip
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="fc-event-resizer fc-event-resizer-end"></div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                  style={{
                                                    visibility:
                                                      " hidden; top: 0px; left: 0px; right: 0px;",
                                                  }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-dot-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future fc-event-primary"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-daygrid-event-dot"></div>
                                                    <div class="fc-event-time">
                                                      12p
                                                    </div>
                                                    <div class="fc-event-title">
                                                      Birthday Party
                                                    </div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                  style={{
                                                    visibility:
                                                      " hidden; top: 0px; left: 0px; right: 0px;",
                                                  }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-dot-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future fc-event-solid-danger fc-event-light"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-daygrid-event-dot"></div>
                                                    <div class="fc-event-time">
                                                      6p
                                                    </div>
                                                    <div class="fc-event-title">
                                                      Dinner
                                                    </div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                >
                                                  <a
                                                    class="fc-daygrid-more-link fc-more-link"
                                                    title="Show 2 more events"
                                                    aria-expanded="false"
                                                    aria-controls=""
                                                    tabindex="0"
                                                  >
                                                    +2 more
                                                  </a>
                                                </div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-thu fc-day-future"
                                            data-date="2023-08-03"
                                            aria-labelledby="fc-dom-782"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-782"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 3, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  3
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                  style={{
                                                    top: " 0px; left: 0px; right: -116px;",
                                                  }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future fc-event-light fc-event-solid-primary"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-event-main">
                                                      <div class="fc-event-main-frame">
                                                        <div class="fc-event-title-container">
                                                          <div class="fc-event-title fc-sticky">
                                                            ICT Expo 2021 -
                                                            Product Release
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="fc-event-resizer fc-event-resizer-end"></div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{
                                                    marginTop: " 30px;",
                                                  }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-fri fc-day-future"
                                            data-date="2023-08-04"
                                            aria-labelledby="fc-dom-784"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-784"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 4, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  4
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{
                                                    marginTop: " 30px;",
                                                  }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-sat fc-day-future"
                                            data-date="2023-08-05"
                                            aria-labelledby="fc-dom-786"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-786"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 5, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  5
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr role="row">
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-sun fc-day-future"
                                            data-date="2023-08-06"
                                            aria-labelledby="fc-dom-788"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-788"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 6, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  6
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-mon fc-day-future"
                                            data-date="2023-08-07"
                                            aria-labelledby="fc-dom-790"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-790"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 7, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  7
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-tue fc-day-future"
                                            data-date="2023-08-08"
                                            aria-labelledby="fc-dom-792"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-792"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 8, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  8
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-wed fc-day-future"
                                            data-date="2023-08-09"
                                            aria-labelledby="fc-dom-794"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-794"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 9, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  9
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-event-harness"
                                                  style={{ marginTop: " 0px;" }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-dot-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future fc-event-danger"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-daygrid-event-dot"></div>
                                                    <div class="fc-event-time">
                                                      4p
                                                    </div>
                                                    <div class="fc-event-title">
                                                      Repeating Event
                                                    </div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-thu fc-day-future"
                                            data-date="2023-08-10"
                                            aria-labelledby="fc-dom-796"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-796"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 10, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  10
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-fri fc-day-future"
                                            data-date="2023-08-11"
                                            aria-labelledby="fc-dom-798"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-798"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 11, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  11
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-sat fc-day-future"
                                            data-date="2023-08-12"
                                            aria-labelledby="fc-dom-800"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-800"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 12, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  12
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-event-harness"
                                                  style={{ marginTop: " 0px;" }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-event-main">
                                                      <div class="fc-event-main-frame">
                                                        <div class="fc-event-title-container">
                                                          <div class="fc-event-title fc-sticky">
                                                            Dinner
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="fc-event-resizer fc-event-resizer-end"></div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr role="row">
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-sun fc-day-future"
                                            data-date="2023-08-13"
                                            aria-labelledby="fc-dom-802"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-802"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 13, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  13
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-mon fc-day-future"
                                            data-date="2023-08-14"
                                            aria-labelledby="fc-dom-804"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-804"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 14, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  14
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-event-harness"
                                                  style={{ marginTop: " 0px;" }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-dot-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future fc-event-success"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-daygrid-event-dot"></div>
                                                    <div class="fc-event-time">
                                                      1:30p
                                                    </div>
                                                    <div class="fc-event-title">
                                                      Reporting
                                                    </div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-tue fc-day-future"
                                            data-date="2023-08-15"
                                            aria-labelledby="fc-dom-806"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-806"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 15, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  15
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-wed fc-day-future"
                                            data-date="2023-08-16"
                                            aria-labelledby="fc-dom-808"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-808"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 16, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  16
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-event-harness"
                                                  style={{ marginTop: " 0px;" }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-dot-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-daygrid-event-dot"></div>
                                                    <div class="fc-event-time">
                                                      4p
                                                    </div>
                                                    <div class="fc-event-title">
                                                      Repeating Event
                                                    </div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-thu fc-day-future"
                                            data-date="2023-08-17"
                                            aria-labelledby="fc-dom-810"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-810"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 17, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  17
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-fri fc-day-future"
                                            data-date="2023-08-18"
                                            aria-labelledby="fc-dom-812"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-812"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 18, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  18
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-sat fc-day-future"
                                            data-date="2023-08-19"
                                            aria-labelledby="fc-dom-814"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-814"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 19, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  19
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr role="row">
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-sun fc-day-future"
                                            data-date="2023-08-20"
                                            aria-labelledby="fc-dom-816"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-816"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 20, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  20
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-mon fc-day-future"
                                            data-date="2023-08-21"
                                            aria-labelledby="fc-dom-818"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-818"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 21, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  21
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-tue fc-day-future"
                                            data-date="2023-08-22"
                                            aria-labelledby="fc-dom-820"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-820"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 22, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  22
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-wed fc-day-future"
                                            data-date="2023-08-23"
                                            aria-labelledby="fc-dom-822"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-822"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 23, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  23
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-thu fc-day-future"
                                            data-date="2023-08-24"
                                            aria-labelledby="fc-dom-824"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-824"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 24, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  24
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-fri fc-day-future"
                                            data-date="2023-08-25"
                                            aria-labelledby="fc-dom-826"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-826"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 25, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  25
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-sat fc-day-future"
                                            data-date="2023-08-26"
                                            aria-labelledby="fc-dom-828"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-828"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 26, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  26
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr role="row">
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-sun fc-day-future"
                                            data-date="2023-08-27"
                                            aria-labelledby="fc-dom-690"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-690"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 27, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  27
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-mon fc-day-future"
                                            data-date="2023-08-28"
                                            aria-labelledby="fc-dom-692"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-692"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 28, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  28
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-event-harness"
                                                  style={{ marginTop: " 0px;" }}
                                                >
                                                  <a
                                                    class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future fc-event-solid-info fc-event-light"
                                                    tabindex="0"
                                                  >
                                                    <div class="fc-event-main">
                                                      <div class="fc-event-main-frame">
                                                        <div class="fc-event-title-container">
                                                          <div class="fc-event-title fc-sticky">
                                                            Site visit
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="fc-event-resizer fc-event-resizer-end"></div>
                                                  </a>
                                                </div>
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-tue fc-day-future"
                                            data-date="2023-08-29"
                                            aria-labelledby="fc-dom-694"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-694"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 29, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  29
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-wed fc-day-future"
                                            data-date="2023-08-30"
                                            aria-labelledby="fc-dom-696"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-696"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 30, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  30
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-thu fc-day-future"
                                            data-date="2023-08-31"
                                            aria-labelledby="fc-dom-698"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-698"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to August 31, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  31
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-fri fc-day-future fc-day-other"
                                            data-date="2023-09-01"
                                            aria-labelledby="fc-dom-700"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-700"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to September 1, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  1
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-sat fc-day-future fc-day-other"
                                            data-date="2023-09-02"
                                            aria-labelledby="fc-dom-702"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-702"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to September 2, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  2
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr role="row">
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-sun fc-day-future fc-day-other"
                                            data-date="2023-09-03"
                                            aria-labelledby="fc-dom-704"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-704"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to September 3, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  3
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-mon fc-day-future fc-day-other"
                                            data-date="2023-09-04"
                                            aria-labelledby="fc-dom-706"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-706"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to September 4, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  4
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-tue fc-day-future fc-day-other"
                                            data-date="2023-09-05"
                                            aria-labelledby="fc-dom-708"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-708"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to September 5, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  5
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-wed fc-day-future fc-day-other"
                                            data-date="2023-09-06"
                                            aria-labelledby="fc-dom-710"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-710"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to September 6, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  6
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-thu fc-day-future fc-day-other"
                                            data-date="2023-09-07"
                                            aria-labelledby="fc-dom-712"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-712"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to September 7, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  7
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-fri fc-day-future fc-day-other"
                                            data-date="2023-09-08"
                                            aria-labelledby="fc-dom-714"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-714"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to September 8, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  8
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                          <td
                                            role="gridcell"
                                            class="fc-daygrid-day fc-day fc-day-sat fc-day-future fc-day-other"
                                            data-date="2023-09-09"
                                            aria-labelledby="fc-dom-716"
                                          >
                                            <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                              <div class="fc-daygrid-day-top">
                                                <a
                                                  id="fc-dom-716"
                                                  class="fc-daygrid-day-number"
                                                  title="Go to September 9, 2023"
                                                  data-navlink=""
                                                  tabindex="0"
                                                >
                                                  9
                                                </a>
                                              </div>
                                              <div class="fc-daygrid-day-events">
                                                <div
                                                  class="fc-daygrid-day-bottom"
                                                  style={{ marginTop: " 0px;" }}
                                                ></div>
                                              </div>
                                              <div class="fc-daygrid-day-bg"></div>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/*Burası Eklenen takvim kısmı-end*/}
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="kt_modal_add_event"
            tabindex-="1"
            aria-hidden="true"
            data-bs-focus="false"
          >
            <div class="modal-dialog modal-dialog-centered mw-650px">
              <div class="modal-content">
                <form class="form" action="#" id="kt_modal_add_event_form">
                  <div class="modal-header">
                    <h2 class="fw-bold" data-kt-calendar="title">
                      Add Event
                    </h2>
                    <div
                      class="btn btn-icon btn-sm btn-active-icon-primary"
                      id="kt_modal_add_event_close"
                    >
                      <i class="ki-duotone ki-cross fs-1">
                        <span class="path1"></span>
                        <span class="path2"></span>
                      </i>
                    </div>
                  </div>
                  <div class="modal-body py-10 px-lg-17">
                    <div class="fv-row mb-9">
                      <label class="fs-6 fw-semibold required mb-2">
                        Event Name
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-solid"
                        placeholder=""
                        name="calendar_event_name"
                      />
                    </div>
                    <div class="fv-row mb-9">
                      <label class="fs-6 fw-semibold mb-2">
                        Event Description
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-solid"
                        placeholder=""
                        name="calendar_event_description"
                      />
                    </div>
                    <div class="fv-row mb-9">
                      <label class="fs-6 fw-semibold mb-2">
                        Event Location
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-solid"
                        placeholder=""
                        name="calendar_event_location"
                      />
                    </div>
                    <div class="fv-row mb-9">
                      <label class="form-check form-check-custom form-check-solid">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="kt_calendar_datepicker_allday"
                        />
                        <span
                          class="form-check-label fw-semibold"
                          for="kt_calendar_datepicker_allday"
                        >
                          All Day
                        </span>
                      </label>
                    </div>
                    <div class="row row-cols-lg-2 g-10">
                      <div class="col">
                        <div class="fv-row mb-9">
                          <label class="fs-6 fw-semibold mb-2 required">
                            Event Start Date
                          </label>
                          <input
                            class="form-control form-control-solid"
                            name="calendar_event_start_date"
                            placeholder="Pick a start date"
                            id="kt_calendar_datepicker_start_date"
                          />
                        </div>
                      </div>
                      <div class="col" data-kt-calendar="datepicker">
                        <div class="fv-row mb-9">
                          <label class="fs-6 fw-semibold mb-2">
                            Event Start Time
                          </label>
                          <input
                            class="form-control form-control-solid"
                            name="calendar_event_start_time"
                            placeholder="Pick a start time"
                            id="kt_calendar_datepicker_start_time"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row row-cols-lg-2 g-10">
                      <div class="col">
                        <div class="fv-row mb-9">
                          <label class="fs-6 fw-semibold mb-2 required">
                            Event End Date
                          </label>
                          <input
                            class="form-control form-control-solid"
                            name="calendar_event_end_date"
                            placeholder="Pick a end date"
                            id="kt_calendar_datepicker_end_date"
                          />
                        </div>
                      </div>
                      <div class="col" data-kt-calendar="datepicker">
                        <div class="fv-row mb-9">
                          <label class="fs-6 fw-semibold mb-2">
                            Event End Time
                          </label>
                          <input
                            class="form-control form-control-solid"
                            name="calendar_event_end_time"
                            placeholder="Pick a end time"
                            id="kt_calendar_datepicker_end_time"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer flex-center">
                    <button
                      type="reset"
                      id="kt_modal_add_event_cancel"
                      class="btn btn-light me-3"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      id="kt_modal_add_event_submit"
                      class="btn btn-primary"
                    >
                      <span class="indicator-label">Submit</span>
                      <span class="indicator-progress">
                        Please wait...
                        <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="kt_modal_view_event"
            tabindex="-1"
            data-bs-focus="false"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered mw-650px">
              <div class="modal-content">
                <div class="modal-header border-0 justify-content-end">
                  <div
                    class="btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-primary me-2"
                    data-bs-toggle="tooltip"
                    data-bs-dismiss="click"
                    title="Edit Event"
                    id="kt_modal_view_event_edit"
                  >
                    <i class="ki-duotone ki-pencil fs-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </div>
                  <div
                    class="btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-danger me-2"
                    data-bs-toggle="tooltip"
                    data-bs-dismiss="click"
                    title="Delete Event"
                    id="kt_modal_view_event_delete"
                  >
                    <i class="ki-duotone ki-trash fs-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                      <span class="path5"></span>
                    </i>
                  </div>
                  <div
                    class="btn btn-icon btn-sm btn-color-gray-500 btn-active-icon-primary"
                    data-bs-toggle="tooltip"
                    title="Hide Event"
                    data-bs-dismiss="modal"
                  >
                    <i class="ki-duotone ki-cross fs-2x">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </div>
                </div>
                <div class="modal-body pt-0 pb-20 px-lg-17">
                  <div class="d-flex">
                    <i class="ki-duotone ki-calendar-8 fs-1 text-muted me-5">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                      <span class="path5"></span>
                      <span class="path6"></span>
                    </i>
                    <div class="mb-9">
                      <div class="d-flex align-items-center mb-2">
                        <span
                          class="fs-3 fw-bold me-3"
                          data-kt-calendar="event_name"
                        ></span>
                        <span
                          class="badge badge-light-success"
                          data-kt-calendar="all_day"
                        ></span>
                      </div>
                      <div
                        class="fs-6"
                        data-kt-calendar="event_description"
                      ></div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <span class="bullet bullet-dot h-10px w-10px bg-success ms-2 me-7"></span>
                    <div class="fs-6">
                      <span class="fw-bold">Starts</span>
                      <span data-kt-calendar="event_start_date"></span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-9">
                    <span class="bullet bullet-dot h-10px w-10px bg-danger ms-2 me-7"></span>
                    <div class="fs-6">
                      <span class="fw-bold">Ends</span>
                      <span data-kt-calendar="event_end_date"></span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="ki-duotone ki-geolocation fs-1 text-muted me-5">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                    <div class="fs-6" data-kt-calendar="event_location"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Calendar;
