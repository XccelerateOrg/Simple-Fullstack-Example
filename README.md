# Fullstack Example :rocket:

### Where it fits :paperclip:

- Basic fullstack example utilizing cors, express, body-parser and react

### Frontend Code

```
import React from "react";
import axios from "axios";

export default class GetUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    return axios
      .get("http://localhost:3001/api/users")
      .then((users) => {
        console.log(users.data);
        this.setState({
          users: users.data,
        });
      });
  }

  onClick() {
    // button that would grab data
    // axios.post("http://localhost:3001/api/users", {user}).then(() => {
    //")
    //  })
  }

  render() {
    console.log(this.state.users);
    return (
      <div>
        <h1>Get Users</h1>

        {this.state.users.map((user, index) => {
          return (
            <div key={index}>
              Name: {user.name}
              <br /> Email: {user.email}
            </div>
          );
        })}
      </div>
    );
  }
}

```

#### License :memo:

[MIT](https://choosealicense.com/licenses/mit/)
