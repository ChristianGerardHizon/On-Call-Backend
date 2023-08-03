migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kdruhc60eq1n3v1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1kcr7do8",
    "name": "isPublic",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kdruhc60eq1n3v1")

  // remove
  collection.schema.removeField("1kcr7do8")

  return dao.saveCollection(collection)
})
