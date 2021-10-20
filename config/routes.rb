Rails.application.routes.draw do
  
  resources :reviews
  resources :life_hacks
  resources :financial_life_hack_reviews
  resources :financial_life_hacks
  resources :home_life_hack_reviews
  resources :home_life_hacks
  resources :work_study_life_hack_reviews
  resources :work_study_life_hacks
  resources :users, only: [:index, :show, :destroy, :update]
    post "/signup", to: "users#create"

    post "/login", to: "sessions#create"

    delete "/logout", to: "sessions#destroy"
    
  resources :snacks
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
