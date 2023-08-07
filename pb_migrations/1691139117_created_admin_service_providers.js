/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2n2in6zz0u8g0wa",
    "created": "2023-08-04 08:51:57.794Z",
    "updated": "2023-08-04 08:51:57.794Z",
    "name": "admin_service_providers",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT sp.id as id, sp.public_name as name FROM service_providers as sp LEFT JOIN users as us ON us.id == sp.user_ref"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2n2in6zz0u8g0wa");

  return dao.deleteCollection(collection);
})
