/*
====================================
USING CALLBACK FUNCTIONS
====================================
*/
function http(url, method, successCallback, errorHandler){
  setTimeout(function(){
    let data = 'the answer';
    if(data){
      successCallback(data)
    }
    else {
      errorHandler('No Data')
    }
  }, 1000)
}

http('http://google.com', 'GET', function(data){
  console.log(data)
}, function(err){
  console.log(err)
})


/*
====================================
USING PROMISES
====================================
*/
function http(url, method){
  let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
      let data = 'the answer';
      if(data){
        resolve(data)
      }
      else {
        reject('No Data')
      }
    }, 1000)
  })
  return promise;
}

http('http://google.com', 'GET')
.then(function(data){
  console.log(data)
}).catch(function(err){
  console.log(err)
})


/*
====================================
USING CALLBACK FUNCTIONS
====================================
*/
const fetchData = function(callback){
  setTimeout(function(){
    callback('Done!')
  }, 1500)
}

setTimeout(function(){
  console.log('Timer is done!')
  fetchData(function(text){
    console.log(text)
  })
}, 2000)

console.log('Hello!')
console.log('Hi!')


/*
====================================
USING CALLBACK ARROW FUNCTIONS
====================================
*/

const fetchData = callback => {
  setTimeout(() => {
    callback('Done!')
  }, 1500)
}

setTimeout(() => {
  console.log('Timer is done')
  fetchData((text) => {
    console.log(text)
  })
}, 2000)

console.log('Hello!')
console.log('Hi!')


/*
====================================
USING PROMISES WITH ARROW FUNCTIONS
====================================
*/

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!')
    }, 1500)
  })
  return promise
}

setTimeout(() => {
  console.log('Timer is done')
  fetchData()
  .then(text => {
    console.log(text)
    return fetchData()
  })
  .then(text2 => {
    console.log(text2)
  })
}, 2000)

console.log('Hello!')
console.log('Hi!')