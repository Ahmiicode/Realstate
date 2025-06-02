import React from 'react';
import { useParams } from 'react-router-dom';
import agents from '../../data/agents';

const Agentdes = () => {
  const { id } = useParams();
  const agent = agents.find(a => a.id === parseInt(id, 10));

  if (!agent) {
    return <div>Agent not found</div>;
  }

  return (
    <div className="max-w-3xl   py-6 text-2xl text-gray-500 whitespace-pre-line">
        <h2 className='text-4xl text-black mb-6 font-semibold'>Description</h2>
      {agent.description || "No description available."}
    </div>
  );
};

export default Agentdes;
