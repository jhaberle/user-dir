import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Table = () => {
  const data = [
    { name: "John Elway", role: "Team Lead" },
    { name: "Jeff Bezos", role: "CFO" },
    { name: "Nolan Arenado", role: "Analyst" },
    { name: "Nick Saban", role: "Manager" },
    { name: "Bill Gates", role: "CEO" },
    { name: "Von Miller", role: "Specialist" },
    { name: "Babe Ruth", role: "Analyst" },
    { name: "Mark Zuckerberg", role: "Specialist" },
  ];

  const columns = [
    {
      headerName: "Name",
      field: "name",
      sortable: true,
      editable: true,
      filter: true,
    },
    {
      headerName: "Role",
      field: "role",
      sortable: true,
    },
  ];

  const defaultColDef = {};
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={data} columnDefs={columns} />
    </div>
  );
};

export default Table;
