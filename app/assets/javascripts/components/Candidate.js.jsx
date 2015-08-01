var Candidate = React.createClass({
  propTypes: {
    candidate: React.PropTypes.object
  },
  render: function() {
    var candidate = this.props.candidate;
    var name = candidate.first_name + ' ' + candidate.last_name;
    var rate = '$' + candidate.hourly_rate + '/hour, $' + candidate.yearly_rate + '/year';
    var profiles = candidate.profiles || [];
    var skills = candidate.skills || [];
    return (
      <div className="card">
        <div className="row">
          <div className="profile-picture">
            <img src={candidate.image_url} alt={name + "'s profile image"} />
          </div>
          <div className="skills">
            <Skills skills={skills} />
          </div>
        </div>
        <div className="user-details">
          <h1>{name}</h1>
          <div className="row">
            <i className="fa fa-2x fa-map-marker social-icon" />
            <p className="location">{candidate.location}</p>
          </div>
          <div className="row">
            <div className="social-btns-wrapper">
              {profiles.map(function(profile) {
                  <SocialButton {...profile} />
              })}
            </div>
          </div>
          <ul>
            <li>{rate}</li>
            <li>{candidate.education}</li>
            <li>{candidate.years_experience} years professional experience</li>
            <li>Prefers to work {candidate.workplace_preference}</li>
          </ul>
        </div>
      </div>
    );
  }
});