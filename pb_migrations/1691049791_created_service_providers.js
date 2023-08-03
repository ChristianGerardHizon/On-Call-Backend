migrate((db) => {
  const collection = new Collection({
    "id": "j1qxxjwp8eq6pqx",
    "created": "2023-08-03 08:03:11.535Z",
    "updated": "2023-08-03 08:03:11.535Z",
    "name": "service_providers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pyflleru",
        "name": "first_name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "us87wlr3",
        "name": "last_name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zmeeooip",
        "name": "avatar",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "jcazdmyp",
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
  const collection = dao.findCollectionByNameOrId("j1qxxjwp8eq6pqx");

  return dao.deleteCollection(collection);
})
