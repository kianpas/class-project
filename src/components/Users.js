import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

//클래스기반에서는 state는 무조건 객체여야함
class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }

  //error boundaries
  componentDidUpdate() {
    // try{
    //   someCodeWhichMightFail()
    // } catch (err){
    //   //handle error
    // }
    if (this.props.users.length === 0) {
      throw new Error("no users provided!");
    }
  }

  toggleUsersHandler() {
    //this.state.showUsers = false; //not!!
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    console.log(this.props.users);
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
