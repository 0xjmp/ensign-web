"use strict";

var Ensign = React.createClass({
  getInitialState: function() {
    return CandidateStore.getState();
  },
  componentDidMount: function() {
    CandidateStore.addChangeListener(this._onChange);
    this.fetchCandidates();
  },
  componentWillUnmount: function() {
    CandidateStore.removeChangeListener(this._onChange);
  },
  fetchCandidates: function() {
    AppDispatcher.dispatch({
      type: CandidateConstants.ActionTypes.GET_CANDIDATES
    });
  },
  _onChange: function() {
    this.setState(CandidateStore.getState());
  },
  render: function() {
    return <Cards cards={this.state.candidates} cardType="candidate" />;
  }
});

window.onload = function() {
  React.render(
    <Ensign />,
    document.getElementById('ensign')
  );
}