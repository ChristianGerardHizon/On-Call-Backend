/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u03zwnntnk69f5i")

  collection.indexes = [
    "CREATE INDEX `idx_xOC47Y0` ON `services` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u03zwnntnk69f5i")

  collection.indexes = []

  return dao.saveCollection(collection)
})
