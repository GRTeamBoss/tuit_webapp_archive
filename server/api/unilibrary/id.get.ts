import {getQuery} from 'h3'

const HEADER = {
  Accept: "application/json",
  Origin: "https://unilibrary.uz",
  Referer: "https://unilibrary.uz"
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const data = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources/${query.id}?language=ru`, {headers: HEADER})
    return data
})
