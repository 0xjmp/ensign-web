require 'rails_helper'

RSpec.describe CandidatesController, type: :controller do
	let(:user){create(:user)}

	before :each do 
		sign_in user
	end
  
  context 'while JSON' do 
	  
	  it '#index' do 
	    get :index, format: :json
	    candidates = JSON.parse(response.body)['data']['candidates']
	    expect(candidates.count).to be > 0
	  end

	end

end