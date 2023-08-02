import React from "react";
import { Calendar, globalizeLocalizer } from "react-big-calendar";
import globalize from "globalize";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
const localizer = globalizeLocalizer(globalize);

const events = [
  {
    start: moment("2023-08-18T10:00:00").toDate(),
    end: moment("2023-08-18T11:00:00").toDate(),
    title: "Application",
  },
];

function Schedule() {
  return (
    <>
      <Calendar
      className="calendar"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
      />

 
    </>
  );
}

export default Schedule;
