import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Socket, io } from 'socket.io-client';

const URL= "http://localhost:3000";

const Room = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  const [lobby, setLobby] = useState<boolean>(true);
  const [socket, setSocket] = useState<null | Socket>(null);

  useEffect(() => {
    const socket = io(URL);

    socket.on("send-offer", ({roomId})=> {
      alert("send offer please");
      setLobby(false);
      socket.emit("offer", {
        roomId,
        sdp: "",
      })
    });

    socket.on("offer", ({roomId})=> {
      alert("send answer please");
      setLobby(false);
      socket.emit("answer ",{
        roomId,
        sdp: "",
      })
    });

    //@ts-ignore
    socket.on("answer", ({roomId, offer})=> {
      alert("connection done");
      setLobby(false);
    });

    socket.on("lobby", ()=> {
      setLobby(true);
    });

    setSocket(socket);
  }, [name]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="bg-neutral-900 p-8 rounded-lg shadow-lg text-white w-1/2">
        <h1 className="mx-24 text-3xl font-thin mb-4 flex">🚀 Welcome to{" "} <h1 className='font-semibold ml-2 text-teal-500'>Room !</h1></h1>        
        {lobby ? 
          <div>Waiting to connect you with Someone</div> : 
          <>        
            <p className="mb-4 font-thin flex ml-10">
              You are connected with <h1 className='font-semibold mx-1 text-teal-500'>{name}</h1> for an engaging conversation.
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
                className="border border-gray-300 px-4 py-2 rounded-md flex-grow mr-2 text-white rounded-l-full bg-teal-500 w-full focus:outline-none"
              />
              <button className="bg-teal-600 hover:bg-teal-700 text-black py-2 px-4 rounded-r-full ml-2">
                Send
              </button>
            </div>
            <video width={200} height={200}/>
            <video width={200} height={200}/>
          </>
        }
      </div>
    </div>
  );
};

export default Room;