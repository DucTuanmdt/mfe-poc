import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import styled from "@emotion/styled";

import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setRequestPage, setRequestPageSize } from "@/redux/reducers/userSlice";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#CFD8DC",
    color: "#000",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F5F5F5",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const pageSizeList = [10, 25, 50, 100];

export default function UserTable() {
  const { userList, request, total } = useAppSelector(
    (state) => state.user
  );

  const dispatch = useAppDispatch();

  const handleChangePage = (_event: unknown, newPage: number) => {
    dispatch(setRequestPage(newPage + 1));
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newPageSize = +event.target.value;
    dispatch(setRequestPageSize(newPageSize));
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table sx={{ minWidth: 700 }} stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell>Avatar</StyledTableCell>
              <StyledTableCell>Full name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell align="right">Dob</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">City</StyledTableCell>
              <StyledTableCell align="right">Country</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  <Avatar
                    alt={`Avatar - ${item.firstName}`}
                    src={item.avatar}
                    sx={{
                      border: "2px solid #CFD8DC"
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {item.firstName + item.lastName}
                </StyledTableCell>
                <StyledTableCell>{item.email}</StyledTableCell>
                <StyledTableCell align="right">{item.dob}</StyledTableCell>
                <StyledTableCell align="right">{item.address}</StyledTableCell>
                <StyledTableCell align="right">{item.city}</StyledTableCell>
                <StyledTableCell align="right">{item.country}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={pageSizeList}
        component="div"
        count={total}
        rowsPerPage={request.pageSize as number}
        page={(request.page as number) - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
