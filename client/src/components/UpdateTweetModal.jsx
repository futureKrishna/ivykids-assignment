import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

const UpdateTweetModal = ({ open, setOpen,onEdit,handleTweetUpdate,tweetKiId }) => {
  const [updatedText, setUpdatedText] = useState(null);

  const handleSave = (tweetKiId) => {
    // onEdit(updatedText);
    setOpen(false)
    handleTweetUpdate(tweetKiId,updatedText)
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input onChange={(e) => setUpdatedText(e.target.value)} placeholder="Add here" />
          </Typography>
          <div className="flex justify-end items-center mt-5">
            <button
              onClick={() => setOpen(false)}
              className="bg-red-500 text-white px-3 py-2 rounded text-xs"
            >
              Cancel
            </button>
            <button onClick={()=>handleSave(tweetKiId)} className="ml-2 bg-blue-500 text-white px-3 py-2 rounded text-xs">
              Save
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateTweetModal;
