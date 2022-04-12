class CreateDurations < ActiveRecord::Migration[6.1]
  def change
    create_table :durations do |t|
      t.integer :elapsed
      t.integer :project_id

      t.timestamps
    end
  end
end
