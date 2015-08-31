class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
    	t.string :name
    	t.string :headquarters_location
    	t.float :headquarters_latitude
    	t.float :headquarters_longitude
    	t.string :employee_count
    	t.decimal :funding_amount, default: 0.00, null: false
    	t.string :funding_round
    	t.string :description
    end
  end
end