import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import {
  Button,
  Grid,
  Paper,
  Rating,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import ReviewProduct from "./ReviewProduct";
import ProductCard from "./ProductCard";

const product = {
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
const reviews = { href: "#", average: 4, totalCount: 117 };

function createData(name, content) {
  return { name, content };
}

const rows = [
  createData("Màn hình", "OLED6.1 Super Retina XDR"),
  createData("Hệ điều hành", "iOS 15"),
  createData("Camera sau", "2 camera 12 MP"),
  createData("Camera trước", "12 MP"),
  createData("Chip", "Apple A15 Bionic"),
  createData("RAM", "4GB"),
  createData("Dung lượng lưu trữ", "128 GB"),
  createData("SIM", "1 Nano SIM & 1 eSIMHỗ trợ 5G"),
  createData("Pin, Sạc", "3240 mAh20 W"),
  createData("Hãng", "iPhone (Apple)"),
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DetailsProduct() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <Grid container spacing={5} sx={{ px: 20, pt: 2 }}>
          <Grid item xs={6} spacing={2}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-3.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center ml-12"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung_s23_ultra_-_2.png"
                  alt=""
                  className="h-full w-full object-cover object-center ml-5"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/2/s23-ultra-tim.png"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/2/s23-ultra-xanh-3.png"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung_s23_ultra_-_8.png"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>
              </div>
            </Grid>

            {/* Options */}
            <Grid item xs={12}>
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <p className="text-xl tracking-tight text-[#DD5746]">
                  {product.price}
                  <span className="underline">đ</span>
                </p>
                <p className="text-xl tracking-tight text-gray-900">
                  <span className="line-through">36.990.000</span>
                  <span className="underline mr-5">đ</span>
                  <span>giảm giá </span>
                  <span className="ml-2 line-through text-[#DD5746]">21%</span>
                </p>

                {/* Reviews */}
                <Rating precision={2} value={5}></Rating>
                <Typography variant="body2">
                  {reviews.totalCount} Reviews
                </Typography>

                {/* Type */}
                <div className="mt-10">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="text-black"
                  >
                    <RadioGroup.Label style={{ marginBottom: 12 }}>
                      Chọn loại sản phẩm
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
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
                                {size.name}
                                <br />
                                {size.price}
                              </RadioGroup.Label>
                              {size.inStock ? (
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

                {/* Colors */}
                <div className="mt-10">
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="text-black"
                  >
                    <RadioGroup.Label style={{ marginBottom: 12 }}>
                      Chọn màu sản phẩm
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <form className="mt-10">
                  <button
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to bag
                  </button>
                </form>
              </div>
            </Grid>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        <section>
          <Grid
            container
            className="px-32"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Grid item xs={12}>
              <Typography variant="h4" className="text-black">
                Thông số kĩ thuật
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}:
                      </TableCell>
                      <TableCell align="left">{row.content}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </TableContainer>
            </Grid>
            <Grid item xs={12} my={2}>
              <Button variant="outlined">Xem thêm cấu hình chi tiết ▶️</Button>
            </Grid>
          </Grid>
        </section>

        <section className="px-32 mt-10">
          <Grid container>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <h3 className="text-2xl text-black">
                  Đánh giá & nhận xét Samsung Galaxy S23 Ultra 256GB
                </h3>
              </Grid>
              <Grid item xs={12}>
                <ReviewProduct />
              </Grid>
            </Grid>
          </Grid>
        </section>

        {/* Product info */}
        <section className="p-32 mt-20">
          <Typography variant="h4" className="text-black">
            Sản phẩm tương tự
          </Typography>
          <div className="grid grid-cols-4 p-10">
            {[1, 1, 1, 1].map(() => (
              <ProductCard />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
