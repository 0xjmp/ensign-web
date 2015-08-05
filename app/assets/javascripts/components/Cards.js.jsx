var Cards = React.createClass({
  propTypes: {
    cards: React.PropTypes.array.isRequired,
    cardType: React.PropTypes.oneOf(['candidate', 'employer']).isRequired
  },
  getNextCard: function(result) {
    AppDispatcher.dispatch({
      actionType: CandidateConstants.NEXT_CANDIDATE,
      result: result
    });
  },
  render: function() {
    var props = this.props;
    var setupCard = this.setupCard;
    return (
      <div>
        <ul className="cards-wrapper">
            {props.cards.map(function(card) {
              return (
                <li key={card.id} className="card">
                  <Card card={card} type={props.cardType} />
                </li>
              );
            })}
        </ul>
        <InterestButtons result={this.getNextCard} />
      </div>
    );
  }
});