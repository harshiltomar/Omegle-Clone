import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Room = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');

  useEffect(() => {
    // logic to init user to the room
  }, [name]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="bg-neutral-900 p-8 rounded-lg shadow-lg text-white w-1/2">
        <h1 className="mx-24 text-3xl font-thin mb-4 flex">🚀 Welcome to{" "} <h1 className='font-semibold ml-2 text-teal-500'>Room !</h1></h1>        <p className="mb-4 font-thin">
          You are connected with {name} for an engaging conversation.
        </p>
        <div className="text-white p-4 rounded-md mb-4">
          <p>
            This is where the chat messages will be displayed. The chat messages
            will be displayed in this area.
          </p>
        </div>
        <div className="flex mb-4 w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Type your message"
            className="border border-gray-300 px-4 py-2 rounded-md flex-grow mr-2 text-white px-4 py-2 rounded-l-full bg-teal-500 w-full focus:outline-none"
          />
          <button className="bg-teal-600 hover:bg-teal-700 text-black py-2 px-4 rounded-r-full ml-2">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;