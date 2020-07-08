import SirButton from "./button"
import tabless from "./table"
export default {
    install: (Vue) => {
        Vue.component("sir-button", SirButton) // 注册组建
        Vue.component("tabless", tabless)

    }
}