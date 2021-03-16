<template>
    <div>
        <el-button class="service-button">
            <i class="el-icon-service"></i>
            <br>在<br>线<br>咨<br>询
        </el-button>
        <el-card>

        </el-card>
        <el-row>
            <el-col :span="5">
                &nbsp;
            </el-col>
            <el-col :span="14">
                <el-image :src="require('@/assets/img/bg/header.png')"></el-image>
                <el-card>
                    <div><b style="font-size: 30px;margin-left: 40%">预约须知</b></div>
                    <div style="margin-top: 20px"><span>1.访问主页面的在线测评填写问卷，填写完成提交后后我们会安排管理员根据您的填写情况判断您是否需要咨询</span></div>
                    <div style="margin-top: 20px"><span>2.通过预约后，届时我们会安排初访员在线下对您进行初访，对您进行进一步的咨询</span></div>
                    <div style="margin-top: 20px">
                        <span>3.初访完成后，心理助理会安排咨询师对您进行单独谈话，大约需要八周的时间对您进行治疗，期间提前解决问题也可以提前结案</span></div>
                    <div style="margin-top: 20px"><span>4.如果咨询完成您仍然感觉有些不适，可以申请延长咨询时间</span></div>
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
span {
    font-size: 20px;
    font-weight: bold;
}

.service-button {
    position: absolute;
    top: 50%;
    width: 65px;
    height: 150px;
    background-color: rgba(11, 221, 62, 0.84);
    color: white;
    font-size: 20px;
}
</style>