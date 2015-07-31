Rails.application.routes.draw do
  root to: 'home#index'

  scope :api, constraints: {format: :json} do
    resources :candidates, only: [:index]
  end
end
