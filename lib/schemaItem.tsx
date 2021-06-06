/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
import { defineComponent, ref, Ref, reactive, watchEffect, PropType, computed } from 'vue'
import { Schema, SchemaTypes, FieldPropsDefine } from './types'
import numberField from './fields/numberField'
import stringField from './fields/stringField'
import objectField from './fields/objectField'
import arrayField from './fields/arrayField'
import { retrieveSchema } from './utils'

export default defineComponent({
  name: 'schemaItem',
  props: FieldPropsDefine,
  setup(props, context) {
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props
      return retrieveSchema(schema, rootSchema, value)
    })

    return () => {
      const { schema, rootSchema, value } = props
      const retrievedSchema = retrievedSchemaRef.value
      let type = schema.type

      let Component: any
      switch (type) {
        case SchemaTypes.STRING:
          Component = stringField
          break
        case SchemaTypes.NUMBER:
          Component = numberField
          break
        case SchemaTypes.OBJECT:
          Component = objectField
          break
        case SchemaTypes.ARRAY:
          Component = arrayField
          break
      }
      return <Component {...props} />
    }
  }
})
