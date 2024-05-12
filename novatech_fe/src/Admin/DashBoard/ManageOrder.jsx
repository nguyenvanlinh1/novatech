import {
  CardBody,
  Card,
  CardHeader,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import React from "react";
import orderTable from "../Data/orderTable";
import {
  Avatar,
  AvatarGroup,
  Button,
  Menu,
  MenuItem,
  Pagination,
  Tooltip,
} from "@mui/material";

const ManageOrder = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
                  "Sản phẩm",
                  "Người đặt",
                  "Ngày đặt",
                  "Tổng tiền",
                  "Trang thái",
                  "",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
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
              {orderTable.map(
                ({ listImg, name, email, orderDate, total, status }, key) => {
                  const className = `py-3 px-5 ${
                    key === orderTable.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={email}>
                      <td className={className}>
                        <AvatarGroup sx={{justifyContent:"flex-end"}}>
                          {listImg.map(({ img, name }, key) => (
                            <Tooltip key={name} content={name}>
                              <Avatar
                                src={img}
                                alt={name}
                                size="xs"
                                className={`cursor-pointer border-2 border-white ${
                                  key === 0 ? "" : "-ml-2.5"
                                }`}
                              />
                            </Tooltip>
                          ))}
                        </AvatarGroup>
                      </td>
                      <td className={className}>
                        <Typography className="text-md text-[#333]">
                          {name}
                        </Typography>
                        <Typography className="text-md text-[#333]">
                          {email}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-md text-[#333]">
                          {orderDate}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-md text-[#333]">
                          {total}đ
                        </Typography>
                      </td>
                      <td className={className}>
                        <Button
                          id="basic-button"
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          PLACED
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          {status.map((item) => (
                            <MenuItem onClick={handleClose}>{item}</MenuItem>
                          ))}
                        </Menu>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex justify-center">
          <Pagination count={10} color="secondary"></Pagination>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ManageOrder;
