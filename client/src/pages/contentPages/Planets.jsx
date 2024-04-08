import React from 'react'
import { Link } from 'react-router-dom';
const Planets = () => {
    return (
        <div 
        style={{backgroundImage:"url('/fifthpage/solar7.jpg')"}}
        className='flex flex-col h-[100vh] items-center gap-[3vw] p-[2vw]'>
          <img src="/fifthpage/solarsystem.png" alt="Title Image" className="w-[40vw] mt-[5vw]" />

          <div className="flex flex-row justify-center items-center">

             <div className="flex flex-col justify-center items-center hover:scale-125 transition-all duration-500">
              <Link to="/planetsInfo#sun">
                <img src="/fifthpage/sun.png" alt="Sun" className='w-[65vw]' />
              </Link>
              <p className="text-yellow-300 font-mono text-3xl pt-[2vw] font-bold">Sun</p>
            </div>

             <div className="flex flex-col justify-center items-center hover:scale-125 transition-all duration-500">
              <Link to="/planetsInfo#mercury">
                <img src="/fifthpage/mercury.png" alt="Mercury" className='w-[7vw]' />
              </Link>
              <p className="text-gray-300 font-mono text-3xl pt-[2vw] font-bold">Mercury</p>
            </div>

             <div className="flex flex-col justify-center items-center hover:scale-125 transition-all duration-500">
              <Link to="/planetsInfo#venus">
                <img src="/fifthpage/venus.png" alt="Venus" className='w-[35vw]'/>
              </Link>
              <p className="text-orange-500 font-mono text-3xl pt-[2vw] font-bold">Venus</p>
            </div>

             <div className="flex flex-col justify-center items-center hover:scale-125 transition-all duration-500">
              <Link to="/planetsInfo#earth">
                <img src="/fifthpage/earth.png" alt="Earth" className='w-[45vw]'/>
              </Link>
              <p className="text-green-500 font-mono text-3xl pt-[2vw] font-bold">Earth</p>
            </div>

             <div className="flex flex-col justify-center items-center hover:scale-125 transition-all duration-500">
              <Link to="/planetsInfo#mars">
                <img src="/fifthpage/mars.png" alt="Mars" className='w-[40vw]' />
              </Link>
              <p className="text-orange-400 font-mono text-3xl pt-[2vw] font-bold">Mars</p>
            </div>

             <div className="flex flex-col justify-center items-center hover:scale-125 transition-all duration-500">
              <Link to="/planetsInfo#jupiter">
                <img src="/fifthpage/jupiter.png" alt="Jupiter" className='w-[65vw]'/>
              </Link>
              <p className="text-yellow-500 font-mono text-3xl pt-[2vw] font-bold">Jupiter</p>
            </div>

             <div className="flex flex-col justify-center items-center hover:scale-125 transition-all duration-500">
              <Link to="/planetsInfo#saturn">
                <img src="/fifthpage/saturn.png" alt="Saturn" className='w-[55vw]'/>
              </Link>
              <p className="text-yellow-300 font-mono text-3xl  pt-[2vw] font-bold">Saturn</p>
            </div>

            <div className="flex flex-col justify-center items-center hover:scale-125 transition-all duration-500">
              <Link to="/planetsInfo#uranus">
                <img src="/fifthpage/uranus.png" alt="Uranus" />
              </Link>
              <p className="text-blue-400 font-mono text-3xl pt-[2vw] font-bold">Uranus</p>
            </div>

            <div className="flex flex-col justify-center items-center hover:scale-125 transition-all duration-500">
              <Link to="/planetsInfo#neptune">
                <img src="/fifthpage/neptune.png" alt="Neptune" className='w-[5vw]'/>
              </Link>
              <p className="text-blue-100 font-mono text-3xl pt-[2vw] font-bold">Neptune</p>
            </div>
            
          </div>
        </div>
      );
}

export default Planets