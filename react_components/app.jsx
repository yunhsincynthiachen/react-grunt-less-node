'use strict';

var React = require('react');

var App = React.createClass({
	render: function () {
		return (
			<h1>This is my website</h1>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('root'));

