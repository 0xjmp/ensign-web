require 'rails_helper'

RSpec.describe CandidatesController, type: :controller do
  
  it '#index' do 
    get :index, format: :json
    expect(assigns(:candidates).count).to be > 0
  end

end