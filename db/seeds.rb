# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'faker'

skill_file = File.open("data/skills.json")
skills_json = JSON.parse(skill_file.read)
skill_file.close
skills_json.each do |skill|
  Skill.create!(skill)
  puts "Created skill: #{skill["title"]}"
end

num_iters = 66

(1..num_iters).each do |i|
  user = User.create!({
    email: Faker::Internet.email,
    password: Faker::Internet.password,
    skills: Skill.all,
    social_media_profiles: [
      SocialMediaProfile.new({
        "social_type": "linkedin",
        "url": Faker::Internet.url('linkedin.com')
      }),
      SocialMediaProfile.new({
        "social_type": "twitter",
        "url": Faker::Internet.url('twitter.com')
      })
    ],
    remote_profile_image_url: Faker::Avatar.image,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    hourly_rate: Faker::Number.decimal(2),
    yearly_rate: Faker::Number.number(6),
    education: Faker::Company.name + ' University', # Faker::University.name
    years_experience: Faker::Number.between(1, 10),
    location: "#{Faker::Address.city}, #{Faker::Address.country}",
    workplace_preference: ['Remote', 'On Site'].sample
  })
  puts "Created user: #{user.first_name}"
end