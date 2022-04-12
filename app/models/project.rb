class Project < ApplicationRecord
    has_many :analytics, dependent: :destroy
    has_many :durations, dependent: :destroy
    
end
