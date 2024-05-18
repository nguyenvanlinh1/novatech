import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardFooter } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const ProductCard = ( {product}) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center" onClick={() => navigate(`/product/${product.productId}`)}>
      <Card sx={{ maxWidth: "240px" }} className="shadow">
        <Box
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" className="bg-[#DD5746] p-2 rounded-r-lg">
            Giảm {product.discountPercent}%
          </Typography>
          <Typography variant="body2" className="text-[#8576FF]">
            Trả góp 0 %
          </Typography>
        </Box>
        <CardMedia
          className="w-full h-[30%] object-cover"
          component="img"
          image={product.images[0].imageUrl}
        ></CardMedia>
        <CardContent sx={{paddingBottom:0}}>
          <Typography variant="subtitle2" className="line-clamp-3">
            {product.name}
          </Typography>
          <Box sx={{display:"flex", justifyContent:"space-between", cursor:"pointer"}}>
            <Typography variant="body2" className="border border-[#FFC470] text-[#FFC470] p-1">128G</Typography>
            <Typography variant="body2" className="border p-1">256G</Typography>
            <Typography variant="body2" className="border p-1">512G</Typography>
            <Typography variant="body2" className="border p-1">1TB</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              mb: 1
            }}
          >
            <Typography variant="body2" className="text-[#DD5746]">
              {product.discountedPrice}<span className="text-[#DD5746] underline">đ</span>
            </Typography>
            <Typography variant="body2" className="line-through">
              {product.price}<span className="underline">đ</span>
            </Typography>
          </Box>

          <div className="flex justify-between">
            <Rating
              name="half-rating"
              defaultValue={5}
              precision={1}
              sx={{ fontSize: "18px" }}
            />
            <Box sx={{ display: "flex" }}>
              <FavoriteIcon className="hover:text-[#DD5746] " />
              <Typography variant="body2">Yêu thích</Typography>
            </Box>
          </div>
        </CardContent>
        <CardFooter>
          <div class="pt-2 border-t border-gray-200 dark:border-gray-500">
            <button class="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
              <span class="text-base">Thêm vào giỏ hàng</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
