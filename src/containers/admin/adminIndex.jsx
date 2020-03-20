import React, { useState, useContext } from "react";
import {
  makeStyles,
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  TextField,
  IconButton
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { PhotoCamera, VideocamOff } from "@material-ui/icons";
import Camera from "../../components/camera/camera";
// import { ShoppingCartContext } from "../../contexts/shoppingCartContext";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  box: {
    marginTop: theme.spacing(3)
  },
  formControlItemName: {
    textAlign: "center",
    marginBottom: theme.spacing(3)
  },
  formControl: {
    margin: theme.spacing(3)
  },
  spanUpload: {
    paddingBottom: 5
  }
}));

export default () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [useCamera, setUseCamera] = useState(false);

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const handleCameraOnOff = () => setUseCamera(!useCamera);

  return (
    <div>
      <p>Admin sẽ thực hiện:</p>
      <ul>
        <li>Thêm mặt hàng</li>
        <li>Cấp nhật giá cho từng mặt hàng (Edit)</li>
        <li>Cập nhật dán nhãn mặt hàng còn hay hết</li>
      </ul>

      <form autoComplete="off">
        <TextField id="ten mat hang" label="Tên sản phẩm" fullWidth />

        <Box className={classes.box}>
          <TextField id="item photo url" label="link ảnh sản phẩm" fullWidth />
          <h4>Hoặc</h4>
          {useCamera ? (
            <IconButton
              color="primary"
              aria-label="Close camera"
              component="span"
              size="small"
              onClick={handleCameraOnOff}
            >
              <VideocamOff />{" "}
              <span className={classes.spanUpload}>Tắt Camera</span>
            </IconButton>
          ) : (
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              size="small"
              onClick={handleCameraOnOff}
            >
              <PhotoCamera />{" "}
              <span className={classes.spanUpload}>Bật Camera để chụp ảnh</span>
            </IconButton>
          )}

          {useCamera && <Camera />}
        </Box>

        <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              <h2>Nhập vào</h2>
            </FormLabel>

            <FormGroup>
              <FormControlLabel
                control={
                  <TextField
                    id="don vi mat hang 1"
                    label="Đơn vị tính sản phẩm 1"
                  />
                }
              />
              <FormControlLabel
                control={
                  <TextField id="gia nhap mat hang 1" label="giá nhập vào 1" />
                }
              />
              <FormControlLabel
                control={
                  <TextField
                    id="don vi mat hang 1"
                    label="Đơn vị tính sản phẩm 2"
                  />
                }
              />
              <FormControlLabel
                control={
                  <TextField id="gia nhap mat hang 2" label="giá nhập vào 2" />
                }
              />
              <FormControlLabel
                control={
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Ngày nhập hàng"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>

          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              <h2>Bán ra</h2>
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <TextField
                    id="don vi mat hang 1"
                    label="Đơn vị tính sản phẩm 1"
                  />
                }
              />
              <FormControlLabel
                control={
                  <TextField id="gia ban ra mat hang 1" label="Giá bán ra 1" />
                }
              />
              <FormControlLabel
                control={
                  <TextField
                    id="don vi mat hang 2"
                    label="Đơn vị tính sản phẩm 2"
                  />
                }
              />
              <FormControlLabel
                control={
                  <TextField id="gia ban ra mat hang 2" label="Giá bán ra 2" />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      </form>
    </div>
  );
};
