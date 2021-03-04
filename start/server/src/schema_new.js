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
  shelf (id: ID!, type: String, productCount: Int, getAll:Boolean): ShelfResponse  
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

  
  personalPromo: PersonalBlockPromoResponse
  
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

type ContainerOptions {
  caption: String
  scroll:ScrollType 
  background: Background
  blockOptions: BlockOptions
  localImage: LocalImage
}

type Block {
  type: BlockType!
  auth: Boolean
  query: String
  id: ID!
  options: BlockOptions
}

enum ScrollType {
  noScroll
  horizontal
  vertical
}

enum BlockType {
  appHeader
  signIn
  noAuthBanner #персблок неавторизованного пользователя - баннер
  noAuthMap #персблок неавторизованного пользователя - карта
  authMap #персблок авторизованного пользователя - карта
  personalCaption #приветствие в авторизованном блоке например "Константин, добрый день"
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
union BlockOptions = PersonalBlockOptions | PromoBlockOptions | ShelfBlockOptions | NotFoundBlockOptions

type BlockOptions2 {
  buttonStyle: ButtonStyle #используется в персблоке для указание стиля кнопок в виджете убер-пикапа
  blockSize: BlockSize #используется в промоблоке для указание размера элемента в карусели 
  buttons: [Button] #описание кнопок в блоке - используется в промо-блоке и блоке "Не нашли"

  caption: String #заголовок - используется в подборках и блоке "Не нашли"
  text: String #подзаголовок - используется в блоке "Не нашли"
  period: Period #срок действия подборки, заполняется для товаров дня
  background: Background #фон блока с подборкой  - используется в подборках и блоке "Не нашли"
  productsCount: Int #количество элементов, выводимых в подборке на главной / количество видимых элементов в блоке с переключателями  
  productCardOptions: ProductCardOptions #настройки карточки товара в подборке
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
  mapPoint
  message #для хедера иконка перехода в чат
  geo #для хедера иконка перехода на карту
  favoritePromo #иконка добавления в избранное на промо
  favoriteClose #иконка закрытия на промо
  smallLogo #иконка с буквой М - например в заголовке блока ММаг или обозначающая магазин на карте
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
  localImage: LocalImage
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

type ShelfResponse {
  items : [ShelfBlock]
}

type ShelfBlock { 
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


type PersonalBlockWidget {
  type: BlockType!
  id: String!
  caption: String!
  text: String
  imageUrl: String
  localImage: LocalImage
  link: AppLink
}

type PersonalBlockBalanceWidget  {
  type: BlockType!  
  id: String!
  caption: String!
  text: String
  imageUrl: String!
  link: AppLink!
  balance: Int!
}

type PersonalBlockPromoWidget  {
  type: BlockType! 
  id: String! 
  caption: String!
  text: String
  imageUrl: String!
  link: AppLink!
  campaignId: String
  beginDate: String
  endDate: String
  showTimer: Boolean
}

#type WidgetButton {
  #caption: String!
  #link: AppLink!
#}
type PersonalBlockOrderWidget  {
  type: BlockType!
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

type notFound {
  type: BlockType!
  id: String
  caption: String!
  text: String  
  buttons: [Button]
}

type NotFoundBlockOptions {
  caption: String
  text: String
  background: Background
  buttons: [Button]
}


`;

module.exports = typeDefs;