import React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  LinearProgress,
  Pagination,
  Rating,
} from "@mui/material";

const ReviewProduct = () => {
  return (
    <>
      <Grid container className="mt-5">
        <Grid item container xs={7} spacing={2} className="shadow-md p-5">
          <Grid
            item
            xs={4}
            container
            justifyContent={"center"}
            alignContent={"center"}
          >
            <p className="font-semibold text-xl text-black">4.9/5</p>
            <Rating value={5} defaultValue={5}></Rating>
            <p className="underline text-blue-600">23 đánh giá</p>
          </Grid>
          <Grid item xs={8}>
            <Box className="mt-5 space-y-3">
              {/* 1 */}
              <Grid container alignItems="center">
                <Grid item xs={1}>
                  <p>5⭐</p>
                </Grid>
                <Grid item xs={7}>
                  <LinearProgress
                    sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                    variant="determinate"
                    value={40}
                    color="success"
                  />
                </Grid>
                <Grid item xs={3}>
                  <p className="ml-3">23 đánh giá</p>
                </Grid>
              </Grid>

              {/* 2 */}
              <Grid container alignItems="center">
                <Grid item xs={1}>
                  <p>4⭐</p>
                </Grid>
                <Grid item xs={7}>
                  <LinearProgress
                    sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                    variant="determinate"
                    value={30}
                    color="success"
                  />
                </Grid>
                <Grid item xs={3}>
                  <p className="ml-3">23 đánh giá</p>
                </Grid>
              </Grid>

              {/* 3 */}
              <Grid container alignItems="center">
                <Grid item xs={1}>
                  <p>3⭐</p>
                </Grid>
                <Grid item xs={7}>
                  <LinearProgress
                    sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                    variant="determinate"
                    value={25}
                  />
                </Grid>
                <Grid item xs={3}>
                  <p className="ml-3">23 đánh giá</p>
                </Grid>
              </Grid>

              {/* 4 */}
              <Grid container alignItems="center">
                <Grid item xs={1}>
                  <p>2⭐</p>
                </Grid>
                <Grid item xs={7}>
                  <LinearProgress
                    sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                    variant="determinate"
                    value={20}
                    color="warning"
                  />
                </Grid>
                <Grid item xs={3}>
                  <p className="ml-3">23 đánh giá</p>
                </Grid>
              </Grid>

              {/* 5 */}
              <Grid container alignItems="center">
                <Grid item xs={1}>
                  <p>1⭐</p>
                </Grid>
                <Grid item xs={7}>
                  <LinearProgress
                    sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                    variant="determinate"
                    value={10}
                    color="error"
                  />
                </Grid>
                <Grid item xs={3}>
                  <p className="ml-3">23 đánh giá</p>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} container justifyContent={"center"}>
            <p>Bạn đánh giá sao về sản phẩm này?</p>
          </Grid>
          <Grid item xs={12} container justifyContent={"center"}>
            <Button variant="contained">Đánh giá ngay</Button>
          </Grid>
          <Grid item xs={12}>
            <p className="text-xl text-black py-5 font-bold">Lọc theo</p>
            <div className="flex gap-5">
              <Button variant="outlined">5⭐</Button>
              <Button variant="outlined">4⭐</Button>
              <Button variant="outlined">3⭐</Button>
              <Button variant="outlined">2⭐</Button>
              <Button variant="outlined">1⭐</Button>
            </div>
            <hr className="mt-2" />
          </Grid>
          <Grid item xs={12} container spacing={5}>
            {[1, 1, 1, 1].map(() => (
              <Grid item container xs={12}>
                <Grid item xs={1}>
                  <Avatar>L</Avatar>
                </Grid>
                <Grid item xs={11}>
                  <p className="text-black">
                    <b>Nguyễn Văn Linh</b>⏱3/5/2024 17:13
                  </p>
                  <Rating defaultValue={5} value={5}></Rating>
                  <p>Hài lòng về sản phẩm.</p>
                </Grid>
                <Grid item xs={12}>
                    <hr />
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item container xs={12} justifyContent={"center"}>
            <Pagination count={10} color="secondary" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ReviewProduct;
