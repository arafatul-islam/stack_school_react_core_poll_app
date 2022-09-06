import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import shortid from "shortid";
// components
import Sidebar from "./components/sidebar/index";
import MainContent from "./components/main-content/index";
// polls array
import POLLS from "./data/polls";
class App extends React.Component {
  state = {
    polls: [],
    selectedPoll: {},
    searchTerm: "",
  };

  componentDidMount() {
    this.setState({
      polls: POLLS,
    });
  }

  addNew = (poll) => {
    poll.id = shortid.generate();
    poll.created = new Date();
    poll.totalVote = 0;
    poll.opinions = [];

    this.setState({
      // polls: this.state.polls.concat(poll)
      polls: [...this.state.polls, poll],
    });
  };

  updatePoll = (updatedPoll) => {
    const polls = [...this.state.polls];
    const poll = polls.find((p) => p.id === updatedPoll.id);

    poll.title = updatedPoll.title;
    poll.description = updatedPoll.description;
    poll.options = updatedPoll.options;

    this.setState({ polls });
  };

  deletePoll = (pollId) => {
    const polls = this.state.polls.filter((p) => p.id !== pollId);
    this.setState({ polls, selectedPoll: {} });
  };

  selectPoll = (pollId) => {
    const poll = this.state.polls.find((p) => p.id === pollId);
    this.setState({ selectedPoll: poll });
    // console.log(poll);
  };

  handleSearch = (searchTerm) => {
    this.setState({
        searchTerm
    },()=> console.log(this.state.searchTerm))
    // console.log(searchTerm);
    
  }
  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Sidebar
              polls={this.state.polls}
              searchTerm={this.state.searchTerm}
              selectPoll={this.selectPoll}
              handleSearch={this.handleSearch}
            />
          </Col>
          <Col md={8}>
            <MainContent />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
