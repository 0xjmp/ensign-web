Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api, constraints: {format: :json} do
    resources :candidates, only: [:index]
  end
end
