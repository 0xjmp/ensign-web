class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
    	t.belongs_to :company
    	t.string :location
    	t.boolean :location_required, default: false, null: false
    	t.decimal :hourly_rate
    	t.decimal :annual_rate
    	t.string :title
    	t.integer :team_size
    	t.string :description
    end
  end
end
