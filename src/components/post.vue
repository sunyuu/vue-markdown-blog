<template>
    <div class="post">
        <h1>{{this.postData.meta.title}}</h1>
        <h6>{{this.postData.meta.publishDate.slice(0, 10)}}</h6>
        <div v-html="this.postData.content.contents" class="content">
        </div>
    </div>
</template>

<script>
export default {
    props: ['postData'],
    data() {
        return {}
    },
    mounted() {
        console.log(this.postData)
    }
}
</script>
