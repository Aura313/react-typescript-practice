import React, { useState } from 'react';
import './styles.css';

interface Props {
  entry: { id: any; title: any; details: any };
}

const LogEntry: React.FC<Props> = ({ entry }) => {
  return (
    <div className='log-entry'>
      <span>{`[Log entry: ${entry.id}] `}</span>
      <span>{entry.title} </span>
      <span>{entry.details}</span>
    </div>
  );
};

export default LogEntry;
