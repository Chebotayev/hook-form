import React, { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  // typeof status === oneOf('pending', 'succeed', 'failure')
  const [status, setStatus] = useState('')

  useEffect(() => {
    // open connection
    const evtSource = new EventSource("http://localhost:5555/stream");

    // onmessage function works, when BE doesn't provide 'event'
    // in case BE provide event, we must subscribe to it with simple
    // addEventListener('eventName', handler) and on unmount close connection and removeEventListener('eventName', handler)
    evtSource.onmessage = event => {
      // here we can save date wherever we want (state, redux, context)
      setStatus(event.data);

      // close connection depending on condition
      if(event.data !== 'pending') evtSource.close();
    };

    // close connection on unmount
    return () => evtSource.close();
  }, [])

  return <div>{status ? status : 'Not provided'}</div>
}

export default App;
