let struct = require('./public/structure.json')


const resolvers = {
    Query: {
        structure: () => ({
            version: "1.0.0",
            blocks: struct

        }),
        banners: () => ([{
            caption:"12",
            imageURL:"http://aaa1.as",
            promoURL:"http://aaa1.as.dd",
            promoUuid:"45"
        },
        {
            caption:"12",
            imageURL:"http://aaa2.as",
            promoURL:"http://aaa2.as.dd",
            promoUuid:"45"
        }]),
        shelf: () => ({
            
                "viewOptions": {
                  "buttons": {
                    "card": true,
                    "favorites": false,
                    "compare": false
                  }
                },
                "materials": [
                  {
                    "id": 30046138,
                    "name": "Смартфон Xiaomi Redmi Note 8 Pro 6+128GB Mineral Grey",
                    "pictureURL": "https://img.mvideo.ru/Pdb/30046138.jpg",
                    "raiting": 4.6,
                    "price": 21990,
                    "oldPrice": 18990,
                    "reviewsCount": 50,
                    "card": false,
                    "favorites": false,
                    "discountPercent": 15,
                    "articleType": null,
                    "status": {
                      "type": {},
                      "conditions": {
                        "startDate": null,
                        "endDate": null
                      }
                    }
                  },
                  {
                    "id": "20063291",
                    "name": "Пылесос ручной (handstick) Tefal Air Force 160 blue TY7231WO",
                    "pictureURL": "https://img.mvideo.ru/Pdb/20063291.jpg",
                    "raiting": "4.6",
                    "price": "18900",
                    "oldPrice": null,
                    "reviewsCount": 59,
                    "card": false,
                    "favorites": false,
                    "discountPercent": null,
                    "articleType": false,
                    "status": {
                      "type": {},
                      "conditions": {
                        "startDate": null,
                        "endDate": null
                      }
                    }
                  },
                  {
                    "id": 50049029,
                    "name": "Наушники накладные Bluetooth JBL T460BT Black (JBLT460BTBLK)",
                    "pictureURL": "https://img.mvideo.ru/Pdb/50049029.jpg",
                    "raiting": 4.2,
                    "price": 2290,
                    "oldPrice": 1790,
                    "reviewsCount": 228,
                    "card": false,
                    "favorites": false,
                    "discountPercent": 20,
                    "articleType": false,
                    "status": {
                      "type": {},
                      "conditions": {
                        "startDate": null,
                        "endDate": null
                      }
                    }
                  },
                  {
                    "id": 20068767,
                    "name": "Кофемашина капсульного типа Dolce Gusto Krups Piccolo XS KP1A3B10",
                    "pictureURL": "https://img.mvideo.ru/Pdb/20068767.jpg",
                    "raiting": 4.8,
                    "price": 7990,
                    "oldPrice": 4990,
                    "reviewsCount": 9,
                    "card": false,
                    "favorites": false,
                    "discountPercent": 10,
                    "articleType": false,
                    "status": {
                      "type": {},
                      "conditions": {
                        "startDate": null,
                        "endDate": null
                      }
                    }
                  },
                  {
                    "id": 20067280,
                    "name": "Электрогриль Redmond SteakMaster RGM-M816P SteakMaster RGM-M816P",
                    "pictureURL": "https://img.mvideo.ru/Pdb/20067280.jpg",
                    "raiting": 4.8,
                    "price": 15990,
                    "oldPrice": 9990,
                    "reviewsCount": 16,
                    "card": false,
                    "favorites": false,
                    "discountPercent": null,
                    "articleType": false,
                    "status": {
                      "type": {},
                      "conditions": {
                        "startDate": null,
                        "endDate": null
                      }
                    }
                  },
                  {
                    "id": 30052942,
                    "name": "Смартфон Apple iPhone 11 128GB Black (MHDH3RU/A)",
                    "pictureURL": "https://img.mvideo.ru/Pdb/30052942.jpg",
                    "raiting": null,
                    "price": 59990,
                    "oldPrice": 9990,
                    "reviewsCount": null,
                    "card": false,
                    "favorites": false,
                    "discountPercent": null,
                    "articleType": false,
                    "status": {
                      "type": {

                      },
                      "conditions": {
                        "startDate": null,
                        "endDate": null
                      }
                    }
                  }
                ]
          
        })
    },
};

module.exports = resolvers
