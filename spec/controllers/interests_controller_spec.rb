require 'rails_helper'

RSpec.describe InterestsController, type: :controller do 
  let(:user){create(:user)}

  before :each do 
    sign_in user
  end

  describe '#create' do

    context 'while candidate' do 
      let(:user) {create(:user)}
      subject {post :create, candidate_id: user.id, result: true, format: :json}

      it 'responds w/ 204' do 
        expect(subject).to have_http_status :created
        expect(user.interests.count).to be > 0
      end

    end

    context 'while user is employed' do 
      let(:company){create(:company)}
      let(:job){create(:job, company: company)}

      before :each do 
        user.employer = company
        user.save!
        user.reload

        post :create, company_id: job.id, result: false, format: :json
      end

      it 'responds w/ 204' do 
        expect(response).to have_http_status :created
      end

      it 'has interests' do 
        expect(company.interests.count).to be > 0
      end

    end
  end

end