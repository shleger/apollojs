let struct = require('./public/structure.json');
let structAuth = require('./public/structureAuth.json');
let structNoAuth = require('./public/structureNoAuth.json');

let persBanners = require('./public/personalbanners.json');
let persBalance = require('./public/personalBalance.json');
let persOrder = require('./public/personalOrder.json');

let promoBlockItems = require('./public/promoBlockItems.json');

let shelfBlock = require('./public/shelfBlock.json');

const resolvers = {
    BlockOptions: {
        __resolveType(obj, context, info){
          if(obj.buttonStyle){
            return 'PersonalBlockOptions';
          }
          if(obj.blockSize){
            return 'PromoBlockOptions';
          }
          if(obj.cardBackground){
            return 'ProductCardOptions';
          }
          if(obj.productCardOptions){
            return 'ShelfBlockOptions';
          }
          return 'PersonalBlockOptions'; // GraphQLError is thrown
        },
    },
    Query: {
        personalMapAuth: () => ({
            "type": "authMap",
            "id": "AuthMap",
            "caption": "Магазины М.Видео",
            "imageUrl": "map.png",
            "link": "map"     
        }),
        personalMapNoAuth: () => (
            {
                "type": "noAuthMap",
                "id": "noAuthMap",
                "caption": "Магазины на карте",
                "imageUrl": "map.png",
                "link": "map"  
            }
        ),
        getPersonalBanners: () => ({
            items: persBanners

        }),
        personalBanner(parent, args, context, info)  {
            //let result = persBanners.find(item => item.id === args.id)
            return persBanners.find(item => item.id === args.id)
            //return {items: persBanners}

        },        

                
        personalBalance0:  () => (           
            persBalance[0]
        ),
        personalBalance1:  () => (           
            persBalance[1]
        ),
        personalBalance2:  () => (           
            persBalance[2]
        ),
        personalBalance3:  () => (           
            persBalance[3]
        ),
        personalBalance4:  () => (           
            persBalance[4]
        ),

        personalOrder0:  () => ({           
            items: persOrder.personalOrder0
        }),
        personalOrder1:  () => ({
            items: persOrder.personalOrder1
        }),
        personalOrder2:  () => ({
            items: persOrder.personalOrder2
        }),
        personalOrder3:  () => ({
            items: persOrder.personalOrder3
        }),
        
        structure: () => ({
            version: "1.0.0",
            content: struct

        }),
        structureAuth: () => ({
            version: "1.0.0",
            content: structAuth

        }),
        structureNoAuth: () => ({
            version: "1.0.0",
            content: structNoAuth

        }),
        
        promoBlock (parent, args, context, info) {
            let result = {items: promoBlockItems}
            return result;

        },
        
        shelf (parent, args, context, info) {            
            let result =  {
                "options": shelfBlock.options,
                "products": shelfBlock.products
            };            
            return result;
        }   
    }
};

module.exports = resolvers
