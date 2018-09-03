import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  storeToDoListData
} from "./redux/actions/todolist.actions";

// import "./App.css";

class App extends Component {

  constructor() {
    super();
    state: {
      loading: false
    }
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true });

    axios.get("http://localhost:2000").then(res => {
      this.props.dispatch(storeToDoListData(res.data.toDoList));
    }).catch((err) => {
      console.error(err);
    }).then(() => {
      this.setState({ loading: false });
      console.log("Always execute this!")
    });
  };

  onAdd = (e) => {
    // this.props.dispatch
  };

  // return object directly
  displayLoading = () => (
    <p>Loading</p>
  );

  // returning a function
  renderData = () => {
    return (
      <ul>
        {this.props.data.map((i) => {
          return <li key={i.id}>{i.value}</li>;
        })}
      </ul>
    )
  }

  render = () => {
    return (
      <div>
        {
          this.state.loading ? this.displayLoading : this.renderData()
        }
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    data: state.toDoListReducer.toDoList
  };
}

export default connect(mapStateToProps)(App);
