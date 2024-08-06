import React, { useEffect, useState } from 'react';

const useCountdown = (initCount: number, duration:number) => {

    const [count, setCount] = useState(initCount);

    useEffect(() => {
        if(count === 0) return;

        const timer = setInterval(() => {
            setCount(prevCount => {
                if(prevCount<=1){
                    clearInterval(timer);
                    return 0;
                }
                return prevCount - 1;
            });
        },duration);

        return () => clearInterval(timer);
    },[count,duration]);
    
    return count;
    
};

export default useCountdown;