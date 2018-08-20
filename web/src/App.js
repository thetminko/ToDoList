import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchToDoListBegin, fetchToDoListSuccess } from './redux/actions/todolist.actions';

import './App.css';

class App extends Component {
  componentWillMount() {
    this.fetchData(this.props);
  }

  fetchData = (props) => {
    props.dispatch(fetchToDoListBegin());
    setTimeout(function () {
      let mockData = [
        { id: 1, value: "To Do 1", read: true },
        { id: 2, value: "To Do 2", read: false },
        { id: 3, value: "To Do 3", read: false }
      ];
      props.dispatch(fetchToDoListSuccess(mockData));
    }, 1000);
  }

  displayLoading = (loading) => {
    if (loading) {
      return (
        <p>Loading</p>
      );
    }
  }

  render = () => {
    return (
      <div>
        {this.displayLoading(this.props.loading)}
        <ul>
          {
            this.props.data.map((i) => {
              return <li key={i.id}>{i.value}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.toDoListReducer.loading,
    data: state.toDoListReducer.toDoList
  }
}

export default connect(mapStateToProps)(App);
