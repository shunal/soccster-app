class CreateJoinTableDrillsTags < ActiveRecord::Migration[6.0]
  def change
    create_join_table :drills, :tags do |t|
      t.index [:drill_id, :tag_id]
      t.index [:tag_id, :drill_id]
    end
  end
end
