<template>
    <div>
        <el-row>
            <el-col :span="5">
                &nbsp;
            </el-col>
            <el-col :span="14">
                <el-image :src="require('@/assets/img/bg/header.png')"></el-image>
                <el-card>
                    <el-image :src="imageProfessorBox[currentIndex].idView" fit="fill"
                              style="height: 150px;width: 150px"></el-image>
                    <p>{{ imageProfessorBox[currentIndex].professorname }}</p>
                    <p>职业背景：</p>
                    <p>{{ imageProfessorBox[currentIndex].status }}</p>
                    <p>专业取向：</p>
                    <p>{{ imageProfessorBox[currentIndex].background }}</p>
                    <p>咨询师寄语：</p>
                    <p>{{ imageProfessorBox[currentIndex].message }}</p>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'ProfessorPage',
    data() {
        return {
            imageProfessorBox: [
                {
                    id: 1,
                    idView: require('../../assets/img/Professor/P1.jpg'),
                    professorname: '罗红心理专家',
                    status: '国家二级心理咨询师,心理学副教授,原成都信息工程学院心理健康教育中心主任',
                    background: '四川省教育学院教育系本科,中科院心理治疗和学生心理健康专业,2004年开始，接受大脑神经核医学专家系统大脑神经核医学诊断治疗培训10年',
                    message: '伸出你的手，我们会伴你走过心灵的的苦难， 让生命重新焕发光彩。'
                },
                {
                    id: 2,
                    idView: require('../../assets/img/Professor/P2.png'),
                    professorname: '蒋旭伟心理咨询师',
                    status: '国家二级心理咨询师,心理学副教授,原成都信息工程学院心理健康教育中心主任',
                    background: '四川省教育学院教育系本科,中科院心理治疗和学生心理健康专业,2004年开始，接受大脑神经核医学专家系统大脑神经核医学诊断治疗培训10年',
                    message: '伸出你的手，我们会伴你走过心灵的的苦难， 让生命重新焕发光彩。'
                },
                {
                    id: 3,
                    idView: require('../../assets/img/Professor/P3.png'),
                    professorname: '青松心理咨询师',
                    status: '国家二级心理咨询师,心理学副教授,原成都信息工程学院心理健康教育中心主任',
                    background: '四川省教育学院教育系本科,中科院心理治疗和学生心理健康专业,2004年开始，接受大脑神经核医学专家系统大脑神经核医学诊断治疗培训10年',
                    message: '伸出你的手，我们会伴你走过心灵的的苦难， 让生命重新焕发光彩。'
                },
                {
                    id: 4,
                    idView: require('../../assets/img/Professor/P4.png'),
                    professorname: '游建国先生',
                    status: '国家二级心理咨询师,心理学副教授,原成都信息工程学院心理健康教育中心主任',
                    background: '四川省教育学院教育系本科,中科院心理治疗和学生心理健康专业,2004年开始，接受大脑神经核医学专家系统大脑神经核医学诊断治疗培训10年',
                    message: '伸出你的手，我们会伴你走过心灵的的苦难， 让生命重新焕发光彩。'
                },
                {
                    id: 5,
                    idView: require('../../assets/img/Professor/P5.png'),
                    professorname: '唐亚杰老师',
                    status: '国家二级心理咨询师,心理学副教授,原成都信息工程学院心理健康教育中心主任',
                    background: '四川省教育学院教育系本科,中科院心理治疗和学生心理健康专业,2004年开始，接受大脑神经核医学专家系统大脑神经核医学诊断治疗培训10年',
                    message: '伸出你的手，我们会伴你走过心灵的的苦难， 让生命重新焕发光彩。'
                },
                {
                    id: 6,
                    idView: require('../../assets/img/Professor/P6.jpg'),
                    professorname: '侯盛炜心理咨询师',
                    status: '国家二级心理咨询师,心理学副教授,原成都信息工程学院心理健康教育中心主任',
                    background: '四川省教育学院教育系本科,中科院心理治疗和学生心理健康专业,2004年开始，接受大脑神经核医学专家系统大脑神经核医学诊断治疗培训10年',
                    message: '伸出你的手，我们会伴你走过心灵的的苦难， 让生命重新焕发光彩。'
                },
                {
                    id: 7,
                    idView: require('../../assets/img/Professor/P7.jpg'),
                    professorname: '付挺心理咨询师',
                    status: '国家二级心理咨询师，国家注册社会工作师',
                    background: '2008年毕业于西南石油大学社会心理学专业，2010年起参与四川大学心理咨询师技能系统培训成绩优异，获国家心理咨询师资格认证；常年致力于暑期甘孜、凉山、阿坝三州支教，具有的丰富的支教经验和支教队组织经验，曾于国企、外企及民营多家企业供职，曾任美国艾默生某子公司人力资源部HR。',
                    message: '你连想改变别人的念头都不要有。要学习太阳一样，只是发出光和热，每个人接收阳光的反应有所不同，有人觉得刺眼有人觉得温暖，有人甚至躲开阳光。种子破土发芽前没有任何的迹象，是因为没到那个时间点。只有自己才是自己的拯救者。'
                }
            ],
            currentIndex: 1
        };
    },
    mounted() {
        let name = this.$route.query.professorname;
        for (let i = 0; i < this.imageProfessorBox.length; i++) {
            if (this.imageProfessorBox[i].professorname === name) {
                this.currentIndex = i;
            }
        }
        // console.log(this.currentIndex)
    }
};
</script>

<style scoped>
p {
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
}
</style>