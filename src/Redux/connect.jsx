import Main from "../App";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../Redux/actions";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    data: state.data,
    isLoading: state.setLoadingState,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const ConnectApp = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Main)
);

export default ConnectApp;
