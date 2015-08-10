var MessageBanner = React.createClass({
  propTypes: {
    notice: React.PropTypes.string,
    alert: React.PropTypes.string
  },
  render: function() {
    return (
      <div className={(this.props.notice || this.props.alert) ? '' : 'hidden'}>
        <p className="notice">{this.props.notice}</p>
        <p className="alert">{this.props.alert}</p>
      </div>
    );
  }
});