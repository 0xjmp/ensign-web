var Cards = React.createClass({
  propTypes: {  
    cards: React.PropTypes.array.isRequired,
    model: React.PropTypes.oneOf(['candidates', 'companies']).isRequired
  },
  componentWillMount: function() { 
    if (this.props.cards) {
      this.setState({cards: this.props.cards});
    } else {
      this._fetchCards();
    }

    CardStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {  
    CardStore.removeChangeListener(this._onChange);
  },
  componentDidMount: function() {
    AppDispatcher.dispatch({
      type: CardConstants.ActionTypes.SETUP_CARDS
    });
  },
  _onChange: function() {
    this.setState(CardStore.getState());
  },
  _fetchCards: function() {
    AppDispatcher.dispatch({
      type: CardConstants.ActionTypes.GET_CARDS,
      model: this.props.model
    });
  },
  _getNextCard: function(result) {
    AppDispatcher.dispatch({
      actionType: CardConstants.ActionTypes.NEXT_CARD,
      result: result,
      model: this.props.model
    });
  },
  render: function() {
    var cards = this.props.cards;
    var model = this.props.model;
    return (
      <div>
        <ul className="cards-wrapper">
            {cards.map(function(card) {
              return (
                <li key={card.id} className="card">
                  {(() => {
                    switch (model) {
                      case 'candidates':
                        return <Candidate candidate={card} />;

                      case 'companies':
                        return <Company job={card} />;

                      default:
                        break;
                    }
                  })()}
                </li>
              );
            })}
        </ul>
        <InterestButtons result={this._getNextCard} />
      </div>
    );
  }
});