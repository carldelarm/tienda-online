import { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface Props {
  categories?: any[];
  setCategory: (value: string) => void;
}

const initialValues = [
  {
    id: 0,
    name: 'Seleccione una categoría'
  },
  {
    id: 1,
    name: 'electronics'
  },
  {
    id: 2,
    name: 'jewelery',
  },
  {
    id: 3,
    name: "men's clothing",
  },
  {
    id: 4,
    name: "women's clothing",
  }
];

export default function CrComboCategories({ categories=initialValues,setCategory }: Props) {

  const [value, setValue] = useState('Seleccione una categoría');

  const onUpdateCount = (event: SelectChangeEvent): void => {
    const newValue = event.target.value;
    setValue(newValue);
    setCategory(newValue);
  }

  return (
    <Box sx={{ minWidth: 250}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categorías: </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Categorías"
          onChange={onUpdateCount}
        >
          {
            categories.map((item:any) => (
              <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}

