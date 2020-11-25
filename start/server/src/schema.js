const { gql } = require('apollo-server-express');


const typeDefs = gql`

schema {
  query: Query
  #  mutation: Mutation
}

type Query {
  structure : MainPageStructure
  banners (blockId: String): [PromoBlockItem]
  shelf (blockId: String): ShelfBlockItem
}

#type Mutation {
#TODO insert mutation queries
#}

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
  noScroll
  horizontalScroll
  horizontalScrollEndless
  horizontalPaging
  horizontalPagingEndless
}
enum BlockType {
  banners
  shelf
}
interface BlockItem {
  caption: String
}
type PromoBlockItem implements BlockItem {
  caption: String
  imageURL: String
  promoURL: String
  promoUuid: String
}
type ShelfBlockItem implements BlockItem {
  caption: String
  materials: [Material]
  viewOptions: ViewOptions
}

type Material {

  id: Int
  name: String
  pictureURL: String
  raiting: Float
  price: Float
  oldPrice: Float
  reviewsCount: Int
  card: Boolean
  favorites: Boolean
  discountPercent: Int
  articleType:ArticleType
  status: Status

}

type Status {
  type: StatusType
  conditions: Conditions
}

type Conditions {
  startDate:String
  endDate: String
}



type ViewOptions{
  buttons: ButtonOptions
}

type ButtonOptions{
  card: Boolean
  favorites: Boolean
  compare: Boolean
}

enum ArticleType {
  ZDGC
}

enum StatusType {
  Announce,
  Preorder,
  Sale
}

type MainPageStructure {
  version: String
  blocks: [Block]
}


  
  
`;

module.exports = typeDefs;