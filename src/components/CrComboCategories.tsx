import { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface Props {
  categories?: any[];
  setCategory: (value: string) => void;
}

const initialValues = [
  {
    id: 0,
    value: 'todas',
    label: 'Todas'
  },
  {
    id: 1,
    value: 'electronics',
    label: 'Electronics'
  },
  {
    id: 2,
    value: 'jewelery',
    label: 'Jewelery'
  },
  {
    id: 3,
    value: "men's clothing",
    label: "Men's clothing"
  },
  {
    id: 4,
    value: "women's clothing",
    label: "Women's clothing"
  }
];

export default function CrComboCategories({ categories=initialValues,setCategory }: Props) {

  const [value, setValue] = useState('todas');

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
              <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}

