import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
  cantidadDisponible?: number
}

export default function CrComboBoxItems({ cantidadDisponible }: Props) {

  const total = cantidadDisponible || 0;

  let totalItems: any[] = []; 
  for (let i = 1; i <= total; i++) {
    totalItems = [...totalItems, { label: i.toString(), cantidad: i }];
  }

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={totalItems}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Cantidades a comprar" />}
    />
  );
}

