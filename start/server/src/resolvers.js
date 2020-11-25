let struct = require('./public/structure.json')

// const { GraphQLDate, GraphQLTime, GraphQLDateTime } = require('graphql-iso-date') ;

// const customScalarResolver = {
//   Date: GraphQLDateTime
// };


const resolvers = {
    // Date: GraphQLDate,
    Query: {
        structure: () => ({
            version: "1.0.0",
            blocks: struct

        }),
        banners: () => ({
            "viewOptions": {
                "buttons": {
                    "favorites": false,
                    "close": false
                }
            },
                "items": [
                    {
                        "caption": "Чёрная пятница!",
                        "imageURL": "https://static.mvideo.ru/icerock/mobile_media/2020/November/cherna-pyatnica.png",
                        "promoURL": "promoURL1",
                        "promoUuid": "f913f8c6-4562-47c5-8fd0-f768789ed2d3"
                    },
                    {
                        "caption": "Акция «Эко trade-in»: меняем старую технику на скидки",
                        "imageURL": "https://static.mvideo.ru/icerock/mobile_media/2020/October/treid1440x932.png",
                        "promoURL": "promoURL2",
                        "promoUuid": "3c0d4797-755a-4c72-8606-a0809c74fbe4"
                    },
                    {
                        "caption": "Смарт-часы Apple Watch Series 6",
                        "imageURL": "https://static.mvideo.ru/icerock/mobile_media/2020/September/frame_1.jpg",
                        "promoURL": "promoURL3",
                        "promoUuid": "12b3f450-c9b9-4c2c-ba0e-20c7a4465208"
                    },
                    {
                        "caption": "Планшет Apple iPad",
                        "imageURL": "https://static.mvideo.ru/icerock/mobile_media/2020/September/frame_9.jpg",
                        "promoURL": "promoURL4",
                        "promoUuid": "3e5fe517-b386-4717-a04d-7eec46c4de17"
                    },
                    {
                        "caption": "Чёрная пятница!",
                        "imageURL": "https://static.mvideo.ru/icerock/mobile_media/2020/November/cherna-pyatnica.png",
                        "promoURL": "promoURL5",
                        "promoUuid": "f913f8c6-4562-47c5-8fd0-f768789ed2d3"
                    },
                    {
                        "caption": "Смарт-часы Apple Watch Series 6",
                        "imageURL": "https://static.mvideo.ru/icerock/mobile_media/2020/September/frame_1.jpg",
                        "promoURL": "promoURL3",
                        "promoUuid": "12b3f450-c9b9-4c2c-ba0e-20c7a4465208"
                    }
                ]
            }       
        ),
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
                    "articleType": "ZDGC",
                    "status": {
                        "type": "Preorder",
                        "conditions": {
                            "startDate": "2020-11-25",
                            "endDate": "2020-12-31"
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
                    "articleType": null,
                    "status": {
                        "type": "Sale",
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
                    "articleType": null,
                    "status": {
                        "type": "Sale",
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
                    "articleType": null,
                    "status": {
                        "type": "Sale",
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
                    "articleType": null,
                    "status": {
                        "type": "Sale",
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
                    "articleType": null,
                    "status": {
                        "type": "Sale",
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
