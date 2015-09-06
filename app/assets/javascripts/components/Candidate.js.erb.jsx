var Candidate = React.createClass({
  propTypes: {
    candidate: React.PropTypes.object
  },
  render: function() {
    var candidate = this.props.candidate;
    var name = candidate.first_name + ' ' + candidate.last_name;
    var rate = '$' + numeral(candidate.hourly_rate).format('0,0') + '/hour\n$' + numeral(candidate.yearly_rate).format('0,0') + '/year';
    return (
      <div id="candidate">
        <div className="user">
          <div className="profile-image-wrapper">
            <img className="profile-image" src={candidate.profile_image.small.url} alt={name + "'s profile image"} />
          </div>
          <h1>{name}</h1>
          <p className="location">
            <i className="fa fa-map-marker" />
            {candidate.location}
          </p>
          <div className="social-icon-wrapper">
            {candidate.social_media_profiles.map(function(profile) {
              return <SocialButton {...profile} key={profile.id} />
            })}
          </div>
          <ul className="details">
            <li>
              <img src={"<%= asset_url('icon-money.svg') %>"} alt={name + "'s Salary Requirements"} />
              <p>{rate}</p>
            </li>
            <li className={candidate.education ? '' : 'hidden'}>
              <img src={"<%= asset_url('icon-education.svg') %>"} alt={name + "'s Education"} />
              <p>{candidate.education}</p>
            </li>
            <div className="grid-spacer"></div>
            <li>
              <img src={"<%= asset_url('icon-sundial.svg') %>"} alt={name + "'s Experience"} />
              <p>{numeral(candidate.years_experience).format('0')} Years</p>
            </li>
            <li className={candidate.workplace_preference ? '' : 'hidden'}>
              <img src={"<%= asset_url('icon-location.svg') %>"} alt={name + "'s Location Preference"} />
              <p className="two-lines">{candidate.workplace_preference}</p>
              <p className="small">{candidate.location_required ? 'Required' : 'Optional'}</p>
            </li>
          </ul>
          <div className="clear" />
          <Skills skills={candidate.skills} />
        </div>
      </div>
    );
  }
});