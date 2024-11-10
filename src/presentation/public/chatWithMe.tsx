import React, { useState } from 'react';
import { Box, IconButton, InputBase, Paper, Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import { AttachFile, Mic, Send } from '@mui/icons-material';

const messages = [
  { id: 1, text: 'Hello! How can I help you today?', sender: 'other' },
  { id: 2, text: 'Hi! I have a question about my account.', sender: 'user' },
];

export default function Messenger() {
  const [chatMessages, setChatMessages] = useState(messages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, { id: Date.now(), text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  // Placeholder function for attach and mic actions
  const handleAttachFile = () => alert("File attachment not implemented yet");
  const handleMicClick = () => alert("Voice message not implemented yet");

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)'}}
    >
      <Box sx={{ flex: 1, overflowY: 'auto', p: 2, backgroundColor: '#fff' }}>
        <List>
          {chatMessages.map((message) => (
            <ListItem key={message.id} sx={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              {message.sender === 'other' && (
                <ListItemAvatar>
                  <Avatar src="https://via.placeholder.com/150" sx={{ bgcolor: '#555' }} />
                </ListItemAvatar>
              )}
              <Paper
                sx={{
                  p: 1,
                  maxWidth: '60%',
                  bgcolor: message.sender === 'user' ? '#333' : '#444',
                  color: message.sender === 'user' ? '#fff' : '#ccc',
                  borderRadius: 2,
                }}
              >
                <ListItemText primary={message.text} />
              </Paper>
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
        <IconButton color="primary" onClick={handleAttachFile}>
          <AttachFile sx={{ color: '#ccc' }} />
        </IconButton>
        <InputBase
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          sx={{ ml: 1, flex: 1, color: '#ccc' }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        style={{backgroundColor: '#fff', borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px"}}
        />
        <IconButton color="primary" onClick={handleMicClick}>
          <Mic sx={{ color: '#ccc' }} />
        </IconButton>
        <IconButton color="primary" onClick={handleSendMessage}>
          <Send sx={{ color: '#ccc' }} />
        </IconButton>
      </Paper>
    </Box>
  );
}
