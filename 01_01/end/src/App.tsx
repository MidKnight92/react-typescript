import { useState } from 'react';
import './App.css'
import Message from './Message';
import { UserContext } from './UserContextType';

export default () => {
  const [userName, setUserName] = useState<string>('Steph');
  const [message, setMessage] = useState<string>('you are awesome');

  return (
    <UserContext.Provider value={{name: userName, message: message}}>
      <Message />
    </UserContext.Provider>
  )
}

