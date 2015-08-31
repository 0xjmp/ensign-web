class AddProfileImageToCompanies < ActiveRecord::Migration
  def change
  	add_column :companies, :profile_image, :string
  end
end
