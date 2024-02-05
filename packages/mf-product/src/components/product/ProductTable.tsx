import {
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
import { setRequestPage, setRequestPageSize } from "@/redux/reducers/productSlice";

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

export default function ProductTable() {
  const { productList, request, totalProducts } = useAppSelector(
    (state) => state.product
  );

  const dispatch = useAppDispatch();

  const handleChangePage = (_event: unknown, newPage: number) => {
    dispatch(setRequestPage(newPage + 1))
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newPageSize = +event.target.value;
    dispatch(setRequestPageSize(newPageSize));
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{maxHeight: 600}}>
        <Table sx={{ minWidth: 700,  }} stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Brand</StyledTableCell>
              <StyledTableCell align="right">CPU</StyledTableCell>
              <StyledTableCell align="right">RAM</StyledTableCell>
              <StyledTableCell align="right">Storage</StyledTableCell>
              <StyledTableCell align="right">OS</StyledTableCell>
              <StyledTableCell align="right">Weight</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.name}
                </StyledTableCell>
                <StyledTableCell align="right">{item.brand}</StyledTableCell>
                <StyledTableCell align="right">
                  {item.processor}
                </StyledTableCell>
                <StyledTableCell align="right">{item.ram}</StyledTableCell>
                <StyledTableCell align="right">{item.storage}</StyledTableCell>
                <StyledTableCell align="right">{item.os}</StyledTableCell>
                <StyledTableCell align="right">{item.weight}</StyledTableCell>
                <StyledTableCell align="right">{item.price}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={pageSizeList}
        component="div"
        count={totalProducts}
        rowsPerPage={request.pageSize as number}
        page={(request.page as number) - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
