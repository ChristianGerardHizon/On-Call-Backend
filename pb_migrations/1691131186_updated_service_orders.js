/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ukk2h1jos3ikuj5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyfbrftd",
    "name": "status",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Pending",
        "Accepted",
        "In Progress",
        "On Hold",
        "Canceled",
        "Awaiting Payment",
        "Completed"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ukk2h1jos3ikuj5")

  // remove
  collection.schema.removeField("eyfbrftd")

  return dao.saveCollection(collection)
})
