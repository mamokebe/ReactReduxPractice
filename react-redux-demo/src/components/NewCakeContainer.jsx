import React, { useState } from "react";
import { connect } from "react-redux";
// import { buyCake } from "../redux/cake/cakeActions";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      {/* //for payload */}
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {/* <button onClick={props.buyCake}>Buy {number} Cake</button>
       */}
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // buyCake: () => dispatch(buyCake()),
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
