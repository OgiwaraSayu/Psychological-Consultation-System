<template>
<div>
    <el-row>
        <el-col :span="5">
            &nbsp;
        </el-col>
        <el-col :span="14">
            <el-image :src="require('@/assets/img/bg/header.png')"></el-image>
            <el-card>
                <p><b style="font-size: 30px;margin-left: 40%">预约须知</b></p>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    name: 'ReserveInformation'
};
</script>

<style scoped>

</style>