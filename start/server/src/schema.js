const { gql } = require('apollo-server-express');


const typeDefs = gql`

schema {
  query: Query
  #  mutation: Mutation
}

type Query {
  structure : MainPageStructure
  getStructure (apiRequestHeader: ApiRequestHeader): MainPageStructure
  banners (blockId: String): PromoBlock
  shelf (blockId: String): ShelfBlock
  getPersonalBanner: PersonalBlockResponse
}

#type Mutation {
#TODO insert mutation queries
#}

input ApiRequestHeader {
  uniqueInstallationId: String!
  location: String!
  sessionId: String
  os: String!
  app_version: String!
 }

type Container {
  containerId: String
  containerType: String
  options: ContainerOptions
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


type ContainerOptions {
  caption: String
  scroll:ScrollType 
  background: Background
  button: Button
}

type Background {
  image: String
  color: String
  transparent: Int!
  imageUrl: String!
}

type  Button{
  title: String
  background: Background
  url: String
  showSize: Boolean
  date: DatePeriod

}

type DatePeriod{
  start: String
  end: String
}



type PromoBlock {
  options: BlockOptions
  items:[PromoItem]
}

type PromoItem {
  caption: String
  imageURL: String
  promoURL: String
  promoUuid: String
}

type ShelfBlock{
  options: BlockOptions
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



type BlockOptions{
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


enum AppLink {
  auth   # экран авторизации
  map   # карта с магазинами
  profile  # профиль
  orderDetail  # детали заказа
  orderList  # список заказов
  rateApp # экран оценки приложения
  rateOrder # экран оценки заказа
  rateProduct # экран оценки товара
  productDetail # карточка товара
  promoDetail # экран с деталями перс.предложения
  loyalty # экран с условиями программы лояльности
}
enum WidgetType {
  signIn #кнопка авторизации в неавторизованном перс.блоке
  noAuthBanner #баннер с призывом авторизоваться в неавторизованном перс.блоке
  noAuthMap #карта магазинов в неавторизованном перс.блоке
  authMap #карта магазинов в авторизованном перс.блоке
  personalOrder #виджет с активным заказом (убер пикап)
  personalBalance #виджет с балансом бонусных рублей
  personalPromo #виджет с перс.предложением
  rateApp #оцените приложение
}
interface BlockWidget {
  type: WidgetType!
  id: String!
  caption: String!
  text: String
  imageUrl: String!
  link: AppLink!
}

type PersonalBlockWidget implements BlockWidget {
  type: WidgetType!
  id: String!
  caption: String!
  text: String
  imageUrl: String!
  link: AppLink!
}

enum ButtonShape {
  rectangle 
  #прямоугольная
  rounded 
  #прямоугольная со скругленными углами
  elipse 
  #овальная
}

type PersonalViewOptions {
  button: ButtonStyle!
}
type ButtonStyle {
  # must?
  shape: ButtonShape
  color: String!
}


type PersonalBlockResponse {
  #options: PersonalViewOptions
  items: PersonalBlockWidget
}

`;

module.exports = typeDefs;