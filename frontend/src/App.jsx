import { useState, useEffect } from 'react'
import './App.css'
import { io } from 'socket.io-client'

function App() {
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log("Connected to socket server");
    });

    newSocket.on('hello', (data) => {
      console.log("Received:", data);
    });

    newSocket.on('hel', (data)=>{
      console.log("Broadcast message : ", data)
    })

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleChat = () => {
    if (socket) {
      console.log("Sending:", input);
      socket.emit('hello', input);
    }
  };

  return (
    <div>
      <h2>Hello, welcome to our app</h2>
      <input onChange={handleInput} name="chat" value={input} />
      <button onClick={handleChat} id="button">Send</button>
    </div>
  );
}

export default App;
