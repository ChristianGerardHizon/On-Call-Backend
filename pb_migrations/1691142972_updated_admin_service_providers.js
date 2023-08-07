/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2n2in6zz0u8g0wa")

  collection.options = {
    "query": "SELECT sp.id as id, sp.public_name as name, us.email as email, sp.public_picture as profile_picture, us.isActive FROM service_providers as sp LEFT JOIN users as us ON us.id == sp.user_ref"
  }

  // remove
  collection.schema.removeField("27ocplxc")

  // remove
  collection.schema.removeField("njb38fzr")

  // remove
  collection.schema.removeField("cgwo4o6d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ialywo3q",
    "name": "name",
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
    "id": "il9uowhg",
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
    "id": "kxzobc75",
    "name": "profile_picture",
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
    "id": "knpzfqvd",
    "name": "isActive",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2n2in6zz0u8g0wa")

  collection.options = {
    "query": "SELECT sp.id as id, sp.public_name as name, us.email as email, us.isActive FROM service_providers as sp LEFT JOIN users as us ON us.id == sp.user_ref"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "27ocplxc",
    "name": "name",
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
    "id": "njb38fzr",
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
    "id": "cgwo4o6d",
    "name": "isActive",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("ialywo3q")

  // remove
  collection.schema.removeField("il9uowhg")

  // remove
  collection.schema.removeField("kxzobc75")

  // remove
  collection.schema.removeField("knpzfqvd")

  return dao.saveCollection(collection)
})
