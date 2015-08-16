var SocialButton = React.createClass({
  propTypes: {
    social_type: React.PropTypes.oneOf(['linkedin', 'twitter']).isRequired,
    url: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <a className="social-icon" href={this.props.url} target="_blank">
        <i className={"fa fa-" + this.props.social_type} />
      </a>
    );
  }
}); 