import React from "react";
import { ListGroup } from "react-bootstrap";

const PollList = (props) => {
  return (
    <ListGroup>
      {props.polls.map((poll) => (
        <ListGroup.Item key={poll.id} onClick={()=> props.selectPoll(poll.id)}>
           <p>
            {
                poll.title.length>30 ? ` ${poll.title.substr(0,30)} ...` : poll.title
            }
            </p>
           
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PollList;
