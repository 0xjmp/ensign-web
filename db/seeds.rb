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

@jakepeterson = User.new({
  first_name: 'Jake',
  last_name: 'Peterson',
  hourly_rate: 150,
  yearly_rate: 150000,
  education: 'Stanford',
  years_experience: 6,
  location: 'Los Angeles, CA',
  workplace_preference: 'Remote'
})
@jakepeterson.skills = Skill.all
@jakepeterson.social_media_profiles = []
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
  @jakepeterson.social_media_profiles << SocialMediaProfile.create!(profile)
end
File.open('data/jake.jpg') do |f|
  @jakepeterson.profile_image = f
end
@jakepeterson.save!