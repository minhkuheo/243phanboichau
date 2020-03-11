import React from 'react';
import { TextField } from '@material-ui/core';

export default ({searchValue, onChangeSearchValue}) => {
  return (
    <form>
      <TextField id="search-items" label="Nhập tên mặt hàng để tìm kiếm" fullWidth margin="normal" variant="filled" value={searchValue} onChange={onChangeSearchValue}/>
    </form>
  );
}