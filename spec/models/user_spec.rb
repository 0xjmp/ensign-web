require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user){create(:user)}

  it { is_expected.to respond_to(:hourly_rate) }
  it { is_expected.to respond_to(:first_name) }
  it { is_expected.to respond_to(:last_name) }
  it { is_expected.to respond_to(:employers) }
  it { is_expected.to respond_to(:social_media_profiles) }

  it 'has name' do 
    expect(user.name).to eq user.first_name + user.last_name
  end

  it 'finds candidates' do 
    create(:user)
    expect(User.find_candidates.count).to be > 0
  end

end