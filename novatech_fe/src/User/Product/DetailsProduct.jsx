import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import {
  Breadcrumbs,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Link,
  Paper,
  Rating,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { findProductsById, findProduts } from "../../State/User/Product/Action";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../State/User/Cart/Action";
import ReviewProduct from "./ReviewProduct";
import ProductCard from "./ProductCard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { getReviewByProduct } from "../../State/User/Review/Action";

const products = {
  name: "Điện thoại iPhone 13 128GB",
  price: "25.000.000",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Trang chủ", href: "#" },
    { id: 2, name: "Điện Thoại", href: "#" },
  ],
  images: [
    {
      src: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-3.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-300", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-black", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "12GB - 1TB", price: "44.499.000", inStock: true },
    { name: "12GB - 512GB", price: "27.499.000", inStock: true },
    { name: "8GB - 256GB", price: "21.990.000", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const rows = [
  { id: "screenSize", label: "Kích thước màn hình" },
  { id: "screenTechnology", label: "Công nghệ màn hình" },
  { id: "ramCapacity", label: "Dung lượng ram" },
  { id: "battery", label: "Thời lượng Pin" },
  { id: "cpu", label: "CPU" },
  { id: "material", label: "Chất liệu" },
  { id: "operatingSystem", label: "Hệ điều hành" },
  { id: "resolution", label: "Độ phân giải" },
  { id: "size", label: "Kích thước" },
  { id: "weight", label: "Trọng lượng" },
  { id: "feature", label: "Tính năng" },
  { id: "utilities", label: "Tiện ích" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DetailsProduct() {
  const dispatch = useDispatch();
  const param = useParams();
  const { uproduct } = useSelector((store) => store);
  const { review } = useSelector((store) => store);
  console.log("Review", review);

  useEffect(() => {
    const data = param.productId;
    dispatch(findProductsById(data));
  }, [param.prductId]);

  useEffect(() => {
    dispatch(getReviewByProduct({ productId: param.productId }));
  }, [
    param.prductId,
    review.review,
    review.deleteReviews,
    review.updateReviews,
  ]);

  useEffect(() => {
    if (
      uproduct.product &&
      uproduct.product.data &&
      uproduct.product.data.result
    ) {
      const category = uproduct.product.data.result.category.categoryName;
      const data = {
        categoryName: category,
        color: "",
        minPrice: 0,
        maxPrice: 1000000000,
        minDiscount: 0,
        sort: "price_low",
        pageNumber: 0,
        pageSize: 10,
      };

      dispatch(findProduts(data));
    }
  }, [uproduct.product]);

  const handleAddToCart = () => {
    const data = {
      productId: param.productId,
      color: selectedColor.description,
    };
    dispatch(addItemToCart(data));
    navigate("/cart");
  };

  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(products.colors[0]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formatMoney = (data) => {
    return data && data.toLocaleString("vi-VN");
  };
  return (
    <div className="bg-white mt-16">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <Breadcrumbs
              separator={<ChevronRightIcon />}
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
                Sản phẩm
              </Link>
              <Link
                underline="hover"
                href="/material-ui/getting-started/installation/"
              >
                {uproduct.product &&
                  uproduct.product.data.result.name.slice(0, 20)}
              </Link>
            </Breadcrumbs>
          </ol>
        </nav>

        <Grid container spacing={5} sx={{ px: 20, pt: 2 }}>
          <Grid item xs={6} spacing={2}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <img
                  src={
                    uproduct.product &&
                    uproduct.product.data.result.images[0].imageUrl
                  }
                  alt=""
                  className="h-full w-full object-cover object-center ml-12"
                />
              </Grid>
              {uproduct.product &&
                uproduct.product.data.result.images.map((item) => (
                  <Grid item xs={3}>
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="h-full w-full object-cover object-center ml-5"
                    />
                  </Grid>
                ))}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl line-clamp-2">
                  {uproduct.product && uproduct.product.data.result.name}
                </h1>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <p className="text-xl tracking-tight text-[#DD5746]">
                  {formatMoney(
                    uproduct.product &&
                      uproduct.product.data.result.discountedPrice
                  )}
                  <span className="underline">đ</span>
                </p>
                <p className="text-xl tracking-tight text-gray-900">
                  <span className="line-through">
                    {formatMoney(
                      uproduct.product && uproduct.product.data.result.price
                    )}
                  </span>
                  <span className="underline mr-5">đ</span>
                  <span>giảm </span>
                  <span className="ml-2 text-[#DD5746]">
                    {uproduct.product &&
                      uproduct.product.data.result.discountPercent}
                    %
                  </span>
                </p>

                <Rating precision={2} value={5}></Rating>
                <Typography variant="body2">
                  {(review.reviews &&
                    review.reviews.data &&
                    review.reviews.data.result &&
                    review.reviews.data.result.length) ||
                    0}{" "}
                  {"  "}
                  Đánh giá
                </Typography>

                <div className="mt-10">
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="text-black"
                  >
                    <RadioGroup.Label style={{ marginBottom: 12 }}>
                      Chọn loại sản phẩm
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {uproduct.product &&
                        uproduct.product.data &&
                        uproduct.product.data.result &&
                        uproduct.product.data.result.colors &&
                        uproduct.product.data.result.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active }) =>
                              classNames(
                                true
                                  ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                  : "cursor-not-allowed bg-gray-50 text-gray-200",
                                active ? "ring-2 ring-indigo-500" : "",
                                "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="span">
                                  <Tooltip
                                    title={`Số lượng còn ${color.quantity}`}
                                  >
                                    <span className="text-[#DD5746]">
                                      {color.description}
                                    </span>
                                  </Tooltip>
                                </RadioGroup.Label>
                                {true ? (
                                  <span
                                    className={classNames(
                                      active ? "border" : "border-2",
                                      checked
                                        ? "border-indigo-500"
                                        : "border-transparent",
                                      "pointer-events-none absolute -inset-px rounded-md"
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                  >
                                    <svg
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line
                                        x1={0}
                                        y1={100}
                                        x2={100}
                                        y2={0}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                    </div>
                  </RadioGroup>
                </div>
                <form className="mt-10">
                  <button
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => handleAddToCart()}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </form>
              </div>
            </Grid>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div className="mt-10 border-b border-b-[#F1F1F1] pb-5">
                <h3 className="text-sm font-medium text-gray-900">
                  Mô tả thêm về sản phẩm
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {uproduct.product &&
                      uproduct.product.data &&
                      uproduct.product.data.result.description
                        .split(".")
                        .map((highlight) => (
                          <li key={highlight} className="text-gray-400">
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                  </ul>
                </div>
              </div>
              <div>
                <Grid
                  container
                  className="px-18"
                  justifyContent="center"
                  alignItems="center"
                  direction="column"
                  mt={5}
                >
                  <Grid item xs={12}>
                    <Typography variant="h6" className="text-black">
                      Thông số kĩ thuật
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TableContainer component={Paper}>
                      <TableBody>
                        {rows.slice(0, 4).map((spec) => {
                          const value =
                            uproduct.product &&
                            uproduct.product.data &&
                            uproduct.product.data.result.specification[spec.id];
                          return (
                            <TableRow
                              key={spec.id}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {spec.label}:
                              </TableCell>
                              <TableCell align="left">{value}</TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </TableContainer>
                  </Grid>
                  <Grid item xs={12} my={2}>
                    <Button variant="outlined" onClick={handleClickOpen}>
                      Xem thêm cấu hình chi tiết ▶️
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Chi tiết thông số kĩ thuật"}
                      </DialogTitle>
                      <DialogContent>
                        <TableContainer component={Paper}>
                          <TableBody>
                            {rows.map((spec) => {
                              const value =
                                uproduct.product &&
                                uproduct.product.data &&
                                uproduct.product.data.result.specification[
                                  spec.id
                                ];
                              [spec.id];
                              return (
                                <TableRow
                                  key={spec.id}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{ width: "150px" }}
                                  >
                                    {spec.label}:
                                  </TableCell>
                                  <TableCell align="left">{value}</TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </TableContainer>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Xác nhận</Button>
                      </DialogActions>
                    </Dialog>
                    {/* <Specification
                      open={open}
                      handleClose={handleClose}
                      product={
                        uproduct.product &&
                        uproduct.product.data &&
                        uproduct.product.data.result.specification
                      }
                    /> */}
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>

        <section className="px-32 mt-10">
          <Grid container>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <h3 className="text-2xl text-black">
                  Đánh giá & nhận xét{" "}
                  {uproduct.product &&
                    uproduct.product.data &&
                    uproduct.product.data.result.name.slice(0, 20)}
                </h3>
              </Grid>
              <Grid item xs={12}>
                <ReviewProduct
                  productId={param.productId}
                  reviews={
                    review.reviews &&
                    review.reviews.data &&
                    review.reviews.data.result
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </section>

        <section className="p-32 mt-20">
          <Typography variant="h4" className="text-black">
            Sản phẩm tương tự
          </Typography>
          <div className="grid grid-cols-4 p-10">
            {uproduct.products &&
              uproduct.products.result &&
              uproduct.products.result.content.map((item) => (
                <ProductCard product={item} />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
