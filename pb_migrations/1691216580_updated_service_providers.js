/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1qxxjwp8eq6pqx")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_7mTDVSk` ON `service_providers` (`user_ref`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1qxxjwp8eq6pqx")

  collection.indexes = [
    "CREATE INDEX `idx_fOfNY4o` ON `service_providers` (`user_ref`)"
  ]

  return dao.saveCollection(collection)
})
