Rails.application.routes.draw do
  devise_for :users
  root to: 'candidates#index'

  scope :api, constraints: {format: :json} do
    resources :candidates, only: [:index]
    scope :candidates do
      post 'results', to: 'candidates#store_results'
    end
  end
end
