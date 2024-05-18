import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, avatar } from "@material-tailwind/react";
import { updateProfile } from "../../State/User/Profile/Action";

const Profile = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  console.log("Auth", auth)
  const [firstName, setFirstName] = useState(true);

  const handleFirstName = () => {
    setFirstName(false);
  }
  const [lastName, setLastName] = useState(true);

  const handleLastName = () => {
    setLastName(false);
  }
  const [dob, setDob] = useState(true);

  const handleDob = () => {
    setDob(false);
  }

  const [phone, setPhone] = useState(true);

  const handlePhone = () => {
    setPhone(false);
  }

  const [data, setData] = useState({
    firstName:auth.user.data.result.firstName,
    lastName:auth.user.data.result.lastName,
    avatarUrl:auth.user.data.result.avatarUrl,
    password:auth.user.data.result.password,
    dob:auth.user.data.result.dob,
    phone:auth.user.data.result.phone,
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  console.log(data)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(data));
  }

  return (
    <div>
      <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931] mt-20">
        <div className="py-4 md:w-1/3 lg:w-1/4 md:block mt-5">
          <div className="flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12 -z-10">
            <h2 className="pl-3 mb-4 text-2xl font-semibold">Cài đặt</h2>

            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full"
            >
              Hồ sơ cá nhân
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-semibold  hover:text-indigo-900 hover:border hover:rounded-full"
            >
              Thêm địa chỉ
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  "
            >
              Thông Báo
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  "
            >
              Tài khoản VIP
            </a>
          </div>
        </div>
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">
                Thông tin cá nhân
              </h2>

              <div className="grid max-w-2xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  <img
                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Bordered avatar"
                  />

                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <Button
                      id="avatarUrl"
                      name="avatarUrl"
                      type="file"
                      className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                      onChange={handleChange}
                    >
                      Sửa avatar
                    </Button>
                    <button
                      type="button"
                      className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                    >
                      Xóa avatar
                    </button>
                  </div>
                </div>

                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                  <div className="relative mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <TextField
                      label={"Họ Đệm"}
                      defaultValue={`${auth.user.data.result.lastName || ""}`}
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
                      defaultValue={`${auth.user.data.result.firstName || ""}`}
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
                      defaultValue={`${auth.user.data.result.dob || ""}`}
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
                      defaultValue={`${auth.user.data.result.phone || ""}`}
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
                      defaultValue={`${auth.user.data.result.email || ""}`}
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
                      Lưu lại
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
