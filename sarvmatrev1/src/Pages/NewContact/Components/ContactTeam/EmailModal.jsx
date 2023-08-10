import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';

const EmailModal = ({ open, onClose, email, onBlur }) => {

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    // Logic to send email
    // You can use libraries like "emailjs" to actually send the email
    onClose(); // Close the modal after sending
  };

  const handleClose = () => {
    onClose();
  }

  return (
    <Dialog open={open} onClose={handleClose} onBlur={onBlur} className=''>
      <DialogTitle>Sending an email to {email}</DialogTitle>
      <DialogContent className='grid gap-5'>
        <DialogContentText>
          Fill out the form to send an email.
        </DialogContentText>
        <TextField
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          fullWidth
        />
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          multiline
          rows={4}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={handleSendEmail} color="primary">
          Send Email
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmailModal;
