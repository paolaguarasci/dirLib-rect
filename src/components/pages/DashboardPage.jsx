import React from "react";
import PropTypes from "prop-types";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { connect } from "react-redux";

const DashboardPage = ({ isConfirmed }) => (
  <div>{!isConfirmed && <ConfirmEmailMessage />}</div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: state.user.confirmed
  };
}
export default connect(mapStateToProps)(DashboardPage);
