/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ba9faocjzh2hbl4")

  collection.options = {
    "query": "SELECT sp.id as id, sp.public_name, sp.public_picture\nFROM service_providers as sp LEFT JOIN users ON users.id == sp.user_ref WHERE sp.isPublic == TRUE AND users.isActive == TRUE"
  }

  // remove
  collection.schema.removeField("wynkepaz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "knakicrk",
    "name": "public_name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 2,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uikylpo3",
    "name": "public_picture",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ba9faocjzh2hbl4")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, service_providers.public_picture\nFROM service_providers\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wynkepaz",
    "name": "public_picture",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("knakicrk")

  // remove
  collection.schema.removeField("uikylpo3")

  return dao.saveCollection(collection)
})
