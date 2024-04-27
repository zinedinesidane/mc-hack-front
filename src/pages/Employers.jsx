import Heading from "../ui/Heading";
import MUIDataTable from "mui-datatables";
import { Avatar, Box, styled } from "@mui/material";
import { FaCheckSquare } from "react-icons/fa";

const StyledMuiDatatable = styled(MUIDataTable)(() => ({
  "& th button": {
    textTransform: "capitalize !important",
    color: "#000",
    fontSize: "1.4rem",
    fontWeight: 600,
  },
  "& td": {
    fontSize: "1.2rem",
  },
}));

function Employers() {
  const tableEmps = [
    {
      personne: "John Doe",
      account: "test@gmail.com",
      date: "2024.04.27",
      role: "simple",
      groupe: "test",
    },
    {
      personne: "John Doe",
      account: "test@gmail.com",
      date: "2024.04.27",
      role: "simple",
      groupe: "test",
    },
    {
      personne: "John Doe",
      account: "test@gmail.com",
      date: "2024.04.27",
      role: "simple",
      groupe: "test",
    },
  ];
  const tableColumns = [
    {
      name: "personne",
      label: "Personne",
      options: {
        customBodyRenderLite: () => {
          return <Avatar src="default-user.jpg" sx={{ heigth: "4rem", width: "4rem" }} />;
        },
      },
    },
    {
      name: "account",
      label: "Gmail Account",
    },
    {
      name: "date",
      label: "Date",
    },
    {
      name: "role",
      label: "Role",
    },
    {
      name: "groupe",
      label: "Groupe",
    },
    {
      name: "",
      label: "",
      options: {
        customBodyRenderLite: () => {
          return (
            <Box display="flex" alignItems="center" gap="1rem">
              <FaCheckSquare style={{ height: "2rem", width: "2rem", color: "#34A853" }} />
            </Box>
          );
        },
      },
    },
  ];

  const tableOptions = {
    print: false,
    download: false,
    viewColumns: false,
    filter: false,
    search: false,
    selectToolbarPlacement: "none",
    selectableRows: "single",
    selectableRowsOnClick: true,
    selectableRowsHideCheckboxes: true,
    customToolbar: () => null,
  };

  const table = {
    columns: tableColumns,
    options: tableOptions,
    data: tableEmps || [],
  };

  return (
    <div style={{ padding: " 3.5rem 3rem" }}>
      <Heading style={{ marginBottom: "2rem" }} as="h2">
        New employers
      </Heading>

      <StyledMuiDatatable columns={table.columns} options={table.options} data={table.data} />
    </div>
  );
}

export default Employers;
