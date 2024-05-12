import { Breadcrumbs, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import EastIcon from "@mui/icons-material/East";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          mt={2}
          mx={10}
          container
          justifyContent={"space-between"}
        >
          <Breadcrumbs
            separator={<NavigateNextIcon />}
            aria-label="breadcrumb"
            className="text-blue-500"
          >
            <Link underline="hover" href="/">
              Trang chủ
            </Link>
            <Link
              underline="hover"
              href="/material-ui/getting-started/installation/"
            >
              Giỏ hàng
            </Link>
          </Breadcrumbs>
          <Button>
            Quay Lại
            <EastIcon />
          </Button>
        </Grid>
        <Grid item xs={12} mt={5} ml={10}>
          <Typography variant="h4" className="text-black">
            {" "}
            Giỏ hàng của bạn
          </Typography>
        </Grid>
        <Grid item xs={7} mx={10}>
          {[1, 1, 1].map(() => (
            <div className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
              <div className="col-span-12 lg:col-span-2 img box">
                <img
                  src="https://pagedone.io/asset/uploads/1701162826.png"
                  alt="speaker image"
                  className="max-lg:w-full lg:w-[180px] "
                />
              </div>
              <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                <div className="flex items-center justify-between w-full mb-4">
                  <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                    Round white portable speaker
                  </h5>
                  <button className="rounded-full group flex items-center justify-center focus-within:outline-red-500">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                        cx="17"
                        cy="17"
                        r="17"
                        fill=""
                      />
                      <path
                        className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                        d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                        stroke="#EF4444"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                  <span>Màu sắc:</span>
                  <span className="ml-5">Đen</span>
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-black">
                    <Button variant="outlined" className="rounded-2xl">
                      <RemoveIcon />
                    </Button>
                    <input
                      type="text"
                      id="number"
                      className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center"
                      value={2}
                    />
                    <Button variant="outlined">
                      <AddIcon />
                    </Button>
                  </div>
                  <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
                    28.000.000đ
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </Grid>

        <Grid
          item
          xs={3}
          mt={5}
          marginRight={10}
          className="shadow-md p-5 border-2 border-gray-200 rounded-3xl self-start"
        >
          <h1 className="font-semibold text-2xl border-b pb-8 text-black text-center">
            🚙 Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase text-black">
              Tổng tiền sản phẩm:
            </span>
            <span className="font-semibold text-sm text-[#DD5746]">
              28.000.000đ
            </span>
          </div>
          <div className="flex justify-between mb-5">
            <span className="font-semibold text-sm uppercase text-black">
              Số lượng sản phẩm:
            </span>
            <span>5</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-sm uppercase text-black">
              Phí vận chuyển:
            </span>
            <span>- 15.000đ</span>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 uppercase text-2xl">
              <span className="text-black">Tổng</span>
              <span className="text-[#DD5746]">27.985.000đ</span>
            </div>
            <Button
              variant="contained"
              className="w-full rounded-lg bg-blue-500 text-white"
            >
              Check out
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
