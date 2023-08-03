migrate((db) => {
  const collection = new Collection({
    "id": "u03zwnntnk69f5i",
    "created": "2023-08-03 08:05:18.247Z",
    "updated": "2023-08-03 08:05:18.247Z",
    "name": "services",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "39qrm9me",
        "name": "name",
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
        "id": "hs5i9zig",
        "name": "isPublic",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("u03zwnntnk69f5i");

  return dao.deleteCollection(collection);
})
