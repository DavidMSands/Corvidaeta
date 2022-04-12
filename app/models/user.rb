class User < ApplicationRecord
    has_many :projects 
    has_many :analytics, through: :projects
    has_many :durations, through: :projects
    has_secure_password
end
