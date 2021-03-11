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

  mMagItems(id: ID!): [MMagItem]

}

union BlockOptions = PersonalBlockOptions | PromoBlockOptions | ShelfBlockOptions | DefaultBlockOptions

type MMagItem {
  type: BlockType!
  id: String!
  title: String
  targetURL: String
  mMagType: String #текстовое обозначение типа статьи
  imageURL: String
}

type NotFoundItem {
  type: BlockType!
  id: String!
  title: String
  description: String
  background: Background
  buttons: [Button]
}

type PersonalMapItem{
  type: BlockType!
  id: String!
  title: String
  icon: String # либо идентификатор локального ресурса либо  URL
  link: AppLink
  shopIds: [String]
}

type PersonalPromoItem{
  type: BlockType!
  id: String!
  title: String
  description: String
  icon: String! # либо идентификатор локального ресурса либо  URL
  link: AppLink!
  campaignId: String
  activePeriod: Period 
  showTimer: Boolean
}

type PersonalOrderItem{
  type: BlockType!
  id: String!
  title: String
  description: String
  icon: String# либо идентификатор локального ресурса либо  URL 
  link: AppLink #link внутри кнопки button, а у самого виджета нет
  orderCount: Int!
  orderId: String
  endReserveDate: String
  uberPickup: Boolean
  button: Button
}

type PersonalBalanceItem {
  type: BlockType!
  id: String!
  title: String
  description: String
  icon: String# либо идентификатор локального ресурса либо  URL
  link: AppLink
  balance: Int!
}

type PersonalNoAuthItem{
  type: BlockType!
  id: String!
  title: String
  description: String
  icon: String # либо идентификатор локального ресурса либо  URL
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
  title: String
  background: Background
  icon: String
  button: Button
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
  #buttons: [Button]  кнопка Все акции перенесена в контейнер
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
  isProductStatusDisplayed: Boolean!
  isRatingDisplayed: Boolean!
}

type Background {  
  color: String
  imageURL: String
}

type  Button{
  style: ButtonStyle
  title: String
  icon: String
  link: AppLink #может объединить link и url как это сделали с imageUrl и LocalImage? Будет link: String - парситься либо в URL либо в AppLInk
  url: String
}

type PromoItem {
  type: BlockType!
  id: String!
  promoUuid: String!
  promoId: String
  title: String
  imageURL: String  
  activePeriod: Period    		
  endless: Boolean
  promoURL: String
}

type ShelfItem { 
  type: BlockType!
  id: String!
  shelfOptions: ShelfBlockOptions
  totalProductCount: Int
  products: [Product]
}

type ShelfBlockOptions {
  title: String #заголовок подборки
  button: Button #настройки кнопки "Смотреть все" - заполняются для подборки с переключателями либо "К товару" если в группе с переключателями в подборке 1 товар
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
  imageURL: String #Ссылка на изображение товара
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
type DefaultBlockOptions {
  title: String
}


# type BlockOptions2 {
#   buttonStyle: ButtonStyle #используется в персблоке для указание стиля кнопок в виджете убер-пикапа
#   blockSize: BlockSize #используется в промоблоке для указание размера элемента в карусели 
#   buttons: [Button] #описание кнопок в блоке - используется в промо-блоке и блоке "Не нашли"

#   title: String #заголовок - используется в подборках и блоке "Не нашли"
#   description: String #подзаголовок - используется в блоке "Не нашли"
#   period: Period #срок действия подборки, заполняется для товаров дня
#   background: Background #фон блока с подборкой  - используется в подборках и блоке "Не нашли"
#   productsCount: Int #количество элементов, выводимых в подборке на главной / количество видимых элементов в блоке с переключателями  
#   productCardOptions: ProductCardOptions #настройки карточки товара в подборке
#  }

enum ButtonStyle {
  primary
  secondary
  #secondaryIcon
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
  shelfDetail #экран с листингом подборки
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
  mMag #MMag block
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
  mMag #MMag container
}

`;

module.exports = typeDefs;