require 'rails_helper'

RSpec.describe WelcomeController, type: :controller do 
	let(:user) {create(:user)}
	let(:company) {create(:company)}

	describe '#index' do 
		subject { get :index }

		context 'while logged in' do 
			before :each do 
				sign_in user
			end

			context 'as employee' do 
				before :each do 
					company.employees << user
					company.save!
				end

				it 'redirects to company page' do 
					expect(subject).to redirect_to companies_path
				end
			end

			context 'as candidate' do 
				it 'redirects to candidates page' do 
					expect(subject).to redirect_to candidates_path
				end
			end
		end

		context 'while not logged in' do 
			it 'renders home page' do 
				expect(subject).to render_template(:index)
			end
		end
	end
end