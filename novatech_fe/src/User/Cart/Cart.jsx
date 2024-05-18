import { Breadcrumbs, Button, Grid, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../State/User/Cart/Action";
import CartItem from "./CartItem";

const Cart = () => {
  const {cart} = useSelector(store => store);
  console.log("Cart", cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart())
  }, [cart.updateCartItem, cart.deleteCartItem])

  const navigate = useNavigate();
  return (
    <>
      <Grid container marginTop={"72px"}>
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
          {cart.cart.result.cartItems.map((item) => (
            <CartItem item={item} />
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
              {cart.cart.result.totalPrice}đ
            </span>
          </div>
          <div className="flex justify-between mb-5">
            <span className="font-semibold text-sm uppercase text-black">
              Số lượng sản phẩm:
            </span>
            <span>{cart.cart.result.totalItem}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-sm uppercase text-black">
              Số tiền được giảm:
            </span>
            <span>- {cart.cart.result.totalRemaining}đ</span>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 uppercase text-2xl">
              <span className="text-black">Tổng</span>
              <span className="text-[#DD5746]">{cart.cart.result.totalDiscountedPrice}đ</span>
            </div>
            <Button
              variant="contained"
              className="w-full rounded-lg bg-blue-500 text-white"
              onClick={() => navigate("/delivery")}
            >
              Đặt hàng
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
