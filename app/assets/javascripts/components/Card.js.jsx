// This "class" works more like a factory method
var Card = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(['candidate', 'employer']),
    card: React.PropTypes.object
  },
  componentDidMount: function() {
    this.props.stack.createCard(React.findDOMNode(this.refs.card));
  },
  componenetWillUnmount: function() {
    this.destroyCard();
  },
  destroyCard: function() {
    var card = this.props.stack.getCard(this.refs.card);
    card.destroy();
  },
  render: function() {
    switch (this.props.type) {
      case 'candidate':
        return <Candidate candidate={this.props.card} ref="card" />;

      case 'employer':
        return <Employer employer={this.props.card} ref="card" />;

      default:
        break;
    }
  }
});