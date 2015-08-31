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
      <div className="preference-buttons">
        <button className="no" onClick={this._handleNoClick}>
          <img src={"<%= asset_url('x.svg') %>"} />
        </button>
        <button className="yes" onClick={this._handleYesClick}>
          <img src={"<%= asset_url('check.svg') %>"} />
        </button>
      </div>
    );
  }
});