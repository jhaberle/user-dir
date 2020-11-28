import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Table = () => {
  const data = [
    {
      name: "John Elway",
      role: "Team Lead",
      phone: "303-632-1862",
      email: "headhoncho@denverbroncos.com",
    },
    {
      name: "Jeff Bezos",
      role: "CFO",
      phone: "619-542-8725",
      email: "$$fordays@amazon.com",
    },
    {
      name: "Nolan Arenado",
      role: "Analyst",
      phone: "303-872-3148",
      email: "duderakes@gmail.com",
    },
    {
      name: "Nick Saban",
      role: "Manager",
      phone: "652-182-4863",
      email: "crimsontidecoach@gmail.com",
    },
    {
      name: "Bill Gates",
      role: "CEO",
      phone: "802-448-1138",
      email: "compnerd@micrsoft.com",
    },
    {
      name: "Von Miller",
      role: "Specialist",
      phone: "303-832-1358",
      email: "sackman@denverbroncos.com",
    },
    {
      name: "Babe Ruth",
      role: "Analyst",
      phone: "212-802-3318",
      email: "yankeefatman@gmail.com",
    },
    {
      name: "Mark Zuckerberg",
      role: "Specialist",
      phone: "415-889-3648",
      email: "istoleanapp@facebook.com",
    },
  ];

  const columns = [
    {
      headerName: "Name",
      field: "name",
    },
    {
      headerName: "Role",
      field: "role",
    },
    {
      headerName: "Phone",
      field: "phone",
    },
    {
      headerName: "Email",
      field: "email",
    },
  ];

  const defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1200 }}>
      <AgGridReact
        rowData={data}
        columnDefs={columns}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default Table;
