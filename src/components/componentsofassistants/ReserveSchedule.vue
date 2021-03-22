<template>
<div>
    <table border="1" >
        <tr>
            <th>

            </th>
            <th v-for="item in table" :key="item.id">
                {{item.workDay}}
            </th>
        </tr>
        <tr>
            <td>8~10点</td>
            <td v-for="item in row1">
                <div @click="test2(item.teacher=test(item.teacher))"
                     style="white-space: pre-wrap;cursor: pointer" >
                    <span>
                        {{item.teacher}}
                    </span>
                </div>
            </td>
        </tr>
        <tr>
            <td>10~12点</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>14~16点</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>16~18点</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false" >确 定</el-button>
  </span>
    </el-dialog>
</div>
</template>

<script>
import swal from 'sweetalert';
export default {
    name: 'ReserveSchedule',
    data(){
        return{
            studentName:'',
            dialogVisible : false,
            table: [
                {id:1,workDay: '星期一'},
                {id:2,workDay: '星期二'},
                {id:3,workDay: '星期三'},
                {id:4,workDay: '星期四'},
                {id:5,workDay: '星期五'},
            ],
            row1: [
                { id:1,teacher:'li' },
                { id:2,teacher:'li' },
                { id:3,teacher:'li' },
                { id:4,teacher:'li' },
                { id:5,teacher:'li' }
            ]
        }
    },
    methods:{
        test(a){
                if(this.studentName !== ''){
                    a = a +'\n'+ this.studentName;
                    this.studentName = '';
                    return a;
                }
                else {
                    return a;
                }
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        },
        test2(){
            this.dialogVisible = true;

        },
    },
    created() {
        this.studentName = this.$route.query.student;
        console.log(this.studentName)
    },
};
</script>

<style scoped>
table{
    width: 100%;
    text-align: center;
}
td{
    width: 60px;
    height: 70px;
    text-align: center;
}
</style>