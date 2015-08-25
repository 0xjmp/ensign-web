var InterestButtons = React.createClass({
  _handleClick: function(result) {
    AppDispatcher.dispatch({
      type: CandidateConstants.ActionTypes.NEXT_CANDIDATE,
      result: result
    });
  },
  _handleYesClick: function() {
    this._handleClick(true);
  },
  _handleNoClick: function() {
    this._handleClick(false);
  },
  render: function() {
    return (
      <div className="interest-buttons">
        <button className="no" onClick={this._handleNoClick}>
          <i className="fa fa-times" />
        </button>
        <button className="yes" onClick={this._handleYesClick}>
          <i className="fa fa-check" />
        </button>
      </div>
    );
  }
});