import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { createOrder } from "../../State/User/Order/Action";
import { useNavigate } from "react-router-dom";

const AddressCard = ({address}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleButton = () => {
        dispatch(createOrder(address.addressId));
        alert("Đặt Hàng Thành Công")
        setTimeout(() => {
            navigate("/payment")
        }, 2000)
    }
  return (

    <div>
      <h2 className="text-2xl font-bold text-[#333] p-2 border-1 border-b">
        🏡Địa chỉ có sẵn
      </h2>
      <div className="shadow-lg">
        <div className="grid grid-cols-1 gap-3 p-5">
          <p>
            Họ Tên:
            <span className="text-[#333]"> {address.lastName} {address.firstName}</span>
          </p>
          <p>
            Email:
            <span className="text-[#333]"> {address.user.email}</span>
          </p>
          <p className="text-[#333]">
            {address.streetAddress}
          </p>
          <p>
            Số điện thoại: <span className="text-[#333]">{address.phone} ☎</span>
          </p>
          <Button variant="contained" size="medium" onClick={() => handleButton()}>
            Sử dụng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
