migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1qxxjwp8eq6pqx")

  // remove
  collection.schema.removeField("zmeeooip")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wzhghsq0",
    "name": "avatar",
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
  const collection = dao.findCollectionByNameOrId("j1qxxjwp8eq6pqx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zmeeooip",
    "name": "avatar",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("wzhghsq0")

  return dao.saveCollection(collection)
})
