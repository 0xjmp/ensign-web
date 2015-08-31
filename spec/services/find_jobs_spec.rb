require 'rails_helper'

RSpec.describe FindJobs do 
  let(:page){1}
  let(:user){create(:user)}

  before :each do 
    company = build(:company)
    job = create(:job)
    company.jobs << job
    company.save!
  end

  it 'finds employers' do 
    @result = FindJobs.call({page: page, user_id: user.id})
    expect(@result.display[:jobs].count).to be > 0
  end

end