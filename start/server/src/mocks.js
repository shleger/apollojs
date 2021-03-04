const mocks = {
  String: () => null,
  Boolean: () => null,
  Int: () => null,
  
  PromoBlockItem: () => ([{
    type: "ssss",
    id: "uid",
    title: "cap",
    order: 1,
    scrollType: "noScroll",
    __typename: "CoreBlock"
  }])
}

module.exports = mocks