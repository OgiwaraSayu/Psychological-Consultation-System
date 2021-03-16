<template>
    <ProfessorPage ref="son"></ProfessorPage>
</template>

<script>
import ProfessorPage from '@/view/pages/ProfessorPage';

export default {
    name: 'MyCounselor',
    components: { ProfessorPage },
    mounted() {
        this.$refs.son.currentIndex = 2;
    }
};
</script>

<style scoped>

</style>