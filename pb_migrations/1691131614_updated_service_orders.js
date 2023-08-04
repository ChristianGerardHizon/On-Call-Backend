/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ukk2h1jos3ikuj5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pggtmbpn",
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
  const collection = dao.findCollectionByNameOrId("ukk2h1jos3ikuj5")

  // remove
  collection.schema.removeField("pggtmbpn")

  return dao.saveCollection(collection)
})
