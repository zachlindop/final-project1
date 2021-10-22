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

ActiveRecord::Schema.define(version: 2021_10_22_035710) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "financial_life_hack_reviews", force: :cascade do |t|
  end

  create_table "financial_life_hacks", force: :cascade do |t|
  end

  create_table "home_life_hack_reviews", force: :cascade do |t|
  end

  create_table "home_life_hacks", force: :cascade do |t|
  end

  create_table "life_hack_user_hates", force: :cascade do |t|
    t.bigint "life_hack_id", null: false
    t.bigint "user_id", null: false
    t.integer "count", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["life_hack_id"], name: "index_life_hack_user_hates_on_life_hack_id"
    t.index ["user_id"], name: "index_life_hack_user_hates_on_user_id"
  end

  create_table "life_hack_user_loves", force: :cascade do |t|
    t.bigint "life_hack_id", null: false
    t.bigint "user_id", null: false
    t.integer "count", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["life_hack_id"], name: "index_life_hack_user_loves_on_life_hack_id"
    t.index ["user_id"], name: "index_life_hack_user_loves_on_user_id"
  end

  create_table "life_hacks", force: :cascade do |t|
    t.string "title"
    t.string "life_hack_type"
    t.string "image"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string "review"
    t.integer "user_id"
    t.integer "life_hack_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "image"
    t.string "password_digest"
    t.string "about"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "work_study_life_hack_reviews", force: :cascade do |t|
  end

  create_table "work_study_life_hacks", force: :cascade do |t|
  end

  add_foreign_key "life_hack_user_hates", "life_hacks"
  add_foreign_key "life_hack_user_hates", "users"
  add_foreign_key "life_hack_user_loves", "life_hacks"
  add_foreign_key "life_hack_user_loves", "users"
end
