class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :project_name, :url, :description, :generated_proj_id, :user_id
end
