const { gql } = require('apollo-server-express');


const typeDefs = gql`

schema {
  query: Query
  #  mutation: Mutation
}

type Query {
  structure : MainPageStructure
  banners (blockId: String): PromoBlock
  shelf (blockId: String): ShelfBlock
}

#type Mutation {
#TODO insert mutation queries
#}

type Container implements BlockOptions{
  scrollType: ScrollType
  container: String
  viewOptions: ViewOptions
  blocks: [Block]
}

type Block {
  type: String!
  auth: Boolean
  query: String!
  id: ID!
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

interface BlockOptions {
  viewOptions: ViewOptions
}

type PromoBlock implements BlockOptions {
  viewOptions: ViewOptions
  items:[PromoItem]
}

type PromoItem {
  caption: String
  imageURL: String
  promoURL: String
  promoUuid: String
}

type ShelfBlock implements BlockOptions {
  viewOptions: ViewOptions
  materials: [Material]
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
  background: BackgroundOptions
}

type BackgroundOptions{
  color: String
  imageUrl: String
}

type ButtonOptions{
  card: Boolean
  favorites: Boolean
  compare: Boolean
  close: Boolean
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
  content: [Container]
}


  
  
`;

module.exports = typeDefs;