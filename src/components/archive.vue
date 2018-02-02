<template>
    <div class="archive">
        <div v-for="(value, key) in mdData" :key="key" class="archive-item">
            <h2><router-link :to="'/posts/' + key">{{value.meta.title}}</router-link></h2>
            <span>{{value.meta.publishDate.slice(0, 10)}}</span>
        </div>
    </div>
</template>

<script>
export default {
    
    props: {
        data: {
            type: Object,
            default: 'test'
        }
    },
    computed: {
        mdData() {
            return this.data.markdown
        }
    },
    mounted() {
        console.log(this.mdData)
    }

}
</script>


<style lang="scss" scoped>
    .archive-item {
        margin-bottom: 20px;

        h2 {
            font-size: 24px;
            font-weight: bold;
        }
    }
</style>

