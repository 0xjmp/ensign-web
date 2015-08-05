var Cards = React.createClass({
  propTypes: {
    cards: React.PropTypes.array.isRequired,
    cardType: React.PropTypes.oneOf(['candidate', 'employer']).isRequired
  },
  getInitialState: function() {
    return {
      stack: gajus.Swing.Stack()
    }
  },
  componentDidMount: function() {
    this.state.stack.on('throwout', this.handleThrowout);
  },
  handleThrowout: function(element) {
    console.log('Card has been thrown out of stack');
  },
  render: function() {
    var type = this.props.cardType;
    var current = this.props.currentCard;
    var stack = this.state.stack;
    return (
      <div>
        <ul className="cards-wrapper">
            {this.props.cards.map(function(card) {
              return (
                <li key={card.id} className="card">
                  <Card card={card} type={type} stack={stack} />
                </li>
              );
            })}
        </ul>
        <InterestButtons />
      </div>
    );
  }
});