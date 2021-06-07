const axios = require('axios') //import 대신 패키지로 가져올 수 있음
const { OMDB_API_KEY } = process.env // 환경변수 지정된 KEY를 가져옴 

exports.handler = async function (event) {
  const payload = JSON.parse(event.body)
  const { title, type, year, page, id } = payload
  const url = id 
  ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}` 
  : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
  
  try {
    const { data } = await axios.get(url)
    if (data.Error) {
      return {
        statusCode: 400,
        body: data.Error
      }
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data)

    }
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: error.message
    }
  }
}