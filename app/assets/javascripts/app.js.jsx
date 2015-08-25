"use strict";

var Ensign = React.createClass({
  propTypes: {  
    candidates: React.PropTypes.array
  },
  getDefaultProps: function() {
    return {
      cardType: 'candidate'
    };
  },
  getInitialState: function() {
    var state = CandidateStore.getState();

    if (this.props.candidates) {
      // Sync w/ Flux
      state.candidates = this.props.candidates;
    }

    return state;
  },
  componentDidMount: function() {
    CandidateStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    CandidateStore.removeChangeListener(this._onChange);
  },
  _fetchCandidates: function() {
    AppDispatcher.dispatch({
      type: CandidateConstants.ActionTypes.GET_CANDIDATES
    });
  },
  _onChange: function() {
    this.setState(CandidateStore.getState());
  },
  render: function() {
    return <Cards cards={this.state.candidates} cardType={this.props.cardType} />;
  }
});