class CreateInterests < ActiveRecord::Migration
  def change
    create_table :interests do |t|
      t.boolean :result, default: false
      t.references :interestable, polymorphic: true, index: true
    end
  end
end
