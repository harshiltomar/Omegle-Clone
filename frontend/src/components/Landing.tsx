import { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [name, setName] = useState('');

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to Steamify</h1>
        <p className="mb-4">
          Connect with random strangers and have engaging conversations.
        </p>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Link
          to={`/room/?name=${name}`}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Join
        </Link>
      </div>
      <div className="mt-8">
        <p>
          Powered by{' '}
          <a href='github.com/harshiltomar'
            className="text-white hover:underline"
          >
            Harshil ™️
          </a>
        </p>
      </div>
    </div>
  );
};

export default Landing;