import React from 'react';

/* ------------- || External Library Imports || ------------- */
import io from 'socket.io-client';

/* ------------- || API Client Imports || ------------- */
import iotService from '../services/API/IoT/iot.service';

const socketContext = React.createContext();

const useSocket = () => {
  const [ socket, setSocket ] = React.useState(null);

  const connect = () => {
    const connection = io.connect(
      'http://localhost:8080',
      { transports: ['websocket'] }
    );
    connection.on('connect-iot-front', (iot) => {
      console.log(iot);
      iotService.index().then((response) => {
        console.log(response)
      })
      // iotService.post(iot)
      //   .then(res => {
      //     console.log(res);
      //   }).catch(err => console.error(err));
    });
    connection.on('change-status-device', (value) => {
      
    });
    setSocket(connection);
  }

  return { socket, connect };
};

export const SocketProvider = ({ children }) => {
  const socket = useSocket();

  return (
    <socketContext.Provider value={socket}>
      { children }
    </socketContext.Provider>
  )
};

const SocketConsumer = () => {
  return React.useContext(socketContext);
};

export default SocketConsumer;