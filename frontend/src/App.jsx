import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api')
      .then((response) => setMessage(response.data))
      .catch((error) => console.error(error));
  }, []); 
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Frontend with Vite + React</h1>
      <p>{message || 'Fetching data from backend...'}</p>
    </div>
  );
}

export default App;
