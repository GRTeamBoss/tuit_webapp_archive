import {getQuery} from 'h3'

const HEADER = {
  Accept: "application/json",
  Origin: "https://unilibrary.uz",
  Referer: "https://unilibrary.uz"
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const result = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources?page=0&limit=15&language=ru&global_search=${query.name}&sort=desc&sort_direction=id`, {headers: HEADER})
  return result
})
