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
        <footer>
            © sunyuu
        </footer>
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
    @import url('./assets/style/nprogress.scss');

    header {
        height: 160px;
        overflow: hidden;

        ul {
            width: 800px;
            margin: 100px auto 0;  

            li {
                float: left;
                font-size: 18px;
                margin-right: 20px;

                a {
                    color: rgba($color: #000000, $alpha: 0.85);

                    &:hover {
                        color: #ff5d3d;
                    }
                }
            }
        }
    }

    .main {
        width: 800px;
        margin: 0 auto;
    }

    footer {
        margin-top: 100px;
        text-align: center;
        font-size: 16px;
    }
</style>
