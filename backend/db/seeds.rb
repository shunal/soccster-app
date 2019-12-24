# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


steve = User.create(username: "Steve")
jish = User.create(username: "Jish")


fourgoalgame = Drill.create(title: "Four Goal Game")
stealthebacon = Drill.create(title: "Steal the Bacon")

steve.drills << fourgoalgame
jish.drills << stealthebacon

scoring = Tag.create(name: "Scoring")
team_attacking = Tag.create(name: "Team Attacking")
dribbling = Tag.create(name: "Dribbling")
passing = Tag.create(name: "Passing")

fourgoalgame.tags << scoring
fourgoalgame.tags << team_attacking
fourgoalgame.tags << passing
fourgoalgame.tags << dribbling

stealthebacon.tags << scoring

stealthebacon.tags << dribbling