migrate((db) => {
  const collection = new Collection({
    "id": "j6a1tfsouqssz42",
    "created": "2023-08-03 08:37:54.621Z",
    "updated": "2023-08-03 08:37:54.621Z",
    "name": "public_service_providers",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hhbtj3c8",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id, service_providers.public_name FROM service_providers WHERE service_providers.isPublic == TRUE"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j6a1tfsouqssz42");

  return dao.deleteCollection(collection);
})
