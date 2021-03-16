<template>
<div>
    <FirstVisitQuestionTable></FirstVisitQuestionTable>
    <el-card style="width: 70%;height:350px;position: relative;top: 20px;left: 15%">
        <el-form
            :inline="true"
            :model="resultrecord"
            class="demo-form-inline"
            label-width="100px"
        >
            <span class="titlestyle" style="position: relative;bottom: 20px"><span class="iconstyle">|</span>&nbsp;&nbsp;录入初访信息</span>
            <div>
                <el-row style="margin-top: 0">
                    <el-col :span="8">
                        危险等级
                        <br>
                        <el-select v-model="resultrecord.emergencydegree" placeholder="-请选择-">
                            <el-option value="低">低</el-option>
                            <el-option value="中">中</el-option>
                            <el-option value="高">高</el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="8">
                        问题类型
                        <br>
                        <el-select v-model="resultrecord.diseasetype" placeholder="-请选择-">
                            <el-option value="焦虑症">焦虑症</el-option>
                            <el-option value="自闭症">自闭症</el-option>
                            <el-option value="强迫症">强迫症</el-option>
                            <el-option value="抑郁症">抑郁症</el-option>
                            <el-option value="失眠症">失眠症</el-option>
                            <el-option value="其他">其他</el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row>
                    咨询期待
                    <br>
                    <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="resultrecord.visitexpectation">
                    </el-input>
                </el-row>
                <el-row>
                    <el-col :span="8">
                    初访结论
                    <br>
                    <el-select v-model="resultrecord.diseasetype" placeholder="-请选择-">
                        <el-option value="无需咨询">无需咨询</el-option>
                        <el-option value="转介送诊">转介送诊</el-option>
                        <el-option value="安排咨询">安排咨询</el-option>
                    </el-select>
                    </el-col>
                </el-row>
            </div>
        </el-form>
    </el-card>
</div>
</template>

<script>
//录入初访信息
import Questionnaire from '@/view/pages/Questionnaire';
import FirstVisitQuestionTable from '@/components/componentsofstudents/firstvisitreserve/FirstVisitQuestionTable';
export default {
    name: 'RecordFisrtVisit',
    components: { FirstVisitQuestionTable, Questionnaire },
    data(){
        return{
            resultrecord: {
                    emergencydegree:'',
                    diseasetype:'',
                    visitexpectation:'',
                    firstvisitresult:'',
                }
        }
    }
};
</script>

<style scoped>
.titlestyle{
    color: #4357b3;
    font-weight: bold;
}
.iconstyle{
    color: blue;
    font-weight: bold;
}
</style>