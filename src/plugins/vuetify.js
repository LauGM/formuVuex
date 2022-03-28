import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        primary: '#e91e63',
        secondary: '#3f51b5',
        accent: '#cddc39',
        error: '#607d8b',
        warning: '#03a9f4',
        info: '#00bcd4',
        success: '#4caf50'
    }
});
