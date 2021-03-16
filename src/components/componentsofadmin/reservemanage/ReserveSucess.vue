<template>
    <div>
        <el-card>
            <el-select v-model="query.emergencydegree" class="handle-select mr10" placeholder="-自述紧急程度-" style="width: 200px">
                <el-option key="1" label="紧急" value="紧急"></el-option>
                <el-option key="2" label="非常紧急" value="非常紧急"></el-option>
                <el-option key="3" label="不紧急" value="不紧急"></el-option>
            </el-select>
            <el-select v-model="query.college" class="handle-select mr10" placeholder="-学院-" style="width: 200px">
                <el-option key="1" label="软件学院" value="软件学院"></el-option>
                <el-option key="2" label="生物医学院" value="生物医学院"></el-option>
                <el-option key="3" label="电气学院" value="电气学院"></el-option>
            </el-select>
            <el-input v-model="query.name" class="handle-input mr10" placeholder="用户名"></el-input>
            <el-button icon="el-icon-search" type="primary" @click="handleSearch(query.emergencydegree,query.college,query.name)">搜索</el-button>
            <el-button type="primary" @click="handleSearch(null,null,null)">清空</el-button>
            <el-table
                :data="tablevisible[this.query.pageIndex-1]"
                style="width: 100%;margin-top: 20px"
                max-height="1000">
                <el-table-column
                    fixed
                    prop="number"
                    label="序号"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="schoolnumber"
                    label="学号"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="sex"
                    label="性别"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="emergencydegree"
                    label="自述紧急程度"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="score"
                    label="问卷得分"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="diseasetype"
                    label="来访者诊断"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="college"
                    label="学院"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="firstvisitor"
                    label="初访员"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="firstvisitdate"
                    label="初访时间"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="telephone"
                    label="电话"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="submitdate"
                    label="提交时间"
                    width="120">
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    width="120">
                    <template slot-scope="scope">
                        <el-button
                            @click.native.prevent="deleteRow(scope.$index, tablevisible)"
                            type="text"
                            size="small">
                            删除
                        </el-button>
                        <el-button
                            icon="el-icon-edit"
                            type="text"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 编辑弹出框 -->
            <el-dialog :visible.sync="editVisible" title="编辑" width="30%">
                <el-form ref="form" :model="form" label-width="70px">
                    <el-form-item label="初访员">
                        <el-input v-model="form.firstvisitor"></el-input>
                    </el-form-item>
                    <el-form-item label="初访时间">
                        <el-input v-model="form.firstvisitdate"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
            </el-dialog>

            <div class="pagination">
                <el-pagination
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="pageTotal"
                    background
                    layout="total, prev, pager, next"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </el-card>
    </div>
</template>

<script>
import { fetchData3 } from '../../../api';
export default {
    data() {
        return {
            query:{
                emergencydegree:'',
                college:'',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [],
            tableData2:[],
            tablevisible:[],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1,
        }
    },
    methods: {
        getData(){
            fetchData3(this.query).then(res => {
                console.log(res);
                this.tableData = res.list;
                this.tableData2 = this.tableData;
                for(let i = 0; i < this.query.pageSize; i++){
                    this.tablevisible[i] = this.tableData2.slice(this.query.pageSize*i,this.query.pageSize*(i+1));
                }
                this.pageTotal = this.tableData2.length;
            });
            console.log(this.tablevisible)
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        handleSearch(emergency,college,name) {
            if(emergency===null&&college===null&&name===null){
                this.query.emergencydegree = '';
                this.query.college = '';
                this.query.name = '';
                this.getData();
            }
            else {
                this.tableData2 = this.tableData;
                let tableDataCopy = new Array();
                let j = 0;
                for(let i = 0; i < this.tableData2.length; i++){
                    if((this.tableData2[i].emergencydegree === emergency)&&(this.tableData2[i].college === college)){
                        tableDataCopy[j]=this.tableData2[i];
                        j++;
                    }
                }
                this.tableData2 = tableDataCopy;
                for(let i = 0; i < this.query.pageSize; i++){
                    this.tablevisible[i] = tableDataCopy.slice(this.query.pageSize*i,this.query.pageSize*(i+1));
                }
                this.query.pageIndex = 1;
                this.pageTotal = this.tableData2.length;
            }
        },
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        },
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        // 保存编辑
        saveEdit() {
            this.editVisible = false;
            this.$message.success(`修改第 ${this.idx + 1} 行成功`);
            this.$set(this.tableData, this.idx, this.form);
            this.$set(this.tableData2, this.idx, this.form);
            this.$set(this.tablevisible, this.idx, this.form);
        },
    },
    created(){
        this.getData();
    },
}
</script>

<style scoped>

.handle-select {
    width: 120px;
}

.handle-input {
    width: 200px;
    display: inline-block;
}

.mr10 {
    margin-right: 10px;
}

</style>
