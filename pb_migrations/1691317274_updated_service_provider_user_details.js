/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("is89td0q4na01bn")

  collection.options = {
    "query": "SELECT sp.id as id, sp.userRef, us.avatar, sp.publicName,sp.publicPicture, us.email, sp.isPublic, us.isActive FROM service_providers as sp LEFT JOIN users as us ON us.id == sp.userRef"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jx9jpbiu",
    "name": "userRef",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hd0bsprj",
    "name": "avatar",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": null,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hxgtogrs",
    "name": "publicName",
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
    "id": "2ibtmlrf",
    "name": "publicPicture",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qytlfjrz",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kuusuno5",
    "name": "isPublic",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mc1rhx5k",
    "name": "isActive",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("is89td0q4na01bn")

  collection.options = {
    "query": "SELECT sp.id as id FROM service_providers as sp LEFT JOIN users as us ON us.id == sp.userRef"
  }

  // remove
  collection.schema.removeField("jx9jpbiu")

  // remove
  collection.schema.removeField("hd0bsprj")

  // remove
  collection.schema.removeField("hxgtogrs")

  // remove
  collection.schema.removeField("2ibtmlrf")

  // remove
  collection.schema.removeField("qytlfjrz")

  // remove
  collection.schema.removeField("kuusuno5")

  // remove
  collection.schema.removeField("mc1rhx5k")

  return dao.saveCollection(collection)
})
