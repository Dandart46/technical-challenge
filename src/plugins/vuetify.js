import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#df9e58",
                secondary: "#7a9ad2",
                error: "#e99191",
                background: "#ffffff",
            },
        },
    },
    icons: {
        iconfont: 'fa',
    },
});
