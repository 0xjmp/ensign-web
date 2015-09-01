class AddModelsToInterests < ActiveRecord::Migration
  def change
    change_table :interests do |t|
      t.belongs_to :company
      t.belongs_to :user
    end
  end
end
