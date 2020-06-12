import React from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "./store/actions/actions";
import logo from "./logo.svg";

function App({ a, b, loading, updateA, updateB }) {
  return (
    <div className="App">
      <div className="col">
        <div>
          <span>A:</span>
          <span>{a}</span>
        </div>
        <button
          onClick={() => {
            updateA(b);
          }}
        >
          Update A
        </button>
      </div>
      <div className="col">
        <div>
          <span>B:</span>
          <span>{b}</span>
        </div>
        <button
          onClick={() => {
            updateB(a);
          }}
        >
          Update B
        </button>
      </div>
      <div>{loading && <img src={logo} className="App-logo" alt="logo" />}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    a: state.rA.a,
    b: state.rB.b,
    loading: state.rLoad.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateA: (b) => dispatch(actions.addA(b)),
    updateB: (a) => dispatch(actions.addB(a)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
