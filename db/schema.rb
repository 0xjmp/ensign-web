# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150802215910) do

  create_table "skills", force: :cascade do |t|
    t.string "title"
    t.string "color"
  end

  create_table "skills_users", force: :cascade do |t|
    t.integer "skill_id"
    t.integer "user_id"
  end

  add_index "skills_users", ["skill_id"], name: "index_skills_users_on_skill_id"
  add_index "skills_users", ["user_id"], name: "index_skills_users_on_user_id"

  create_table "social_media_profiles", force: :cascade do |t|
    t.string  "social_type", null: false
    t.string  "url",         null: false
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string  "first_name"
    t.string  "last_name"
    t.decimal "hourly_rate",          default: 0.0, null: false
    t.decimal "yearly_rate",          default: 0.0, null: false
    t.string  "education"
    t.decimal "years_experience",     default: 0.0, null: false
    t.string  "location"
    t.string  "workplace_preference"
    t.string  "profile_image"
  end

end
