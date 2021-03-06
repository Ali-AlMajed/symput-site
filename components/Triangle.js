const Triangle = ({ color }) => {
  return (
    <div
      className={`top-px bottom-auto left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-64 transform -translate-y-full`}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className={`${color} fill-current transition-darkmode`}
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  );
};

export default Triangle;
