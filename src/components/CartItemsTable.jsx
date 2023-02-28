import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
} from "@mui/material";
import CartTableItem from "./CartTableItem";

export default function CartItemsTable({ cartItems }) {
  return (
    <TableContainer elevation={2} component={Paper} sx={{ p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => {
            return <CartTableItem key={item._id} {...item} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
