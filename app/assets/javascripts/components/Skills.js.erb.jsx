var Skills = React.createClass({
  propTypes: {
    skills: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      <div id="skills" className="skills">
        <ul>
          {this.props.skills.map(function(skill) {
            var skillStyles = {width: (skill.amount * 100) + "%"};
            return (
              <li key={skill.id}>
                <div className="progress-bar">
                  <span style={skillStyles} />
                </div>
                <p>{skill.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});