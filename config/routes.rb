Rails.application.routes.draw do
  
  resources :durations
  resources :analytics
  resources :projects, only: [:create, :show, :destroy]
  resources :users, only: [:create]
  post "/login", to: "sessions#create"

  get '/total_views/:id,:project_id,:start_date,:end_date', to: "analytics#total_views"
  get '/unique_views/:id,:project_id,:start_date,:end_date', to: "analytics#unique_views"
  get '/pages_visted/:id,:project_id,:start_date,:end_date', to: "analytics#pages_visted"
  get '/device/:id,:project_id,:start_date,:end_date', to: "analytics#device"
  get '/countries/:id,:project_id,:start_date,:end_date', to: "analytics#countries"
  get '/referral_site/:id,:project_id,:start_date,:end_date', to: "analytics#referral"
  get '/average_time_on_site/:id,:project_id,:start_date,:end_date', to: "durations#time"

  get "/me", to: "sessions#show"
  get '/my_projects/:id', to: 'projects#my_projects'
  post '/create_analytics/:generated_proj_id', to: 'analytics#create_analytics'
  post '/create_durations/:generated_proj_id', to: 'durations#create_durations'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
