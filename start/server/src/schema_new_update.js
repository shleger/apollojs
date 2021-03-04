const { gql } = require('apollo-server-express');


const typeDefs = gql`

schema {
  query: Query
  #  mutation: Mutation
}

type Query {
  structure : MainPageStructure #+
  structureAuth : MainPageStructure #+
  structureNoAuth : MainPageStructure #+
  
  personalNoAuthItem (id: ID!): PersonalNoAuthItem #+
  personalBalanceItem: PersonalBalanceItem #+
  personalOrderItems: [PersonalOrderItem]#+
  personalPromoItems: [PersonalPromoItem]#+
  personalMapItem: PersonalMapItem#+
  

  promoItems(id: ID!): [PromoItem] #+
  shelfItems (id: ID!, type: String, itemsCount: Int, getAll:Boolean): [ShelfItem] #+

  notFoundItem: NotFoundItem #+

  mMagItems: [MMagItem] #+
}

#type Mutation {
#TODO insert mutation queries
#}



scalar Date

scalar DateTime

type Container {
  containerId: String!
  containerType: ContainerType!
  options: ContainerOptions
  blocks: [Block]
}

enum ContainerType {
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

type Block {
  type: BlockType!  
  #query: String! 
  id: ID!
  options: BlockOptions
}



#enum ScrollType {
  #noScroll
  #horizontal
  #vertical
#}

enum BlockType {
  appHeader
  signIn
  personalWidget #персблок неавторизованного пользователя - баннер
  
  personalNoAuthMap #персблок неавторизованного пользователя - карта
  personalAuthMap #персблок авторизованного пользователя - карта  
  
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


#union BlockOptions = PersonalBlockOptions | PromoBlockOptions | ShelfBlockOptions | ProductCardOptions


type PersonalBlockOptions  {  
  buttonStyle: ButtonStyle  
}

type PromoBlockOptions  {
  blockSize: BlockSize 
  buttons: [Button]  
}

type ShelfOptions {
  title: String #заголовок подборки
  buttons: [Button] #настройки кнопки "Смотреть все" - заполняются для подборки с переключателями
  period: Period #срок действия подборки, заполняется для товаров дня
  background: Background #фон блока с подборкой
  productsCount: Int #количество элементов, выводимых в подборке на главной / количество видимых элементов в блоке с переключателями  
  productCardOptions: ProductCardOptions #настройки карточки товара в подборке
}

type ProductCardOptions {  
  cardBackground: Background  
  isActionsLabelDisplayed: Boolean!
  isDiscountLabelDisplayed: Boolean!
  isOldPriceDisplayed: Boolean!
  isCartButtonDisplayed: Boolean!
  isFavoriteIconDisplayed: Boolean!
  isCompareIconDisplayed: Boolean! 
  isProductStatusDisplayed: Boolean!
  isRatingDisplayed: Boolean!

  displayCreditInfo: Boolean! # forgot?
}


type ContainerOptions {
  title: String
  iconUrl: String
  #scroll:ScrollType 
  background: Background 
  button: Button 
}



type Background {  
  color: String
  #transparent: Int
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
  title: String
  iconUrl: String
  link: AppLink 
}



#type PromoItems {  
  #items:[PromoItem]
#}

type PromoItem {
  promoUuid: String!
  promoId: String
  title: String
  imageURL: String      		
  dateStart: String
  dateEnd: String
  endless: Boolean
  promoURL: String
}


type Shelf {  
  shelfOptions: ShelfOptions
  productCount: Int
  products: [Product]
}

#type ShelfItems {
  #items : [Shelf]
#}

type Product {
  info: ProductInfo
  priceInfo: ProductPriceInfo
  ratingInfo: ProductRatingInfo
  stateInfo: ProductStateInfo
  #creditInfo: ProductCreditInfo
  #bonusInfo: ProductBonusInfo    
}

type ProductStateInfo {
  stateId: ProductStatus
  stateName: String

}

type ProductInfo {
  id: Int #Идентификатор товара
  name: String #Наименование товара
  imageUrl: String #Ссылка на изображение товара
  articleType: ArticleType #Дополнительное описание (заполняется для цифровых кодов и подарочных карт)          
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
  color: String
}


type MainPageStructure {
  version: String
  content: [Container]
  options : MainPageOptions
}


enum AppLink {
  auth   # экран авторизации
  map   # карта с магазинами
  profile  # профиль
  orderDetail  # детали заказа ?
  orderList  # список заказов
  rateApp # экран оценки приложения 
  rateOrder # экран оценки заказа ?
  rateProduct # экран оценки товара ?
  productDetail # карточка товара ?
  promoDetail # экран с деталями перс.предложения ?
  loyalty # экран с условиями программы лояльности
  balance #экран с бонусным балансом
  promoList #экран Все акции
  shelfDetail #экран с листингом подборки ?
}




enum LocalImage {
  box #иконка с коробкой на неавторизованном баннере
  cart #иконка с корзиной
  favorite #иконка добавления в избранное на товаре
  compare #иконка добавления к сравнению на товаре
  user #иконка юзера на кнопке Войти и в авторизованном пользователе
  
  star # подложка для виджета с балансом со звездой
  smile  #подложка для виджета с балансом со смайлом
  like #подложка для виджета с балансом с пальцем
  pen #подложка для виджета с балансом с ручкой
  clock #подложка для виджета с балансом с часами
  
  logo #логотип в хедере
  map #изображение для виджета с картой магазинов
  message #для хедера иконка перехода в чат
  geo #для хедера иконка перехода на карту
  favoritePromo #иконка добавления в избранное на промо
  favoriteClose #иконка закрытия на промо
}


type PersonalWidget  {
  type: BlockType!
  id: String!
  title: String!
  description: String
  
  icon: String# либо идентификатор локального ресурса либо  URL
  
  link: AppLink
}

type PersonalBalance  {
  type: BlockType!  
  id: String!
  title: String!
  description: String
  icon: String #icon -то, что выглядит как иконка
  link: AppLink!
  balance: Int!
}

type personalPromo  {
  type: BlockType!  
  id: String
  title: String!
  description: String
  imageUrl: String
  localImage: LocalImage
  link: AppLink!
  campaignId: String
  beginDate: String
  endDate: String
  showTimer: Boolean
}

#type WidgetButton {
  #title: String!
  #link: AppLink!
#}
type PersonalOrder {
  type: WidgetType!
  id: String!  
  title: String!
  description: String
  imageUrl: String
  localImage: LocalImage
  orderCount: Int!
  orderId: String
  endReserveDate: String
  uberPickup: Boolean   
  button: Button
}





type NotFoundItem {
  title: String
  description: String
  background: Background
  buttons: [Button]
}



type MMagItem {
  title: "Умная одежда: новый тренд",
  targetURL: "/obzor-umnoj-odezhdy-chto-kupit",
  type: "100005",   
  imageURL
  

}

`;

module.exports = typeDefs;