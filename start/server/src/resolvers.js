let struct = require('./public/structure.json')


const resolvers = {
    Query: {
        structure: () => ({
            version: "1.0.0",
            blocks: struct

        }),
    },
};

module.exports = resolvers
