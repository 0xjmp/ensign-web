require 'rails_helper'

RSpec.describe CompaniesController, type: :controller do
  let(:company){create(:company)}
  let(:user){create(:user)}

  before :each do 
    sign_in user
  end

  describe '#index' do 
    subject { get :index }

    context 'while an employee of a company' do 
      before :each do 
        company.employees << user
        company.save!
      end
      
      it 'redirects to candidates page' do 
        expect(subject).to redirect_to candidates_path
      end
    end

    context 'while not an employee' do 
      it 'shows jobs page' do 
        expect(subject).to render_template :index
      end
    end
  end
end