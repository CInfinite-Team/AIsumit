import React, { useState, useEffect, useRef, useCallback } from 'react';


const CardSegment = ({ number, position }) => {
  return (
    <div className="absolute border-b-2 border-black bg-cyan-400 w-full h-full overflow-hidden rounded-lg">
      <div
        className={`
          absolute inset-0 w-full h-full flex justify-center
          text-3xl md:text-8xl font-bold text-white
          ${position === 'top' ? 'items-end' : 'items-start'}
        `}
      >
        
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        <span className={position === 'top' ? 'pb-1' : 'pt-1'}>{number}</span>
      </div>
    </div>
  );
};



const Separator = () => {
    return (
        <div className="relative w-6 h-40 flex items-center justify-center">
            <div className="w-[2px] h-full  bg-opacity-20 relative">
               
                <div className="absolute top-1/2 -mt-10 w-2 h-2 rounded-full bg-white left-1/2 -ml-1"></div>
                <div className="absolute top-1/2 mt-0 w-2 h-2 rounded-full bg-white left-1/2 -ml-1"></div>
            </div>
        </div>
    );
}



const FlipUnit = ({ current, next, label, isFlipping }) => {
  return (
    <div className="flex flex-col items-center">

      <div 
        className="relative w-14 h-32 md:w-36 md:h-[200px] rounded-lg shadow-xl" 
        style={{ perspective: '400px' }}
      >
     
        <div className="absolute bottom-0 w-full h-1/2  bg-cyan-400  rounded-b-lg">
            <CardSegment number={current} position="bottom" />
        </div>

       
        <div className="absolute top-0 w-full h-1/2 bg-cyan-400 rounded-t-lg">
            <CardSegment number={next} position="top" />
        </div>

        
        <div 
            className={`absolute top-0 w-full h-1/2 bg-cyan-400 rounded-t-lg 
                        ${isFlipping ? 'animate-flipTop' : ''}`}
            style={{ transformStyle: 'preserve-3d', transformOrigin: 'bottom center', backfaceVisibility: 'hidden' }}
        >
           
            <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                <CardSegment number={current} position="top" />
            </div>
            
            <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}>
                <CardSegment number={next} position="top" />
            </div>
        </div>

       
        <div className="absolute w-3 h-3 bg-[#1D1536] rounded-full top-1/2 -mt-1.5 -left-1.5 z-10"></div>
        <div className="absolute w-3 h-3 bg-[#1D1536] rounded-full top-1/2 -mt-1.5 -right-1.5 z-10"></div>
      </div>

     
      <p className="text-[11px] md:text-base mt-4 font-semibold tracking-widest text-gray-300">{label}</p>
    </div>
  );
};



const useFlip = (initialValue) => {
  const [current, setCurrent] = useState(initialValue);
  const [next, setNext] = useState(initialValue);
  const [isFlipping, setIsFlipping] = useState(false);

 
  const currentValueRef = useRef(initialValue);
  
  
  useEffect(() => {
    currentValueRef.current = current;
  }, [current]);

  const updateValue = useCallback((newValue) => {
    
    if (newValue === currentValueRef.current) {
      return;
    }

    setNext(newValue);
    setIsFlipping(true);
    setTimeout(() => {
      setCurrent(newValue);
      setIsFlipping(false);
    }, 500); 
  }, []); 

  return { current, next, isFlipping, updateValue };
};



const CountdownTimer = ({ targetDate = "2025-09-27T16:00:00Z" }) => {
  
  const formatValue = (value) => String(value).padStart(2, "0");

  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  
  const initialTime = calculateTimeLeft();
  const days = useFlip(formatValue(initialTime.days));
  const hours = useFlip(formatValue(initialTime.hours));
  const minutes = useFlip(formatValue(initialTime.minutes));
  const seconds = useFlip(formatValue(initialTime.seconds));
  
  const units = [
      {...days, label: "DAYS"},
      {...hours, label: "HOURS"},
      {...minutes, label: "MINUTES"},
      {...seconds, label: "SECONDS"},
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      days.updateValue(formatValue(timeLeft.days));
      hours.updateValue(formatValue(timeLeft.hours));
      minutes.updateValue(formatValue(timeLeft.minutes));
      seconds.updateValue(formatValue(timeLeft.seconds));
    }, 1000);

    return () => clearInterval(timer);
  }, []); 

  return (
    <div className="bg-[#2b1c50]  flex items-center justify-center flex-col text-white font-sans py-20 p-4">
        <h2 className="text-4xl font-bold uppercase mb-6">Time Remaining </h2>
      <div className="flex items-center justify-center">
        {units.map((unit, index) => (
            <React.Fragment key={unit.label}>
                <FlipUnit {...unit} />
                {index < units.length - 1 && <Separator />}
            </React.Fragment>
        ))}
      </div>
      <style>{`
        @keyframes flipTop {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(-180deg); }
        }
        .animate-flipTop {
          animation: flipTop 0.5s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default CountdownTimer;
