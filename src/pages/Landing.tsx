import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [animateOut, setAnimateOut] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setAnimateOut(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 600);
  };

  // Ensure page starts at top and body has neutral bg
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b2e63] to-[#09264f] relative overflow-hidden ${animateOut ? 'opacity-0 scale-95 transition-all duration-700 ease-out' : 'opacity-100 scale-100 transition-all duration-700 ease-out'}`}>
      <div className="text-center space-y-10">
        <img
          src="https://media.discordapp.net/attachments/630403344342712365/1403800952653221909/logo.png?ex=6898df04&is=68978d84&hm=5f3c8d4b38ea71d6c4eb37c042e4c45e0a6e7d478312c91a674bd82b144ebfd9&=&format=webp&quality=lossless&width=922&height=274"
          alt="Leading Edge"
          className="mx-auto h-40 sm:h-48 md:h-[14rem] lg:h-[16rem] w-auto"
        />
        <button
          onClick={handleEnter}
          className="inline-flex items-center px-8 py-3 rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Enter App
        </button>
      </div>
    </div>
  );
};

export default Landing;

