/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("shch5nig1fnif9v")

  collection.name = "support_ticket_details"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("shch5nig1fnif9v")

  collection.name = "support_tickets"

  return dao.saveCollection(collection)
})
