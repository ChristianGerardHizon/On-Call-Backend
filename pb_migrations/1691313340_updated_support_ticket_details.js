/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("shch5nig1fnif9v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l9htga5l",
    "name": "status",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "closed"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("shch5nig1fnif9v")

  // remove
  collection.schema.removeField("l9htga5l")

  return dao.saveCollection(collection)
})
