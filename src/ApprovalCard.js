import React from "react"
import CommentDetail from "./CommentDetail"

const  ApprovalCard = (props) => {
  return (
      <div>
          <CommentDetail
              author={props.author}
              timeAgo={props.timeAgo}
              img={props.img}
              content={props.content}
          />
          <button>Accept</button>
          <button>Reject</button>
      </div>
  );
};

export default ApprovalCard;