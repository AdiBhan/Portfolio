import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import "../../../styles/skills.css";
function Skills(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="m-3">
      <Modal
        className="coming_soon"
        closeIcon
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header icon="archive" content="Coming Soon" />
        <Modal.Content>
          <p>This feature is coming soon. Please check back later for more</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => setOpen(false)}>
            <Icon name="remove" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
      <div className="m-4 label label_style">{props.name}</div>
      <div
        className={`ui ${props.color} active progress progressbar_style m-4`}
        value={35}
        total={100}
      >
        <div className="bar">
          <div className="progress"></div>
        </div>
      </div>{" "}
      <p onClick={() => setOpen(true)} className="more">
        Learn More
      </p>
    </div>
  );
}

export default Skills;
