import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function CrChip() {
  return (
    <Stack spacing={1} >
      <Stack direction="row" spacing={1}>
        <Chip label="77% off" color="success" />
      </Stack>
    </Stack>
  );
}