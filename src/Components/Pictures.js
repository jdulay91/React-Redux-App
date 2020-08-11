import React from "react";
import { connect } from "react-redux";
import { getPic } from "../Actions";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  font-size: 4rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button: {
    background-color: #e7e7e7;
    color: black;
    border-radius: 12px;
    border: 2px solid blue;
    transition-duration: 0.4s;
  }
  .button:hover {
    background-color: #4caf50;
    color: white;
  }
`;

const Pictures = (props) => {
  if (props.isFetching) {
    return <h2>Fetching a pic now</h2>;
  } else {
    return (
      <Div>
        <h2>Anime pic: </h2>
        <div>
          <img src={`${props.pictures}`} alt="animu" />
        </div>
        <br />
        <button onClick={props.getPic}>Load New Anime Image</button>
      </Div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    pictures: state.pictures.large,
  };
};

export default connect(mapStateToProps, { getPic })(Pictures);
