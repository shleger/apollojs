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

  personalNoAuthItem (id: ID!): PersonalNoAuthItem
  personalBalanceItem: PersonalBalanceItem
  personalOrderItems: [PersonalOrderItem] 
  personalPromoItems: [PersonalPromoItem]
  personalMapItem: PersonalMapItem

  promoItems(id: ID!): [PromoItem]

  shelfItems (id: ID!, type: String, itemsCount: Int, getAll:Boolean): [ShelfItem]

  notFoundItem: NotFoundItem

  mMagItems: [MMagItem]

}

union BlockOptions = PersonalBlockOptions | PromoBlockOptions | ShelfBlockOptions | NotFoundBlockOptions

type MMagItem{
  type: BlockType!
  id: String!
  title: String
  targetURL: String
  mMagType: Int
  imageURL: String

}

type NotFoundItem {
  type: BlockType!
  id: String!
  title: String
  text: String
  background: Background
  buttons: [Button]
}

type PersonalMapItem{
  type: BlockType!
  id: String!
  title: String!
  #text: String
  icon: String # либо идентификатор локального ресурса либо  URL
  link: AppLink
  shopIds: [Int]
}

type PersonalPromoItem{
  type: BlockType!
  id: String!
  caption: String!
  text: String
  icon: String! # либо идентификатор локального ресурса либо  URL
  link: AppLink!
  campaignId: String
  beginDate: String
  endDate: String
  showTimer: Boolean
}

type PersonalOrderItem{
  type: BlockType!
  id: String!
  title: String!
  text: String
  icon: String# либо идентификатор локального ресурса либо  URL
  link: AppLink
  orderCount: Int!
  orderId: String
  endReserveDate: String
  uberPickup: Boolean
  button: Button
}

type PersonalBalanceItem {
  type: BlockType!
  id: String!
  title: String!
  text: String
  icon: String# либо идентификатор локального ресурса либо  URL
  link: AppLink
  balance: Int!
}

type PersonalNoAuthItem{
  type: BlockType!
  id: String!
  title: String!
  text: String
  icon: String# либо идентификатор локального ресурса либо  URL
  link: AppLink
}

type MainPageStructure {
  version: String
  options: MainPageOptions
  content: [Container]
}

type MainPageOptions {
  background: Background
}

type Container {
  containerId: ID!
  containerType: ContainerType!
  options: ContainerOptions
  blocks: [Block]
}

type ContainerOptions {
  caption: String
  background: Background
  blockOptions: BlockOptions
}

type Block {
  type: BlockType!  
  id: ID!
  options: BlockOptions
}

type PersonalBlockOptions {  
  buttonStyle: ButtonStyle  
}

type PromoBlockOptions  {
  blockSize: BlockSize 
  buttons: [Button]  
}

scalar DateTime

type Period {
  startDateTime: DateTime
  endDateTime: DateTime
}

type ProductCardOptions   {  
  cardBackground: Background  
  isActionsLabelDisplayed: Boolean!
  isDiscountLabelDisplayed: Boolean!
  isOldPriceDisplayed: Boolean!
  isCartButtonDisplayed: Boolean!
  isFavoriteIconDisplayed: Boolean!
  isCompareIconDisplayed: Boolean!
  isCreditInfoDisplayed: Boolean!
  isProductStatusDisplayed: Boolean!
  isRatingDisplayed: Boolean!
}

type Background {  
  color: String
  imageUrl: String
}

type  Button{
  style: ButtonStyle
  caption: String
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

type ShelfItem { 
  shelfOptions: ShelfBlockOptions
  totalProductCount: Int
  products: [Product]
}

type ShelfBlockOptions {
  caption: String #заголовок подборки
  buttons: [Button] #настройки кнопки "Смотреть все" - заполняются для подборки с переключателями
  period: Period #срок действия подборки, заполняется для товаров дня
  background: Background #фон блока с подборкой
  productsCount: Int #количество элементов, выводимых в подборке на главной / количество видимых элементов в блоке с переключателями  
  productCardOptions: ProductCardOptions #настройки карточки товара в подборке
}

type Product {
  info: ProductInfo
  priceInfo: ProductPriceInfo
  ratingInfo: ProductRatingInfo
  stateInfo: ProductStateInfo
}
 
type ProductInfo {
  id: ID #Идентификатор товара
  name: String #Наименование товара
  imageUrl: String #Ссылка на изображение товара
  articleType: String #Дополнительное описание (заполняется для цифровых кодов и подарочных карт)         
}
 
type ProductPriceInfo {
  actionPrice: Float #Актуальная цена товара (со скидкой)
  basePrice: Float #Базовая цена товара (без скидки)
  discountPercent: Int #Размер скидки (в процентах)
}
 
type ProductRatingInfo {
  rating: Float #Оценка товара
  reviewsCount: Int #Количество отзывов
}
type ProductStateInfo {
  stateName: String
  color: String
}
type NotFoundBlockOptions {
  caption: String
  text: String
  background: Background
  buttons: [Button]
}


# type BlockOptions2 {
#   buttonStyle: ButtonStyle #используется в персблоке для указание стиля кнопок в виджете убер-пикапа
#   blockSize: BlockSize #используется в промоблоке для указание размера элемента в карусели 
#   buttons: [Button] #описание кнопок в блоке - используется в промо-блоке и блоке "Не нашли"

#   caption: String #заголовок - используется в подборках и блоке "Не нашли"
#   text: String #подзаголовок - используется в блоке "Не нашли"
#   period: Period #срок действия подборки, заполняется для товаров дня
#   background: Background #фон блока с подборкой  - используется в подборках и блоке "Не нашли"
#   productsCount: Int #количество элементов, выводимых в подборке на главной / количество видимых элементов в блоке с переключателями  
#   productCardOptions: ProductCardOptions #настройки карточки товара в подборке
#  }

enum ButtonStyle {
  primary
  secondary
  secondaryIcon
  outline
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

enum BlockType {
  appHeader
  signIn
  noAuthBanner #персблок неавторизованного пользователя - баннер
  noAuthMap #персблок неавторизованного пользователя - карта
  authMap #персблок авторизованного пользователя - карта
  personalTitle #приветствие в авторизованном блоке например "Константин, добрый день"
  personalBalance #персблок авторизованного пользователя - виджет лояльности
  personalOrder #персблок авторизованного пользователя - виджет с активным заказом
  personalPromo #персблок авторизованного пользователя - виджет с перс.предложением
  rateApp #персблок авторизованного пользователя - оценка приложения
  promo #промо-блок(выгодные акции)
  search #поиск
  goodOfDay #Товары дня
  shelf #Простая подборка - Хиты продаж, В тренде и тп
  shelfGroup #Подборка с переключателями
  banners #баннеры
  reviews #Новости и обзоры /ММаг
  alreadyViewed #Вы смотрели
  notFound #Не нашли
}

enum BlockSize {
  compact
  normal
  large
}

enum ContainerType {
  header #Заголовок приложения - навбар с логотипом и иконками + приветствие пользователя в персблоке
  personalAuth #персблок авторизованного пользователя
  personalNoAuth #персблок неавторизованного пользователя
  promo #промо-блок(выгодные акции)
  search #поиск
  goodOfDay #Товары дня
  shelf #Простая подборка - Хиты продаж, В тренде и тп
  shelfGroup #Подборка с переключателями
  banners #баннеры
  reviews #Новости и обзоры /ММаг
  alreadyViewed #Вы смотрели
  notFound #Не нашли
}

`;

module.exports = typeDefs;