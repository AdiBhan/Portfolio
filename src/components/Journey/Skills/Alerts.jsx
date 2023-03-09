import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import "../../../styles/alerts.css";
function Alerts(props) {
  const closebutton = () => {
    const alert = document.getElementById("alert");
    alert.classList.add("closed");
    setTimeout(() => props.setOpen(null), 500);
  };

  return (
    <div className="alert-animation">
      {" "}
      <Modal
        className={`coming_soon alert-animation ${props.open ? "" : "closed"}`}
        closeIcon
        id="alert"
        open={props.open}
        onClose={() => {
          props.setOpen(false);
        }}
        onOpen={() => props.setOpen(true)}
      >
        <Header className="center-text" icon="archive" content="Coming Soon" />
        <Modal.Content>
          <p className="center-text">
            {" "}
            This section is currently a working in progress. I plan on adding
            projects,<br></br> and information to this section in the near
            future.{" "}
          </p>
        </Modal.Content>
        <Modal.Actions>
          <div className="close-pos">
            <Button color="red" onClick={closebutton}>
              <Icon name="remove " /> Close
            </Button>
          </div>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Alerts;
