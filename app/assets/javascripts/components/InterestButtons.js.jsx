var InterestButtons = React.createClass({
  getInitialState: function() {
    return {
      result: null
    };
  },
  handleNoClick: function() {
    this.setState({result: false});
    this.handleClick();
  },
  handleYesClick: function() {
    this.setState({result: true});
    this.handleClick();
  },
  handleClick: function() {
    AppDispatcher.dispatch({
      type: ActionTypes.NEXT_CANDIDATE,
      result: this.state.result
    });
    this.setState(this.getInitialState());
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