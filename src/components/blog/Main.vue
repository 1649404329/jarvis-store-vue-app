<template>
    <div>
        <PanelTitle msg="博客区" style="margin-left: -10px;"/>

        <BlogListPage/>

    </div>
</template>

<script>
    import BlogListPage from '@/components/blog/BlogListPage.vue'
    import PanelTitle from '@/components/common/PanelTitle.vue'

    export default {
        name: "Main",
        data () {
            return {
                count: 0
            }
        },
        methods: {
            load () {
                this.count += 2
            }
        },
        components: {
            PanelTitle,
            BlogListPage,
        },
    }
</script>

<style scoped>

</style>