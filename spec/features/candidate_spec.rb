require 'rails_helper'

describe 'Candidates', type: :feature do
  let(:user){create(:user)}

  before :each do
    sign_in user
  end

  it 'should load candidates' do
  end

  it 'should get next candidate' do
  end

  it 'should get the next page of candidates' do
  end
end