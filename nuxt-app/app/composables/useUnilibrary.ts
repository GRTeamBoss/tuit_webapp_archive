const HEADER = {
  Accept: "application/json",
  Origin: "https://unilibrary.uz",
  Referer: "https://unilibrary.uz"
} 

export const useUnilibrary = async () => {
  const getByID = async (id: number) => {
    const data = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources/${id}?language=ru`, {headers: HEADER})
    return data
  }
  const getBooks = async (page: number) => {
    const books = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources?page=${page}&limit=15&resource_category_id=1&language=ru&sort=desc&sort_direction=id`, {headers: HEADER})
    return books
  }
  const getBookByName = async (page: number, name: string) => {
    const books = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources?page=${page}&name=${name}&limit=15&resource_category_id=1&language=ru&sort=desc&sort_direction=id`, {headers: HEADER})
    return books
  }
  const getBookByAuthor = async (page: number, author: string) => {
    const books = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources?page=${page}&limit=15&resource_category_id=1&language=ru&authors=${author}&sort=desc&sort_direction=id`, {headers: HEADER})
    return books
  }
  const getPosts = async (page: number) => {
    const posts = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources?page=${page}&limit=15&resource_category_id=4&language=ru&sort=desc&sort_direction=id`, {headers: HEADER})
    return posts
  }
  const getPostByName = async (page: number, name: string) => {
    const posts = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources?page=${page}&name=${name}&limit=15&resource_category_id=4&language=ru&sort=desc&sort_direction=id`, {headers: HEADER})
    return posts
  }
  const getPostByAuthor = async (page: number, author: string) => {
    const posts = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources?page=${page}&limit=15&resource_category_id=4&language=ru&authors=${author}&sort=desc&sort_direction=id`, {headers: HEADER})
    return posts
  }
  const getDissertations = async (page: number) => {
    const dissertations = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources?page=${page}&limit=15&resource_category_id=3&language=ru&sort=desc&sort_direction=id`, {headers: HEADER})
    return dissertations
  }
  const getDissertationsByName = async (page: number, name: string) => {
    const dissertations = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources?page=${page}&name=${name}&limit=15&resource_category_id=3&language=ru&sort=desc&sort_direction=id`, {headers: HEADER})
    return dissertations
  }
  const getDissertationsByAuthor = async (page: number, author: string) => {
    const dissertations = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources?page=${page}&limit=15&resource_category_id=3&language=ru&authors=${author}&sort=desc&sort_direction=id`, {headers: HEADER})
    return dissertations
  }
  return { getBooks, getBookByName, getBookByAuthor, getPosts, getPostByName, getPostByAuthor, getDissertations, getDissertationsByName, getDissertationsByAuthor, getByID }
}
