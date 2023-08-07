/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1qxxjwp8eq6pqx")

  collection.listRule = "@request.auth.type = 'admin'"
  collection.viewRule = "@request.auth.type = 'admin'"
  collection.createRule = "@request.auth.type = 'admin'"
  collection.updateRule = "@request.auth.type = 'admin'"
  collection.deleteRule = "@request.auth.type = 'admin'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1qxxjwp8eq6pqx")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
