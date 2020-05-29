import React , {Component} from 'react';
import App from './App';
class Login extends React.Component{
    constructor(){
     super();
    }
    render(){
        return(
            <div>
                <form method="post" action="<App/>">
                <label>Email Id</label>
                <input type="text" placeholder="Enter User Id" name="email"></input>
                <br></br>
                <label>Password</label>
                <input type="password" placeholder="Enter Password" name="password"></input>
                <br></br>
                <button type="submit">Login</button>
                </form>
            </div>

        );
    }
}

export default Login;