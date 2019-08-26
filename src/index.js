import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard"


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard
                author="Same"
                timeAgo={faker.commerce.price()}
                img={faker.image.avatar()}
                content={faker.lorem.sentences()}
            />
            <ApprovalCard
                author="Alex"
                timeAgo={faker.commerce.price()}
                img={faker.image.avatar()}
                content={faker.lorem.sentences()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));