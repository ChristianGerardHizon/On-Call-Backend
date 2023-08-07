/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1qxxjwp8eq6pqx")

  collection.listRule = "@request.auth.type = 'service_provider'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1qxxjwp8eq6pqx")

  collection.listRule = null

  return dao.saveCollection(collection)
})
