class AddAmountToSkills < ActiveRecord::Migration
  def change
  	add_column :skills, :amount, :float, default: 0
  end
end
