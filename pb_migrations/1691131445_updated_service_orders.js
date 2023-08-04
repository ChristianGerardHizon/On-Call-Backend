/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ukk2h1jos3ikuj5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r00c4k8k",
    "name": "descriptions",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rsirhf6q",
    "name": "attachments",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ukk2h1jos3ikuj5")

  // remove
  collection.schema.removeField("r00c4k8k")

  // remove
  collection.schema.removeField("rsirhf6q")

  return dao.saveCollection(collection)
})
