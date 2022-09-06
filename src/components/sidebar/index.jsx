import React from "react";
import { InputGroup, FormControl, Button, Modal } from "react-bootstrap";
// components
import PollList from "./poll-list";
import styles from "./sidebar.module.css";

class Sidebar extends React.Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };
  render() {
    return (
      <>
        <div className={styles.sidebar}>
          <InputGroup className="my-3">
            <FormControl
              placeholder="search"
              type="search"
              value={this.props.searchTerm}
              onChange={(e)=> this.props.handleSearch(e.target.value)}
            />
            <Button variant="danger" onClick={this.toggleModal}>
              New
            </Button>
          </InputGroup>
          <hr />
          <h3>list of polls</h3>
          <PollList
            polls={this.props.polls}
            selectPoll={this.props.selectPoll}
          />
        </div>

        <Modal show={this.state.isModalOpen} onHide={this.toggleModal}>
          <Modal.Header>header</Modal.Header>
          <Modal.Body>body</Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Sidebar;
