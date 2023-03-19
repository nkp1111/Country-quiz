const getCountryData = async () => {
  // to get json data for countries 
  const baseurl = "https://gist.githubusercontent.com/amitjambusaria/b9adebcb4f256eae3dfa64dc9f1cc2ef/raw/6431d72439c8399b05d2b8e9d51153e5dee7ad3b/countries.json"
  return fetch(baseurl)
    .then(res => res.json())
    .then(data => data)
}

export default getCountryData

