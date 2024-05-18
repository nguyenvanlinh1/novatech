import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  LinearProgress,
  Pagination,
  Rating,
} from "@mui/material";
import { Textarea } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  createReviewByProduct,
  deleteReviewByProduct,
  getReviewByProduct,
} from "../../State/User/Review/Action";

function getDateFromISO(isoString) {
  const date = isoString.split("T")[0];
  const [year, month, day] = date.split("-");
  return `${day}-${month}-${year}`;
}

const ReviewProduct = ({ productId }) => {
  const dispatch = useDispatch();
  const { review } = useSelector((store) => store);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonReview = () => {
    dispatch(createReviewByProduct(productData));
    handleClose();
  };

  const [productData, setProductData] = useState({
    productId: productId,
    content: "",
    imageUrl: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "imageUrl") {
      const file = files[0];
      setProductData((prev) => ({
        ...prev,
        [name]: file ? URL.createObjectURL(file) : "",
      }));
    } else {
      setProductData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleRatingChange = (event, newValue) => {
    setProductData((prev) => ({
      ...prev,
      rating: newValue,
    }));
  };

  useEffect(() => {
    dispatch(getReviewByProduct(productId));
  }, []);


  const handleDeleteReview = (reviewId) => {
    dispatch(deleteReviewByProduct(reviewId));
  };

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
            {review.reviews && review.reviews.result && (
              <p>Số lượt đánh giá: {review.reviews.result.length}</p>
            )}
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
                  <p className="ml-3">
                    {review.reviews && review.reviews.result
                      ? review.reviews.result.filter(
                          (item) => item.rating === 5
                        ).length
                      : 0}
                    đánh giá
                  </p>
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
                  <p className="ml-3">
                    {review.reviews && review.reviews.result
                      ? review.reviews.result.filter(
                          (item) => item.rating === 4
                        ).length
                      : 0}
                    đánh giá
                  </p>
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
                  <p className="ml-3">
                    {review.reviews && review.reviews.result
                      ? review.reviews.result.filter(
                          (item) => item.rating === 3
                        ).length
                      : 0}
                    đánh giá
                  </p>
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
                  <p className="ml-3">
                    {review.reviews && review.reviews.result
                      ? review.reviews.result.filter(
                          (item) => item.rating === 2
                        ).length
                      : 0}
                    đánh giá
                  </p>
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
                  <p className="ml-3">
                    {review.reviews && review.reviews.result
                      ? review.reviews.result.filter(
                          (item) => item.rating === 1
                        ).length
                      : 0}
                    đánh giá
                  </p>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} container justifyContent={"center"}>
            <p>Bạn đánh giá sao về sản phẩm này?</p>
          </Grid>
          <Grid item xs={12} container justifyContent={"center"}>
            <Button variant="contained" onClick={handleClickOpen}>
              Đánh giá ngay
            </Button>
          </Grid>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              "Đánh giá sản phẩm Iphone 13 pro max
            </DialogTitle>
            <DialogContent className="p-5">
              <div className="flex justify-between items-center">
                <label>Xếp hạng</label>
                <Rating
                  value={productData.rating}
                  name="rating"
                  onChange={handleRatingChange}
                />
              </div>
              <CssBaseline />
              <div className="w-full">
                <label>Nội dung đánh giá</label>
                <Textarea
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Viết cái gì đó ..."
                  name="content"
                  value={productData.content}
                  onChange={handleChange}
                />
                <input
                  type="file"
                  name="imageUrl"
                  id=""
                  onChange={handleChange}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleButtonReview}>Đánh giá</Button>
              <Button onClick={handleClose}>Thoái</Button>
            </DialogActions>
          </Dialog>
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
            {review.reviews.result &&
              review.reviews.result.map((item) => (
                <Grid item container xs={12}>
                  <Grid item xs={1}>
                    <Avatar
                      src={
                        item.user.avatarUrl ||
                        "https://avatar.iran.liara.run/public/10"
                      }
                    ></Avatar>
                  </Grid>
                  <Grid item xs={8}>
                    <p className="text-black">
                      <b>
                        {item.user?.firstName && item.user?.lastName
                          ? `${item.user.firstName} ${item.user.lastName}`
                          : "Ẩn danh"}
                      </b>{" "}
                      ⏱{getDateFromISO(item.createAt)}
                    </p>
                    <Rating defaultValue={5} value={item.rating}></Rating>
                    <p>{item.content}</p>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="text">Chỉnh sửa</Button>
                    <Button
                      variant="text"
                      onClick={() => handleDeleteReview(item.reviewId)}
                    >
                      Xóa
                    </Button>
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
