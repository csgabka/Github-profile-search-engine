import React from 'react';
import '../css/profile.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showFullProfile: false
		}
		this.toggleProfile = this.toggleProfile.bind(this);
		this.formatTime = this.formatTime.bind(this);
	}

	toggleProfile() {
		!(this.state.showFullProfile)
		? (this.setState({ showFullProfile: true }))
		: (this.setState({ showFullProfile: false }))
	}

	formatTime(input) {
		let fullStringTime = input;
		let date = fullStringTime.split("T");
		return <div>{date[0]}, {date[1].slice(0, -1)}</div>
	}

	render() {
		const { profile } = this.props;
		const { showFullProfile } = this.state;
		return (
			<div>
			<ReactCSSTransitionGroup
              transitionName="fade"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              transitionEnter={false}
              transitionLeave={false}>
				<div className="card text-center">
	  				<div className="card-header">
	    			<div>Login name: {profile.login}</div>
	  			</div>
	  				<div className="card-body">
	  					<img id="profile-img" alt="profile-img" src={profile.avatar_url}/>
	    				<div>Visit {profile.login}'s Github profile <a href={profile.html_url} rel="noopener noreferrer" target="_blank">here</a></div>
	    				<i onClick={this.toggleProfile} className={showFullProfile?'fas fa-angle-up fa-3x':'fas fa-angle-down fa-3x'}></i>
						{ (showFullProfile) ? (
							<ReactCSSTransitionGroup
					              transitionName="fade"
					              transitionAppear={true}
					              transitionAppearTimeout={1000}
					              transitionLeaveTimeout={500}
					              transitionEnterTimeout={500}
					              transitionEnter={false}
					              transitionLeave={false}>
									<div>
					    				<div>Login id: {profile.id}</div>
										<div>User level: {profile.type}</div>
										<div>Full name: {(profile.name===null) ? "unknown" : profile.name}</div>
										<div>Company: {(profile.company===null) ? "unknown" : profile.company}</div>
										<div>Location: {(profile.location===null) ? "unknown" : profile.location}</div>
										<div>E-mail address: {(profile.email===null) ? "unknown" : profile.email}</div>
										<div>Is {profile.login} looking for a job? {(profile.hireable===null) ? "No" : "Yes"}</div>
										<div>Number of public repositories: {profile.public_repos}</div>
										<div>Followers: {profile.followers}</div>
										<div>Following: {profile.following}</div>
										<div>Profile created on: {this.formatTime(profile.created_at)}</div>
									</div>
									</ReactCSSTransitionGroup>
						) : ( null ) }
	  				</div>
	  			<div className="card-footer text-muted">
	    		<div>Profile last updated: {this.formatTime(profile.updated_at)}</div>
	  			</div>
				</div>
				</ReactCSSTransitionGroup>		
			</div>
			)
		}
	}

export default Profile;
