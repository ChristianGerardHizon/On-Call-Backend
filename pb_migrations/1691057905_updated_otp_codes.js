/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2mpgl2118jxak5z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ey8f1na9",
    "name": "purpose",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "auth",
        "payment"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2mpgl2118jxak5z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ey8f1na9",
    "name": "purpose",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "auth",
        "payment"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
