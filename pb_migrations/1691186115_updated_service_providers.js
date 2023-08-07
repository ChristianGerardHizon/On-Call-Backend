/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1qxxjwp8eq6pqx")

  collection.listRule = "@request.auth.type = 'admin'"
  collection.viewRule = "@request.auth.type = 'admin'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1qxxjwp8eq6pqx")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
