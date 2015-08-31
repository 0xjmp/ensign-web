Rails.application.routes.draw do
  devise_for :users
  root to: 'welcome#index'

  resources :candidates, only: [:index]
  resources :companies, only: [:index]
end
