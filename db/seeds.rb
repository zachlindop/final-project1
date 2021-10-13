WorkStudyLifeHackReview.destroy_all
HomeLifeHackReview.destroy_all
FinancialLifeHackReview.destroy_all
WorkStudyLifeHack.destroy_all
HomeLifeHack.destroy_all
FinancialLifeHack.destroy_all
User.destroy_all

link = User.create(username: "Link", password_digest: "test123")
zelda = User.create(username: "Zelda", password_digest:"test123")
hylia = User.create(username: "Hylia", password_digest: "test123")

wslh1 = WorkStudyLifeHack.create(life_hack: "Two Minute Rule", description:"If an action will take less than two minutes, it should be done at the moment it’s defined, or else put on a to-do list.")
wslh2 = WorkStudyLifeHack.create(life_hack: "Begin Your Day with the Hardest Task", description: "Everything else that happens will feel easier by comparison. Often a little momentum is all you need.")
wslh3 = WorkStudyLifeHack.create(life_hack: "Set alarms for everything", description: "With an increase in responsibilities, you can't expect yourself to remember everything. In fact, it's a waste of brainpower. Just set reminders and show up when you need to. It's that easy.")

WorkStudyLifeHackReview.create(review:"Keeps me productive, and helps to avoid procrastination!", user_id: link.id, work_study_life_hack_id: wslh1.id)
WorkStudyLifeHackReview.create(review: "Effective, but super stressful if you're not a morning person", user_id: zelda.id, work_study_life_hack_id: wslh2.id)
WorkStudyLifeHackReview.create(review: "Very clever, but I'm sick of hearing my phone go off all day!", user_id: hylia.id, work_study_life_hack_id: wslh3.id)

flh1 = FinancialLifeHack.create(life_hack:"Get More Ink Out of Your Printer", description:"If your printer is out of black ink or toner, change the text color to dark blue.")
flh2 = FinancialLifeHack.create(life_hack: "Grow Food, Not Lawns", description: "The movement to replace costly, high-maintenance lawns with veggie-producing garden space is growing in popularity.")
flh3 = FinancialLifeHack.create(life_hack: "Sync Your Sleep Schedule With Daylight", description: "Adjusting your sleep schedule to better coincide with daylight hours will allow you to save on daily electrical usage. Plus, you’ll wake up feeling refreshed and rejuvenated.")

FinancialLifeHackReview.create(review: "My boss loves this idea, he gave me a promotion!", user_id: link.id, financial_life_hack_id: flh1.id)
FinancialLifeHackReview.create(review: "Lots of work, but worth the effort!", user_id: zelda.id, financial_life_hack_id: flh2.id)
FinancialLifeHackReview.create(review: "I never realized how much money I could save!", user_id: hylia.id, financial_life_hack_id: flh3.id)

hlh1 = HomeLifeHack.create(life_hack: "Microwave Garlic", description: "After 20 seconds, cloves will peel out easily!")
hlh2 = HomeLifeHack.create(life_hack: "Clean shower head with Vinegar", description: "Fill a plastic bag with white vinegar and secure it to the shower head with a rubber band. Allow it to soak in the vinegar overnight, and remove the bag. It will be as good as new!")
hlh3 = HomeLifeHack.create(life_hack: "Amplify your phone's speakers", description: "Put your phone into a drinking glass or a bowl to boost the volume of its speakers.")

HomeLifeHackReview.create(review: "Makes cooking so much easier.", user_id: link.id, home_life_hack_id: hlh1.id)
HomeLifeHackReview.create(review: "Can't believe it looks like it's brand new again!", user_id: zelda.id, home_life_hack_id: hlh2.id)
HomeLifeHackReview.create(review: "Amazingly Brilliant!", user_id: hylia.id, home_life_hack_id: hlh3.id)

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