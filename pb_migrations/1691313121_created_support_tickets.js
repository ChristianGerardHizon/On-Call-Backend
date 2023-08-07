/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "shch5nig1fnif9v",
    "created": "2023-08-06 09:12:01.010Z",
    "updated": "2023-08-06 09:12:01.010Z",
    "name": "support_tickets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8ct4exo6",
        "name": "serviceOrderRef",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "ukk2h1jos3ikuj5",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "vypgouus",
        "name": "description",
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
        "id": "nzkaltsz",
        "name": "files",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("shch5nig1fnif9v");

  return dao.deleteCollection(collection);
})
