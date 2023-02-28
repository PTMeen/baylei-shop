import {
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";

import { truncate } from "@/utils/truncate";
import {
  decreaseItemQty,
  increaseItemQty,
  removeFromCart,
} from "@/features/cart/cartSlice";

export default function CartTableItem({ image, title, price, qty, _id }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeFromCart(_id));
  };
  const handleIncreaseItem = () => {
    dispatch(increaseItemQty(_id));
  };
  const handleDecreaseItem = () => {
    if (qty === 1) {
      handleRemoveItem();
      return;
    }
    dispatch(decreaseItemQty(_id));
  };

  return (
    <TableRow>
      <TableCell>
        <Stack direction="row" gap={2} alignItems="center">
          <Avatar
            src={image}
            alt={title}
            variant="rounded"
            sx={{ width: { xs: 40, md: 60 }, height: { xs: 40, md: 60 } }}
          />
          <Typography sx={{ display: { xs: "none", md: "block" } }}>
            {truncate(title, 35)}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={{ xs: 0, md: 2 }}
        >
          <IconButton onClick={handleDecreaseItem}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <Typography> {qty}</Typography>
          <IconButton onClick={handleIncreaseItem}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Stack>
      </TableCell>
      <TableCell>${price}</TableCell>
      <TableCell>
        <Tooltip title="Remove item" arrow>
          <IconButton
            onClick={handleRemoveItem}
            aria-label={`remove ${title} from cart`}
            size="small"
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}
