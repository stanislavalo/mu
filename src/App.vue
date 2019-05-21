<template>
    <v-app>
    <v-container :fluid = "fluidContenair" >
        <div class="row">
            <div class="com-xs-12">
                <app-header></app-header>
                <router-view></router-view>
            </div>
        </div>
    </v-container>
    </v-app>
</template>

<script>
import Header from './components/header/Header.vue';
export default {
    data() {
        return{
            fluidContenair:true
        }
    },
    mounted () {
        console.log(this.$vuetify.breakpoint);
        this.fluidContenair = this.$vuetify.breakpoint.lgAndDown;
        console.log("fluidContenair=" + this.fluidContenair);
    },
    components:{
        appHeader:Header,
    },
    created(){
    }
}
</script>
