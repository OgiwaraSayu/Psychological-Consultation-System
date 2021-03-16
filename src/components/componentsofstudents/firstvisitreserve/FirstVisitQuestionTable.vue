<template>
    <div>
        <div>
            <el-card style="width: 70%;height:2000px;position: relative;left: 15%;">
                <el-form
                    :inline="true"
                    :model="questionrecord"
                    class="demo-form-inline"
                    label-width="100px"
                >
                    <span class="titlestyle" style="position: relative;bottom: 10px;"><span class="iconstyle">|</span>&nbsp;&nbsp;个人身份信息填写</span>
                    <div>
                        <el-row style="margin-top: 0">
                            <el-col :span="8">
                                姓名
                                <br>
                                <el-input v-model="questionrecord.name"></el-input>
                            </el-col>
                            <el-col :span="8">
                                性别
                                <br>
                                <el-input v-model="questionrecord.sex">
                                </el-input>
                            </el-col>
                            <el-col :span="8">
                                年龄
                                <br>
                                <el-input v-model="questionrecord.age"></el-input>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="8">
                                电话
                                <br>
                                <el-input v-model="questionrecord.telephone"></el-input>
                            </el-col>
                            <el-col :span="8">
                                邮箱
                                <br>
                                <el-input v-model="questionrecord.email"></el-input>
                            </el-col>
                            <el-col :span="8">
                                城镇|农村
                                <br>
                                <el-input v-model="questionrecord.townorvillage"></el-input>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="8">
                                身份
                                <br>
                                <el-input v-model="questionrecord.identity"></el-input>
                            </el-col>
                            <el-col :span="8">
                                紧急联系人
                                <br>
                                <el-input v-model="questionrecord.liason"></el-input>
                            </el-col>
                            <el-col :span="8">
                                紧急联系人与本人关系
                                <br>
                                <el-input v-model="questionrecord.relation"></el-input>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="8">
                                联系人手机
                                <br>
                                <el-input v-model="questionrecord.liasonphone"></el-input>
                            </el-col>
                            <el-col :span="8">
                                因故休学
                                <br>
                                <el-input v-model="questionrecord.suspension">
                                </el-input>
                            </el-col>
                            <el-col :span="8">
                                身体疾病
                                <br>
                                <el-input v-model="questionrecord.disease"></el-input>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="8">
                                父亲健在
                                <br>
                                <el-input v-model="questionrecord.fatheralive">
                                </el-input>
                            </el-col>
                            <el-col :span="8">
                                母亲健在
                                <br>
                                <el-input v-model="questionrecord.motheralive">
                                </el-input>
                            </el-col>
                            <el-col :span="8">
                                兄人数
                                <br>
                                <el-input v-model="questionrecord.elderbrothernumber"></el-input>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="8">
                                弟人数
                                <br>
                                <el-input v-model="questionrecord.youngerbrothernumber"></el-input>
                            </el-col>
                            <el-col :span="8">
                                姐人数
                                <br>
                                <el-input v-model="questionrecord.eldersisternumber"></el-input>
                            </el-col>
                            <el-col :span="8">
                                妹人数
                                <br>
                                <el-input v-model="questionrecord.youngersisternumber"></el-input>
                            </el-col>
                        </el-row>
                    </div>

                    <div>
                        <span class="titlestyle" style="position: relative;top:60px;"><span class="iconstyle">|</span>&nbsp;&nbsp;心理疾病急诊经历</span>
                    </div>
                    <div style="position:relative;top: 60px">
                        <el-row>
                            <el-col :span="8">
                                机构名称
                                <br>
                                <el-input v-model="questionrecord.organization"></el-input>
                            </el-col>
                            <el-col :span="8">
                                诊断时间
                                <br>
                                <el-input v-model="questionrecord.curetime">
                                </el-input>
                            </el-col>
                            <el-col :span="8">
                                诊断结论
                                <br>
                                <el-input v-model="questionrecord.cureresult"></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                药物治疗史
                                <br>
                                <el-input v-model="questionrecord.medicinehistory">
                                </el-input>
                            </el-col>
                            <el-col :span="8">
                                住院治疗史
                                <br>
                                <el-input v-model="questionrecord.hospitalhistory">
                                </el-input>
                            </el-col>
                        </el-row>
                    </div>

                    <div>
                        <span class="titlestyle" style="position: relative;top:110px;"><span class="iconstyle">|</span>&nbsp;&nbsp;自我状态估量表</span>
                    </div>
                    <div style="position: relative;top: 90px">
                        <el-row>
                            <el-col v-for="item in selfstatus" :key=item :span="8" style="margin-top: 20px">
                                <el-checkbox @change="checked=>handleCheckAllchange(checked)">{{ item }}</el-checkbox>
                            </el-col>
                        </el-row>
                    </div>
                    <div>
                        <span class="titlestyle" style="position: relative;top:150px;"><span class="iconstyle">|</span>&nbsp;&nbsp;个人生活评估表</span>
                    </div>
                    <div style="position: relative;top: 120px">
                        <el-row style="color: rgba(0,0,0,0.3);font-size: small">
                            请你依据最近两周内所感受的的状况来勾选
                        </el-row>
                        <el-row v-for="life in lifequality" :key="life.life">
                            <el-col :span="5" style="font-size: small">{{ life.life }}</el-col>
                            <el-checkbox-group v-model="life.checked" :max="1">
                                <el-checkbox v-for="s in score" :key="s" :label="s" style="margin-left: 40px"
                                             @change="checked=>handleCheckAllchange2(checked,s)">{{ s }}分
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-row>
                    </div>
                    <div>
                        <span class="titlestyle" style="position: relative;top:170px;"><span class="iconstyle">|</span>&nbsp;&nbsp;自述紧急程度</span>
                    </div>
                    <div style="position: relative;top: 190px">
                        自述紧急程度
                        <br>
                        <el-input v-model="emergencydegree">
                            <el-option value="非常紧急">非常紧急</el-option>
                            <el-option value="一般紧急">一般紧急</el-option>
                            <el-option value="不紧急">不紧急</el-option>
                        </el-input>
                    </div>
                    <div>
                        <span class="titlestyle" style="position: relative;top:220px;"><span class="iconstyle">|</span>&nbsp;&nbsp;咨询经历</span>
                    </div>
                    <div style="position: relative;top: 225px">
                        咨询经历
                        <br>
                        <el-radio v-model="consultativehistory" label="无">无</el-radio>
                        <el-radio v-model="consultativehistory" label="本中心">本中心</el-radio>
                        <el-radio v-model="consultativehistory" label="其他">其他</el-radio>
                    </div>
                </el-form>
            </el-card>
        </div>
    </div>
</template>

<script>
const scoreOptions = [1, 2, 3, 4, 5];
export default {
    name: 'FirstVisitQuestionTable',
    data() {
        return {
            questionrecord: {
                name: '1',
                sex: '男',
                age: '1',
                telephone: '',
                email: '',
                townorvillage: '',
                identity: '',//身份
                liason: '',//联系人
                relation: '',//与本人关系
                liasonphone: '',//联系人手机
                suspension: '',//休学
                disease: '',//疾病
                fatheralive: '',//父亲健在
                motheralive: '',//母亲健在
                elderbrothernumber: '',//兄人数
                youngerbrothernumber: '',//弟人数
                eldersisternumber: '',//姐人数
                youngersisternumber: '',//妹人数
                organization: '',//机构名
                curetime: '',//诊断时间
                cureresult: '',//诊断结果
                medicinehistory: '', //药物治疗史
                hospitalhistory: ''//住院史
            },
            selfstatus: [
                '我最近会容易悲伤哭泣',
                '我真想从此做个\'隐士\'',
                '我最近经常会思考自杀的方式和计划',
                '我最近睡眠明显变少和变多',
                '我觉得心跳很快',
                '我最近经常手脚发抖打颤',
                '我最近对很多事情失去兴趣',
                '我有幻觉体验',
                '我最近常感到绝望',
                '我最近的食量明显增加或减少',
                '生活中我受到了很多伤害',
                '我因为头疼、颈疼、背疼而苦恼',
                '我最近常有罪恶感',
                '我最近变得思维特别活跃，很兴奋',
                '我最近经常思考人活着的意义',
                '我最近觉得身体无力',
                '我最近常常觉得内心痛苦',
                '我相信有人正在密谋如何对付我',
                '我最近经常容易自我批评',
                '我觉得比平时更容易紧张或着急',
                '我最近常觉得孤独，不想和任何人说话',
                '我觉得自己没有价值',
                '我无缘无故的感到害怕',
                '我感觉自己的思想被一种外来力量拿走了',
                '我最近经常感觉精神衰弱或疲乏',
                '我容易心里烦乱或感到惊恐',
                '别人再不停地对我的行为和想法评头品足',
                '我有自杀的念头',
                '我觉得我可能要疯掉了',
                '我最近经常花销无度，无法自控'
            ],
            selfstatustestscore: 80,
            score: scoreOptions,
            lifequality: [
                { life: '身心健康', checked: [] },
                { life: '整体生活状况', checked: [] },
                { life: '人际关系(家庭或任何亲密关系)', checked: [] },
                { life: '生活社交(工作、学校、朋友)', checked: [] }
            ],
            emergencydegree: '',
            consultativehistory: ''
        };
    },
    methods: {
        handleCheckAllchange(val) {
            if (val === true) {
                this.selfstatustestscore--;
            } else {
                this.selfstatustestscore++;
            }
        },
        handleCheckAllchange2(val, score) {
            if (val === true) {
                this.selfstatustestscore += score;
            } else {
                this.selfstatustestscore -= score;
            }
        }
    },
    mounted() {
        let inputcontrol = document.getElementsByTagName('input');
        for (let i = 0; i < inputcontrol.length; i++) {
            inputcontrol[i].setAttribute('disabled', 'disabled');
        }
    }
};
</script>

<style scoped>
.el-input {
    width: 80%;
}

.el-row {
    margin-top: 30px;
}

.titlestyle {
    color: #4357b3;
    font-weight: bold;
}

.iconstyle {
    color: blue;
    font-weight: bold;
}
</style>