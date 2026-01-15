export const useSearch = async () => {
  const searchLib = async (name: string) => {
    const result = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources?page=0&limit=15&language=ru&global_search=${name}&sort=desc&sort_direction=id`)
    return result
  }
  return {searchLib}
}