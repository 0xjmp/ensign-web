class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :social_type, null: false
      t.string :url, null: false
      t.belongs_to :user
    end
  end
end
