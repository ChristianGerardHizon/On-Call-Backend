migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u03zwnntnk69f5i")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hs5i9zig",
    "name": "isPublic",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u03zwnntnk69f5i")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hs5i9zig",
    "name": "isPublic",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
