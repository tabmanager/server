import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class Users extends React.Component {
  state = {
    users: [],
  };

  render() {
    return (
      <>
        <h2>List of Tabs!</h2>
        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>Username: {u.username} Email: {u.email} id: {u.id}</li>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    axios.get('/users').then(res => {
        console.log(res.data);
      this.setState({ users: res.data.users });
    });
  }
}

export default requiresAuth(Users);