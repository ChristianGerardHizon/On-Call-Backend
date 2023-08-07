/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ba9faocjzh2hbl4")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, sp.id as serviceProviderId,sv.name as service, sp.public_name, us.avatar\n  FROM service_provider_services as sps\n  LEFT JOIN service_providers as sp ON sp.id == sps.service_provider_ref\n  LEFT JOIN services as sv ON sv.id == sps.service_ref\n  LEFT JOIN users as us ON us.id == sp.user_ref\n  WHERE sps.isPublic == true AND sp.isPublic == true\n"
  }

  // remove
  collection.schema.removeField("nyae29j9")

  // remove
  collection.schema.removeField("zuzfgful")

  // remove
  collection.schema.removeField("zj8dtpmn")

  // remove
  collection.schema.removeField("ryspzrzn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c3jmfnxh",
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
    "id": "fe2yy5ca",
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
    "id": "wuboguvv",
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
    "id": "s6kmzeen",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ba9faocjzh2hbl4")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, sp.id as serviceProviderId,sv.name as service, sp.public_name as 'serviceProviderName', us.avatar\n  FROM service_provider_services as sps\n  LEFT JOIN service_providers as sp ON sp.id == sps.service_provider_ref\n  LEFT JOIN services as sv ON sv.id == sps.service_ref\n  LEFT JOIN users as us ON us.id == sp.user_ref\n  WHERE sps.isPublic == true AND sp.isPublic == true\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nyae29j9",
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
    "id": "zuzfgful",
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
    "id": "zj8dtpmn",
    "name": "serviceProviderName",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ryspzrzn",
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

  // remove
  collection.schema.removeField("c3jmfnxh")

  // remove
  collection.schema.removeField("fe2yy5ca")

  // remove
  collection.schema.removeField("wuboguvv")

  // remove
  collection.schema.removeField("s6kmzeen")

  return dao.saveCollection(collection)
})
