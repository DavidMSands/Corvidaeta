class CreateAnalytics < ActiveRecord::Migration[6.1]
  def change
    create_table :analytics do |t|
      t.string :referral_site
      t.string :event_id
      t.string :event_type
      t.string :page_path
      t.string :user_ip
      t.string :user_city
      t.string :user_country_code
      t.string :user_country_name
      t.string :user_timezone
      t.string :user_os
      t.string :user_languages
      t.boolean :is_mobile
      t.string :click_text
      t.string :click_id
      t.string :click_class
      t.time :event_time
      t.integer :project_id

      t.timestamps
    end
  end
end
