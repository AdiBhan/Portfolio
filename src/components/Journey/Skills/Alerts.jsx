import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
function Alerts(props) {
  return (
    <div>
      {" "}
      <Modal
        className="coming_soon"
        closeIcon
        open={props.open}
        onClose={() => props.setOpen(false)}
        onOpen={() => props.setOpen(true)}
      >
        <Header icon="archive" content="Coming Soon" />
        <Modal.Content>
          <p>This feature is coming soon. Please check back later for more</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => props.setOpen(false)}>
            <Icon name="remove" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Alerts;
