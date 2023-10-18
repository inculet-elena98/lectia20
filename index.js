// const getFibonacciSequence = (number) => {
//   let result = [0, 1]
//   for (let i = 2; i <= number; i++) {
//     result.push(result[i - 2] + result[i - 1])
//   }
//   if (number <= 2 result.length = result.length - 1)
//   for (let item of result) {
//     console.log(item)
//   }
// }
// getFibonacciSequence(10)


// const getFibonacciSequence = (number) => {
//   if (number <= 2) {
//     return 1
//   }
//   return getFibonacciSequence(number - 2) + getFibonacciSequence(number - 1)
// }
// console.log(getFibonacciSequence(10))


// const showName = function (arg) {
//   return arg + ' name is ' + this.name
// }
// const obj1 = {
//   name: 'Alex',
//   showName: showName
// }
// const obj2 = {
//   name: 'Victor',
//   showName: showName
// }
// const obj3 = {
//   name: 'Vladimir',
//   showName: showName
// }
// const bound = obj1.showName.bind(obj2)
// console.log(obj1.showName.apply(obj3, ['Your']))
// console.log(obj1.showName.call(obj2, 'My'))
// console.log(bound('His'))


// const obj = {
//   name: 'Alex'
// }
// Object.defineProperty(obj,'gender', {
//   value: 'male',
//   writable: true,
//   enumerable: true,
//   configurable: true
// })
// console.log(obj)


// const obj = {
//   name: 'Alex'
// }
// Object.defineProperty(obj, 'gender', {
//   value: 'male',
//   writable: true,
//   enumerable: true,
//   configurable: true
// })
// obj.gender = 'female'
// console.log(obj)


// const obj = {
//   name: 'Alex'
// }
// Object.defineProperty(obj, 'gender', {
//   value: 'male',
//   writable: true,
//   enumerable: false,
//   configurable: true
// })



// const obj = {
//   name: 'Alex'
// }
// Object.defineProperty(obj, 'gender', {
//   value: 'male',
//   writable: true,
//   enumerable: false,
//   configurable: true
// })

// console.log(Object.values(obj))


// const obj = {
//   name: 'Alex',
//   gender: 'male'
// }
// Object.defineProperty(obj, 'gender', {
//   value: 'male',
//   writable: true,
//   enumerable: false,
//   configurable: false
// })
// Object.defineProperty(obj, 'gender', {
//   configurable: true
// })

// console.log(Object.values(obj))



// const obj = {
//   name: 'Alex',
//   gender: 'male'
// }
// Object.defineProperty(obj, 'gender', {
//   value: 'male',
//   writable: true,
//   enumerable: true,
//   configurable: false
// })

// console.log(obj.propertyIsEnumerable('gender'))



// const obj = {
//   name: 'Alex',
//   gender: 'male'
// }
// Object.defineProperty(obj, 'gender', {
//   value: 'male',
//   writable: true,
//   enumerable: true,
//   configurable: false
// })

// // Object.preventExtensions(obj)
// Object.prototype.city = 'Chisinau'
// obj.city = 'Chisinau'
// console.log(Object.isExtensible(obj))


// const obj = {
//   name: 'Alex',
//   gender: 'male'
// }
// Object.defineProperty(obj, 'gender', {
//   value: 'male',
//   writable: true,
//   enumerable: true,
//   configurable: true
// })
// // Object.seal(obj)
// obj.city = 'Chisinau'
// obj.name = 'Victor'
// // console.log(obj)
// console.log(Object.isSealed(obj))



// const obj = {
//   name: 'Alex',
//   gender: 'male'
// }
// Object.defineProperty(obj, 'gender', {
//   value: 'male',
//   writable: true,
//   enumerable: true,
//   configurable: true
// })
// Object.freeze(obj)
// obj.city = 'Chisinau'
// obj.name = 'Victor'

// // console.log(obj)
// console.log(Object.isFrozen(obj))


// const obj = {
//   name: 'Alex',
//   gender: 'male'
// }
// Object.defineProperties(obj, {
//   gender: {
//     value: 'male',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   city: {
//     value: 'Chisinau',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// })
// console.log(obj)


// const arr = [1, 3, 7, 20, 6, 9]
// console.log(arr.sort((a, b) => a - b))


// const arr = [1, 3, 7, 20, 6, 9]
// console.log(arr.sort((a, b) => b - a))


// const arr = [
//   {
//     nume: 'Alex',
//     age: '33'
//   },
//   {
//     nume: 'Boris',
//     age: '55'
//   },
//   {
//     nume: 'Victor',
//     age: '25'
//   }
// ]
// console.log(arr.sort((a, b) => {
//   return b.age - a.age
// }))


// const arr = [
//   {
//     nume: 'Alex',
//     age: '33'
//   },
//   {
//     nume: 'Boris',
//     age: '55'
//   },
//   {
//     nume: 'Victor',
//     age: '25'
//   }
// ]
// console.log(arr.sort((a, b) => {
//   if (a.age > b.age) {
//     return 1
//   } else if (a.age < b.age) {
//     return -1
//   }
//   return 0
// }))



// const arr = [
//   {
//     nume: 'Alex',
//     age: '33'
//   },
//   {
//     nume: 'Boris',
//     age: '55'
//   },
//   {
//     nume: 'Victor',
//     age: '25'
//   }
// ]
// console.log(arr.sort((a, b) => {
//   if (a.nume > b.nume) {
//     return -1
//   } else if (a.nume < b.nume) {
//     return 1
//   }
//   return 0
// }))


// const arr = [
//   {
//     nume: 'Alex',
//     age: '33'
//   },
//   {
//     nume: 'Boris',
//     age: '55'
//   },
//   {
//     nume: 'Victor',
//     age: '25'
//   }
// ]
// console.log(arr.sort((a, b) => a.nume > b.nume ? -1 : 1))


// const arr = [
//   {
//     nume: 'Alex',
//     age: '33'
//   },
//   {
//     nume: 'Boris',
//     age: '55'
//   },
//   {
//     nume: 'Victor',
//     age: '25'
//   }
// ]
// const [firstItem, ...restElements] = arr
// console.log(firstItem)
// console.log(restElements)



// const arr = [
//   {
//     nume: 'Alex',
//     age: '33'
//   },
//   {
//     nume: 'Boris',
//     age: '55'
//   },
//   {
//     nume: 'Victor',
//     age: '25'
//   }
// ]
// const [firstItem, ...restElements] = arr
// function func(arg1, arg2, ...rest) {
//   console.log(arg1)
//   console.log(arg2)
//   console.log(rest)
// }
// func(1, 2, 3, 4, 5, 6, 'str')


// const arr = [
//   {
//     nume: 'Alex',
//     age: '33'
//   },
//   {
//     nume: 'Boris',
//     age: '55'
//   },
//   {
//     nume: 'Victor',
//     age: '25'
//   },
//   {
//     nume: 'Victor',
//     age: '25'
//   }
// ]
// const [firstItem, secondItem, ...forRecycling] = arr
// console.log(forRecycling)


// const obj = {
//   a: 'a',
//   b: 'b',
//   c: {
//     d: {
//       greet: () => console.log('hi'),
//       y: 'y'
//     }
//   }
// }
// const obj1 = JSON.parse(JSON.stringify(obj))
// // obj1.c.d.y = 'c'
// // console.log('obj', obj)
// // console.log('obj1', obj1)
// // obj.c.d.greet()
// obj1.c.d.greet()



// const obj = {
//   a: 'a',
//   b: 'b',
//   c: {
//     d: {
//       greet: () => console.log('hi'),
//       y: 'y'
//     }
//   }
// }
// const deepClone = (obj) => {
//   let clone = { ...obj }
//   Object.keys(clone).forEach((key) => {
//     clone[key] = typeof clone[key] === 'object' ? deepClone(obj[key]) : obj[key]
//   })
//   return clone;
// }
// const obj1 = deepClone(obj)
// obj1.c.d.y = 'x'
// console.log('obj1', obj1)
// console.log('obj', obj)
// obj.c.d.greet()
// obj1.c.d.greet()


// const obj = {
//   a: 'a',
//   b: 'b',
//   c: {
//     d: {
//       greet: () => console.log('hi'),
//       y: 'y'
//     }
//   }
// }
// const deepClone = (obj) => {
//   let clone = { ...obj }
//   Object.keys(clone).forEach((key) => {
//     clone[key] = typeof clone[key] === 'object' ? deepClone(obj[key]) : obj[key]
//   })
//   return clone;
// }
// const obj1 = deepClone(obj)
// obj1.c.d.y = 'x'
// const arr = [1, 2, 3, 4]
// for (let item in obj) {
//   console.log(item)
// }


const obj = {
  a: 'a',
  b: 'b',
  c: {
    d: 'y'
  }
}
const deepClone = (obj) => {
  let clone = { ...obj }

  for (let property in clone) {
    clone[property] = typeof obj[property] === 'object' ? deepClone(obj[property]) : obj[property]
  }

  return clone;
}
const obj1 = deepClone(obj)
console.log('obj1', obj1)
console.log('obj', obj)
// obj.c.d.greet()
// obj1.c.d.greet()