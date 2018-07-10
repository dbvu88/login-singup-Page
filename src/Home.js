import React, {Component} from 'react';
// import { Link } from 'react-router-dom'
import fire from './Config/fire'
import { auth } from 'firebase';

class Home extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout() {
        fire.auth().signOut()
    }

    render() {
        return (
            <div className="col-md-6">
                <h1> You are home </h1> 
                <button onClick={this.logout}> Logout </button>               
            </div>
        )
    }
}

export default Home