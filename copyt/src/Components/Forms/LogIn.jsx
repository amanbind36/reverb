import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';




import { TextField, Checkbox, FormControlLabel } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SignIn = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // ------------------------------

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { email, password, agreed });
  };


  return (
    <div>
      <Button onClick={handleOpen}>Log in</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login to Reverb Account
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* --------------------------------------- */}
            <form onSubmit={handleSubmit}>

              <TextField type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
              <FormControlLabel
                control={<Checkbox checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />}
                label="Stay signed in"
              /><br />
              <Button type="submit">Submit</Button>

              <p>Forgot your Password? Reset it</p>


              <button>
                log in with Google
              </button>
              <button>
                log in with Apple
              </button>
              <button>
                log in with Facebook
              </button>
            </form>
            {/* -------------------------------------------------- */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default SignIn;