/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ba9faocjzh2hbl4",
    "created": "2023-08-03 09:59:20.978Z",
    "updated": "2023-08-03 09:59:20.978Z",
    "name": "public_services",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xkxxr87u",
        "name": "public_name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": null,
          "pattern": ""
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id, sp.public_name  \n  FROM service_provider_services as sps \n  LEFT JOIN services as sv ON sv.id == sps.service_ref\n LEFT JOIN service_providers as sp ON sp.id == sps.service_provider_ref\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ba9faocjzh2hbl4");

  return dao.deleteCollection(collection);
})
