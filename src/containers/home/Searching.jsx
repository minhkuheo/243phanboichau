import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginBottom: '30px',
  },
});

export default ({searchValue, onChangeSearchValue}) => {
  const classes = useStyles();

  return (
    <form>
      <TextField 
        className={[classes.root, classes.label, classes.input]}
        id="search-items" 
        label="Nhập tên mặt hàng để tìm kiếm" 
        fullWidth 
        margin="normal" 
        value={searchValue} 
        onChange={onChangeSearchValue}
      />
    </form>
  );
}