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

export default defineComponent({
  props: FieldPropsDefine,

  setup(props) {
    const context = inject(SchemaFormContextKey)
    return () => {

      return <h1>this is objectField</h1>
    }
  }
})
