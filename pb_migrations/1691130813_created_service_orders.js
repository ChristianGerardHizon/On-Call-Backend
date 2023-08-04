/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ukk2h1jos3ikuj5",
    "created": "2023-08-04 06:33:33.785Z",
    "updated": "2023-08-04 06:33:33.785Z",
    "name": "service_orders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "veytlhiy",
        "name": "user_ref",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "email"
          ]
        }
      },
      {
        "system": false,
        "id": "uhqbrl0q",
        "name": "service_provider_ref",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "j1qxxjwp8eq6pqx",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "public_name"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ukk2h1jos3ikuj5");

  return dao.deleteCollection(collection);
})
