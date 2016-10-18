import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'
import {Component} from 'react'
import {render} from 'react-dom'
import TaskList from './TaskList';
import {NotificationContainer, NotificationManager} from 'react-notifications';


function getAPIToken () {
	return btoa(localStorage.getItem("apiToken") + ":");
}

(function ($) {
	$.authorizedAjax = function (settings) {
		var originalBeforeSendFunction = settings.beforeSend;
		settings.beforeSend = function (xhr) {
			originalBeforeSendFunction(xhr);
			xhr.setRequestHeader("Authorization", "Basic " + getAPIToken());
		};
		settings.statusCode = {
			401: function () {
				// Redirect user to login - ?
				NotificationManager.error("Please re-login");
			}
		};
		return $.ajax(settings);
	};
})(jQuery);

(function ($) {
	$.authorizedGet = function (url, callback, type) {
		if (type == undefined) {
			type = 'json';
		}
		return $.ajax({
			type: "GET",
			url: url,
			dataType: type,
			beforeSend: function (xhr) {
				xhr.setRequestHeader("Authorization", "Basic " + getAPIToken());
			},
			statusCode: {
				401: function () {
					// Redirect user to login - ?
					NotificationManager.error("Please re-login");
				}
			},
			success: callback
		});
	};
})(jQuery);

(function ($) {
	$.authorizedPost = function (url, callback, type) {
		if (type == undefined) {
			type = 'json';
		}
		return $.ajax({
			type: "POST",
			url: url,
			dataType: type,
			beforeSend: function (xhr) {
				xhr.setRequestHeader("Authorization", "Basic " + getAPIToken());
			},
			statusCode: {
				401: function () {
					// Redirect user to login - ?
					NotificationManager.error("Please re-login");
				}
			},
			success: callback
		});
	};
})(jQuery);


const App = React.createClass({

    render() {
        return (
			<div className="content">
				<NotificationContainer/>

				<div className="row">
					<ul className="pull-left">
						<li><Link to='/home'>Home</Link></li>
						<li><Link to='/tasks'>Tasks</Link></li>
					</ul>
				</div>
				<div className='app-container'>
					<hr/>
					{this.props.children}
				</div>
			</div>
        )
    }
});

render((
    <Router history={hashHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={TaskList}/>
			<Route path="tasks" component={TaskList}/>
        </Route>
    </Router>
), document.getElementById('app'));

