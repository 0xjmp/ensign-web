var Cards = React.createClass({
  propTypes: {  
    cards: React.PropTypes.array.isRequired,
    model: React.PropTypes.oneOf(['candidates', 'companies']).isRequired
  },
  getInitialState: function() { 
    // Sync w/ Flux
    var state = CardStore.getState();
    state.cards = this.props.cards;
    return state;
  },
  componentWillMount: function() { 
    CardStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {  
    CardStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(CardStore.getState());
  },
  render: function() {
    var cards = this.props.cards;
    var model = this.props.model;
    return (
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
    );
  }
});