const { gql } = require('apollo-server-express');


const typeDefs = gql`

schema {
  query: Query
  #  mutation: Mutation
}

type Query {
  structure : MainPageStructure
  structureAuth : MainPageStructure
  structureNoAuth : MainPageStructure
  #getStructure (apiRequestHeader: ApiRequestHeader): MainPageStructure
  #banners (blockId: String): PromoBlock
  shelf (id: String): ShelfBlock
  getPersonalBanners: PersonalBlockResponse
  personalBanner (id: ID!): PersonalBlockWidget
  
  
  personalBalance0: PersonalBlockBalanceWidget
  personalBalance1: PersonalBlockBalanceWidget
  personalBalance2: PersonalBlockBalanceWidget
  personalBalance3: PersonalBlockBalanceWidget
  personalBalance4: PersonalBlockBalanceWidget
   
  
  personalOrder0: PersonalBlockOrderResponse
  personalOrder1: PersonalBlockOrderResponse
  personalOrder2: PersonalBlockOrderResponse
  personalOrder3: PersonalBlockOrderResponse

  
  getPersonalPromo: PersonalBlockPromoResponse
  
  personalMapAuth: PersonalBlockWidget
  personalMapNoAuth: PersonalBlockWidget

  promoBlock(id: ID!): PromoBlockResponse
}

#type Mutation {
#TODO insert mutation queries
#}

#input ApiRequestHeader {
#  uniqueInstallationId: String!
#  location: String!
#  sessionId: String
#  os: String!
#  app_version: String!
# }

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
  options: BlockOptions
}

enum ScrollType {
  noScroll
  horizontal
  vertical
}

enum BlockType {
  banners
  shelf
}

enum BlockSize {
  compact
  normal
  large
}

union BlockOptions = PersonalBlockOptions | PromoBlockOptions | ShelfBlockOptions | ProductCardOptions

type ContainerOptions {
  caption: String
  scroll:ScrollType 
  background: Background
  blockOptions: BlockOptions
}


type PersonalBlockOptions {  
  buttonStyle: ButtonStyle  
}

type PromoBlockOptions  {
  blockSize: BlockSize 
  buttons: [Button]  
}

type ShelfBlockOptions {
  caption: String
  productCardOptions: ProductCardOptions
}

type ProductCardOptions  {  
  cardBackground: Background  
  displayActionsLabel: Boolean
  displayDiscountLabel: Boolean
  displayOldPrice: Boolean
  displayCartButton: Boolean
  displayFavoriteIcon: Boolean
  displayCampareIcon: Boolean
  displayCreditInfo: Boolean
  displayProductStatus: Boolean
  displayRating: Boolean
}


type Background {  
  color: String
  transparent: Int
  imageUrl: String
}

enum ButtonStyle {
  primary
  secondary
  secondaryIcon
  outline
}



type  Button{
  style: ButtonStyle
  caption: String
  icon: Icon
  link: AppLink
  visible: Boolean
  enabled: Boolean
}



type PromoBlockResponse {  
  items:[PromoItem]
}

type PromoItem {
  promoUuid: String!
  promoId: String
  caption: String
  imageURL: String      		
  dateStart: String
  dateEnd: String
  endless: Boolean
  promoURL: String
}


type ShelfBlock {
  options: ShelfBlockOptions
  products: [Product]
}


type Product {
  info: ProductInfo
  priceInfo: ProductPriceInfo
  ratingInfo: ProductRatingInfo
  state: ProductState 
  #creditInfo: ProductCreditInfo
  #bonusInfo: ProductBonusInfo    
}

type ProductInfo {
  id: Int #Идентификатор товара
  name: String #Наименование товара
  imageUrl: String #Ссылка на изображение товара
  articleType: ArticleType #Дополнительное описание (заполняется для цифровых кодов и подарочных карт)          
}

enum ArticleType {
  ZDGC
  GCAR
}


type ProductPriceInfo {
  actionPrice: Float #Актуальная цена товара (со скидкой)
  basePrice: Float #Старая(зачеркнутая) цена товара (без скидки)
  discountPercent: Int #Размер скидки (в процентах)
}

type ProductRatingInfo {
  rating: Float #Оценка товара
  reviewsCount: Int #Количество отзывов
}

type ProductState {
  statusName: String
  statusInfo: ProductStatusInfo #Статус продажи (announce/preorder/sale + период = начало/окончание предзаказа, либо начало продаж)
  flags: ProductFlags  
}

type ProductStatusInfo {
  status: ProductStatus  
  conditions: Conditions
}


enum ProductStatus {  
  announce,
  preorder,
  sale
}

type Conditions {
  startDate: String
  endDate: String
}

type ProductFlags {  
  isFloorSample: Boolean #Признак витринный образец
  isLastSample: Boolean #Признак Последний экземпляр
}


type ProductBonusInfo{
  amount: Int #Количество бонусных рублей
  description: String #Описание
}

type ProductCreditInfo {
  creditPrice: Float #Цена товара в кредит
  description: String #Описание условий кредита (например р/мес)
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
  balance #экран с бонусным балансом
  promoList #экран Все акции
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

enum Icon {
  box
  cart
  favorite
  compare
  user
}

interface BlockWidget {
  type: WidgetType!
  id: String!
  caption: String!
  text: String
  imageUrl: String    
}

type PersonalBlockWidget implements BlockWidget {
  type: WidgetType!
  id: String!
  caption: String!
  text: String
  imageUrl: String
  icon: Icon
  link: AppLink
}

type PersonalBlockBalanceWidget implements BlockWidget {
  type: WidgetType!  
  id: String!
  caption: String!
  text: String
  imageUrl: String!
  link: AppLink!
  balance: Int!
}

type PersonalBlockPromoWidget implements BlockWidget {
  type: WidgetType! 
  id: String! 
  caption: String!
  text: String
  imageUrl: String!
  link: AppLink!
  campaignId: String
  beginDate: String
  endDate: String
  showTimer: String
}

#type WidgetButton {
  #caption: String!
  #link: AppLink!
#}
type PersonalBlockOrderWidget implements BlockWidget {
  type: WidgetType!
  id: String!  
  caption: String!
  text: String
  imageUrl: String!
  orderCount: Int!
  orderId: String
  endReserveDate: String
  uberPickup: Boolean   
  button: Button
}



type PersonalBlockResponse {  
  items: [PersonalBlockWidget]
}

type PersonalBlockBalanceResponse {  
  items: [PersonalBlockBalanceWidget]
}

type PersonalBlockOrderResponse {  
  items: [PersonalBlockOrderWidget]
}

type PersonalBlockPromoResponse {  
  items: [PersonalBlockPromoWidget]
}




`;

module.exports = typeDefs;