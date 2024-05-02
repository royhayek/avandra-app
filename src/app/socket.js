// Packages
import { io } from 'socket.io-client';

// Utilities
import getEnvVars from '../../environment';

// Websocket URL
const { wsUrl } = getEnvVars();

const socket = new io(wsUrl);

export default socket;
