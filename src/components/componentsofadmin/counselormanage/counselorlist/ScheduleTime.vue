<template>
    <section class="main">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-rank"></i>咨询师列表</el-breadcrumb-item>
                <el-breadcrumb-item>配置咨询时间</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="drag-box">
                <div class="drag-box-item" style="max-width: 19%;height: 100%;min-width: 19%">
                    <div class="item-title">值班老师</div>
                    <draggable v-model="teacher" :options="dragOptions" @remove="removeHandle">
                        <transition-group id="teacher" class="item-ul" tag="div">
                            <div v-for="item in teacher" :key="item.id" class="drag-list">
                                {{ item.content }}
                            </div>
                        </transition-group>
                    </draggable>
                </div>
                <table border="1">
                    <tr>
                        <th>

                        </th>
                        <th v-for="item in table" :key="item.id">
                            {{item.workDay}}
                        </th>
                    </tr>
                    <tr>
                        <td>8~10点</td>
                        <td v-for="(i,index) in timeArrange.eightToTen" :key="i.id">
                            <div class="drag-box-item">
                                <draggable v-model="timeArrange.eightToTen[index]" :options="dragOptions"
                                           @remove="removeHandle">
                                    <transition-group id="8~10点" class="item-ul" tag="div">
                                        <div v-for="item in timeArrange.eightToTen[index]" :key="item.id" class="drag-list">
                                            {{ item.content }}
                                        </div>
                                    </transition-group>
                                </draggable>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>10~12点</td>
                        <td v-for="(i,index) in timeArrange.tenToTwelve" :key="i.id">
                            <div class="drag-box-item">
                                <draggable v-model="timeArrange.tenToTwelve[index]" :options="dragOptions"
                                           @remove="removeHandle">
                                    <transition-group id="10~12点" class="item-ul" tag="div">
                                        <div v-for="item in timeArrange.tenToTwelve[index]" :key="item.id" class="drag-list">
                                            {{ item.content }}
                                        </div>
                                    </transition-group>
                                </draggable>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>14~16点</td>
                        <td v-for="(i,index) in timeArrange.fourteenToSixteen" :key="i.id">
                            <div class="drag-box-item">
                                <draggable v-model="timeArrange.fourteenToSixteen[index]" :options="dragOptions"
                                           @remove="removeHandle">
                                    <transition-group id="14~16点" class="item-ul" tag="div">
                                        <div v-for="item in timeArrange.fourteenToSixteen[index]" :key="item.id" class="drag-list">
                                            {{ item.content }}
                                        </div>
                                    </transition-group>
                                </draggable>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>16~18点</td>
                        <td v-for="(i,index) in timeArrange.sixteenToEighteen" :key="i.id">
                            <div class="drag-box-item">
                                <draggable v-model="timeArrange.sixteenToEighteen[index]" :options="dragOptions"
                                           @remove="removeHandle">
                                    <transition-group id="16~18点" class="item-ul" tag="div">
                                        <div v-for="item in timeArrange.sixteenToEighteen[index]" :key="item.id" class="drag-list">
                                            {{ item.content }}
                                        </div>
                                    </transition-group>
                                </draggable>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
import draggable from 'vuedraggable';

export default {
    name: 'scheduletime',
    data() {
        return {
            classroom:{

            },
            table: [
                {id:1,workDay: '星期一'},
                {id:2,workDay: '星期二'},
                {id:3,workDay: '星期三'},
                {id:4,workDay: '星期四'},
                {id:5,workDay: '星期五'},
            ],
            dragOptions: {
                animation: 120,
                scroll: true,
                group: 'sortlist',
                ghostClass: 'ghost-style'
            },
            teacher: [
                {
                    id: 1,
                    content: '王老师'
                },
                {
                    id: 2,
                    content: '李老师'
                },
                {
                    id: 3,
                    content: '朱老师'
                },
                {
                    id: 4,
                    content: '祝老师'
                },
                {
                    id: 5,
                    content: '晏老师'
                },
                {
                    id: 6,
                    content: '汪老师'
                }
            ],
            teacherCopy: [
                {
                    id: 1,
                    content: '王老师'
                },
                {
                    id: 2,
                    content: '李老师'
                },
                {
                    id: 3,
                    content: '朱老师'
                },
                {
                    id: 4,
                    content: '祝老师'
                },
                {
                    id: 5,
                    content: '晏老师'
                },
                {
                    id: 6,
                    content: '汪老师'
                }
            ],
            timeArrange:
                {
                    eightToTen:{
                        Monday:[],
                        Tuesday:[],
                        Wednesday:[],
                        Thursday:[],
                        Friday:[]
                    },
                    tenToTwelve:{
                        Monday:[],
                        Tuesday:[],
                        Wednesday:[],
                        Thursday:[],
                        Friday:[]
                    },
                    fourteenToSixteen:{
                        Monday:[],
                        Tuesday:[],
                        Wednesday:[],
                        Thursday:[],
                        Friday:[]
                    },
                    sixteenToEighteen:{
                        Monday:[],
                        Tuesday:[],
                        Wednesday:[],
                        Thursday:[],
                        Friday:[]
                    }
                },
            timeArrange1:this.timeArrange,
            timeArrange2:this.timeArrange,
            timeArrange3:this.timeArrange,
            timeArrange4:this.timeArrange,

            timeArrangeEachClass:[
                {classroom1:this.timeArrange1},
                {classroom2:this.timeArrange2},
                {classroom3:this.timeArrange3},
                {classroom4:this.timeArrange4},
            ]
        };
    },
    components: {
        draggable
    },
    methods: {
        removeHandle(event) {
            console.log(event);
            this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id} `);
            this.teacher = this.teacherCopy;
        }
    }
};

</script>

<style scoped>
.drag-box {
    display: flex;
    user-select: none;
}

.drag-box-item {
    flex: 1;
    height: 100%;
    border-radius: 6px;
    border: 1px #e1e4e8 solid;
}

.item-title {
    padding: 8px 8px 8px 12px;
    font-size: 14px;
    line-height: 1.5;
    color: #24292e;
    font-weight: 600;
}

.item-ul {
    padding: 0 8px 8px;
    height: 100%;
    overflow-y: scroll;
}

.item-ul::-webkit-scrollbar {
    width: 0;
}

.drag-list {
    border: 1px #e1e4e8 solid;
    padding: 10px;
    margin: 5px 0 10px;
    list-style: none;
    background-color: #fff;
    border-radius: 6px;
    cursor: pointer;
    -webkit-transition: border .3s ease-in;
    transition: border .3s ease-in;
}

.drag-list:hover {
    border: 1px solid #20a0ff;
}

.drag-title {
    font-weight: 400;
    line-height: 25px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}

.ghost-style {
    display: block;
    color: transparent;
    border-style: dashed
}
table{
    width: 100%;
    text-align: center;
}
td{
    width: 60px;
    height: 60px;
}
</style>
