import "./timer.css"

const Timer = ({time}) => {

  const minutesMask = seconds => Math.floor(seconds / 60);

  const secondsMask = seconds => Math.floor(seconds % 60);

  const formatting = (maskResult) => (maskResult < 10) ? ('0' + maskResult) : maskResult;

  return(
    <span className="timer" data-test='timer'>
      {formatting(minutesMask(time))}:{formatting(secondsMask(time))}
    </span>
  );

}

export default Timer