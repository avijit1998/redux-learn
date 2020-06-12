import React from "react";
import "./App.css";
import { connect } from "react-redux";

function App({ a, b, updateA, updateB }) {
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    a: state.rA.a,
    b: state.rB.b,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateA: (b) => dispatch({ type: "ADD_A", b: b }),
    updateB: (a) => dispatch({ type: "ADD_B", a: a }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
