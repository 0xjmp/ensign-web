var Candidates = React.createClass({
  propTypes: {
    candidates: React.PropTypes.array.isRequired
  },
  getDefaultProps: function() {
    return {model: 'candidates'};
  },
  render: function() {
    return <Cards cards={this.props.candidates} model={this.props.model} />;
  }
})