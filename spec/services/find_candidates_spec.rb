require 'rails_helper'

RSpec.describe FindCandidates do 
	let(:page){1}
  let(:company){create(:company)}

	before :each do 
		create(:user)
	end

	it 'finds candidates' do 
		@result = FindCandidates.call({page: page, company_id: company.id})
		expect(@result.display[:candidates].count).to be > 0
	end

end