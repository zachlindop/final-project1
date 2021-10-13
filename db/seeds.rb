
user1 = User.create(username: "Sam123", password: "123" )
user2 = User.create(username: "Mas321", password_digest:"123")

WorkStudyLifeHack.create(life_hack: "Two Minute Rule", description:"If an action will take less than two minutes, it should be done at the moment it’s defined, or else put on a to-do list.")
WorkStudyLifeHack.create(life_hack: "Begin Your Day with the Hardest Task", description: "Everything else that happens will feel easier by comparison. Often a little momentum is all you need.")
WorkStudyLifeHack.create(life_hack: "Set alarms for everything", description: "With an increase in responsibilities, you can't expect yourself to remember everything. In fact, it's a waste of brainpower. Just set reminders and show up when you need to. It's that easy.")

WorkStudyLifeHackReview.create(review:, user_id:, work_study_life_hack_id:)
WorkStudyLifeHackReview.create(review:, user_id:, work_study_life_hack_id:)
WorkStudyLifeHackReview.create(review:, user_id:, work_study_life_hack_id:)

puts "Users Seeded!"

# create_table "financial_life_hack_reviews", force: :cascade do |t|
#     t.string "review"
#     t.integer "user_id"
#     t.integer "financial_life_hack_id"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end

#   create_table "financial_life_hacks", force: :cascade do |t|
#     t.string "life_hack"
#     t.string "description"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end

#   create_table "home_life_hack_reviews", force: :cascade do |t|
#     t.string "review"
#     t.integer "user_id"
#     t.integer "home_life_hack_id"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end

#   create_table "home_life_hacks", force: :cascade do |t|
#     t.string "life_hack"
#     t.string "description"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end

#   create_table "users", force: :cascade do |t|
#     t.string "username"
#     t.string "password_digest"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end

#   create_table "work_study_life_hack_reviews", force: :cascade do |t|
#     t.string "review"
#     t.integer "user_id"
#     t.integer "work_study_life_hack_id"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end

#   create_table "work_study_life_hacks", force: :cascade do |t|
#     t.string "life_hack"
#     t.string "description"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false