<template>
    <div id="app">
        <header>
            <ul>
                <li>
                    <router-link to="/">目录</router-link>
                </li>
                <li>
                    关于我
                </li>
            </ul>
        </header>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {}

    },
    mounted() {

    }
}
</script>

<style lang="scss">
    @import url('./assets/style/base.scss');

    header {
        height: 160px;
        overflow: hidden;

        ul {
            width: 800px;
            margin: 100px auto 0;  

            li {
                float: left;
                font-size: 16px;
                margin-right: 20px;
            }
        }
    }

    .main {
        width: 800px;
        margin: 0 auto;
    }

</style>
