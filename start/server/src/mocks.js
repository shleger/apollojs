const mocks = {
  BlockItem: () => ({
    type: "ssss",
    id: "uid",
    caption: "cap",
    order: 1,
    scrollType: "noScroll",
    __typename: "CoreBlock"
  }),
  Int: () => Math.floor(Math.random() * 10000000),
  Float: () => Math.random() * 10000000,
  String: () => Math.random().toString(36).substring(7),
}

module.exports = mocks