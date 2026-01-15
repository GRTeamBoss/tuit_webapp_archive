import {getQuery} from 'h3'

const HEADER = {
  Accept: "application/json",
  Origin: "https://unilibrary.uz",
  Referer: "https://unilibrary.uz"
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const dissertations = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources?page=${query.page}&limit=15&resource_category_id=3&language=ru&sort=desc&sort_direction=id`, {headers: HEADER})
  return dissertations
})
