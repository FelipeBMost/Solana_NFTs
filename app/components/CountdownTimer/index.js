import React, {useEffect, useState} from "react";

const CountdownTimer = ({dropDate}) => {
    //State
    const [timerString, setTimerString] = useState('')

    useEffect(() => {
        console.log('Configuring interval...');

        //Using setInterval to execute this piece of code each second
        const interval = setInterval(() => {
            const currentDate = new Date().getTime();
            const distance = dropDate - currentDate;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Define output to state
            setTimerString(`${days}D ${hours}h ${minutes}m ${seconds}s`);

            //If distance is less than 0, it's drop time!
            if (distance < 0) {
                console.log('Cleaning interval...');
                clearInterval(interval);
            }
        }, 1000);

        //Every time our component is dismounted, clear the interval
        return () => {
            if (interval){
                clearInterval(interval);
            }
        };
    }, []);

    return (
        <div className="timer-container">
            <p className="timer-header">Candy Drop Iniciando Em:</p>
            {timerString && <p className="timer-value">{`⏰ ${timerString}`}</p>}
        </div>
    );
};

export default CountdownTimer;