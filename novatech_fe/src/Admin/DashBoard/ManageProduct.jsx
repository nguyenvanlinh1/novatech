import React from "react";
import productTable from "../Data/productTable";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

const ManageProduct = () => {
  const [inputCategory, setInputCategory] = React.useState("");

  const handleChangeCategory = (event) => {
    setInputCategory(event.target.value);
  };
  const [inputPrice, setInputPrice] = React.useState("");

  const handleChangePrice = (event) => {
    setInputPrice(event.target.value);
  };
  return (
    <div className="mt-10">
      <div>
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Danh sách sản phẩm
            </Typography>
          </CardHeader>
          <CardBody className="px-0 pt-0 pb-2">
            <div className="flex justify-between items-center p-5">
              <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    sx={{ fontSize: 14 }}
                  >
                    Sắp xếp theo danh mục
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={inputCategory}
                    onChange={handleChangeCategory}
                    label="Category"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Iphone</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 130 }}>
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    sx={{ fontSize: 14 }}
                  >
                    Sắp xếp theo giá
                  </InputLabel>
                  <Select
                    name="sort"
                    label="Sort to Price"
                    onChange={handleChangePrice}
                    value={inputPrice}
                    sx={{ color: "black" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="price_low">Tăng dần</MenuItem>
                    <MenuItem value="price_high">Giảm dần</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Button variant="contained" startIcon={<AddIcon />}>
                Thêm sản phẩm
              </Button>
            </div>
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "ID",
                    "Ảnh",
                    "Tên sản phẩm",
                    "Giá bán",
                    "Số lượng",
                    "",
                  ].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="body2"  className=" text-[#333] font-semibold"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {productTable.map(
                  ({ id, img, name, price, quantity, status }, key) => {
                    const className = `py-3 px-5 ${
                      key === productTable.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={id}>
                        <td className={className}>
                          <Typography variant="body2"  className="text-sm text-[#333]">
                            {id}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Tooltip key={id} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="md"
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          </Tooltip>
                        </td>
                        <td className={className}>
                          <Typography variant="body2"  className="text-sm text-[#333]">
                            {name}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography variant="body2"  className="text-sm text-[#333]">
                            {price}đ
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography variant="body2"  className="text-sm text-[#333]">
                            {quantity}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Button variant="text" sx={{color:"#FEB941", marginRight:5}} startIcon={<UpdateIcon/>}>Cập Nhật</Button>
                          <Button variant="text" sx={{color:"red"}} startIcon={<DeleteIcon/>}>Xóa</Button>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex justify-center">
            <Pagination count={10} color="primary"></Pagination>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ManageProduct;
