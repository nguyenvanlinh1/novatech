import { Button, Input, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../State/User/Profile/Action";

export const Info = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const [firstName, setFirstName] = useState(true);
console.log(auth)
  const handleFirstName = () => {
    setFirstName(false);
  };
  const [lastName, setLastName] = useState(true);

  const handleLastName = () => {
    setLastName(false);
  };
  const [dob, setDob] = useState(true);

  const handleDob = () => {
    setDob(false);
  };

  const [phone, setPhone] = useState(true);

  const handlePhone = () => {
    setPhone(false);
  };

  const [data, setData] = useState({
    firstName: auth.user && auth.user.result.firstName,
    lastName: auth.user && auth.user.result.lastName,
    avatarUrl: auth.user  && auth.user.result.avatarUrl,
    password:
      auth.user &&
      auth.user.result.password,
    dob: auth.user && auth.user.result.dob,
    phone: auth.user && auth.user.result.phone,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(data));
    setFirstName(true);
    setLastName(true);
    setDob(true);
    setPhone(true);
    // toast.success('🦄 Cập nhật thoog tin thành công!');
  };

  const fileInputRef = React.createRef();
  return (
    <div>
      <div className="w-full min-h-screen md:w-2/3 lg:w-3/4">
        <div className="">
          <div className="w-full px-6 sm:max-w-xl sm:rounded-lg">
            <Typography variant="h4" className="font-bold sm:text-xl text-black">
            👽 Thông tin cá nhân
            </Typography>

            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="object-cover w-30 h-30 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                  src={
                    (auth.user &&
                      auth.user.result.imageUrl) ||
                    "https://cdn2.cellphones.com.vn/50x50,webp,q100/media/wysiwyg/Shipper_CPS3_1.png"
                  }
                />

                <div className="sm:ml-8">
                  <Input
                    type="file"
                    inputRef={fileInputRef}
                    style={{ display: "none" }}
                    className="hidden"
                  />
                  <Button
                    variant="outlined"
                    component="label"
                    onClick={() => fileInputRef.current.click()}
                    sx={{ color: "#333" }}
                  >
                    Sửa
                  </Button>
                </div>
              </div>

              <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                <div className="relative mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <TextField
                    label={"Họ Đệm"}
                    defaultValue={`${
                      auth.user &&
                      auth.user.result.lastName != null
                        ? auth.user.result.lastName
                        : " "
                    }`}
                    //defaultValue="Linh"
                    variant="standard"
                    disabled={lastName}
                    id="lastName"
                    name="lastName"
                    onChange={handleChange}
                  />
                  <Button
                    variant="text"
                    onClick={handleLastName}
                    style={{
                      position: "absolute",
                      top: 15,
                      textDecoration: "underline",
                    }}
                  >
                    Thiết lập ngay
                  </Button>
                </div>
                <div className="relative mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <TextField
                    label={"Tên"}
                    defaultValue={`${
                      auth.user &&
                      auth.user.result.firstName != null
                        ? auth.user.result.firstName
                        : " "
                    }`}
                    //defaultValue="Linh"
                    variant="standard"
                    disabled={firstName}
                    id="firstName"
                    name="firstName"
                    onChange={handleChange}
                  />
                  <Button
                    variant="text"
                    onClick={handleFirstName}
                    style={{
                      position: "absolute",
                      top: 15,
                      textDecoration: "underline",
                    }}
                  >
                    Thiết lập ngay
                  </Button>
                </div>

                <div className="relative mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <TextField
                    id="dob"
                    label={"Ngày sinh"}
                    defaultValue={`${
                      auth.user &&
                      auth.user.result.dob != null
                        ? auth.user.result.dob
                        : " "
                    }`}
                    //defaultValue={'14/06/2002'}
                    variant="standard"
                    disabled={dob}
                    name="dob"
                    onChange={handleChange}
                  />
                  <Button
                    variant="text"
                    onClick={handleDob}
                    style={{
                      position: "absolute",
                      top: 15,
                      textDecoration: "underline",
                    }}
                  >
                    Thiết lập ngay
                  </Button>
                </div>
                <div className="relative mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <TextField
                    disabled={phone}
                    id="phone"
                    name="phone"
                    label={"Số điện thoại"}
                    defaultValue={`${
                      auth.user &&
                      auth.user.result.phone != null
                        ? auth.user.result.phone
                        : " "
                    }`}
                    //defaultValue={"0869526280"}
                    variant="standard"
                    onChange={handleChange}
                  />
                  <Button
                    variant="text"
                    onClick={handlePhone}
                    style={{
                      position: "absolute",
                      top: 15,
                      textDecoration: "underline",
                    }}
                  >
                    Thiết lập ngay
                  </Button>
                </div>
                <div className="mb-2 sm:mb-6">
                  <TextField
                    id="email"
                    label="Email"
                    defaultValue={`${
                      auth.user && auth.user.result.email
                    }`}
                    //defaultValue={"nvanlinh1406@gmail.com"}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className="relative mb-2 sm:mb-6">
                  <TextField
                    id="address"
                    label="Địa chỉ"
                    defaultValue="Lưu Đồn, Hồng Dũng, Thái Thụy, Thái Bình"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    onClick={handleSubmit}
                  >
                    Cập nhật thông tin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
