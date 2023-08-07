/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ganalomd31wabb6",
    "created": "2023-08-04 10:09:58.595Z",
    "updated": "2023-08-04 10:09:58.595Z",
    "name": "tes",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tik3yco6",
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
      },
      {
        "system": false,
        "id": "gltnr6qd",
        "name": "service",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vgqmub5z",
        "name": "serviceProviderName",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "mxif8rei",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, sp.id as serviceProviderId,sv.name as service, sp.public_name as 'serviceProviderName', sp.public_picture\n  FROM service_provider_services as sps\n  LEFT JOIN services as sv ON sv.id == sps.service_ref\n  LEFT JOIN service_providers as sp ON sp.id == sps.service_provider_ref\n  WHERE sps.isPublic == true AND sp.isPublic == true\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ganalomd31wabb6");

  return dao.deleteCollection(collection);
})
