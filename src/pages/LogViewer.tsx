import React, { useState } from 'react';
import LogEntry from '../components/Logs/LogEntry';

interface Props {
  logs: { id: any; title: any; details: any }[];
}

const LogViewer: React.FC<Props> = ({ logs }) => {
  return (
    <div>
      <h3>Total log items : {logs.length} </h3>
      <div className='log-wrapper'>
        {logs.map((entry) => (
          <LogEntry entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default LogViewer;
