var Company = React.createClass({
	propTypes: {
		job: React.PropTypes.object
	},
	render: function() {
		var job = this.props.job;
		var company = this.props.job.company;
		var rate = '$' + numeral(job.hourly_rate).format('0,0.') + '/hour\n$' + numeral(job.annual_rate).format('0,0.') + '/year';
		return (
			<div id="candidate">
				<div className="user">
					<div className="profile-image-wrapper">
						<img className="profile-image" src={company.profile_image.small.url} alt={company.name + "'s profile image"} />
					</div>
					<h1>{company.name}</h1>
					<p className="location">
						<i className="fa fa-map-marker" />
						{job.location}
					</p>
					<div className="social-icon-wrapper">
						{company.social_media_profiles.map(function(profile) {
							return <SocialButton {...profile} key={profile.id} />
						})}
					</div>
					<ul className="details">
						<li>
							<img src={"<%= asset_url('icon-money.svg') %>"} alt={company.name + "'s desired Salary"} />
							<p className="two-lines">{rate}</p>
							<p className="small">Competitive</p>
						</li>
						<li>
							<img src={"<%= asset_url('icon-title.svg') %>"} alt={job.title} />
							<p className="two-lines">{job.title}</p>
							{(() => {
								if (job.team_size > 0) {
									return <p className="small">Team of {numeral(job.team_size).format('0,0')}</p>
								}
							})()}
						</li>
						<li>
							<img src={"<%= asset_url('icon-company.svg') %>"} alt={company.name + "'s size"} />
							{(() => {
								if (company.employee_count > 0) {
									return <p className="two-lines">{numeral(company.employee_count).format('0,0') + " Employees"}</p>
								}
							})()}
							<p className="small">{'$' + numeral(company.funding_amount).format('0a') + ' ' + company.funding_round + "-Round"}</p>
						</li>
						<li>
							<img src={"<%= asset_url('icon-location.svg') %>"} alt={company.name + "'s Location Preference"} />
							<p className="two-lines">{job.workplace_preference}</p>
							<p className="small">{job.location_required ? 'Required' : 'Optional'}</p>
						</li>
					</ul>
				</div>
			</div>
		)
	}
});