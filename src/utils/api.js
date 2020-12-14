import { post, get } from './url'

export function constructorData(data=null) {
  console.log(data)
  return get('/navigate-tree', data)
}
export function homeData(data=null){
    return get('/jixie',data)
}

export function tooLongToTired(data=null){
    return get('/details',data)
}

export function typeOfMachine(data){
  return post('/category',data)
}
export function machineNames(data){
  return post('/names',data)
}
export function rightUnitsFn(data=null){
  return post('/property',data)
}