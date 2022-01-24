import React, { useEffect, useRef } from "react";
/*
    
    
# custom setInterval equivalent api

since setInterval never forgets the initial values of variables
the value of state is constant inside the setInterval function
so I have created this useInterval API as suggested by Dan Abramov

https://overreacted.io/making-setinterval-declarative-with-react-hooks/

the callbackFunction is updated when "callback" is updated. Unlinke setInterval :p
"callback" is updated due to stateChange

*/

const useInterval = (callback: () => void, delay: number) => {
  const callbackFunction = useRef<() => void>();

  const interval = useRef<any>();

  useEffect(() => {
    callbackFunction.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (callbackFunction.current) callbackFunction.current();
    };

    interval.current = setInterval(tick, delay);

    return () => clearInterval(interval.current);
  }, []);

  return interval;
};

export default useInterval;
