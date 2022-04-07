class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :project_name
      t.string :url
      t.text :description
      t.string :generated_proj_id
      t.integer :user_id

      t.timestamps
    end
  end
end
