<template>
    <div>
        <el-card>
            <el-select v-model="query.emergencydegree" class="handle-select mr10" placeholder="-自述紧急程度-"
                       style="width: 200px">
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
            <el-button icon="el-icon-search" type="primary"
                       @click="handleSearch(query.emergencydegree,query.college,query.name)">搜索
            </el-button>
            <el-button type="primary" @click="handleSearch(null,null,null)">清空</el-button>
            <el-table
                :data="tablevisible[this.query.pageIndex-1]"
                max-height="1000"
                style="width: 100%;margin-top: 20px">
                <el-table-column
                    fixed
                    label="序号"
                    prop="number"
                    width="120">
                </el-table-column>
                <el-table-column
                    label="学号"
                    prop="schoolnumber"
                    width="150">
                </el-table-column>
                <el-table-column
                    label="姓名"
                    prop="name"
                    width="120">
                </el-table-column>
                <el-table-column
                    label="性别"
                    prop="sex"
                    width="120">
                </el-table-column>
                <el-table-column
                    label="自述紧急程度"
                    prop="emergencydegree"
                    width="120">
                </el-table-column>
                <el-table-column
                    label="问卷得分"
                    prop="score"
                    width="120">
                </el-table-column>
                <el-table-column
                    label="来访者诊断"
                    prop="diseasetype"
                    width="120">
                </el-table-column>
                <el-table-column
                    label="危险等级"
                    prop=""
                    width="120">
                </el-table-column>
                <el-table-column
                    label="初访结论"
                    prop=""
                    width="120">
                </el-table-column>
                <el-table-column
                    label="学院"
                    prop="college"
                    width="150">
                </el-table-column>
                <el-table-column
                    label="电话"
                    prop="telephone"
                    width="150">
                </el-table-column>
                <el-table-column
                    label="提交时间"
                    prop="submitdate"
                    width="120">
                </el-table-column>
                <el-table-column
                    v-if="operatevisible"
                    fixed="right"
                    label="操作"
                    width="120">
                    <template slot-scope="scope">
                        <el-button
                            size="small"
                            type="text"
                            @click="pagejumpto">
                            查看
                        </el-button>
                        <el-button
                            size="small"
                            type="text"
                            @click="pagejumpto">
                            修改
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
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
import { fetchData2 } from '../../../api';

export default {
    data() {
        return {
            query: {
                emergencydegree: '',
                college: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [],
            tableData2: [],
            tablevisible: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1,
            username: localStorage.getItem('ms_username'),
            operatevisible: false
        };
    },
    methods: {
        getData() {
            fetchData2(this.query).then(res => {
                console.log(res);
                this.tableData = res.list;
                this.tableData2 = this.tableData;
                for (let i = 0; i < this.query.pageSize; i++) {
                    this.tablevisible[i] = this.tableData2.slice(this.query.pageSize * i, this.query.pageSize * (i + 1));
                }
                this.pageTotal = this.tableData2.length;
            });
            console.log(this.tablevisible);
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        handleSearch(emergency, college, name) {
            if (emergency === null && college === null && name === null) {
                this.query.emergencydegree = '';
                this.query.college = '';
                this.query.name = '';
                this.getData();
            } else {
                this.tableData2 = this.tableData;
                let tableDataCopy = new Array();
                let j = 0;
                for (let i = 0; i < this.tableData2.length; i++) {
                    if ((this.tableData2[i].emergencydegree === emergency) && (this.tableData2[i].college === college)) {
                        tableDataCopy[j] = this.tableData2[i];
                        j++;
                    }
                }
                this.tableData2 = tableDataCopy;
                for (let i = 0; i < this.query.pageSize; i++) {
                    this.tablevisible[i] = tableDataCopy.slice(this.query.pageSize * i, this.query.pageSize * (i + 1));
                }
                this.query.pageIndex = 1;
                this.pageTotal = this.tableData2.length;
            }
        },
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        },
        pagejumpto() {
            this.$router.push('/recordfirstvisit');
        }
    },
    created() {
        this.getData();
    },
    mounted() {
        if (this.username === 'chufang') {
            this.operatevisible = true;
        }
    }
};
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
