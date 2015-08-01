var Skills = React.createClass({
  propTypes: {
    skills: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      <div className="skills">
        <ul>
          {this.props.skills.map(function(skill) {
            <li><span className="bar zero"></span><span className="text">{skill}</span></li>
          })}
        </ul>
      </div>
    );
  }
});