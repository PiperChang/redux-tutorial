import React from "react";
import PropTypes from "prop-types";
import "./Counter.css";

export default function Counter({
  number,
  color,
  onIncrement,
  onDecrement,
  onSetColor,
}) {
  return (
    <div
      className="Counter"
      onClick={onIncrement}
      onContextMenu={(e) => {
        e.preventDefault();
        onDecrement();
      }}
      onDoubleClick={onSetColor}
      style={{
        backgroundColor: color,
      }}
    >
      {number}
    </div>
  );
}

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
};

Counter.defaultProps = {
  number: 0,
  color: "black",
  onIncrement: () => console.warn("1"),
  onDecrement: () => console.warn("1"),
  onSetColor: () => console.warn("1"),
};
