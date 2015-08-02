class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string :title
      t.string :color
    end

    create_table :skills_users do |t|
      t.belongs_to :skill, index: true
      t.belongs_to :user, index: true
    end
  end
end
