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
      end

    end

    context 'while company' do 
      let(:company){create(:company)}
      subject {post :create, company_id: company.id, result: false, format: :json}

      it 'responds w/ 204' do 
        expect(subject).to have_http_status :created
      end

    end
  end

end