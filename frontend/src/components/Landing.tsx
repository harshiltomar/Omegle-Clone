import { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [name, setName] = useState('');
  const [joined, setJoined]= useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="bg-neutral-900 p-8 rounded-lg shadow-lg text-white w-1/2">
        <h1 className="mx-20 text-3xl font-thin mb-4 flex">👋 Welcome to{" "} <h1 className='font-semibold ml-2 text-teal-500'>Steamify !</h1></h1>
        <p className="mb-4 font-thin mx-10">
          We are working hard to get Codershouse ready for everyone!
          While we wrap up the finishing youches, we are adding people gradually to make sure nothing breaks
        </p>
        <div className="flex mb-4 w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Enter your name →"
          className="text-white px-4 py-2 rounded-l-full bg-teal-500 w-full focus:outline-none"
          onChange={(e) => setName(e.target.value)}
          />
          <Link
          to={`/room/?name=${name}`}
          className="bg-teal-600 hover:bg-teal-700 text-black py-2 px-4 rounded-r-full ml-2"
        >
          Join
        </Link>
        </div>
      </div>
      <div className="mt-8 text-white font-thin">
        <p>
          Powered by{' '}
          <a href='github.com/harshiltomar'
            className="font-semibold text-teal-500"
          >
            Harshil ™️
          </a>
        </p>
      </div>
    </div>
  );
};

export default Landing;