import { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface Props {
  readonly cantidadDisponible?: number,
  setQuantity: (value: number) => void;
}

export default function CrComboBoxItems({ cantidadDisponible,setQuantity }: Props) {

  const total = cantidadDisponible ?? 0;

  let totalItems: any[] = []; 
  for (let i = 0; i < total; i++) {
    totalItems = [...totalItems, { label: (i+1).toString(), cantidad: (i+1) }];
  }

  const defaultItem = totalItems[0].cantidad;
  const [value, setValue] = useState(defaultItem);

  const onUpdateCount = (event: SelectChangeEvent): void => {
    const newValue = event.target.value;
    setValue(newValue);
    setQuantity(parseInt(newValue));
  }

  return (
    <Box sx={{ minWidth: 10,maxWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cantidad</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Cantidad"
          onChange={onUpdateCount}
        >
          {
            totalItems.map((item) => (
              <MenuItem key={item.cantidad} value={item.cantidad}>{item.label}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}

