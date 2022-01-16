# API Specification

## Authentication and authorization

Use jwt-auth for node js.  
` npm install jsonwebtoken`

Bearer token is needed for some endpoints (check the endpoints specifications).

## Code Response

| Status code | Describe               |
| :---------- | :--------------------- |
| 1xx         | Informational response |
| 2xx         | Success                |
| 3xx         | Redirection            |
| 4xx         | Client error           |
| 5xx         | Server error           |

## Endpoint User

|        Endpoint        | Method |                Usage                                         |    Auth     |
| :--------------------: | :----: | :----------------------------------------------------------: | :---------: |
|     Login User         |  POST  | `/login`                                                     |     No      |
|     Get All Class      |  GET   | `/classes`                                                   |     Yes     |
|     Class by Id        |  GET   | `/classes/:id_class/moduls`                                          |     Yes     |
|     Modul by Id        |  GET   | `/classes/:id_class/moduls/:id_modul`                          |     Yes     |             |     Yes     |
|     Sub-Modul By Id    |  GET   | `/classes/:id_class/moduls/:id_modul/sub-moduls/:id_sub_modul`    |     Yes     |
<br>

## Endpoint Admin

|        Endpoint        | Method  |                Usage                        |    Auth    |
| :--------------------: | :-----: | :-----------------------------------------: | :--------: |
|     Add User           |  POST   | `/user/addUser`                                  |     Yes    |
|     Add Class          |  POST   | `/class/addClass`                                 |     Yes    |
|     Update Class       |  PATCH  | `/class/classes/:id_class/edit`                                 |     Yes    |
|     Add Modul          |  POST   | `/:id_class/addModul`                        |     Yes    |
|     Add sub Modul      |  POST   | `/:id_class/:id_modul/addSubModul`            |     Yes    |
|     Update sub Modul       |  PATCH  | `/:id_class/:id_modul/addSubModul/:id_sub_modul/edit`|     Yes    |
|     Delete sub Modul       |  DELETE  | `/:id_class/:id_modul/addSubModul/:id_Sub_Modul/delete`|     Yes    |

<br>

## User
------
### Login User

Request : 
 - Method : POST
 - endpoint : `/user/login`
 - Body : 
```json
{
    "email": "string",
    "password": "string"
}
```
Response :
```json
{
    "code": "number",
    "message": "string",
    "token": "string"
}
```

### Add User
Request : 
 - Method : POST
 - endpoint : `/user/add-user`
 - Header: 
    - Content-Type: aaplication/json
    - Accept : application/json
 - Body : 
```json
{   
    "name" : "string",
    "email": "string",
    "password": "string",
    "role": "string"
}
```

Response : 
```json
{
    "token": "string"
}
```

## Class
-----

### Get all class
Request : 
 - Method : GET
 - endpoint : `/class/classes`
 - header : 
    - Accept : application/json

Response : 
```json
{
    "code": "number",
    "message": "string",
    "data": [{
        "_id": ObjectId("123"),
        "name": "string",
        "description": "string",
        "card_picture": "url",
        "modul": [{
            "_id": ObjectId("123"),
            "name": "string",
            "description": "string",
            "card_picture": "url",
            "sub_modul": [{
                "_id": ObjectId("123"),
                "name": "string",
                "description": "string"
            }]
        }]
    },
    {
        "_id": ObjectId("123"),
        "name": "string",
        "description": "string",
        "card_picture": "url",
        "modul": [{
            "_id": ObjectId("123"),
            "name": "string",
            "description": "string",
            "card_picture": "url",
            "sub_modul": [{
                "_id": ObjectId("123"),
                "name": "string",
                "description": "string"
            }]
        }]
    }]
}
```

### CLass By Id
Request : 
 - Method : GET
 - endpoint : `/class/classes/:id_class`
 - header : 
    - Accept : application/json

Response : 
```json
{
    "code": "number",
    "message": "string",
    "data": [{
        "_id": ObjectId("123"),
        "name": "string",
        "description": "string",
        "card_picture": "url",
        "modul": [{
            "_id": ObjectId("123"),
            "name": "string",
            "description": "string",
            "card_picture": "url",
            "sub_modul": [{
                "_id": ObjectId("123"),
                "name": "string",
                "description": "string"
            },
            {
            "_id": ObjectId("123"),
            "name": "string",
            "description": "string",
            "card_picture": "url",
            "sub_modul": [{
                "_id": ObjectId("123"),
                "name": "string",
                "description": "string"
            }]
        }]
    }]
}
```
### Add Class
Request : 
 - Method : POST
 - endpoint : `/class/add_class`
 - header : 
    - Content Type : application/json
    - Accept : application/json
 - Body : 
```json
{
    "name": "string",
    "description": "string",
    "card_image": "string",
}
```

Response : 
```json
{
    "code": "number",
    "message": "string",
}
```
### Update Class
Request : 
 - Method : PATCH
 - endpoint : `/class/classes/:id_class/edit`
 - header : 
    - Content Type : application/json
    - Accept : application/json
 - Body : 
```json
{
    "name": "string",
    "description": "string",
    "card_image": "string",
}
```

Response : 
```json
{
    "code": "number",
    "message": "string",
}
```
## Modul
---------

### Add Modul
Request : 
 - Method : POST
 - endpoint : `/classes/:id_class/add-modul`
 - header : 
    - Content Type : application/json
    - Accept : application/json
 - Body : 
 ```json
 {
     "name": "string",
     "description": "string",
     "card_image": "string"
 }
 ```
Response : 
```json
{
    "code": "number",
    "message": "string",
}
```

### Modul by Id

Request : 
 - Method : GET
 - endpoint : `/classes/:id_class/moduls/:id_modul`
 - header : 
    - Accept : application/json

Response : 
```json
{
    "code": "number",
    "message": "string",
    "data": [{
            "_id": ObjectId("123"),
            "name": "string",
            "description": "string",
            "card_picture": "url",
            "sub_modul": [{
                "_id": ObjectId("123"),
                "name": "string",
                "description": "string"
            },
            {
            "_id": ObjectId("123"),
            "name": "string",
            "description": "string",
            "card_picture": "url",
            "sub_modul": [{
                "_id": ObjectId("123"),
                "name": "string",
                "description": "string"
            }]
        }]
    }]
}
```

## Sub Modul
-------
### View sub Modul By Id
Request : 
 - Method : GET
 - endpoint : `/classes/:classId/moduls/:modulId/submoduls/:IdSubmodul`
 - header : 
    - Accept : application/json

Response : 
```json
{
    "code": "number",
    "message": "string",
    "data": [{
                "_id": ObjectId("123"),
                "name": "string",
                "description": "string"
            }]
        }]
    }]
}
```
### Add sub-modul
Request : 
 - Method : POST
 - endpoint : `/classes/:id_class/moduls/:id_modul/add-sub-modul`
 - header : 
    - Content Type : application/json
    - Accept : application/json
 - Body : 
 ```json
 {
     "name": "string",
     "description": "string"
 }
 ```
Response : 
```json
{
    "code": "number",
    "message": "string",
}
```
### Update sub-modul
Request : 
 - Method : PATCH
 - endpoint : `/classes/:id_class/moduls/:id_modul/sub-modul/:id_sub_modul/edit`
 - header : 
    - Content Type : application/json
    - Accept : application/json
 - Body : 
 ```json
 {
     "name": "string",
     "description": "string"
 }
 ```
Response : 
```json
{
    "code": "number",
    "message": "string",
}
```
### Delete sub-modul
Request : 
 - Method : DELETE
 - endpoint : `/classes/:id_class/moduls/:id_modul/sub-modul/:id_sub_modul/delete`
 - header : 
    - Content Type : application/json
    - Accept : application/json
 - Body : 
 ```json
 {
     "name": "string",
     "description": "string"
 }
 ```
Response : 
```json
{
    "code": "number",
    "message": "string",
}
```








