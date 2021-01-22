let struct = require('./public/structure.json');
let persBanners = require('./public/personalbanners.json');

// const { GraphQLDate, GraphQLTime, GraphQLDateTime } = require('graphql-iso-date') ;

// const customScalarResolver = {
//   Date: GraphQLDateTime
// };

    // Date: GraphQLDate,
    // Query: {
    //     getPersonalBanners: () => ({
    //         items: persBanners

    //     }),

const resolvers = {
    // Date: GraphQLDate,
    Query: {
        getPersonalBanner: () => ({
            items: persBanners

        }),
        structure: () => ({
            version: "1.0.0",
            content: struct

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
                        "promoUuid": "acb33846-76f0-4666-ad47-03d1da9cacad"
                    },
                    {
                        "caption": "Акция «Эко trade-in»: меняем старую технику на скидки",
                        "imageURL": "https://static.mvideo.ru/icerock/mobile_media/2020/October/treid1440x932.png",
                        "promoURL": "promoURL2",
                        "promoUuid": "73655c22-1097-4a17-a272-fdbcb067d3b5"
                    },
                    {
                        "caption": "Смарт-часы Apple Watch Series 6",
                        "imageURL": "https://static.mvideo.ru/icerock/mobile_media/2020/September/frame_1.jpg",
                        "promoURL": "promoURL3",
                        "promoUuid": "ccb7af24-e0fc-4462-bf54-2647b00d2578"
                    },
                    {
                        "caption": "Планшет Apple iPad",
                        "imageURL": "https://static.mvideo.ru/icerock/mobile_media/2020/September/frame_9.jpg",
                        "promoURL": "promoURL4",
                        "promoUuid": "01986d2c-2869-49ad-bb5a-e17798bd7c23"
                    },
                    {
                        "caption": "Чёрная пятница!",
                        "imageURL": "https://static.mvideo.ru/icerock/mobile_media/2020/November/cherna-pyatnica.png",
                        "promoURL": "promoURL5",
                        "promoUuid": "46596913-d72f-41ac-95cc-bf56282b59ef"
                    },
                    {
                        "caption": "Смарт-часы Apple Watch Series 6",
                        "imageURL": "https://static.mvideo.ru/icerock/mobile_media/2020/September/frame_1.jpg",
                        "promoURL": "promoURL3",
                        "promoUuid": "3f9b8183-a658-440c-8050-2a7745523808"
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
