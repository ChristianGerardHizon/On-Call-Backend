migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j6a1tfsouqssz42")

  collection.options = {
    "query": "SELECT service_providers.id as id, service_providers.public_name FROM service_providers JOIN users WHERE service_providers.isPublic == TRUE"
  }

  // remove
  collection.schema.removeField("68wedpog")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wjx7ud0a",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j6a1tfsouqssz42")

  collection.options = {
    "query": "SELECT service_providers.id as id, service_providers.public_name FROM service_providers WHERE service_providers.isPublic == TRUE"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "68wedpog",
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
  collection.schema.removeField("wjx7ud0a")

  return dao.saveCollection(collection)
})
