import { useState } from 'react';
import { useSelector } from 'react-redux';

export default ({ participants }) => {
  const [messages, setMessages] = useState([]);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [chatId, setChatId] = useState('');
  const [msg, setMsg] = useState('');
  const [mySocket, setSocket] = useState(null);

  const { user } = useSelector(state => state.constant);

  const receiverID = participants?.filter(item => item !== user?._id)?.[0];

  return {
    user,
    messages,
    setMessages,
    isFirstTime,
    setIsFirstTime,
    chatId,
    setChatId,
    setMsg,
    msg,
    setSocket,
    mySocket,
    receiverID,
  };
};
