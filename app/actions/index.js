export const GET_DATA ="GET_DATA";
export const ADD_DATA ="ADD_DATA";
export const ADD_DATA_SL ="ADD_DATA_SL";
export const EDIT_DATA = "EDIT_DATA";
export const EDIT_DATA_PAGINATION = "EDIT_DATA_PAGINATION";
export const DELETE_DATA ="DELETE_DATA";

export const getData = getDataAdd => ({
    type: 'GET_DATA',
    getDataAdd
  })
export const infoId = getInfoId => ({
    type: 'ADD_DATA',
    getInfoId
  })
  export const deleteId = dataCart => ({
    type: 'DELETE_DATA',
    dataCart
  })
  export const getDataSl = getDataSoLuong => ({
    type: 'ADD_DATA_SL',
    getDataSoLuong
  })

  
  export const editData = getInfo => ({
    type: 'EDIT_DATA',
    getInfo
  })
  export const editDataPagination = getInfoPagination => ({
    type: 'EDIT_DATA_PAGINATION',
    getInfoPagination
  })
  