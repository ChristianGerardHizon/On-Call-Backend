migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u03zwnntnk69f5i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pldcm6fh",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u03zwnntnk69f5i")

  // remove
  collection.schema.removeField("pldcm6fh")

  return dao.saveCollection(collection)
})
