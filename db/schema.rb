# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_05_213937) do

  create_table "analytics", force: :cascade do |t|
    t.string "referral_site"
    t.string "event_id"
    t.string "event_type"
    t.string "page_path"
    t.string "user_ip"
    t.string "user_city"
    t.string "user_country_code"
    t.string "user_country_name"
    t.string "user_timezone"
    t.string "user_os"
    t.string "user_languages"
    t.boolean "is_mobile"
    t.string "click_text"
    t.string "click_id"
    t.string "click_class"
    t.time "event_time"
    t.integer "project_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "project_name"
    t.string "url"
    t.text "description"
    t.string "generated_proj_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
