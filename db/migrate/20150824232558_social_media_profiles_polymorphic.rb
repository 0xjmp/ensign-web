class SocialMediaProfilesPolymorphic < ActiveRecord::Migration
  def change
  	remove_column :social_media_profiles, :user_id

  	change_table :social_media_profiles do |t|
  		t.references :socialable, polymorphic: true
  		t.timestamps
  	end

  	add_index :social_media_profiles, [:socialable_type, :socialable_id], name: 'social_media_profiles_on_socialable'
  end
end
