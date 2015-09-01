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
      context 'while user employed' do 
        before :each do
          user.employer = create(:company)
          user.save!
          user.reload

          get :index
        end

        it 'shows jobs page' do 
          expect(subject).to render_template :index
        end
      end

      context 'while user is candidate' do 
        subject {get :index}
        
        it 'redirects to companies page' do 
          expect(subject).to redirect_to companies_path
        end
      end
    end

  end

end