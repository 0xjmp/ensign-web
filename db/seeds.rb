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

(1..75).each do |i|

  user = User.create!({
    email: Faker::Internet.email,
    password: Faker::Internet.password,
    skills: Skill.all,
    remote_profile_image_url: Faker::Avatar.image,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    hourly_rate: Faker::Number.decimal(2),
    yearly_rate: Faker::Number.number(6),
    education: Faker::Company.name, # Faker::University.name
    years_experience: Faker::Number.between(1, 10),
    location: "#{Faker::Address.city}, #{Faker::Address.country}",
    workplace_preference: ['Remote', 'On Site'].sample,
  })
  puts "Created user: #{user.first_name}"

  # Create user social media profiles
  SocialMediaProfile.create!({
    "social_type": "linkedin",
    "url": Faker::Internet.url('linkedin.com'),
    socialable: user
  })
  SocialMediaProfile.create!({
    "social_type": "twitter",
    "url": Faker::Internet.url('twitter.com'),
    socialable: user
  })

  company = Company.create!({
    name: "#{Faker::Company.name}, #{Faker::Company.suffix}",
    headquarters_location: "#{Faker::Address.city}, #{Faker::Address.country}",
    headquarters_latitude: Faker::Address.latitude,
    headquarters_longitude: Faker::Address.longitude,
    employee_count: Faker::Number.between(1, 10000),
    funding_amount: Faker::Number.between(25000, 1000000000),
    remote_profile_image_url: Faker::Avatar.image,
    funding_round: 'B'
  })

  # Create company social media profiles
  SocialMediaProfile.create!({
    "social_type": "linkedin",
    "url": Faker::Internet.url('linkedin.com'),
    socialable: company
  })
  SocialMediaProfile.create!({
    "social_type": "twitter",
    "url": Faker::Internet.url('twitter.com'),
    socialable: company
  })

  puts "Created Company: #{company.name}"

  (0..5).each do |i|
    job = Job.create!({
      company: company,
      location: "#{Faker::Address.city}, #{Faker::Address.country}",
      location_required: true,
      hourly_rate: Faker::Number.decimal(2),
      annual_rate: Faker::Number.decimal(6),
      title: Faker::Name.title,
      team_size: Faker::Number.between(1, 1000),
      description: Faker::Lorem.paragraph,
      workplace_preference: ['Remote', 'On Site'].sample
    })
    puts "Created Job: #{job.title}"
  end
end