import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { MuiChipsInput } from 'mui-chips-input'



export default function AskForum() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [chips, setChips] = React.useState([])

  const handleChange = (newChips) => {
    setChips(newChips)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ask Any Question</DialogTitle>
        <DialogContent>
        <MuiChipsInput placeholder='Question Tag' value={chips} onChange={handleChange} style={{width:'100%',marginBottom:10}} />
          <ReactQuill theme="snow" value={value} onChange={setValue} style={{width:500,fontSize:20}} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}