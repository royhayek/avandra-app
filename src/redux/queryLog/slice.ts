// Packages
import _ from 'lodash';
import moment from 'moment';
import { createSlice } from '@reduxjs/toolkit';
import * as FileSystem from 'expo-file-system';

// Types
import { LogItem } from './types';

const logFileName = 'querylog.txt';
const logFilePath = `${FileSystem.documentDirectory}${logFileName}`;

const initialState: Record<string, LogItem> = {};

export const queryLogSlice = createSlice({
  name: 'queryLog',
  initialState,
  reducers: {
    logQuery: (state, action) => {
      // Get the user's IP address, destination, and duration from the action payload
      const { ipAddress, destination, duration, createdBy } = action.payload;

      // Generate a unique ID for the log using uuid
      const id = _.uniqueId();

      // Get the current UTC timestamp using moment
      const createdAt = moment.utc().format();

      // Create a log object with the required properties
      const log = { id, ipAddress, destination, duration, createdBy, createdAt };

      try {
        // Read existing content from the file
        FileSystem.readAsStringAsync(logFilePath, { encoding: FileSystem.EncodingType.UTF8 }).then(
          (existingContent) => {
            // Append the new log to the existing content
            existingContent += JSON.stringify(log) + '\n';

            // Write the updated content back to the file
            FileSystem.writeAsStringAsync(logFilePath, existingContent, { encoding: FileSystem.EncodingType.UTF8 });
          }
        );

        // Add the log object to the Redux store
        state[id] = log;
      } catch (error) {
        console.error('Error writing log:', error);
      }
    }
  }
});

export const { logQuery } = queryLogSlice.actions;

export default queryLogSlice.reducer;
