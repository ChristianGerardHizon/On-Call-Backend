/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "is89td0q4na01bn",
    "created": "2023-08-06 10:20:16.498Z",
    "updated": "2023-08-06 10:20:16.498Z",
    "name": "service_provider_user_details",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT sp.id as id FROM service_providers as sp LEFT JOIN users as us ON us.id == sp.userRef"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("is89td0q4na01bn");

  return dao.deleteCollection(collection);
})
