/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ba9faocjzh2hbl4")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, sp.id as serviceProviderId,sv.name as service, sp.public_name as 'serviceProviderName', sp.public_picture\n  FROM service_provider_services as sps\n  LEFT JOIN services as sv ON sv.id == sps.service_ref\n  LEFT JOIN service_providers as sp ON sp.id == sps.service_provider_ref\n  WHERE sps.isPublic == true AND sps.isPublic == true\n"
  }

  // remove
  collection.schema.removeField("yy1rhxz5")

  // remove
  collection.schema.removeField("ygtb4ozt")

  // remove
  collection.schema.removeField("ohmckhdp")

  // remove
  collection.schema.removeField("4qfulswk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f7uyy25x",
    "name": "serviceProviderId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "j1qxxjwp8eq6pqx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c4o9ncgz",
    "name": "service",
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
    "id": "zeurosjz",
    "name": "serviceProviderName",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yhdkpejb",
    "name": "public_picture",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ba9faocjzh2hbl4")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, sp.id as serviceProviderId,sv.name as service, sp.public_name, sp.public_picture\n  FROM service_provider_services as sps\n  LEFT JOIN services as sv ON sv.id == sps.service_ref\n  LEFT JOIN service_providers as sp ON sp.id == sps.service_provider_ref\n  WHERE sps.isPublic == true AND sps.isPublic == true\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yy1rhxz5",
    "name": "serviceProviderId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "j1qxxjwp8eq6pqx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ygtb4ozt",
    "name": "service",
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
    "id": "ohmckhdp",
    "name": "public_name",
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
    "id": "4qfulswk",
    "name": "public_picture",
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

  // remove
  collection.schema.removeField("f7uyy25x")

  // remove
  collection.schema.removeField("c4o9ncgz")

  // remove
  collection.schema.removeField("zeurosjz")

  // remove
  collection.schema.removeField("yhdkpejb")

  return dao.saveCollection(collection)
})
