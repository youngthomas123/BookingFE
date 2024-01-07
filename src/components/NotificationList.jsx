import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


function NotificationList({ messages, onClose }) 
{


return (
    <List sx={{ width: '300px' }}>
      {messages && messages.length > 0 ? (
        messages.map((message, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={message.from} secondary={message.text} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))
      ) : (
        <ListItem>
          <ListItemText primary="No notifications" />
        </ListItem>
      )}
    </List>
  );


  

}

export default NotificationList;
