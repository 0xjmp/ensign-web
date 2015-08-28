require 'rails_helper'

RSpec.describe FindCandidates do 
	let(:page){1}

	before :each do 
		create(:user)
	end

	it 'finds candidates' do 
		@result = FindCandidates.call({page: page})
		expect(@result.display[:candidates].count).to be > 0
	end

end