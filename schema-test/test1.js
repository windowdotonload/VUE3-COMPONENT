
// Node.js require:
const Ajv = require("ajv").default
const addFormats = require("ajv-formats")
const localize = require('ajv-i18n');
// const schema = {
//   type:'string',
//   minLength:10
// }

// 校验一个对象
// ******！！！**** format 关键字*******！！！***
const schema = {
  type:'object',
  properties:{
    name:{
      type:'string',
      // format:'email'
      // format:'test'
      test:{a:"123"}
    },
    age:{
      type:'number'
    },
    pets:{
      type:'array',
      items:{
        type:'string'
      }
    }
  },
  required:['name','age']
}

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
addFormats(ajv)
// ******自定义format***********
// 第二个参数可以是 string| Function | object |
// ajv.addFormat('test',data => {
//   return data === 'haha'
// })

/**********自定义关键字 ***************/
ajv.addKeyword('test',{
  // *****validate****
  // validate(schema,data){
  //   console.log(schema,data)
  //   return true
  // }

  /*compile
  compile(sch,parentSchema){
    console.log(sch,parentSchema)
    return (data) => {
      console.log('data',data)
    }
  },
  // 这个关键字的值的定义，如test：false，那么之就是false，而非使用这个关键字的属性接受的值
  metaSchema:{
    type:'object'
  }
  */

  /* marco */
  marco(sch,parentSchema){
    // 这里的参数和compile是一样的
    // return 的对象会直接加到使用这个关键字的属性身上，例如name会变为{type:"string",minLength:10,test: }
    return {
      minLength:10
    }
  }
})


const validate = ajv.compile(schema)
const valid = validate({
  name:'haha',
  age:20,
  pets:['1','2']
})
if(valid) {
  localize.zh(validate.errors)
  // console.log(validate)
  console.log(valid)
}
if (!valid) {
  localize.zh(validate.errors)
  // console.log(validate)
  console.log(validate.errors)
}