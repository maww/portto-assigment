type RwdConfig<V> = {
  desktop: V
  mobile: V
}

type FetchState = 'VOID' | 'LOADING'

namespace Data {
  type Asset = {
    id: number
    token_id: string
    image_url: string
    name: string
    description: string
    permalink: string
    collection: {
      name: string
    }
    asset_contract: {
      address: string
    }
  }
}