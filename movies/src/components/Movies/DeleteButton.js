import { Button, Modal, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";

function DeleteButton({ onClick }) {
  const [visible, setVisible] = useState(false);
  const handleDelete = () => {
    setVisible(false);
    onClick();
  };
  const showConfirmation = () => {
    setVisible(true);
  };
  return (
    <>
      <Button auto  light color="error" onClick={showConfirmation}>
        <DeleteIcon fill="black" />
      </Button>
      <Modal closeButton aria-labelledby="modal-title" open={visible} >
        <Modal.Header>
          <Text id="modal-title" size={20}>
            Confirm
          </Text>
        </Modal.Header>
        <Modal.Footer>
          <Button auto onClick={handleDelete} color="error">
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default DeleteButton;
