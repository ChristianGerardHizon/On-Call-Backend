/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2mpgl2118jxak5z")

  // remove
  collection.schema.removeField("72553wz0")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2mpgl2118jxak5z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "72553wz0",
    "name": "expiry",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
