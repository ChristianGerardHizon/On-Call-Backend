migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j6a1tfsouqssz42")

  collection.options = {
    "query": "SELECT sp.id as id, sp.public_name, sp.public_picture\nFROM service_providers as sp LEFT JOIN users ON users.id == sp.user_ref WHERE sp.isPublic == TRUE AND users.isActive == TRUE"
  }

  // remove
  collection.schema.removeField("qh8op44c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wpzzqihy",
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
    "id": "fwh46pt9",
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
  const collection = dao.findCollectionByNameOrId("j6a1tfsouqssz42")

  collection.options = {
    "query": "SELECT service_providers.id as id, service_providers.public_name \nFROM service_providers LEFT JOIN users ON users.id == service_providers.user_ref WHERE service_providers.isPublic == TRUE AND users.isActive == TRUE"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qh8op44c",
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

  // remove
  collection.schema.removeField("wpzzqihy")

  // remove
  collection.schema.removeField("fwh46pt9")

  return dao.saveCollection(collection)
})
