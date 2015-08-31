class AddWorkplacePreferenceToJobs < ActiveRecord::Migration
  def change
    add_column :jobs, :workplace_preference, :string
  end
end
