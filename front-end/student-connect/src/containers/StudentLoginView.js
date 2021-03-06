import React, { Component } from 'react';
import axios from 'axios'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    }

  }
  componentDidMount(){
    this._fetchPeople()
  }
_fetchPeople = () =>{
  axios.get('http://localhost:8080/classmates')
  .then(res=>{
    console.log(res);
  })
}


_validateForm = (evt) => {
  return this.state.userName.length > 0 && this.state.password.length > 0;

}

_handleUsernameChange = (evt) => {
  this.setState({userName: evt.target.value})
}

_handlePasswordChange = (evt) => {
  this.setState({password: evt.target.value})
}

_onSubmit = (evt) => {
  evt.preventDefault()
  // console.log(this.state);
// _fetchPeople.then((res) => {
//   if (userName === password){
//   }else
//   // this.setState({username: res.data.results, password:res.data.results})
//  console.log(res);
// })

}


  render()  {
    return(
      <div className="form">
            <div className="jumbotron" id="login">
              <h1 className="display-3">Welcome Students!</h1>
              <p class="lead">Log In Below!</p>
              <hr class="my-4"/>
              <form onSubmit={this._onSubmit}>
                <div className="form-group">
                  <input type="form-control"  onChange={this._handleUsernameChange} id="username" value={this.state.value} placeholder="Username" type="username" class=".form-control" required autoComplete="off"/>
              </div>

              <div className="form-group">
                  <input onChange={this._handlePasswordChange} id="password" value={this.state.value} placeholder="password" type="password" class=".form-control" required autoComplete="off"/>
              </div>

              <p className="register"><a href='/Registration'>Register</a></p>
              <p className="teacher"><a href="/Admin">Teachers</a></p>
              <button type='submit' className="btn btn-success">Log In</button>

              </form>

            </div>

          </div>
    )
  }

}
