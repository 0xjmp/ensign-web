# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

skill_file = File.open("data/skills.json")
skills_json = JSON.parse(skill_file.read)
skill_file.close
skills_json.each do |skill|
  Skill.create!(skill)
  puts "Created skill: #{skill["title"]}"
end

user_file = File.open("data/users.json")
users_json = JSON.parse(user_file.read)
user_file.close
users_json.each do |user|
  user = User.new(user)
  user.skills = Skill.all
  user.social_media_profiles = []
  profiles_json = [
    {
      "social_type": "linkedin",
      "url": "https://linkedin.com/in/jakepeterso"
    },
    {
      "social_type": "twitter",
      "url": "https://twitter.com/_jakepeterson"
    }
  ]
  profiles_json.each do |profile|
    user.social_media_profiles << SocialMediaProfile.create!(profile)
  end
  File.open('data/jake.jpg') do |f|
    user.profile_image = f
  end
  user.save!
end