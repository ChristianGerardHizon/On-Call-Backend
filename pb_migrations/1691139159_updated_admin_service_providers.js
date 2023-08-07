/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2n2in6zz0u8g0wa")

  collection.options = {
    "query": "SELECT sp.id as id, sp.public_name as name, us.email as email, us.isActive FROM service_providers as sp LEFT JOIN users as us ON us.id == sp.user_ref"
  }

  // remove
  collection.schema.removeField("soekx9pv")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2n2in6zz0u8g0wa")

  collection.options = {
    "query": "SELECT sp.id as id, sp.public_name as name FROM service_providers as sp LEFT JOIN users as us ON us.id == sp.user_ref"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "soekx9pv",
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

  // remove
  collection.schema.removeField("27ocplxc")

  // remove
  collection.schema.removeField("njb38fzr")

  // remove
  collection.schema.removeField("cgwo4o6d")

  return dao.saveCollection(collection)
})
