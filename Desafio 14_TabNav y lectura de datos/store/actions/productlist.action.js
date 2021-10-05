export const SELECT_ITEM = 'SELECT_ITEM'
export const LOAD_ITEM = 'LOAD_ITEM'
const URL_API_ML = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&limit=5'


export const selectItem = (prdId) =>({
    type: SELECT_ITEM,
    payload: prdId
})
