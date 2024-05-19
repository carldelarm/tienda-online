import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  open: boolean
  title: string
  mensaje: string
  botones: {
    titleBtn1: string
    showBtn1: boolean
    titleBtn2: string
    showBtn2: boolean
  }
  handleClose: () => void
  handleVerDetalle?: () => void
}

/*
const botonesDefault = {
  titleBtn1: 'Cerrar',
  showBtn1: true,
  titleBtn2: 'Acpetar',
  showBtn2: true
}
*/

export default function CrModal({open,title,mensaje,botones,handleClose,handleVerDetalle}:Props) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {mensaje}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {
            botones.showBtn1 ? (
              <Button onClick={handleClose}>{botones.titleBtn1}</Button>
            ) : null
          }
          {
            botones.showBtn2 ? (
              <Button onClick={handleVerDetalle} autoFocus>{botones.titleBtn2}</Button>
            ) : null
          }
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}