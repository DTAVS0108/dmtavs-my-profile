import React, { useState, useRef } from 'react';
import { Box, IconButton, InputBase, Paper, Avatar, List, ListItem, InputAdornment, ListItemText, ListItemAvatar, Typography, DialogContent, Dialog, DialogTitle, TextField, DialogActions, Button, Slide } from '@mui/material';
import { AttachFile, Mic, Send } from '@mui/icons-material';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialMessages = [
  { id: 1, text: 'Hello! How can I help you today?', sender: 'other', timestamp: new Date().toLocaleTimeString() },
  { id: 2, text: 'Hi! I have a question about my account.', sender: 'user', timestamp: new Date().toLocaleTimeString() },
];

export default function Messenger() {
  const [chatMessages, setChatMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File | null>(null);
  const [open, setOpen] = useState(false);
  const [caption, setCaption] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setSelectedFile(files[0]);
      setOpen(true);
    }
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newChatMessage = {
        id: Date.now(),
        text: newMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString(),
      };
      setChatMessages([...chatMessages, newChatMessage]);
      setNewMessage('');
    }
  };

  const handleSendFile = () => {
    if (selectedFile) {
      const newChatMessage = {
        id: Date.now(),
        text: `${caption}`,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString(),
      };
      setChatMessages([...chatMessages, newChatMessage]);
      setOpen(false);
      setSelectedFiles(selectedFile);
      setSelectedFile(null);
      setCaption('');
    }
  };

  const handleMicClick = () => alert("Voice message not implemented yet");

  const handleClose = () => {
    setOpen(false);
    setSelectedFile(null);
    setCaption('');
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)' }}>
        <Box sx={{ flex: 1, overflowY: 'auto', p: 2, backgroundColor: '#fff' }}>
          <List>
            {chatMessages.map((message) => (
              <ListItem 
                key={message.id} 
                sx={{ 
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  alignItems: 'flex-start'
                }}
              >
                {message.sender === 'other' && (
                  <ListItemAvatar>
                    <Avatar src="https://via.placeholder.com/150" sx={{ bgcolor: '#555' }} />
                  </ListItemAvatar>
                )}
                <Box sx={{maxWidth: '60%'}}>
                    {message.sender === 'user' ? <>
                  {!selectedFiles ? <Paper
                    sx={{
                      p: 1,
                      bgcolor: message.sender === 'user' ? '#333' : '#444',
                      color: message.sender === 'user' ? '#fff' : '#ccc',
                      borderRadius: 2,
                      marginLeft: message.sender === 'user' ? 'auto' : 0,
                    }}
                  >
                    <ListItemText primary={message.text} />
                  </Paper> : <Box>
                  {selectedFiles.type.startsWith('image') ? <img src={URL.createObjectURL(selectedFiles)} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '1rem' }} /> : <Typography variant="body2" color="textSecondary">
                  {selectedFiles.name}
                </Typography>}
                  {caption && <Paper
                    sx={{
                      p: 1,
                      bgcolor: message.sender === 'user' ? '#333' : '#444',
                      color: message.sender === 'user' ? '#fff' : '#ccc',
                      borderRadius: 2,
                      marginLeft: message.sender === 'user' ? 'auto' : 0,
                    }}
                  >
                    <ListItemText primary={message.text} />
                  </Paper>}
                    </Box>}</> : <Paper
                    sx={{
                      p: 1,
                      bgcolor: message.sender === 'user' ? '#333' : '#444',
                      color: message.sender === 'user' ? '#fff' : '#ccc',
                      borderRadius: 2,
                      marginLeft: message.sender === 'user' ? 'auto' : 0,
                    }}
                  >
                    <ListItemText primary={message.text} />
                  </Paper>}
                  <Box className="flex justify-end">
                    <Typography variant="caption">
                      {message.timestamp}
                    </Typography>
                  </Box>
                </Box>
                {message.sender === 'user' && (
                  <ListItemAvatar>
                    <Avatar src="https://via.placeholder.com/150" sx={{ bgcolor: '#007bff', marginLeft: "15px" }} />
                  </ListItemAvatar>
                )}
              </ListItem>
            ))}
          </List>
        </Box>

        <Paper
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 0.5,
            bgcolor: '#333',
            boxShadow: '0px -1px 5px rgba(0,0,0,0.1)',
            borderRadius: 10,
            width: '100%',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton color="primary" onClick={handleIconClick}>
            <AttachFile sx={{ color: '#ccc' }} />
          </IconButton>
          <input
              type="file"
              hidden
              multiple
              ref={fileInputRef}
              onChange={handleFileChange}
          />
          <InputBase
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            sx={{ ml: 1, flex: 1, color: '#ccc', backgroundColor: '#fff', borderRadius: '10px', pl: 1, pr: 1 }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <IconButton color="primary" onClick={handleMicClick}>
            <Mic sx={{ color: '#ccc' }} />
          </IconButton>
          <IconButton color="primary" onClick={handleSendMessage}>
            <Send sx={{ color: '#ccc' }} />
          </IconButton>
        </Paper>
      </Box>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="file-preview-dialog-description"
        sx={{
            "& .MuiDialog-paper": {
              position: "fixed",
              bottom: 50,
              left: 50,
              margin: 0,
              width: '400px',
            }
          }}
      >
        <Box className="flex justify-between items-center">
            <DialogTitle>File Preview</DialogTitle>
            <CloseIcon onClick={handleClose} className='mr-5' />
        </Box>
        <DialogContent>
          {selectedFile ? (
            <Box display="flex" flexDirection="column" alignItems="center">
              {selectedFile.type.startsWith('image') ? (
                <img src={URL.createObjectURL(selectedFile)} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '1rem' }} />
              ) : (
                <Typography variant="body2" color="textSecondary">
                  {selectedFile.name} (preview not available)
                </Typography>
              )}
              <TextField
                label="Caption"
                fullWidth
                variant="outlined"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                sx={{ mt: 2 }}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                        onClick={() => {
                            handleSendFile();
                        }}
                        >
                        <Send />
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
                />
            </Box>
          ) : (
            <Typography variant="body2" color="textSecondary">
              No file selected.
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

// import React, { useState, useRef } from 'react';
// import {
//   Box, IconButton, InputBase, Paper, Avatar, List, ListItem, ListItemText, ListItemAvatar,
//   Typography, DialogContent, Dialog, DialogTitle, DialogActions, Button, Slide
// } from '@mui/material';
// import { AttachFile, Mic, Send } from '@mui/icons-material';
// import { TransitionProps } from '@mui/material/transitions';

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & { children: React.ReactElement<any, any> },
//   ref: React.Ref<unknown>,
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const initialMessages = [
//   { id: 1, type: 'text', content: 'Hello! How can I help you today?', sender: 'other', timestamp: new Date().toLocaleTimeString() },
//   { id: 2, type: 'text', content: 'Hi! I have a question about my account.', sender: 'user', timestamp: new Date().toLocaleTimeString() },
// ];

// export default function Messenger() {
//   const [chatMessages, setChatMessages] = useState(initialMessages);
//   const [newMessage, setNewMessage] = useState('');
//   const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);
//   const [openPreview, setOpenPreview] = useState(false);
//   const [previewImage, setPreviewImage] = useState<string | null>(null);

//   const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       const files = Array.from(event.target.files);
//       setSelectedFiles(files);

//       // Convert image to base64 for preview and send it as a message
//       files.forEach(file => {
//         const reader = new FileReader();
//         reader.onload = () => {
//           const newChatMessage = {
//             id: Date.now(),
//             type: 'image',
//             content: reader.result as string,
//             sender: 'user',
//             timestamp: new Date().toLocaleTimeString(),
//           };
//           setChatMessages(prevMessages => [...prevMessages, newChatMessage]);
//         };
//         reader.readAsDataURL(file);
//       });
//     }
//   };

//   const handleIconClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       const newChatMessage = {
//         id: Date.now(),
//         type: 'text',
//         content: newMessage,
//         sender: 'user',
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setChatMessages([...chatMessages, newChatMessage]);
//       setNewMessage('');
//     }
//   };

//   const handleImageClick = (imageSrc: string) => {
//     setPreviewImage(imageSrc);
//     setOpenPreview(true);
//   };

//   const handleClosePreview = () => {
//     setOpenPreview(false);
//     setPreviewImage(null);
//   };

//   return (
//     <React.Fragment>
//       <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)' }}>
//         <Box sx={{ flex: 1, overflowY: 'auto', p: 2, backgroundColor: '#fff' }}>
//           <List>
//             {chatMessages.map((message) => (
//               <ListItem 
//                 key={message.id} 
//                 sx={{ 
//                   justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
//                   alignItems: 'flex-start'
//                 }}
//               >
//                 {message.sender === 'other' && (
//                   <ListItemAvatar>
//                     <Avatar src="https://via.placeholder.com/150" sx={{ bgcolor: '#555' }} />
//                   </ListItemAvatar>
//                 )}
//                 <Box sx={{ maxWidth: '60%' }}>
//                   <Paper
//                     sx={{
//                       p: 1,
//                       bgcolor: message.sender === 'user' ? '#333' : '#444',
//                       color: message.sender === 'user' ? '#fff' : '#ccc',
//                       borderRadius: 2,
//                       marginLeft: message.sender === 'user' ? 'auto' : 0,
//                     }}
//                   >
//                     {message.type === 'text' ? (
//                       <ListItemText primary={message.content} />
//                     ) : (
//                       <img
//                         src={message.content}
//                         alt="Sent"
//                         onClick={() => handleImageClick(message.content)}
//                         style={{ maxWidth: '100%', cursor: 'pointer', borderRadius: '5px' }}
//                       />
//                     )}
//                   </Paper>
//                   <Box className="flex justify-end">
//                     <Typography variant="caption">
//                       {message.timestamp}
//                     </Typography>
//                   </Box>
//                 </Box>
//                 {message.sender === 'user' && (
//                   <ListItemAvatar>
//                     <Avatar src="https://via.placeholder.com/150" sx={{ bgcolor: '#007bff', marginLeft: "15px" }} />
//                   </ListItemAvatar>
//                 )}
//               </ListItem>
//             ))}
//           </List>
//         </Box>

//         <Paper
//           component="form"
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             p: 0.5,
//             bgcolor: '#333',
//             boxShadow: '0px -1px 5px rgba(0,0,0,0.1)',
//             borderRadius: 10,
//             width: '100%',
//             justifyContent: 'flex-end',
//           }}
//         >
//           <IconButton color="primary" onClick={handleIconClick}>
//             <AttachFile sx={{ color: '#ccc' }} />
//           </IconButton>
//           <input
//             type="file"
//             hidden
//             multiple
//             ref={fileInputRef}
//             onChange={handleFileChange}
//           />
//           <InputBase
//             placeholder="Type a message"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             sx={{
//                 ml: 1,
//                 flex: 1,
//                 color: '#000', // Change text color to black
//                 backgroundColor: '#fff',
//                 borderRadius: '10px',
//                 pl: 1,
//                 pr: 1
//             }}
//             onKeyPress={(e) => {
//                 if (e.key === 'Enter') {
//                 e.preventDefault();
//                 handleSendMessage();
//                 }
//             }}
//             />

//           <IconButton color="primary">
//             <Mic sx={{ color: '#ccc' }} />
//           </IconButton>
//           <IconButton color="primary" onClick={handleSendMessage}>
//             <Send sx={{ color: '#ccc' }} />
//           </IconButton>
//         </Paper>
//       </Box>

//       <Dialog
//         open={openPreview}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={handleClosePreview}
//       >
//         <DialogTitle>Image Preview</DialogTitle>
//         <DialogContent>
//           {previewImage && (
//             <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClosePreview}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }
