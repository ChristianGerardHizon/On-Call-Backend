/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("is89td0q4na01bn")

  collection.options = {
    "query": "SELECT sp.id as id, sp.userRef, us.avatar, sp.publicName,sp.publicPicture, sp.created, sp.updated, us.email, sp.isPublic, us.isActive, us.emailVisibility, us.firstName, us.lastName FROM service_providers as sp LEFT JOIN users as us ON us.id == sp.userRef"
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ymcjrlcm",
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
    "id": "m5smnk7z",
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
    "id": "k4fjfvlg",
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
    "id": "al1329e0",
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
    "id": "47q04tjq",
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
    "id": "mcxqpdds",
    "name": "isPublic",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7blusnam",
    "name": "isActive",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jmaj6jkc",
    "name": "emailVisibility",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ftqxdi0r",
    "name": "firstName",
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
    "id": "obxtoxpe",
    "name": "lastName",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("ymcjrlcm")

  // remove
  collection.schema.removeField("m5smnk7z")

  // remove
  collection.schema.removeField("k4fjfvlg")

  // remove
  collection.schema.removeField("al1329e0")

  // remove
  collection.schema.removeField("47q04tjq")

  // remove
  collection.schema.removeField("mcxqpdds")

  // remove
  collection.schema.removeField("7blusnam")

  // remove
  collection.schema.removeField("jmaj6jkc")

  // remove
  collection.schema.removeField("ftqxdi0r")

  // remove
  collection.schema.removeField("obxtoxpe")

  return dao.saveCollection(collection)
})
