import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const NoProfile = () => {
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
	    			<h1>Oooooops!</h1>
	  				</div>
	  				<div className="card-body">
	  					<i className="far fa-user fa-10x"></i>
	    				<p>Could't find this user...</p>
	  				</div>
				</div>

			</ReactCSSTransitionGroup>
		</div>
		)
}

export default NoProfile;
