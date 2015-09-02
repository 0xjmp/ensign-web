require 'rails_helper'

RSpec.describe Job, type: :model do 
	let(:job){create(:job)}

	it { is_expected.to respond_to(:company) }
	it { is_expected.to respond_to(:location) }
	it { is_expected.to respond_to(:location_required) }
	it { is_expected.to respond_to(:hourly_rate) }
	it { is_expected.to respond_to(:annual_rate) }
	it { is_expected.to respond_to(:title) }
	it { is_expected.to respond_to(:team_size) }
	it { is_expected.to respond_to(:description) }
  it { is_expected.to respond_to(:desired_skills) }

end