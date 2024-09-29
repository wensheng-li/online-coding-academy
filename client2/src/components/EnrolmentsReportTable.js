// src/components/Table.js
import React from "react";
import "../App.css";

const EnrolmentsReportTable = ({
  data,
  handleSort,
  sortColumn,
  sortDirection,
}) => {
  return (
    <table>
      <thead className="table-header">
        <tr>
          <th onClick={() => handleSort("firstName")}>
            Students Name{" "}
            {sortColumn === "firstName" &&
              (sortDirection === "asc" ? "↑" : "↓")}
          </th>
          <th onClick={() => handleSort("completionStatus")}>
            Completion Status{" "}
            {sortColumn === "completionStatus" &&
              (sortDirection === "asc" ? "↑" : "↓")}
          </th>
          <th onClick={() => handleSort("description")}>
            Course Description{" "}
            {sortColumn === "description" &&
              (sortDirection === "asc" ? "↑" : "↓")}
          </th>
          <th onClick={() => handleSort("enrolledDate")}>
            Enrolled Date{" "}
            {sortColumn === "enrolledDate" &&
              (sortDirection === "asc" ? "↑" : "↓")}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item, index) => (
            <tr key={index}>
              <td>{`${item.firstName} ${item.surName}`}</td>
              <td>{item.completionStatus}</td>
              <td>{item.description}</td>
              <td>{item.enrolledDate}</td>
            </tr>
          ))
        ) : (
          <tr>
            {/* Handle the data was not existing */}
            <td colSpan="4" style={{ textAlign: "center" }}>
              The data you're searching is not available, please try again!
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default EnrolmentsReportTable;
