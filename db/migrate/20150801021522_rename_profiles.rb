class RenameProfiles < ActiveRecord::Migration
  def change
    rename_table :profiles, :social_media_profiles
  end
end
