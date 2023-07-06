import React from "react";
// distracturing
function Post({ postName ="no Title", postBody="no content"  }) {
  return (
    <div
      style={{ padding: "10px", border: "solid #1d9bf0 5px", margin: "25px" }}
    >
      <h2>{postName}</h2>
      <hr />
      <p>{postBody}</p>
    </div>
  );
}
export default Post;
