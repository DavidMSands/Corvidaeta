Rails.application.routes.draw do
  
  resources :analytics
  resources :projects, only: [:create]
  resources :users
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  get '/my_projects/:id', to: 'projects#my_projects'
  post '/create_analytics/:generated_proj_id', to: 'analytics#create_analytics'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
