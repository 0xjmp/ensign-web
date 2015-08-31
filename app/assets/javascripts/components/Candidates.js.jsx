var Candidates = React.createClass({
  propTypes: {  
    candidates: React.PropTypes.array
  },
  getInitialState: function() {
    var state = CandidateStore.getState();

    if (this.props.candidates) {
      // Sync w/ Flux
      state.candidates = this.props.candidates;
    } else {
      _fetchCandidates();
    }

    return state;
  },
  componentDidMount: function() {
    CandidateStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    CandidateStore.removeChangeListener(this._onChange);
  },
  componentDidMount: function() {
    AppDispatcher.dispatch({
      type: CardConstants.ActionTypes.SETUP_CARDS
    });
  },
  _fetchCandidates: function() {
    AppDispatcher.dispatch({
      type: CandidateConstants.ActionTypes.GET_CANDIDATES
    });
  },
  _getNextCandidate: function(result) {
    AppDispatcher.dispatch({
      actionType: CandidateConstants.NEXT_CANDIDATE,
      result: result
    });
  },
  _onChange: function() {
    this.setState(CandidateStore.getState());
  },
  render: function() {
    var candidates = this.props.candidates;
    return (
      <div id="main-wrapper">
        <ul className="cards-wrapper">
            {candidates.map(function(card) {
              return (
                <li key={card.id} className="card">
                  <Candidate candidate={card} />
                </li>
              );
            })}
        </ul>
        <InterestButtons result={this.getNextCandidate} />
      </div>
    );
  }
});