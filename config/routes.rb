Rails.application.routes.draw do
  devise_for :users
  root to: 'welcome#index'

  resources :candidates, only: [:index] do
    resources :interests, only: [:create], format: :json
  end

  resources :companies, only: [:index] do 
    resources :interests, only: [:create], format: :json
  end
end
