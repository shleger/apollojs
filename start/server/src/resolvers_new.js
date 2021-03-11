let struct = require('./public/structure.json');
let structAuth = require('./public/structureAuth.json');
let structNoAuth = require('./public/structureNoAuth.json');

let persBanners = require('./public/personalbanners.json');
let persBalance = require('./public/personalBalance.json');
let persOrder = require('./public/personalOrder.json');

let promoBlockItems = require('./public/promoBlockItems.json');

let shelfBlock = require('./public/shelfBlock.json');
let shelfGroup = require('./public/shelfGroup.json');
let goodOfDay = require('./public/goodOfDay.json');

let persPromo = require('./public/personalPromo.json');

let mMagItems = require('./public/mMagItems.json');

const resolvers = {
    BlockOptions: {
        __resolveType(obj, context, info){
          if(obj.buttonStyle){
            return 'PersonalBlockOptions';
          }
          if(obj.blockSize){
            return 'PromoBlockOptions';
          }
          if(obj.productCardOptions){
            return 'ShelfBlockOptions';
          }          
          return 'DefaultBlockOptions'; // GraphQLError is thrown
        },
    },
    Query: {
        
        promoItems (parent, args, context, info)  {
            return promoBlockItems
        },
        mMagItems (parent, args, context, info)  {
            return mMagItems
        },
        // getPersonalBanners: () => ({
        //     items: persBanners

        // }),
        personalNoAuthItem(parent, args, context, info)  {
            //let result = persBanners.find(item => item.id === args.id)
            return persBanners.find(item => item.id === args.id)
            //return {items: persBanners}

        },        
        personalBalanceItem(parent, args, context, info)  {
            return persBalance[0] //индекс можно менять от 0 до 4          

        },
        personalOrderItems(parent, args, context, info)  {
            return persOrder.personalOrder2 //индекс можно менять от 0 до 3          
        },
        personalPromoItems(parent, args, context, info)  {
            return persPromo
        },
        personalMapItem: () => ({
            "type": "authMap",
            "id": "authMap",
            "title": "Магазины М.Видео",
            "icon": "map",
            "link": "map",
            "shopIds": [
                "S018",
                "S019",
                "S412",
                "S014"
            ]     
        }),        
        
        structure: () => ({
            version: "1.1.0",
            content: struct

        }),
        structureAuth: () => ({
            version: "1.1.0",
            options: {"background": {"color": "gradient"}},      
            content: structAuth //структура авторизованого. для неавторизованного использовать structNoAuth

        }),
        structureNoAuth: () => ({
            version: "1.1.0",
            options: {"background": {"color": "gradient"}},
            content: structNoAuth //структура неавторизованого. для авторизованного использовать structAuth            

        }),        
        shelfItems (parent, args, context, info) {            
            if (args.type == "shelf") {
                return shelfBlock
            }
            if (args.type == "shelfGroup") {
                return shelfGroup
            }
            if (args.type == "goodOfDay") {
                return goodOfDay
            }           
        }  
        
    }
};

module.exports = resolvers
