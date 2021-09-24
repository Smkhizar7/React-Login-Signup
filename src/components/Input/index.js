import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({title,type,className}) {
  return (
        <TextField fullWidth={true} type={type} id="outlined-basic" className={className} label={title} variant="outlined" />
  );
}
