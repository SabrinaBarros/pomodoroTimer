import "./timer.css"

const Timer = ({time}) => {

  const minutesMask = seconds => Math.floor(seconds / 60);

  const secondsMask = seconds => Math.floor(seconds % 60);

  return(
    <span data-test='timer'>
      {minutesMask(time)}:{secondsMask(time)}
    </span>
  );

}

export default Timer