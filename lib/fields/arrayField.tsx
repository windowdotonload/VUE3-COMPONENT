/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import { defineComponent, PropType } from 'vue'

import { FieldPropsDefine, Schema } from '../types'
import { SchemaFormContextKey, useVJSFContext } from '../context'

export default defineComponent({
    props: FieldPropsDefine,
    setup(props) {
        const context = useVJSFContext()
        return () => {
            const SchemaItem = context.SchemaItem

            const isMultiType = Array.isArray(props.schema.items)

            if (isMultiType) {
                const items: Schema[] = props.schema.items as any
                return items.map((s: Schema, index: number) => {
                    return <h1>this is arrayField</h1>
                })

            }


        }
    }
})

