import * as React from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export function InputBuscaRestaurante() {
    return (
        <TextField
        id="input-with-icon-textfield"
        placeholder="Restaurante"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        sx={{width: "100%"}}
      />
    );
};