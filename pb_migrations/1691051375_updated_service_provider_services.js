migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kdruhc60eq1n3v1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6ppkvsgb",
    "name": "service_provider_ref",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "j1qxxjwp8eq6pqx",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tselq8bw",
    "name": "service_ref",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "u03zwnntnk69f5i",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kdruhc60eq1n3v1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6ppkvsgb",
    "name": "service_provider_id",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "j1qxxjwp8eq6pqx",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tselq8bw",
    "name": "service_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "u03zwnntnk69f5i",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
