Rails.application.routes.draw do
  resources :drills
  resources :tags
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users

  resources :users do 
    resources :drills
  end 

  resources :tags do 
    resources :drills
  end 

  resources :drills do 
    resources :tags
  end 
  
end
