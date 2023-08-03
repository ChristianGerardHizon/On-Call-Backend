migrate((db) => {
  const collection = new Collection({
    "id": "kdruhc60eq1n3v1",
    "created": "2023-08-03 08:20:11.279Z",
    "updated": "2023-08-03 08:20:11.279Z",
    "name": "service_provider_services",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6ppkvsgb",
        "name": "service_provider_id",
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
      },
      {
        "system": false,
        "id": "tselq8bw",
        "name": "service_id",
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
  const collection = dao.findCollectionByNameOrId("kdruhc60eq1n3v1");

  return dao.deleteCollection(collection);
})
