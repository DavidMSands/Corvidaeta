class AnalyticSerializer < ActiveModel::Serializer
  attributes :id, :referral_site, :event_id, :event_type, :page_path, :user_ip, :user_city, :user_country_code, :user_country_name, :user_timezone, :user_languages, :is_mobile, :click_text, :click_id, :click_class, :event_time, :project_id
end
