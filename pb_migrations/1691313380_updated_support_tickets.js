/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m46etjpr7b7xixy")

  collection.options = {
    "query": "SELECT std.id, so.id as serviceOrderRef, std.description, std.status FROM support_ticket_details as std LEFT JOIN service_orders as so ON so.id = std.serviceOrderRef "
  }

  // remove
  collection.schema.removeField("a8m8rccf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pbjelqdh",
    "name": "serviceOrderRef",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ukk2h1jos3ikuj5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ajwx7ceb",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ockpqo4o",
    "name": "status",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "closed"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m46etjpr7b7xixy")

  collection.options = {
    "query": "SELECT std.id, so.id as serviceOrderRef FROM support_ticket_details as std LEFT JOIN service_orders as so ON so.id = std.serviceOrderRef "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a8m8rccf",
    "name": "serviceOrderRef",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ukk2h1jos3ikuj5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("pbjelqdh")

  // remove
  collection.schema.removeField("ajwx7ceb")

  // remove
  collection.schema.removeField("ockpqo4o")

  return dao.saveCollection(collection)
})
