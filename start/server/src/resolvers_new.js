let struct = require('./public/structure.json');
let structAuth = require('./public/structureAuth.json');
let structNoAuth = require('./public/structureNoAuth.json');

let persBanners = require('./public/personalbanners.json');
let persBalance = require('./public/personalBalance.json');
let persOrder = require('./public/personalOrder.json');

let promoBlockItems = require('./public/promoBlockItems.json');

let shelfBlock = require('./public/shelfBlock.json');
let shelfGroup = require('./public/shelfGroup.json');

let persPromo = require('./public/personalPromo.json');

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
        //   console.log("ZZZ: " + JSON.stringify(obj.buttons))
          if(obj.buttons && obj.buttons[0] && obj.buttons[0].url){
              return 'MMagBlockOptions';
          }
          
          return 'NotFoundBlockOptions'; // GraphQLError is thrown
        },
    },
    Query: {
        personalPromoItems: () => ({
            items: persPromo
        }),
        personalMapItem: () => ({
            "type": "authMap",
            "id": "AuthMap",
            "caption": "Магазины М.Видео",
            "imageUrl": "map.png",
            "link": "map"     
        }),
        mMagItems: () => (
             [{
                "title": "Умная одежда: новый тренд",
                "targetURL": "/obzor-umnoj-odezhdy-chto-kupit",
                "mMagType": "100005",   
                "imageURL": "http://mvideo.ru"
            }]
         ),
        // getPersonalBanners: () => ({
        //     items: persBanners

        // }),
        personalNoAuthItem(parent, args, context, info)  {
            //let result = persBanners.find(item => item.id === args.id)
            return persBanners.find(item => item.id === args.id)
            //return {items: persBanners}

        },        

                
        
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
            //return {items: shelfBlock}
            return {items: shelfGroup}
        } 

        
        
    }
};

module.exports = resolvers
