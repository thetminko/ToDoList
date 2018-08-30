import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  fetchToDoListBegin,
  fetchToDoListSuccess
} from "./redux/actions/todolist.actions";

// import "./App.css";

class App extends Component {
  componentWillMount() {
    this.fetchData(this.props);
  }

  fetchData = props => {
    props.dispatch(fetchToDoListBegin());
    axios.get("http://localhost:2000").then(res => {
      props.dispatch(fetchToDoListSuccess(res.data.toDoList));
    }).catch((err) => {
      console.error(err);
    }).then(() => {
      console.log("Always execute this!")
    });
  };

  displayLoading = loading => {
    if (loading) {
      return <p>Loading</p>;
    }
  };

  render = () => {
    return (
      <div>
        {this.displayLoading(this.props.loading)}
        <ul>
          {this.props.data.map(i => {
            return <li key={i.id}>{i.value}</li>;
          })}
        </ul>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    loading: state.toDoListReducer.loading,
    data: state.toDoListReducer.toDoList
  };
}

export default connect(mapStateToProps)(App);
