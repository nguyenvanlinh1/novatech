import { Textarea } from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/Admin/Product/Action";

const AddProduct = ({ open, handleClose }) => {
  const dataCategory = [
    {
      firstCategory: "Điện thoại",
      firstContent: [
        {
          secondCategory: "Iphone",
          secondContent: [
            "Iphone 15 Series",
            "Iphone 14 Series",
            "Iphone 13 Series",
            "Iphone 12 Series",
          ],
        },
        {
          secondCategory: "SamSung",
          secondContent: ["GALAXY S", "GALAXY A", "GALAXY M"],
        },
        {
          secondCategory: "Xiaomi",
          secondContent: [
            "Xiaomi 13 Series",
            "Xiaomi 12 Series",
            "Note 13 Series",
            "Note 12 Series",
          ],
        },
        {
          secondCategory: "Oppo",
          secondContent: ["A Series", "Reno X Series", "Find Series"],
        },
      ],
    },
    {
      firstCategory: "Laptop",
      firstContent: [
        {
          secondCategory: "Mac",
          secondContent: ["Mac Air", "Mac pro", "Mac Mini", "IMac"],
        },
        {
          secondCategory: "Asus",
          secondContent: ["Vivo Book", "Gaming", "Expert Book", "Zenbook"],
        },
        {
          secondCategory: "Lenovo",
          secondContent: ["IDEAPAD", "ThinkPad", "ThinkBook", "V Series"],
        },
        {
          secondCategory: "Dell",
          secondContent: ["INSPIRON", "VOSTRO", "LATITUDE", "ALIENWARE"],
        },
      ],
    },
    {
      firstCategory: "Tai nghe",
      firstContent: [
        {
          secondCategory: "Bluetooth",
          secondContent: ["Apple", "Sony", "Marshall", "SoundPEATS"],
        },
        {
          secondCategory: "Chụp tai",
          secondContent: ["Apple", "Sony", "Marshall", "SoundPEATS"],
        },
        {
          secondCategory: "Nhét tai",
          secondContent: ["Apple", "Sony", "Marshall", "SoundPEATS"],
        },
        {
          secondCategory: "Có dây",
          secondContent: ["Apple", "Sony", "Marshall", "SoundPEATS"],
        },
      ],
    },
    {
      firstCategory: "Đồng hồ",
      firstContent: [
        {
          secondCategory: "Apple Watch",
          secondContent: [
            "APPLE WATCH SERIES 9",
            "APPLE WATCH SERIES 8",
            "APPLE WATCH SERIES 7",
            "APPLE WATCH ULTRA",
            "APPLE WATCH SE",
            "APPLE WATCH ULTRA 2",
          ],
        },
        {
          secondCategory: "Gramin",
          secondContent: ["EPIX", "INSTINCT", "FENIX", "APPROACH", "VENU"],
        },
        {
          secondCategory: "Xiaomi",
          secondContent: ["GTS", "CHEETAH", "FORERUNNER", "GTR"],
        },
        {
          secondCategory: "Hãng khác",
          secondContent: ["SamSung", "XiaoMi", "Huawei"],
        },
      ],
    },
  ];

  const dispatch = useDispatch();

  const [numFields, setNumFields] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // Hàm để xử lý sự kiện thay đổi của TextField
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const [secondCategory, setSecondCategory] = useState(false);
  const [thirdCategory, setThirdCategory] = useState(false);

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    discountedPrice: "",
    discountPercent: "",
    quantity: "",
    description: "",
    images: [],
    colors: [],
    specification: {
      screenSize: "",
      screenTechnology: "",
      ramCapacity: "",
      battery: "",
      cpu: "",
      material: "",
      operatingSystem: "",
      resolution: "",
      size: "",
      weight: "",
      feature: "",
      utilities: "",
    },
    fristLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
  });

  console.log("Data:", productData);

  const handleImageChange = (index, value) => {
    const newImages = [...productData.images];
    newImages[index].imageUrl = value;
    setProductData((prevState) => ({
      ...prevState,
      images: newImages,
    }));
  };

  const handleColorChange = (index, field, value) => {
    const newColors = [...productData.colors];
    newColors[index][field] = value;
    setProductData((prevState) => ({
      ...prevState,
      colors: newColors,
    }));
  };

  const handleSpecificationChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      specification: {
        ...prevState.specification,
        [name]: value,
      },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "firstLevelCategory") {
      setSecondCategory(true);
    } else if (name === "secondLevelCategory") {
      setThirdCategory(true);
    }
  };
  const addImageField = () => {
    setProductData((prevState) => ({
      ...prevState,
      images: [...prevState.images, { imageUrl: "" }],
    }));
  };

  const removeImageField = (index) => {
    const newImages = productData.images.filter((_, i) => i !== index);
    setProductData((prevState) => ({
      ...prevState,
      images: newImages,
    }));
  };

  const addColorField = () => {
    setProductData((prevState) => ({
      ...prevState,
      colors: [...prevState.colors, { description: "", quantity: "" }],
    }));
  };

  const removeColorField = (index) => {
    const newColors = productData.colors.filter((_, i) => i !== index);
    setProductData((prevState) => ({
      ...prevState,
      colors: newColors,
    }));
  };

  const handleButton = () => {
    dispatch(createProduct(productData));
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thêm sản phẩm"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                name="name"
                label="Tên sản phẩm ..."
                variant="outlined"
                fullWidth
                value={productData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-basic"
                name="price"
                label="Giá gốc ..."
                variant="outlined"
                value={productData.price}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-basic"
                name="discountedPrice"
                label="Giá chiết khấu..."
                variant="outlined"
                value={productData.discountedPrice}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-basic"
                name="discountPercent"
                label="Khuyến mại..."
                variant="outlined"
                value={productData.discountPersent}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-basic"
                name="quantity"
                label="Số lượng..."
                variant="outlined"
                value={productData.quantity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Textarea
                label="Mô tả ngắn về sản phẩm"
                name="description"
                value={productData.description}
                onChange={handleChange}
              ></Textarea>
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                name="fristLevelCategory"
                label="Danh mục cấp 1"
                onChange={handleChange}
                value={productData.fristLevelCategory}
              ></TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                name="secondLevelCategory"
                label="Danh mục cấp 2"
                onChange={handleChange}
                value={productData.secondLevelCategory}
              ></TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                name="thirdLevelCategory"
                label="Danh mục cấp 3"
                onChange={handleChange}
                value={productData.thirdLevelCategory}
              ></TextField>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Danh sách hình ảnh</Typography>
            </Grid>
            <Grid item container spacing={3}>
              {productData.images.map((image, index) => (
                <Grid item xs={5} key={index}>
                  <TextField
                    variant="outlined"
                    placeholder={`Ảnh ${index + 1}`}
                    value={image.imageUrl}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    fullWidth
                  />
                  <Button onClick={() => removeImageField(index)}>
                    Remove
                  </Button>
                </Grid>
              ))}
              <Grid item xs={12}>
                <Button onClick={addImageField}>Add Image</Button>
              </Grid>
            </Grid>

            <Grid item container mt={2} spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6">Danh sách hình ảnh</Typography>
              </Grid>
              {productData.colors.map((color, index) => (
                <Grid
                  container
                  item
                  xs={10}
                  justifyContent={"space-between"}
                  key={index}
                >
                  <TextField
                    variant="outlined"
                    placeholder={`Màu ${index + 1}`}
                    value={color.description}
                    onChange={(e) =>
                      handleColorChange(index, "description", e.target.value)
                    }
                  />
                  <TextField
                    variant="outlined"
                    placeholder="Số lượng"
                    value={color.quantity}
                    onChange={(e) =>
                      handleColorChange(index, "quantity", e.target.value)
                    }
                  />
                  <Button onClick={() => removeColorField(index)}>
                    Remove
                  </Button>
                </Grid>
              ))}
              <Grid item xs={12}>
                <Button onClick={addColorField}>Add Color</Button>
              </Grid>
            </Grid>
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">Thông số kĩ thuật</Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="screenSize"
                  name="screenSize"
                  variant="outlined"
                  placeholder="Kích thước màn hình"
                  value={productData.specification.screenSize}
                  onChange={handleSpecificationChange}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="screenTechnology"
                  variant="outlined"
                  placeholder="Công nghệ màn hình"
                  value={productData.specification.screenTechnology}
                  onChange={handleSpecificationChange}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="ramCapacity"
                  variant="outlined"
                  placeholder="Dung lượng ram"
                  value={productData.specification.ramCapacity}
                  onChange={handleSpecificationChange}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  placeholder="Pin"
                  name="battery"
                  value={productData.specification.battery}
                  onChange={handleSpecificationChange}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  placeholder="CPU"
                  name="cpu"
                  value={productData.specification.cpu}
                  onChange={handleSpecificationChange}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="material"
                  variant="outlined"
                  placeholder="Chất liệu"
                  value={productData.specification.material}
                  onChange={handleSpecificationChange}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="operatingSystem"
                  variant="outlined"
                  placeholder="Hệ điều hành"
                  value={productData.specification.operatingSystem}
                  onChange={handleSpecificationChange}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="resolution"
                  variant="outlined"
                  placeholder="Độ phân giải"
                  value={productData.specification.resolution}
                  onChange={handleSpecificationChange}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="size"
                  variant="outlined"
                  placeholder="Kích thước"
                  value={productData.specification.size}
                  onChange={handleSpecificationChange}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="weight"
                  variant="outlined"
                  placeholder="Khối lượng"
                  value={productData.specification.weight}
                  onChange={handleSpecificationChange}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="feature"
                  variant="outlined"
                  placeholder="Tính năng"
                  value={productData.specification.feature}
                  onChange={handleSpecificationChange}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="utilities"
                  variant="outlined"
                  placeholder="Tiện ích"
                  value={productData.specification.utilities}
                  onChange={handleSpecificationChange}
                ></TextField>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleButton}>
            Thêm
          </Button>
          <Button variant="outlined" onClick={handleClose} autoFocus>
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddProduct;
