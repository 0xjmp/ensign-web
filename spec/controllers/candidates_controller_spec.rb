require 'rails_helper'

RSpec.describe CandidatesController, type: :controller do
	let(:user){create(:user)}

	before :each do 
		sign_in user
	end
  
  context 'while JSON' do 

  	before :each do
	  	create(:job)
  	end
	  
	  describe '#index' do 
  		subject { get :index }

  		it 'shows jobs page' do 
  			expect(subject).to render_template :index
	    end
	  end

	end

end