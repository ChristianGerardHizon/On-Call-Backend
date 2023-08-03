/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2mpgl2118jxak5z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ovrvleju",
    "name": "code",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 5,
      "max": 5,
      "pattern": "^[a-zA-Z0-9]+$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2mpgl2118jxak5z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ovrvleju",
    "name": "code",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 5,
      "max": 5,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
