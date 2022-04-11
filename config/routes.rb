Rails.application.routes.draw do
  
  resources :analytics
  resources :projects, only: [:create]
  resources :users, only: [:create]
  post "/login", to: "sessions#create"

  get '/total_views/:id,:project_id,:start_date,:end_date', to: "analytics#total_views"
  get '/unique_views/:id,:project_id,:start_date,:end_date', to: "analytics#unique_views"
  get '/pages_visted/:id,:project_id,:start_date,:end_date', to: "analytics#pages_visted"
  get '/device/:id,:project_id,:start_date,:end_date', to: "analytics#device"
  get '/countries/:id,:project_id,:start_date,:end_date', to: "analytics#countries"
  get '/referral_site/:id,:project_id,:start_date,:end_date', to: "analytics#referral"

  get "/me", to: "users#show"
  get '/my_projects/:id', to: 'projects#my_projects'
  post '/create_analytics/:generated_proj_id', to: 'analytics#create_analytics'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
