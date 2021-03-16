<template>
<div>
    {{uname}}
    <TimeLine style="position: absolute;right: 10px;top:30%;z-index: 1" ref="timeline"></TimeLine>
    <el-button type="text" @click="dialogVisible = true" style="font-size: large" :disabled="this.card_arr.length > this.counseltimes-1">+新增咨询记录</el-button>
    <div>
        <el-form v-model="a">
            <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
                <div class="dialog-div">
                    到来情况：
                    <el-select v-model="a.ifarrive">
                        <div v-if="this.card_arr.length < this.counseltimes-1">
                            <el-option label="咨询" value="咨询" ></el-option>
                            <el-option label="请假" value="请假" ></el-option>
                            <el-option label="旷约" value="旷约" ></el-option>
                            <el-option label="脱落" value="脱落" ></el-option>
                        </div>
                        <div v-else>
                            <el-option label="结案" value="结案"></el-option>
                        </div>
                    </el-select>
                </div>
                <div class="dialog-div">
                    咨询情况：
                    <el-select v-model="a.consultation">
                        <el-option label="情况好转" value="情况好转"></el-option>
                        <el-option label="情况变糟" value="情况变糟"></el-option>
                        <el-option label="没有效果" value="没有效果"></el-option>
                    </el-select>
                </div>
                <div class="dialog-div">
                    未来建议：<el-input v-model="a.advice" style="width: 80%"
                                   autosize type="textarea"></el-input>
                </div>
                <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false;cleardata();">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false; addCard(a); cleardata();">确 定</el-button>
          </span>
            </el-dialog>
        </el-form>
    </div>
    <div style="width: 90%">
        <el-row>
            <el-col :span="6" v-for="card in card_arr" :key="card.id">
                <el-card class="card">
                    <div style="margin-left: 20px">
                        第{{card.id}}次咨询
                        <div>
                            到来情况：{{card.ifarrive}}
                        </div>
                        <div>
                            咨询情况：{{card.consultation}}
                        </div>
                        <div>
                            未来建议：{{card.advice}}
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</div>
</template>

<script>
import TimeLine from '@/components/common/TimeLine';
export default {
    components: { TimeLine },
    data() {
        return {
            uname:this.$route.query.uname,
            dialogVisible: false,
            counseltimes:8,
            a:{
                ifarrive:'',
                consultation:'',
                advice:''
            },
            card_arr:[]
        };
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                    this.cleardata();
                })
                .catch(_ => {});
        },
        cleardata(){
            this.a.ifarrive = '';
            this.a.consultation = '';
            this.a.advice = '';
        },
        addCard(a){
            let da = new Date().getTime();
            this.card_arr.push({id:this.card_arr.length+1,ifarrive: a.ifarrive,consultation: a.consultation,advice: a.advice});
            if(a.ifarrive !== "脱落" && a.ifarrive !== "结案"){
                this.$refs.timeline.items.push({
                    date: new Date(da).toLocaleString(),
                    content: '第'+this.card_arr.length+'次咨询'
                },);
            }else {
                this.$refs.timeline.items.push({
                    date: new Date(da).toLocaleString(),
                    content: '结束'
                },);
            }
        }
    }
};
</script>

<style scoped>
.el-select{
    width: 60%;
}

.dialog-div{
    margin-bottom: 20px;
}
.el-card{
    margin-left: 20px;
    margin-top: 20px;
    height: 200px;
}

</style>