import React, { useState } from "react";
import {
  makeStyles,
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  // FormControlLabel,
  TextField,
  IconButton,
  Button
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

  const [itemName, setItemName] = useState("");
  const [itemImgUrl, setItemImgUrl] = useState("");

  const [costUnit, setCostUnit] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [retailUnitOut, setRetailUnitOut] = useState("");
  const [retailPriceOut, setRetailPriceOut] = useState("");
  const [wholesaleUnitOut, setWholesaleUnitOut] = useState("");
  const [wholesalePriceOut, setWholesalePriceOut] = useState("");

  const handleDateChange = date => {
    console.log("[date] ", date);
    setSelectedDate(date);
  };
  const handleCameraOnOff = () => setUseCamera(!useCamera);
  const handleOnImageTaken = dataUri => console.log("[dataUri] ", dataUri);

  const handleOnSubmit = event => {
    console.log(
      "submit ",
      costUnit,
      costPrice,
      retailUnitOut,
      retailPriceOut,
      wholesaleUnitOut,
      wholesalePriceOut
    );

    const newItem = {
      name: itemName,
      imgUrl: "",
      cost: {
        price: costPrice,
        unit: costUnit,
        currency: "VND",
        buyDate: selectedDate
      },
      sale: {
        retailUnit: "vỉ",
        retailPrice: "7000",
        retailCurrency: "VND",
        wholesaleUnit: "hộp",
        wholesalePrice: "80000",
        wholesaleCurrency: "VND"
      }
    };

    setUseCamera(false);
    setItemName("");
    setItemImgUrl("");
    setCostUnit("");
    setCostPrice("");
    setRetailUnitOut("");
    setRetailPriceOut("");
    setWholesaleUnitOut("");
    setWholesalePriceOut("");

    event.preventDefault();
  };

  const onChangeItemName = e => setItemName(e.target.value);
  const onChangeItemImgUrl = e => setItemImgUrl(e.target.value);
  const onChangeCostUnit = e => setCostUnit(e.target.value);
  const onChangeCostPrice = e => setCostPrice(e.target.value);
  const onChangeRetailUnitOut = e => setRetailUnitOut(e.target.value);
  const onChangeRetailPriceOut = e => setRetailPriceOut(e.target.value);
  const onChangeWholesaleUnitOut = e => setWholesaleUnitOut(e.target.value);
  const onChangeWholesalePriceOut = e => setWholesalePriceOut(e.target.value);

  // ********************************************************************************* //
  //                                    MAiN RENDER                                    //
  // ********************************************************************************* //
  return (
    <div>
      {costUnit}
      <p>Admin sẽ thực hiện:</p>
      <ul>
        <li>Thêm mặt hàng</li>
        <li>Cấp nhật giá cho từng mặt hàng (Edit)</li>
        <li>Cập nhật dán nhãn mặt hàng còn hay hết</li>
      </ul>

      <form autoComplete="off" onSubmit={handleOnSubmit}>
        <TextField
          id="ten mat hang"
          label="Tên sản phẩm (bắt buộc phải điền)"
          value={itemName}
          onChange={onChangeItemName}
          fullWidth
          required
        />

        <Box className={classes.box}>
          <TextField
            id="item photo url"
            label="link ảnh sản phẩm"
            value={itemImgUrl}
            onChange={onChangeItemImgUrl}
            fullWidth
          />
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

          {useCamera && <Camera onImageTaken={handleOnImageTaken} />}
        </Box>

        <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              <h2>Nhập vào</h2>
            </FormLabel>

            <FormGroup>
              <TextField
                id="donvi"
                label="Đơn vị"
                value={costUnit}
                onChange={onChangeCostUnit}
                required
              />
              <TextField
                id="gianhapvao"
                label="giá nhập vào"
                value={costPrice}
                onChange={onChangeCostPrice}
                required
              />
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
                required
              />
            </FormGroup>
          </FormControl>

          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              <h2>Bán ra</h2>
            </FormLabel>
            <FormGroup>
              <TextField
                id="donvibanle"
                label="Đơn vị bán lẻ"
                value={retailUnitOut}
                onChange={onChangeRetailUnitOut}
                required
              />
              <TextField
                id="giabanle"
                label="Giá bán lẻ"
                value={retailPriceOut}
                onChange={onChangeRetailPriceOut}
                required
              />
              <TextField
                id="donvibanbuon"
                label="Đơn vị bán buôn"
                value={wholesaleUnitOut}
                onChange={onChangeWholesaleUnitOut}
              />
              <TextField
                id="giabanle"
                label="Giá bán lẻ"
                value={wholesalePriceOut}
                onChange={onChangeWholesalePriceOut}
              />
            </FormGroup>
          </FormControl>
        </div>

        <Box textAlign="center" marginBottom={5}>
          <Button type="submit" variant="contained" color="secondary">
            Lưu sản phẩm
          </Button>
        </Box>
      </form>
    </div>
  );
};
