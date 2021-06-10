import React from "react";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>warning</h4>
        <div>Are you sure?</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          time="5:42PM"
          message="Hey nice stuff!"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          time="3:32AM"
          message="Long time no see!"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          time="12:02AM"
          message="So jelly!!!"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
