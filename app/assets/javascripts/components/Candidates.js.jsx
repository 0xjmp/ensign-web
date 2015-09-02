var Candidates = React.createClass({
  propTypes: {
    candidates: React.PropTypes.array.isRequired
  },
  getDefaultProps: function() {
    return {model: 'candidates'};
  },
  render: function() {
    return (
      <div className="row">
        <Cards cards={this.props.candidates} model={this.props.model} />
        <InterestButtons model={this.props.model} />
      </div>
    );
  }
})