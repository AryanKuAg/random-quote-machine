import React from "react";

function IconButton({ icon, event, backgroundColor }) {
  const buttonStyle = { borderRadius: "4px", backgroundColor: backgroundColor };

  return (
    <button onClick={event} style={buttonStyle}>
      <img
        alt="social-media"
        src={icon}
        style={{ height: "30px", width: "30px" }}
      />
    </button>
  );
}

export default IconButton;
