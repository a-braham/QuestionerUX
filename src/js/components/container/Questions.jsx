import React, { Component } from 'react';
import ReactDOM from "react-dom";
class Home extends Component {
    constructor() {
        super();
        this.state = {
            meetups: []
        };
    }

    componentDidMount() {
        const url = "https://questioner-v3.herokuapp.com/api/meetups/"
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data => {
                this.setState({
                    meetups: data.results
                })
            }
            ))
    }  
    render() {
        const { meetups } = this.state;
        const loaded = meetups.length ? (
            meetups.map(meetup => {
                return (
                    <div className="container" key={meetup.id}>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">{meetup.title}</h4>
                                <p className="card-text">{meetup.body}</p>
                                <a href="#" className="btn btn-success">Read more..</a>
                            </div>  
                        </div>
                    </div>
                )
            })
        ) : (
                <div>No meetups</div>
            )
        return (
            <div>
                <h3>Upcoming Meetups</h3>
                {loaded}
            </div>
        );
    }
}
export default Home;