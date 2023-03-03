import { DMMF } from "@prisma/generator-helper"

export const getSampleDMMF = (): { datamodel: DMMF.Datamodel } => {
  return {
    datamodel: {
      "enums": [],
      "models": [
        {
          "name": "User",
          "dbName": null,
          "fields": [
            {
              "name": "id",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": true,
              "isReadOnly": false,
              "hasDefaultValue": true,
              "type": "Int",
              "default": {
                "name": "autoincrement",
                "args": []
              },
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "email",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": true,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "String",
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "name",
              "kind": "scalar",
              "isList": false,
              "isRequired": false,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "String",
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "posts",
              "kind": "object",
              "isList": true,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "Post",
              "relationName": "PostToUser",
              "relationFromFields": [],
              "relationToFields": [],
              "isGenerated": false,
              "isUpdatedAt": false
            }
          ],
          "primaryKey": null,
          "uniqueFields": [],
          "uniqueIndexes": [],
          "isGenerated": false
        },
        {
          "name": "Post",
          "dbName": null,
          "fields": [
            {
              "name": "id",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": true,
              "isReadOnly": false,
              "hasDefaultValue": true,
              "type": "Int",
              "default": {
                "name": "autoincrement",
                "args": []
              },
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "title",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "String",
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "content",
              "kind": "scalar",
              "isList": false,
              "isRequired": false,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "String",
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "published",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": true,
              "type": "Boolean",
              "default": false,
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "author",
              "kind": "object",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "User",
              "relationName": "PostToUser",
              "relationFromFields": [
                "authorId"
              ],
              "relationToFields": [
                "id"
              ],
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "authorId",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": true,
              "hasDefaultValue": false,
              "type": "Int",
              "isGenerated": false,
              "isUpdatedAt": false
            }
          ],
          "primaryKey": null,
          "uniqueFields": [],
          "uniqueIndexes": [],
          "isGenerated": false
        }
      ],
      "types": []
    }
  }
}
