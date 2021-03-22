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
                <div style="margin-left: 20px;float: bottom;width: 100%;">
                    <div style="margin-left: 30%;">
                        <el-button @click="buttonChange(1)">教室A</el-button>
                        <el-button @click="buttonChange(2)">教室B</el-button>
                        <el-button @click="buttonChange(3)">教室C</el-button>
                        <el-button @click="buttonChange(4)">教室D</el-button>
                    </div>
                    <div style="margin-top: 20px">
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
                                <td v-for="(i,index) in timeArrangeCopy.eightToTen" :key="i.id">
                                    <div class="drag-box-item">
                                        <draggable v-model="timeArrangeCopy.eightToTen[index]" :options="dragOptions"
                                                   @remove="event => removeHandle(event)">
                                            <transition-group id="8~10点" class="item-ul" tag="div" >
                                                <div v-for="item in timeArrangeCopy.eightToTen[index]" :key="item.id" class="drag-list">
                                                    {{ item.content }}
                                                </div>
                                            </transition-group>
                                        </draggable>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>10~12点</td>
                                <td v-for="(i,index) in timeArrangeCopy.tenToTwelve" :key="i.id">
                                    <div class="drag-box-item">
                                        <draggable v-model="timeArrangeCopy.tenToTwelve[index]" :options="dragOptions"
                                                   @remove="event => removeHandle(event,timeArrange.tenToTwelve[index])">
                                            <transition-group id="10~12点" class="item-ul" tag="div">
                                                <div v-for="item in timeArrangeCopy.tenToTwelve[index]" :key="item.id" class="drag-list">
                                                    {{ item.content }}
                                                </div>
                                            </transition-group>
                                        </draggable>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>14~16点</td>
                                <td v-for="(i,index) in timeArrangeCopy.fourteenToSixteen" :key="i.id">
                                    <div class="drag-box-item">
                                        <draggable v-model="timeArrangeCopy.fourteenToSixteen[index]" :options="dragOptions"
                                                   @remove="event => removeHandle(event,timeArrange.fourteenToSixteen[index])">
                                            <transition-group id="14~16点" class="item-ul" tag="div">
                                                <div v-for="item in timeArrangeCopy.fourteenToSixteen[index]" :key="item.id" class="drag-list">
                                                    {{ item.content }}
                                                </div>
                                            </transition-group>
                                        </draggable>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>16~18点</td>
                                <td v-for="(i,index) in timeArrangeCopy.sixteenToEighteen" :key="i.id">
                                    <div class="drag-box-item">
                                        <draggable v-model="timeArrangeCopy.sixteenToEighteen[index]" :options="dragOptions"
                                                   @remove="event => removeHandle(event,timeArrange.sixteenToEighteen[index])">
                                            <transition-group id="16~18点" class="item-ul" tag="div">
                                                <div v-for="item in timeArrangeCopy.sixteenToEighteen[index]" :key="item.id" class="drag-list">
                                                    {{ item.content }}
                                                </div>
                                            </transition-group>
                                        </draggable>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <el-button type="primary" plain class="save-button" @click="submit">保存</el-button>
                    </div>
                </div>
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
            timeArrangeCopy:{},
            timeArrange1: {},
            timeArrange2: {},
            timeArrange3: {},
            timeArrange4: {},
        };
    },
    components: {
        draggable
    },
    methods: {
        removeHandle(event,a) {
            console.log(a);
            console.log(event);
            this.$message.success(`将 ${event.item.innerText} 安排到 ${event.to.id} `);
            this.teacher = this.teacherCopy;
        },
        submit(){
            // let timeArrangeAll = {
            //     timeArrange1: this.timeArrange1,
            //     timeArrange2: this.timeArrange2,
            //     timeArrange3: this.timeArrange3,
            //     timeArrange4: this.timeArrange4,
            // };
            let formData = new FormData();
            // formData.append('arr',this.timeArrange1);
            formData.append('classroomID',1);
            this.$axios({
                url:this.Host + '/administrator/arrageduty',
                method: 'POST',
                data: formData
            })
        },
        buttonChange(buttonId){
            console.log(buttonId)
            switch (buttonId){
                case 1:{
                    this.timeArrangeCopy = this.timeArrange1;
                    break;
                }
                case 2:{
                    this.timeArrangeCopy = this.timeArrange2;
                    break;
                }
                case 3:{
                    this.timeArrangeCopy = this.timeArrange3;
                    break;
                }
                case 4 :{
                    this.timeArrangeCopy = this.timeArrange4;
                    break;
                }
            }
        }
    },
    mounted() {
        this.timeArrange1=JSON.parse(JSON.stringify(this.timeArrange));
        this.timeArrange2=JSON.parse(JSON.stringify(this.timeArrange));
        this.timeArrange3=JSON.parse(JSON.stringify(this.timeArrange));
        this.timeArrange4=JSON.parse(JSON.stringify(this.timeArrange));
        this.timeArrangeCopy=this.timeArrange1;
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
    /*border-radius: 6px;*/
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
    height: 70px;
}
.el-button{
    margin-left: 40px;
}
.save-button{
    width: 100px;
    height: 40px;
    position: relative;
    left: 85%;
    top: 20px;
}
</style>
