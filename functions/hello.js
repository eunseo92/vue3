exports.handler = async function (event, context) {
  return {
    statusCode: 200, // 정상적인 응답,
    body: JSON.stringify({
      name: 'eunseo',
      age: 30,
      eamil: 'shanai01@naver.com'
    }) // 응답시킬 데이터를 명시 

  }
}