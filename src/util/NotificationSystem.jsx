import { Client } from '@stomp/stompjs';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import UserHelper from './UserHelper';


export default function NotificationSystem({Username,children})
{
    
    const [stompClient, setStompClient] = useState();
    const [username, setUsername] = useState(Username);
    const [messagesReceived, setMessagesReceived] = useState([]);


    useEffect(() => {
      if (username) {
        setupStompClient(username);
        console.log("stomp Username"+username);
      }
    }, [username]);
  
  
    
  
  
        
    
    const setupStompClient = (username) => {
      // stomp client over websockets
      const stompClient = new Client({
        brokerURL: 'ws://localhost:8080/ws',
        
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000
      });
  
      stompClient.onConnect = () => {
        // subscribe to the backend public topic
        stompClient.subscribe('/topic/publicmessages', (data) => {
          console.log(data);
          onMessageReceived(data);
          
        });
  
        // subscribe to the backend "private" topic
        stompClient.subscribe(`/user/${username}/queue/inboxmessages`, (data) => {
            onMessageReceived(data);
          
        });
      };
      stompClient.onStompError = (frame) => {
        console.log('Error while connecting to WebSocket:', frame);
      };
    
      stompClient.onWebSocketClose = () => {
        console.log('WebSocket connection closed');
      };
  
      // initiate client
      stompClient.activate();
  
      // maintain the client for sending and receiving
      setStompClient(stompClient);
    };

    

    // display the received data
    const onMessageReceived = (data) => {
    const message = JSON.parse(data.body);
    setMessagesReceived(messagesReceived => [...messagesReceived, message]);
    }


     // send the data using Stomp
    const sendMessage = (newMessage) => {
    const payload = { 'id': uuidv4(), 'from': username, 'to': newMessage.to, 'text': newMessage.text };
    if (payload.to) {
      stompClient.publish({ 'destination': `/user/${payload.to}/queue/inboxmessages`, body: JSON.stringify(payload) });
    } else {
      stompClient.publish({ 'destination': '/topic/publicmessages', body: JSON.stringify(payload) });
    }
  };

  



  return (
    <>
      {typeof children === 'function' &&
        children({
          sendMessage,
          messagesReceived,
        })}
    </>
  );

 



}

 

