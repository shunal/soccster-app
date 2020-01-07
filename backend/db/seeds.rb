# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


steve = User.create(username: "Steve")
jish = User.create(username: "Jish")


fourgoalgame = Drill.create(title: "Four Goal Game", drawing: {"attrs":{"width":1000,"height":500,"id":"bigStage"},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":100,"y":100,"radius":15,"fill":"blue"},"className":"Circle"},{"attrs":{"x":100,"y":150,"radius":15,"fill":"green"},"className":"Circle"},{"attrs":{"x":90,"y":200,"width":50,"height":20,"fill":"white","stroke":"green"},"className":"Rect"},{"attrs":{"x":95,"y":250,"sides":3,"radius":8,"fill":"orange"},"className":"RegularPolygon"},{"attrs":{"x":95,"y":300,"radius":6,"fill":"white","stroke":"black"},"className":"Circle"},{"attrs":{"x":100,"y":50,"radius":15,"fill":"red"},"className":"Circle"},{"attrs":{"name":"draggableRedCircle","x":100,"y":50,"radius":15,"fill":"red","draggable":true},"className":"Circle"},{"attrs":{"name":"draggableBlueCircle","x":100,"y":100,"radius":15,"fill":"blue","draggable":true},"className":"Circle"},{"attrs":{"x":100,"y":150,"radius":15,"fill":"green","draggable":true,"name":"draggableGreenCircle"},"className":"Circle"},{"attrs":{"x":90,"y":200,"width":50,"height":20,"fill":"white","stroke":"green","draggable":true,"name":"draggableRect"},"className":"Rect"},{"attrs":{"x":95,"y":250,"sides":3,"radius":8,"fill":"orange","draggable":true,"name":"draggableTriangle"},"className":"RegularPolygon"},{"attrs":{"x":95,"y":300,"radius":6,"fill":"white","stroke":"black","draggable":true,"name":"draggableBall"},"className":"Circle"},{"attrs":{"x":246,"y":52,"radius":15,"fill":"red","draggable":true},"className":"Circle"},{"attrs":{"x":353,"y":60,"radius":15,"fill":"blue","draggable":true},"className":"Circle"}]}]})
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