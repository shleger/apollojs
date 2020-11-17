let struct = require('./public/structure.json')


const resolvers = {
    Query: {
        structure: () => ({
            version: "1.0.0",
            blocks: struct

        }),
        banners: (int) => ([{
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
        }])
    },
};

module.exports = resolvers
