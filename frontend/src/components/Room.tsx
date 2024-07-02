import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Room = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');

  useEffect(() => {
    // logic to init user to the room
  }, [name]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Room</h1>
        <p className="mb-4">
          You are connected with {name} for an engaging conversation.
        </p>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <p>
            This is where the chat messages will be displayed. The chat messages
            will be displayed in this area.
          </p>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Type your message"
            className="border border-gray-300 px-4 py-2 rounded-md flex-grow mr-2"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;