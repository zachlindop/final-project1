Review.destroy_all
User.destroy_all
LifeHack.destroy_all

puts"-------------Models Destroyed---------------------------------"

link = User.create(username: "Link", image: "data:image/jpeg;base64,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", about:"Love to Hack!", password_digest: "test123")
zelda = User.create(username: "Zelda", image: "data:image/jpeg;base64,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", about:"Love to Hack!", password_digest:"test123")
hylia = User.create(username: "Hylia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVceMdJ83tPXS4yknWM7jlzPro8-1yLwGu1A&usqp=CAU", about:"Love to Hack!", password_digest: "test123")

puts"---------------------Users Seeded-----------------------------"

lh1 = LifeHack.create(title: "Two Minute Rule", life_hack_type: "Work/Study", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhUJrcXMHjWstD0QSPTx9QEM96Zt-NOf5Gw&usqp=CAU", description: "If an action will take less than two minutes, it should be done at the moment it’s defined, or else put on a to-do list.")
lh2 = LifeHack.create(title: "Hardest Task First", life_hack_type: "Work/Study", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-CUqiJBzsrdoaaDhXVDrTo-de7-zF60CPw&usqp=CAU", description: "Everything else that happens will feel easier by comparison. Often a little momentum is all you need.")
lh3 = LifeHack.create(title: "Alarms for Everything", life_hack_type: "Work/Study", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiG9KjMFEP5QeQ5YaN5ZiasgIuazb9jC6oSA&usqp=CAU", description: "With an increase in responsibilities, you can't expect yourself to remember everything. In fact, it's a waste of brainpower. Just set reminders and show up when you need to. It's that easy.")
lh4 = LifeHack.create(title: "More Ink Out of Printer", life_hack_type: "Financial", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdLD9qFIh2YcI_YKroZNr2LQcnoHUtUWqOg&usqp=CAU", description: "If your printer is out of black ink or toner, change the text color to dark blue.")
lh5 = LifeHack.create(title: "Grow Food, Not Lawns", life_hack_type: "Financial", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUdYiiEZ7-qzrxZJWyHuZ37VVmuDxXZe6rQ&usqp=CAU", description: "The movement to replace costly, high-maintenance lawns with veggie-producing garden space is growing in popularity.")
lh6 = LifeHack.create(title: "Sync Your Sleep With Daylight", life_hack_type: "Financial", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYW4gfSfdM4YzjZ-GEmO9stNizojxAevy_Ww&usqp=CAU", description: "Adjusting your sleep schedule to better coincide with daylight hours will allow you to save on daily electrical usage. Plus, you’ll wake up feeling refreshed and rejuvenated.")
lh7 = LifeHack.create(title: "Microwave Garlic", life_hack_type: "Home", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcqXOODTDZtP931S12rZAyMF75Q83y7hJmQ&usqp=CAU", description: "After 20 seconds, cloves will peel out easily!")
lh8 = LifeHack.create(title: "Clean shower head with Vinegar", life_hack_type: "Home", image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBAPDxAPDw8PDw8PDw8PDw8PDw0PFRUWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFy0dFx0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tKy0tKy0rLS8tOC0tLSs3NzcrN//AABEIALIBGwMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAABAgADBAUG/8QANxAAAgIBAgUCBAUDAQkAAAAAAAECEQMSIQQxQVFhInEFE4GhMpGxwfBCUtEjFBUzYnKCksLx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAQACAwT/xAAfEQEBAQEAAwEBAAMAAAAAAAAAAQIREiExUQMEMmH/2gAMAwEAAhEDEQA/AOJCJakLFFiPDXrFIZIiQyBIkMiJDIiiQUiJBAoGiBBIgkCgKIKRBkiQEoYhIKJQ1BitySRhW738b7l88sZUlCEElVRv1eW2+ZVPt2GjFUaBJY102ZW4NGiKtotzcM0uafXbp4ZcXWADQzAZJQDUBkitCtDtAZIjFY7FZBfwfUvaKOD6miSNRmq2hGi1oRilMkVOJokitogxRQ6QEMhpMkMgIZARGQEFEhCiJBQFAkIBFIKAVZOJjHmyS9DGD/eUPJpw8VCXJ/mBXpBoKDRIKGxrcsjAZ1F77mpApcS3FglPaCcn2SbbJOS322/Q0YpONOLcX3TpjJ0VTCDsvcNne3geEevUnFSa2apI1wOdxGFR6/QoLczTbrl0K6OVbhSMYBIjAxmAgRisdiskt4TmapGThfxGxmozVbFY7FYhW0JRY0LRBz0OhYjoWjDCoYEKGQEFETIIAgRRGRC5HSLiZuIyvkvqzBOB11wtYY5P722ZFhs2x9c+USY4Sva0bY4m8ixxjqm/sdSXwTIscss2oKK5G84tZupGLFxLiqu2WcNKU9TbdL9zn5M1Jtb7HW+DSjLBLVcJTip79rDOPxXRMbl3fM31Ubn9PYGJL06VfWy/is+zUoqmt9uprkXT8NBTSSp27s1whzvl5VmP4LiSTcXtbftRv4vPG7Rj1n619BTUeifJ8t9vJh4p65Sk9tTb/MulmT3MuaYapkZZx3FGAcXQoGMBkiisYDIFYrGYrEH4b8RtZiwfiRuYwVWxWMxWaBGKOxQDnxGQqHQkyCgIZEkbHghQrYCYICARiJl5MckkMTqKMHwOCUXck3GS7Pl+xkwxjabRxZcXPC5R30SepLomasPF/Mja27nXWe8sc5fsqj4n8ZfDZ1kxRTfK2tiv4l8Z4nitpTUMWzaj1ZOOprTSbbBH4dCCv7dDtP6XOeOdx3XWfFjk2lFNrlbPSYIKmuVqnXJJLZHO4dq0dzgcMW93pSi23V2+iOE1a6+PDfD+EpJ9pO0+nYujjcr1r09/8GnDVbLfuJxE6jvzo5/5G9ZzJn/a+hme/fxj1Ritrjb2XJe5XgzK6kt13fMLhq5uq3XlnL4zn7Mz/P8AhnHu+7/1q7td7iM+KSvTGL7xtfY5uWr2d/qU4c1r9fcGWSe3Xp58HTWVKcDBjlarqtn3C0cbOOgAYWKyQACKyQMVjMVkDYn6kbpM5+Pmjc2ajNBisjYrZoAwEYtgGFDIVDI0ToZCIdERQQIZARCAgJBkKFEmbjOGU1RzeF1YpOL2v8ju0VZOGjJbo6Z3xm56wcDgn8zXPdXs+hr4/fkUvg5r8Mml2DDh59ZWaupxmRTCT5I62DipVTp7GbFwyRojE49/HTjoYeL2rl4KuP4qqv8A++CnBDdFHxS/p0Nz39Y1OGlne3lGbiMl/USUtl7IryOSSlp1Jtx3tK67o6MrMOSr38ls2pKuvddH0ZgUlyns5OlpVpqnf15Fmq4pp7qvqHF1fiyu9LdTXJ9/DNWLOn6ZbS+z9jk5rlvyf3X1Jiyt+ib3X4Z9X4fn9ffnjWZWpqx2WhWZMPFSW2TddGuhsST3RyueOkvSMAWhWZIMVsLEkxQxe6Nzkc29y5zYxmtLkhXNGZyYrkzTLS5CORTrBrIKkOhEMaJxkIhkBOgioZMkIQIIFBkKhkSMhoiIZARolECSSgpELcW25SdV9Hlkjjpc2lb+pg4zLqjcuWppVtsHVcZy6yvfx0MuXJeNLzLl/wBJ3nHGtEssFGPoVOLSunNdm+nYpzcS5pbRpKMeVuo7J2/ANbl0UY6Y0lfOKSvcThPVB30bRrVEJlxWvZpr3W4Yx6GzBi1R8pb/AKCyw0YaYtNfv7FeTHXnz4N+fDtGfSVr2a6FOi1XVbryuwEmGWrZvetvPgeE5Qe3XlfJ+Ciqdo0rJGS0vt33vx56gm3HKM0mmrf2fZlco0YY8Q8ctNWpbp8ql1OhHJGaTT3Maw1NKmIx5CM5tkrdGv5RlN65IYzVPyxXjLmBmhWWcCsvylNCyqQ6K0OjROgoVBInGQiGTBGChbCRMgioYEZDIVMKJGCgBREUW5JLddKoqiw8xgrHxU9KjFfyjNkXpf1r6lvxD8S9g4leOW16ZQv2dnXM9OevqcJHVUeytfVKx8WJxT7S329r/nuT5csOWGpbuGpLvu1T8pou47PFSxqG+PIrjLqm6037JSTNcZbvhWHXpklals/drr9//APE8NX86dDdw2XHwmJ5p5PkwmozwqW2WSkk3CMFu6lq35brc8x8U+O5c7axR+Tj2W/4pJKl7e33Lxq62Skt4Oub5ul72+q/cwZ8+KPOdvtji5v8+SMUcLlvNuW3Xrz/AMirS20nFyT3Sr0ryXjF1ZLjrfow3/zZZf8ArH/Iilmk7Xy4t1yjFfdiSy1NY1GTurfKKLHKWtRjFtf1TaajHx5LkRljlq9ctSVN7WvKX6FmKbTT5bqq5ezJFXvTStpXzdf1V2Bm2SS2blH3q0/57mbC6uVWtX8ozstxcpRfa1+5Szz6jtKBujyRgbN0XsigqMVhYjEBJFbSHkyhzIM6Y6K0OjaOgoVDICZDCoKJGChQoiYKAFAjIZCIdEjkISySDRf87ilmODdtf0q37XV/dDEw/EY/hfujofBZxWLiYSr0wjmqWylpaUd+u8lt2TM/Hxbhf1v7M5eHM1K2/wCnrvstztn45adbic/zYSzVX+r+FycnHH0Vvm1srOTDiHHTKCVwa0ze6hKDtNLrzrtuGc5Pn/w36kk+bf8Ad+XLqUZJxVNvd7JVz8I6ep8YkTPmnkk5TnPJN1c8knKctqTbfWmScJqP+nHVLbm9l3f07ElwMclOUnST2tpb9WiyM5pqGJJ41Vzbtz7pdjPWkwt1UqUvHVGbhYRWp48clSbUpOtb/bc1YcONSbinKW7bab3b7l3DYJLVrk/VurVJLskCZoxz6NnBTb516YR/dj8LxEpSljlGqSaT/E11lKtkn0Q0Vpk4qS0xVyt3KTfNt9ETFljGXOLeRrTpju0urZEIRqU5Od1cYwX4YL6dSjNkepL6v27F+ba6Xd13Zm4bBOT1Vz6sg6/Dzdyb5OX7IrkSOyoWTPPqy11zLCs3w5I57N2N+lBDREYWxWxZV5WZnIvymZlEVDoqTHTNJYhkVpjWRWJhQiYyYI4RLGTImQRQoEdDRK0x0yRyWCyIkeA8W07XlP2ezQeHWzk+m31YBiTIr28fqcSGOpK99Dv/ALr2/c7aMnFcNT1R67P3Omb7Y1GSe+65dl0KMUZ6rcYNXsuqXf3NEU990ny3W31KJ4FbbdPm9L6nRhOLd+lqOjaTcpUm0+X6F9qK9NQXfdu+yRWlqv01JelOUeXdotwvQlbUu+rZvbmqBDLLVWqcuSadv6FeTiGpVp0x5OUnVvsl1Nc2nck4pKt1G3XuVS4dNp86unJ3z7B39LG4qEW0lp/tq5Tl5Zq4eLaUq0uuXYvjiS8jNnO7/G5j9VLEl59+gzZGxWznba1JIDYrZGxJMyQbNuKXpRgbNGKexqCr3IVyK3MXWLI5GZ2yycjO2QCI6K4sdG0dDCJjICdBQqCiJwoVBRI6ChBkBMOitDokayWCwxJLYS2GK0qdMaxBkxkxLCmSVZeET3i6/QqXAy7x+5rsWWWjXlYPEv8AsOSKUvRpdq+df4KsmPpadKuSHlnk1Vuu3QrcguzMinWwLF1CuRzta4ZsVsVyEcw6TtitiOTJpZdXEciuUh/lMnySCiTGx5GXrH4G+Q2MlFqn5gNZa+FYj4Vjyj0rcypyLZcPIqeKRBIjplKZZFnQLUxitMZMCsQUJYbArLCmJYbJHsNiWGwKxMaJWmNFgj2SxNRLDpX61tu7Da7ozqxtD7GvIeK55EhXm7CxxN8x/wDZ13DyqkVSnYNRdHChvloPZZ9wNPsa9JKLi6yLGwrCatJFAvFdZvkInyka/lBWNDMDyZPljLEzTSIan82fJn+SH5SLWKzUwPImlBIyGpGbT0BoKIzfGVM0VOJdIrLkTjIsiQhzdDIdEIBMgoJDJFBIQCYiIQEIyIQCJbAhCS6CHIQYECiEFIyBISAdEIMBkBkIagosVkIbjIMVkIaBRWQgIoSEIUyAyEEK5lbAQQ//2Q==", description: "Fill a plastic bag with white vinegar and secure it to the shower head with a rubber band. Allow it to soak in the vinegar overnight, and remove the bag. It will be as good as new!" )
lh9 = LifeHack.create(title: "Amplify phone's speakers", life_hack_type: "Home", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1oj_js4WqUyZfTouLrsPQuDcCfFOlKv5mI_mSPPriK0yIsVQdfktp8CuoFuUAocS6Cw&usqp=CAU", description: "Put your phone into a drinking glass or a bowl to boost the volume of its speakers." )

puts"------------------------LifeHacks Seeded-------------------------"

Review.create(review: "Keeps me productive, and helps to avoid procrastination!", user_id: link.id, life_hack_id: lh1.id)
Review.create(review: "Effective, but super stressful if you're not a morning person", user_id: zelda.id, life_hack_id: lh2.id)
Review.create(review: "Very clever, but I'm sick of hearing my phone go off all day!", user_id: hylia.id, life_hack_id: lh3.id)
Review.create(review: "My boss loves this idea, he gave me a promotion!", user_id: link.id, life_hack_id: lh4.id)
Review.create(review: "Lots of work, but worth the effort!", user_id: zelda.id, life_hack_id: lh5.id)
Review.create(review: "I never realized how much money I could save!", user_id: hylia.id, life_hack_id: lh6.id)
Review.create(review: "Makes cooking so much easier.", user_id: link.id, life_hack_id: lh7.id)
Review.create(review: "Can't believe it looks like it's brand new again!", user_id: zelda.id, life_hack_id: lh8.id)
Review.create(review: "Amazingly Brilliant!", user_id: hylia.id, life_hack_id: lh9.id)

puts"-----------------------Reviews Seeded-----------------------------------"

