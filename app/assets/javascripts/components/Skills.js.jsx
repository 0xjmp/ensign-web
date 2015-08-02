var Skills = React.createClass({
  propTypes: {
    skills: React.PropTypes.array.isRequired
  },
  render: function() {
    var skills = this.props.skills;
    return (
      <div className="skills">
        <ul>
          {skills.map(function(skill) {
            var skillStyles = {
              width: (skill.id / skills.length) * 100 + "% !important"
            };
            return (
              <li key={skill.id}>
                <span className="bar zero" style={skillStyles}></span>
                <span className="text">{skill.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});