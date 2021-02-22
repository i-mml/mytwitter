import React from "react";
import { Link } from "react-router-dom";

const PostsDeatails = (props) => {
  console.log(props.match.params.myId);
  return (
    <div style={{ margin: "2rem" }}>
      <h3>پست شماره {props.match.params.myId}</h3>
      <p>در این پست قراره این کار رو بکنیم</p>
      <Link to={"/posts"}>دیدن تمامی پست ها</Link>
    </div>
  );
};

export default PostsDeatails;
