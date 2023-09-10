import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import './style.css'
const CounterComponent = ({ start, end, duration }) => {
    // return (
    //     <div className='numberCount'>
    //         <CountUp start={start} end={end} duration={duration} separator="," decimal="." />
    //     </div>
    // )
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        observer.observe(document.querySelector('.numberCount'));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className={`numberCount ${isVisible ? 'visible' : ''}`}>
            {isVisible && <CountUp start={start} end={end} duration={duration} separator="," decimal="." />}
        </div>
    );
}

export default CounterComponent;