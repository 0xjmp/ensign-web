"use strict";

var Ensign = React.createClass({
  getDefaultProps: function() {
    return {
      cardType: 'candidate'
    };
  },
  getInitialState: function() {
    return CandidateStore.getState();
  },
  componentDidMount: function() {
    CandidateStore.addChangeListener(this._onChange);
    
    if (!this.props.candidates) {
	    this.fetchCandidates();
	  } else {
		  this.setState({candidates: this.props.candidates});
	  }
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
    return <Cards cards={this.state.candidates} cardType={this.props.cardType} />;
  }
});