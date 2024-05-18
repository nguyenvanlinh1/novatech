import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../State/Admin/Order/Action";
import { Grid, Tooltip } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import Chart from "react-apexcharts";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = ("0" + (d.getMonth() + 1)).slice(-2);
  const day = ("0" + d.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}

function isDateInRange(orderDate, rangeInDays) {
  const now = new Date();
  const pastDate = new Date();
  pastDate.setDate(now.getDate() - rangeInDays);

  const order = new Date(orderDate);
  return order >= pastDate && order <= now;
}

const ManageInventor = () => {
  const { aorder } = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  console.log("Danh sách sản phẩm", aorder);

  // Doanh thu 7 ngày
  const handle7DayRevenue =
    aorder.orders &&
    aorder.orders.result &&
    aorder.orders.result.filter((item) => isDateInRange(item.orderDate, 7));
  const totalPrice7Day =
    handle7DayRevenue &&
    handle7DayRevenue.reduce((acc, cur) => acc + cur.totalDiscountedPrice, 0);
  const totalItem7Day =
    handle7DayRevenue &&
    handle7DayRevenue.reduce((acc, cur) => acc + cur.totalItems, 0);

  const data7Day = handle7DayRevenue.map((item) => item.totalDiscountedPrice);
  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Số tiền",
        data: data7Day,
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          formatDate(Date.now() - 6 * 24 * 60 * 60 * 1000),
          formatDate(Date.now() - 5 * 24 * 60 * 60 * 1000),
          formatDate(Date.now() - 4 * 24 * 60 * 60 * 1000),
          formatDate(Date.now() - 3 * 24 * 60 * 60 * 1000),
          formatDate(Date.now() - 2 * 24 * 60 * 60 * 1000),
          formatDate(Date.now() - 1 * 24 * 60 * 60 * 1000),
          formatDate(Date.now()),
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  // Doanh thu ngày hôm nay
  const handleDayRevenue =
    aorder.orders &&
    aorder.orders.result &&
    aorder.orders.result.filter(
      (item) => formatDate(item.orderDate) === formatDate(new Date())
    );
  const totalPriceDate =
    handleDayRevenue &&
    handleDayRevenue.reduce((acc, cur) => acc + cur.totalDiscountedPrice, 0);
  const totalItemDate =
    handleDayRevenue &&
    handleDayRevenue.reduce((acc, cur) => acc + cur.totalItems, 0);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card className="border border-blue-gray-100 shadow-sm">
            <CardHeader
              variant="gradient"
              floated={false}
              shadow={false}
              className="place-items-center text-[#333]"
            >
              <TodayIcon />
              Doanh số bán hàng ngày hôm nay
            </CardHeader>
            <CardBody className="p-4 text-right">
              <Typography
                variant="small"
                className="font-normal text-blue-gray-600 cursor-pointer"
              >
                <Tooltip title={"Số lượng sản phẩm"}>{totalItemDate}</Tooltip>
              </Typography>
              <Typography
                variant="body2"
                className="text-[#DD5746] cursor-pointer"
              >
                <Tooltip title={"Tổng tiền"}>{totalPriceDate}</Tooltip>
              </Typography>
            </CardBody>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="border border-blue-gray-100 shadow-sm">
            <CardHeader
              variant="gradient"
              floated={false}
              shadow={false}
              className="place-items-center text-[#333]"
            >
              <TodayIcon />
              Doanh số bán hàng 7 ngày gần nhất
            </CardHeader>
            <CardBody className="p-4 text-right">
              <Typography
                variant="small"
                className="font-normal text-blue-gray-600 cursor-pointer"
              >
                <Tooltip title={"Số lượng sản phẩm"}>{totalPrice7Day}</Tooltip>
              </Typography>
              <Typography
                variant="body2"
                className="text-[#DD5746] cursor-pointer"
              >
                <Tooltip title={"Tổng tiền"}>{totalPrice7Day}</Tooltip>
              </Typography>
            </CardBody>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={7}>
          <Card>
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            >
              <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
                <Square3Stack3DIcon className="h-6 w-6" />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Biểu đồ
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="max-w-sm font-normal"
                >
                  Doanh số bán hàng trong 7 ngày trở lại đây
                </Typography>
              </div>
            </CardHeader>
            <CardBody className="px-2 pb-0">
              <Chart {...chartConfig} />
            </CardBody>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageInventor;
