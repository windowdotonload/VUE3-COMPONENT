/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
import { createApp, defineComponent, h, reactive, ref } from 'vue'
import MonacoEditor from './components/MonacoEditor'
import '@/assets/css/test.css'

const img = require("./assets/logo.png")

export default defineComponent({
    setup() {
        const state = reactive({
            name: 'breeze'
        })

        return () => {
            return (
                <div>
                    <h1>this is jsx</h1>
                    <img src={img}></img>
                    <p>{state.name}</p>
                    <div class='test'></div>
                </div>
            )
        }
    },
    name: "App"
})   