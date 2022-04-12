class DurationSerializer < ActiveModel::Serializer
  attributes :id, :elapsed, :project_id
end
