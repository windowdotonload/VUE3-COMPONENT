/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
import { defineComponent, ref, Ref, reactive, watchEffect, PropType, computed, inject } from 'vue'
import { Schema, SchemaTypes, FieldPropsDefine } from '../types'
import { SchemaFormContextKey } from '../context'
import { Type } from 'ajv/dist/compile/subschema'
import { isObject } from '../utils'

const typeHelperComponent = defineComponent({
  props: FieldPropsDefine
})
type SchemaItemDefine = typeof typeHelperComponent

export default defineComponent({
  props: FieldPropsDefine,


  setup(props) {

    const context: { SchemaItem: SchemaItemDefine } | undefined = inject(SchemaFormContextKey)

    if (!context) {
      throw Error('schamaform should be used')
    }

    const handleObjectChange = (key: string, v: any) => {
      const value: any = isObject(props.value) ? props.value : {}

      if (v === undefined) {
        delete value[key]
      } else {
        value[key] = v
      }

      props.onChange(v)
    }
    return () => {
      const { schema, rootSchema, value } = props
      const { SchemaItem } = context
      const properties = schema.properties || {}
      const currentValue: any = isObject(value) ? value : {}

      return Object.keys(properties).map((item: string, i: number) => {
        return <SchemaItem
          rootSchema={rootSchema}
          schema={properties[item]}
          value={currentValue[item]}
          key={i}
          onChange={(v: any) => handleObjectChange(item, v)} />
      })
    }
  }
})
