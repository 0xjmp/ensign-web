// This "class" is actually a factory
var Card = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(['candidate', 'employer']),
    card: React.PropTypes.object
  },
  render: function() {
    switch (this.props.type) {
      case 'candidate':
        return <Candidate candidate={this.props.card} />;

      case 'employer':
        return <Employer employer={this.props.card} />;

      default:
        break;
    }
  }
});