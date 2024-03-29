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

ActiveRecord::Schema.define(version: 20150902163940) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string  "name"
    t.string  "headquarters_location"
    t.float   "headquarters_latitude"
    t.float   "headquarters_longitude"
    t.string  "employee_count"
    t.decimal "funding_amount",         default: 0.0, null: false
    t.string  "funding_round"
    t.string  "description"
    t.string  "profile_image"
  end

  create_table "interests", force: :cascade do |t|
    t.boolean "result",            default: false
    t.integer "interestable_id"
    t.string  "interestable_type"
    t.integer "company_id"
    t.integer "user_id"
  end

  add_index "interests", ["interestable_type", "interestable_id"], name: "index_interests_on_interestable_type_and_interestable_id", using: :btree

  create_table "jobs", force: :cascade do |t|
    t.integer "company_id"
    t.string  "location"
    t.boolean "location_required",    default: false, null: false
    t.decimal "hourly_rate"
    t.decimal "annual_rate"
    t.string  "title"
    t.integer "team_size"
    t.string  "description"
    t.string  "workplace_preference"
  end

  create_table "skills_users", force: :cascade do |t|
    t.integer "skill_id"
    t.integer "user_id"
  end

  add_index "skills_users", ["skill_id"], name: "index_skills_users_on_skill_id", using: :btree
  add_index "skills_users", ["user_id"], name: "index_skills_users_on_user_id", using: :btree

  create_table "social_media_profiles", force: :cascade do |t|
    t.string   "social_type",     null: false
    t.string   "url",             null: false
    t.integer  "socialable_id"
    t.string   "socialable_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "social_media_profiles", ["socialable_type", "socialable_id"], name: "social_media_profiles_on_socialable", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id"
    t.integer  "taggable_id"
    t.string   "taggable_type"
    t.integer  "tagger_id"
    t.string   "tagger_type"
    t.string   "context",       limit: 128
    t.datetime "created_at"
  end

  add_index "taggings", ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true, using: :btree
  add_index "taggings", ["taggable_id", "taggable_type", "context"], name: "index_taggings_on_taggable_id_and_taggable_type_and_context", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string  "name"
    t.integer "taggings_count", default: 0
  end

  add_index "tags", ["name"], name: "index_tags_on_name", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.decimal  "hourly_rate",            default: 0.0, null: false
    t.decimal  "yearly_rate",            default: 0.0, null: false
    t.string   "education"
    t.decimal  "years_experience",       default: 0.0, null: false
    t.string   "location"
    t.string   "workplace_preference"
    t.string   "profile_image"
    t.string   "email",                  default: "",  null: false
    t.string   "encrypted_password",     default: "",  null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,   null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "employer_id"
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
