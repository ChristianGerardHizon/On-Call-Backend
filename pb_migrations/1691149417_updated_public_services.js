/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ba9faocjzh2hbl4")

  collection.options = {
    "query": "SELECT (sps.service_provider_ref || '_' || sps.service_ref) as id, sps.service_provider_ref, sps.service_ref, sv.name as service, sp.public_name as service_provider, sp.public_picture\n  FROM service_provider_services as sps\n  LEFT JOIN services as sv ON sv.id == sps.service_ref\n  LEFT JOIN service_providers as sp ON sp.id == sps.service_provider_ref\n  WHERE sps.isPublic == true AND sp.isPublic == true"
  }

  // remove
  collection.schema.removeField("frzw3qts")

  // remove
  collection.schema.removeField("nssbu58w")

  // remove
  collection.schema.removeField("rkpvmmvw")

  // remove
  collection.schema.removeField("xp17hnyu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jzdigfa8",
    "name": "service_provider_ref",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "j1qxxjwp8eq6pqx",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dfic43dh",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "syxulvtj",
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
    "id": "3x7molxh",
    "name": "service_provider",
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
    "id": "mytqrrxm",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id, sp.id as serviceProviderId,sv.name as service, sp.public_name as 'serviceProviderName', sp.public_picture\n  FROM service_provider_services as sps\n  LEFT JOIN services as sv ON sv.id == sps.service_ref\n  LEFT JOIN service_providers as sp ON sp.id == sps.service_provider_ref\n  WHERE sps.isPublic == true AND sp.isPublic == true\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "frzw3qts",
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
    "id": "nssbu58w",
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
    "id": "rkpvmmvw",
    "name": "serviceProviderName",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xp17hnyu",
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
  collection.schema.removeField("jzdigfa8")

  // remove
  collection.schema.removeField("dfic43dh")

  // remove
  collection.schema.removeField("syxulvtj")

  // remove
  collection.schema.removeField("3x7molxh")

  // remove
  collection.schema.removeField("mytqrrxm")

  return dao.saveCollection(collection)
})
