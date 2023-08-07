/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ukk2h1jos3ikuj5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uhqbrl0q",
    "name": "service_provider_ref",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "j1qxxjwp8eq6pqx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "publicName"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ukk2h1jos3ikuj5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uhqbrl0q",
    "name": "service_provider_ref",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "j1qxxjwp8eq6pqx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "public_name"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
