import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from './Modal.jsx';

class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenedModal: false,
    };
  }

  handleModal = () => {
    this.setState(() => ({ isOpenedModal: !this.state.isOpenedModal }));
  };
  render() {
    return (
      <div>
        <Button onClick={this.handleModal}>Open</Button>
        <Modal isOpen={this.state.isOpenedModal}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            animi at commodi ipsa laboriosam libero, officiis qui quis quisquam
            similique!
          </p>
          <Button onClick={this.handleModal}>Ok</Button>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
