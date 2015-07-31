class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.decimal :hourly_rate, default: '0.00', null: false
      t.decimal :yearly_rate, default: '0', null: false
      t.string :education
      t.decimal :years_experience, default: '0', null: false
      t.string :location
    end
  end
end
