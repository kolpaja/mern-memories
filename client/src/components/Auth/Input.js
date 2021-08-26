import React from 'react'
import { Grid, InputAdornment, TextField, IconButton } from '@material-ui/core';
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"

function Input({ name, label, autoFocus, type, handleChange, handleShowPassword, half }) {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        required
        fullWidth
        variant="outlined"
        name={name}
        label={label}
        autoFocus={autoFocus}
        type={type}
        onChange={handleChange}
        InputProps={name === "password" ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type === "password" ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        } : null}

      />
    </Grid>
  )
}

export default Input;