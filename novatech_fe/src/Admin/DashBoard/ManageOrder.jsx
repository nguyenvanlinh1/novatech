import {
  CardBody,
  Card,
  CardHeader,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import React, { useEffect } from "react";
import orderTable from "../Data/orderTable";
import {
  Avatar,
  AvatarGroup,
  Button,
  Menu,
  MenuItem,
  Pagination,
  TablePagination,
  Tooltip,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliveryOrder,
  getAllOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";


function getDateFromISO(isoString) {
  const date = isoString.split('T')[0];
  const [year, month, day] = date.split('-');
  return `${day}-${month}-${year}`;
}

const ManageOrder = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const { aorder } = useSelector((store) => store);
  console.log("Order", aorder);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [aorder.shipped, aorder.confirmed, aorder.delivered, aorder.deletedOrder]);

  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);

  const filterOrdersByStatus = (orders, status) => {
    if (!orders || !Array.isArray(orders)) {
      return [];
    }
    if (status === "ALL") {
      return orders;
    } else {
      return orders.filter((item) => item?.orderStatus === status);
    }
  };

  const sortFilterOrdersByStatus = (orders, sort) => {
    if (!orders || !Array.isArray(orders)) {
      return [];
    }
    if (sort === "price_low") {
      return orders.sort((a, b) => a?.totalPrice - b?.totalPrice);
    } else if (sort === "price_high") {
      return orders.sort((a, b) => b?.totalPrice - a?.totalPrice);
    } else {
      return orders;
    }
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };

  const handleShipedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };

  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveryOrder(orderId));
    handleClose();
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Danh sách đơn hàng
          </Typography>
        </CardHeader>
        <CardBody className="px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "ID",
                  "Sản phẩm",
                  "Người đặt",
                  "Ngày đặt",
                  "Tổng tiền",
                  "Trạng thái",
                  "",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-center"
                  >
                    <Typography
                      variant="small"
                      className="text-sm font-semibold uppercase text-[#333]"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {aorder.orders && aorder.orders.result && aorder.orders.result.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, key) => {
                  const index = page * rowsPerPage + key;
                  const className = `py-3 px-5 ${
                    key === aorder.orders.result.length
                      ? ""
                      : "border-b border-blue-gray-50 text-center"
                  }`;

                  return (
                    <tr key={item.orderId}>
                      <td className={className}>
                        <Typography className="text-md text-[#333]">
                          {item.orderId}
                        </Typography>
                      </td>
                      <td className={className}>
                        <AvatarGroup sx={{ justifyContent: "flex-end" }}>
                          {item.orderItems.map((item2) =>
                            item2.product.images.map(
                              ({ imageId, imageUrl }) => (
                                <Tooltip key={imageId} content={imageId}>
                                  <Avatar
                                    src={imageUrl}
                                    alt={imageId}
                                    size="xs"
                                    className={`cursor-pointer border-2 border-white ${
                                      key === 0 ? "" : "-ml-2.5"
                                    }`}
                                  />
                                </Tooltip>
                              )
                            )
                          )}
                        </AvatarGroup>
                      </td>
                      <td className={className}>
                        <Typography className="text-md text-[#333]">
                          {item.user.firstName} {item.user.lastName}
                        </Typography>
                        <Typography className="text-md text-[#333]">
                          {item.user.email}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-md text-[#333]">
                          {getDateFromISO(item.orderDate)}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-md text-[#333] line-through">
                          {item.totalPrice}đ
                        </Typography>
                        <Typography className="text-md text-[#DD5746]">
                          {item.totalDiscountedPrice}đ
                        </Typography>
                      </td>
                      <td className={className}>
                        <Button
                          id="basic-button"
                          aria-controls={`basic-menu-${item.orderId}`}
                          aria-haspopup="true"
                          aria-expanded={Boolean(anchorEl[index])}
                          onClick={(e) => handleClick(e, index)}
                        >
                          <span
                            className={`px-5 py-2 rounded-full ${
                              item.status === "CONFIRMED"
                                ? "text-[#e6e600]"
                                : item.status === "SHIPPED"
                                ? "text-[#00bfff]"
                                : item.status === "PLACED"
                                ? "text-[#DD5746]"
                                : item.status === "DELIVERED"
                                ? "text-[#33cc33]"
                                : ""
                            }`}
                          >
                            {item.status}
                          </span>
                        </Button>
                        <Menu
                          id={`basic-menu-${item.orderId}`}
                          anchorEl={anchorEl[index]}
                          open={Boolean(anchorEl[index])}
                          onClose={() => handleClose(index)}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem
                            onClick={() => handleConfirmedOrder(item.orderId)}
                          >
                            Confirmed
                          </MenuItem>
                          <MenuItem
                            onClick={() => handleShipedOrder(item.orderId)}
                          >
                            Shipped
                          </MenuItem>
                          <MenuItem
                            onClick={() => handleDeliveredOrder(item.orderId)}
                          >
                            Delivered
                          </MenuItem>
                        </Menu>
                      </td>
                      <td>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() =>
                            handleDeleteOrder(item.orderId)
                          }
                        >
                          Xóa
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex justify-center">
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={aorder.orders && aorder.orders.result && aorder.orders.result.length}
            //count={2}
            rowsPerPage={rowsPerPage}
            labelRowsPerPage="Hàng trên mỗi trang"
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          {/* <Pagination count={10} color="secondary"></Pagination> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ManageOrder;
