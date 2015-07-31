var Cards = React.createClass({
  propTypes: {
    cards: React.PropTypes.array.isRequired,
    cardType: React.PropTypes.oneOf(['candidate', 'employer']).isRequired
  },
  render: function() {
    return (
      <ul>
        {this.props.cards.map(function(card) {
          return <Card card={card} type={this.props.cardType} />;
        })}
      </ul>
    );
  }
});