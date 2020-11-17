const { gql } = require('apollo-server-express');


const typeDefs = gql`

schema {
  query: Query
#  mutation: Mutation
}

type Query {
  structure : MainPageStructure
  banners (blockId: String): [PromoBlockItem]
  shelf (blockId: String): [ShelfBlockItem]
}

#type Mutation {
#TODO insert mutation queries
#}

scalar JSON

interface CoreBlock {
  type: String!
  id: ID!
  caption: String
  order: Int
  scrollType: ScrollType
  items: [BlockItem]
}
type Block implements CoreBlock {
  type: String!
  id: ID!
  caption: String
  order: Int
  scrollType: ScrollType
  items: [BlockItem]
}
enum ScrollType {
  noScroll,
  horizontalScroll,
  horizontalScrollEndless,
  horizontalPaging,
  horizontalPagingEndless
}
enum BlockType {
  banners,
  shelf
}
interface BlockItem {
  caption: String
}
type PromoBlockItem implements BlockItem {
  caption: String
  imageURL: String
  promoURL: String
  promoUuid: Int
}
type ShelfBlockItem implements BlockItem {
  caption: String
  materialId: Int
}
type MainPageStructure {
  version: String
  blocks: [Block]
}

  
  
`;

module.exports = typeDefs;