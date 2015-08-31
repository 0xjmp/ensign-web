namespace :assets do

  desc 'Re-processes all stored assets'
  task reprocess: :environment do 
    [User, Company].each do |class_name|
      class_name.find_each do |model|
        begin 
          model.profile_image.cache_stored_file!
          model.profile_image.retrieve_from_cache!(model.profile_image.cache_name)
          model.profile_image.recreate_versions!
          model.save!
          puts "Success: #{class_name}: #{model.id} -> #{model.profile_image.url}"
        rescue => error
          puts "Error: #{class_name}: #{model.id} -> #{error.to_s}"
        end
      end
    end
  end

end