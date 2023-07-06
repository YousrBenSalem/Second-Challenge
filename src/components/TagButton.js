import React from "react";
import "./TagButtonStyle.css";

function TagButton( {children , title }) {
  
  return (
    <button className="tagButton">
      <div>
        {title}
        {children && <p style={{ margin: 0 }}>{children}</p>}
      </div>
    </button>
  );
}

export default TagButton;
