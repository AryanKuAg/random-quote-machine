import React from "react";

function IconButton({ icon, event, backgroundColor }) {
  const buttonStyle = { backgroundColor: backgroundColor };

  return (
    <div style={buttonStyle} className="p-3 rounded-md">
      <img
        alt="social-media"
        src={icon}
        style={{ height: "30px", width: "30px" }}
      />
    </div>
  );
}

export default IconButton;
