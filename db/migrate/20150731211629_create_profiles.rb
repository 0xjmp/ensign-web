class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :type, null: false
      t.string :url, null: false
    end
  end
end
