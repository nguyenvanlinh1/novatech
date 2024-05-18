import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import { Card, CardBody, CardFooter, Chip } from "@material-tailwind/react";
import { Avatar, Button, CardHeader, Tooltip, Typography } from "@mui/material";
import userTable from "../Data/userTable";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ManageUser() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log(page)
  console.log(rowsPerPage)

  return (
    <div className="mt-5">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Danh sách khách hàng
            </Typography>
          </CardHeader>
          <CardBody className="px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "Id",
                    "Ảnh đại diện",
                    "Họ Tên",
                    "Email",
                    "Ngày Sinh",
                    "Trạng Thái",
                    "Quyền truy cập",
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
                {userTable
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(
                  (
                    { id, img, firstName, lastName, email, dob, status, roles },
                    key
                  ) => {
                    const className = `py-3 px-5 ${
                      key === userTable.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={id}>
                        <td className={className}>
                          <Typography className="text-md text-[#333]">
                            {id}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Tooltip>
                            <Avatar
                              src={img}
                              alt={id}
                              size="xs"
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          </Tooltip>
                        </td>
                        <td className={className}>
                          <Typography className="text-md text-[#333]">
                            {lastName} {firstName}
                          </Typography>
                        </td>
                        <td>
                          <Typography className="text-md text-[#333]">
                            {email}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-md text-[#333]">
                            {dob}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Chip
                            variant="gradient"
                            color={status ? "green" : "blue-gray"}
                            value={status ? "online" : "offline"}
                            className="py-0.5 px-2 text-[11px] font-medium w-fit"
                          />
                        </td>
                        <td className={className}>
                          <Typography className="text-md text-[#333]">
                            {roles}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Button
                            variant="text"
                            startIcon={<DeleteIcon />}
                            sx={{ color: "red" }}
                          >
                            Xóa
                          </Button>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex justify-center">
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={userTable.length}
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
    </div>
  );
}
