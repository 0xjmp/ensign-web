var Companies = React.createClass({
	propTypes: {
		jobs: React.PropTypes.array.isRequired
	},
	getDefaultProps: function() {
		return {model: 'companies'};
	},
	render: function() {
		return <Cards cards={this.props.jobs} model={this.props.model} />;
	}
});