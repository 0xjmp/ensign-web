var Companies = React.createClass({
	propTypes: {
		jobs: React.PropTypes.array.isRequired
	},
	getDefaultProps: function() {
		return {model: 'companies'};
	},
	render: function() {
		return (
      <div className="row">
        <Cards cards={this.props.jobs} model={this.props.model} />
        <InterestButtons model={this.props.model} />
      </div>
    );
	}
});