<template>
    <div class="hello">
        <div class="nav_list">
            <a href="#/about" class="">about</a>
            <router-link to="/about">about</router-link>
            <router-link to="/home">home</router-link>
            <router-link to="/contact">contact</router-link>
            <router-link to="/error">error</router-link>
            <router-link to="/footer">footer</router-link>
            <router-link to="/header">header</router-link>
            <router-link to="/load">load</router-link>
            <router-link to="/login">login</router-link>
            <router-link to="/modification_data">modification_data</router-link>
            <router-link to="/personal_center">personal_center</router-link>
            <router-link to="/register">register</router-link>
            <router-link to="/sub_mechanism">sub_mechanism</router-link>
            <router-link to="/training_camp">training_camp</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'hello',
    data() {
        return {
        };
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav_list {
    display: flex;
    height: 40px;
    line-height: 40px;
    border: 1px solid #dedede
}

a {
    flex: 1;
    border-right: 1px solid #dedede;
    text-align: center;
}
</style>
