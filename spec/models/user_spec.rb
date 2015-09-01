require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user){create(:user)}

  it { is_expected.to respond_to(:hourly_rate) }
  it { is_expected.to respond_to(:first_name) }
  it { is_expected.to respond_to(:last_name) }
  it { is_expected.to respond_to(:employer) }
  it { is_expected.to respond_to(:social_media_profiles) }
  it { is_expected.to respond_to(:profile_image) }
  it { is_expected.to respond_to(:is_employed?) }
  it { is_expected.to respond_to(:potential_jobs) }
  it { is_expected.to respond_to(:interests) }

  it 'has name' do 
    expect(user.name).to eq user.first_name + user.last_name
  end

end