import React from "react";
import { Message, MessageHeader } from "semantic-ui-react";
import PropTypes from "prop-types";

const ConfirmEmailMessage = () => (
  <Message info>
    <MessageHeader>
      Please, verify your email to unlock awesomeness
    </MessageHeader>
  </Message>
);

ConfirmEmailMessage.propType = {
  text: PropTypes.string.isRequired
};
export default ConfirmEmailMessage;
