/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "m46etjpr7b7xixy",
    "created": "2023-08-06 09:14:24.828Z",
    "updated": "2023-08-06 09:14:24.828Z",
    "name": "support_tickets",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a8m8rccf",
        "name": "serviceOrderRef",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "ukk2h1jos3ikuj5",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
      "query": "SELECT std.id, so.id as serviceOrderRef FROM support_ticket_details as std LEFT JOIN service_orders as so ON so.id = std.serviceOrderRef "
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("m46etjpr7b7xixy");

  return dao.deleteCollection(collection);
})
