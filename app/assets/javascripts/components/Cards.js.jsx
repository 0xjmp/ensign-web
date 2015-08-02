var Cards = React.createClass({
  propTypes: {
    cards: React.PropTypes.array.isRequired,
    cardType: React.PropTypes.oneOf(['candidate', 'employer']).isRequired
  },
  render: function() {
    var type = this.props.cardType;
    return (
      <div>
        <ul>
          {this.props.cards.map(function(card) {
              return <Card key={card.id} card={card} type={type} />;
          })}
        </ul>
        <InterestButtons />
      </div>
    );
  }
});