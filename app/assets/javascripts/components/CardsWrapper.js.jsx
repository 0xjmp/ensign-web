var CardsWrapper = React.createClass({
  getInitialState: function() {
    return CandidateStore.getState();
  },
  render: function() {
    return (
      <div>
        <Cards cards={this.props.candidates} />
        <Actions ref="cardActions" />
      </div>
    );
  }
});