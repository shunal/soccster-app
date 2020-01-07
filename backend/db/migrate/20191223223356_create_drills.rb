class CreateDrills < ActiveRecord::Migration[6.0]
  def change
    create_table :drills do |t|
      t.belongs_to :user
      t.string :title
      t.string :description
      t.string :category
      t.string :drawing
      t.timestamps
    end
  end
end
