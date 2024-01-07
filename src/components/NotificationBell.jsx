import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Popover from '@mui/material/Popover';
import NotificationList from './NotificationList';

const dummyMessages = [
  {
    id: 1,
    from: 'UserA',
    text: 'You have a new friend request.',
  },
  {
    id: 2,
    from: 'UserB',
    text: 'Your post got a new comment.',
  },
  {
    id: 3,
    from: 'UserC',
    text: 'Reminder: Event tomorrow at 3 PM.',
  },
];


function NotificationBell({ messages }) 
{
  const [anchorEl, setAnchorEl] = useState(null);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        <NotificationsIcon />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <NotificationList messages={messages} onClose={handleClose} />
      </Popover>
    </>
  );
}

export default NotificationBell;
