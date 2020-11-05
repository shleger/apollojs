const { gql } = require('apollo-server');

const typeDefs = gql`
  
  interface CoreBlock {
    type: String!
    id: ID!
    caption: String
    order: Int
    scrollType: ScrollType
    items: [BlockItem]
    blocks: [CoreBlock]
    loader: String
  }
  
  type Block implements CoreBlock {
    type: String!
    id: ID!
    caption: String
    order: Int
    scrollType: ScrollType
    items: [BlockItem]
    blocks: [CoreBlock]
    loader: String
  }
  
  enum ScrollType {
    noScroll,
    horizontalScroll,
    horizontalScrollEndless,
    horizontalPaging,
    horizontalPagingEndless
  }
  
  enum BlockType {
    search,
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
    materialId: Int
    caption: String
  }
  
  type MainPageStructure {
    version: String
    blocks: [CoreBlock]
  }
  
  type Query {
    getStructure : MainPageStructure
    getContent (blockType: BlockType, blockId: String): CoreBlock
    getBanners (blockId: String): [PromoBlockItem]
    getShelf (blockId: String): [ShelfBlockItem]
  
  }
  
  
`;

module.exports = typeDefs;