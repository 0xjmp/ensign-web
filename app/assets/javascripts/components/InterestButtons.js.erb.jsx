var InterestButtons = React.createClass({
  propTypes: {
    model: React.PropTypes.oneOf(['candidates', 'companies']).isRequired
  },
  _handleClick: function(result) {
    AppDispatcher.dispatch({
      type: CardConstants.ActionTypes.NEXT_CARD,
      model: this.props.model,
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