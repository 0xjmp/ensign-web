class DropCompaniesUsers < ActiveRecord::Migration
  def change
    drop_table :companies_users
    change_table :users do |t|
      t.belongs_to :employer, class_name: 'Company'
    end

    add_index :interests, [:user_id, :interestable]
  end
end
