var Skills = React.createClass({
  propTypes: {
    skills: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      <div class="skills">
        <ul>
          {this.props.skills.map(function(skill) {
            <li><span class="bar zero"></span><span class="text">{skill}</span></li>
          })}
        </ul>
      </div>
    );
  }
});