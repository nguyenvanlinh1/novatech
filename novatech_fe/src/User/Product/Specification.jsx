import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";

const rows = [
    { id: "screenSize", label: "Kích thước màn hình" },
    { id: "screenTechnology", label: "Công nghệ màn hình" },
    { id: "ramCapacity", label: "Dung lượng ram" },
    { id: "battery", label: "Thời lượng Pin" },
    { id: "cpu", label:"CPU"},
    { id: "material", label:"Chất liệu"},
    { id: "operatingSystem", label:"Hệ điều hành"},
    { id: "resolution", label:"Độ phân giải"},
    { id: "size", label:"Kích thước"},
    { id: "weight", label:"Trọng lượng"},
    { id: "feature", label:"Tính năng"},
    { id: "utilities", label:"Tiện ích"}
  ];

const Specification = ({ product, handleClose, open }) => {
    console.log(product)
  return (
    <div>
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
                const value = product[spec.id];
                return (
                  <TableRow
                    key={spec.id}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell component="th" scope="row" sx={{width:"150px"}}>
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
    </div>
  );
};

export default Specification;
