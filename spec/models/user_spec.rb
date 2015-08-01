require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user){create(:user)}

  it 'should have an hourly rate' do
    expect(user.hourly_rate).to be
  end

  it 'should have a name' do 
    expect(user.name).to eq user.first_name + user.last_name
  end

  it 'should find candidates' do 
    expect(User.find_candidates.count).to be > 0
  end

end