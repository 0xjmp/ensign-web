var InterestButtons = React.createClass({
  handleClick: function(result) {
    AppDispatcher.dispatch({
      type: ActionTypes.NEXT_CANDIDATE,
      result: result
    });
  },
  handleYesClick: function() {
    this.handleClick(true);
  },
  handleNoClick: function() {
    this.handleClick(false);
  },
  render: function() {
    return (
      <div className="interest-buttons">
        <button className="no" onClick={this.handleNoClick}>
          <i className="fa fa-times" />
        </button>
        <button className="yes" onClick={this.handleYesClick}>
          <i className="fa fa-check" />
        </button>
      </div>
    );
  }
});