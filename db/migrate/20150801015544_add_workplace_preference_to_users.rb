class AddWorkplacePreferenceToUsers < ActiveRecord::Migration
  def change
    add_column :users, :workplace_preference, :string
  end
end
