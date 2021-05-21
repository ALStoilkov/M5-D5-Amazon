import { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ProfilePicModal extends Component {
  state = {
    picture: "",
  };

  handleUpload = async () => {
    this.props.toggleModal();
    try {
      let formData = new FormData();
      formData.append("productImg", this.state.picture);
      // console.log(formData)

      let response2 = await fetch(
        `http://localhost:3001/product/${this.props.params.productId}/upload`,
        {
          method: "post",

          body: formData,
        }
      );

      if (!response2.ok) {
        throw new Error("Prodcut image didn't uploaded");
      } else {
        alert("your product image uploaded successfully");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <Modal show={this.props.isEditingPic}>
        <Modal.Header>
          <Modal.Title>Modify profile image</Modal.Title>
        </Modal.Header>
        <Modal.Body>Choose your profile image:</Modal.Body>
        <label className="custom-file-upload">
          <input
            id="profilePicInput"
            type="file"
            multiple
            onChange={(e) => this.setState({ picture: e.target.files[0] })}
          />
        </label>

        <Modal.Footer>
          <Button
            variant="outline-secondary"
            onClick={() => this.props.toggleModal()}
          >
            Close
          </Button>
          <Button variant="primary" onClick={() => this.handleUpload()}>
            Upload Image
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ProfilePicModal;
