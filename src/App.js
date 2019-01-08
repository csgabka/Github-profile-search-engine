import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import SearchBox from './components/SearchBox';
import SearchButton from './components/SearchButton';
import Profile from './components/Profile';
import NoProfile from './components/NoProfile';
import Footer from './components/Footer';

class App extends Component {

      constructor() {
        super();
        this.state = {
          username: '',
          profile: [],
          hasError: false
        }
      this.getUserName = this.getUserName.bind(this);
      this.searchProfile = this.searchProfile.bind(this);
      }

  searchProfile = () => {
    let username = this.state.username;
    fetch('https://api.github.com/users/' + username)
    .then(response => {
      if (response.status === 404) {
        this.setState({hasError: true})}
        else {
          return response.json()
        .then(data => this.setState({profile: data, hasError: false}))
      }
    })
  }

  pressEnter(event) {
    if (event.keyCode === 13) {
        console.log("enter");
    }
  }

  getUserName(event) {
    if ((event.keyCode) === 13) {
      this.searchProfile()
    }
    else {
      this.setState({username: event.target.value})
    }
  }

  render() {
    const { hasError, profile } = this.state;
    
      return (<ReactCSSTransitionGroup
              transitionName="fade"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              transitionEnter={false}
              transitionLeave={false}>

                    <div className="App">
                      <h1>Github User Search Engine</h1>
                      <Nav />
                      <SearchBox username={this.state} getUserName={this.getUserName}/>
                      <SearchButton searchProfile={this.searchProfile}/>
                      
                      {(!(hasError) && (profile.length === 0))
                        ?  <Welcome />
                        : (hasError)
                    
                          ? <NoProfile />
                          : <Profile profile={this.state.profile} />}
                      <Footer/>
                    </div>

        </ReactCSSTransitionGroup>
      );    
  }
}

export default App;
