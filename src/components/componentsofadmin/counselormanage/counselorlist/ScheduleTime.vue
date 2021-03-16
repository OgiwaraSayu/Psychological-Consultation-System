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
                <div class="drag-box-item" style="height: 500px;max-width: 19%;min-width: 19%">
                    <div class="item-title">值班老师</div>
                    <draggable v-model="teacher" :options="dragOptions" @remove="removeHandle">
                        <transition-group id="teacher" class="item-ul" tag="div">
                            <div v-for="item in teacher" :key="item.id" class="drag-list">
                                {{ item.content }}
                            </div>
                        </transition-group>
                    </draggable>
                </div>
                <div style="width: 100%">
                    <el-row>
                        <el-col :span="6">
                            <div class="drag-box-item">
                                <div class="item-title">8~9点</div>
                                <draggable v-model="classroomarrange.period1" :options="dragOptions" @remove="removeHandle">
                                    <transition-group id="8~9点" class="item-ul" tag="div">
                                        <div v-for="item in classroomarrange.period1" :key="item.id" class="drag-list">
                                            {{ item.content }}
                                        </div>
                                    </transition-group>
                                </draggable>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="drag-box-item">
                                <div class="item-title">9~10点</div>
                                <draggable v-model="classroomarrange.period2" :options="dragOptions" @remove="removeHandle">
                                    <transition-group id="9~10点" class="item-ul" tag="div">
                                        <div v-for="item in classroomarrange.period2" :key="item.id" class="drag-list">
                                            {{ item.content }}
                                        </div>
                                    </transition-group>
                                </draggable>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="drag-box-item">
                                <div class="item-title">10~11点</div>
                                <draggable v-model="classroomarrange.period3" :options="dragOptions" @remove="removeHandle">
                                    <transition-group id="10~11点" class="item-ul" tag="div">
                                        <div v-for="item in classroomarrange.period3" :key="item.id" class="drag-list">
                                            {{ item.content }}
                                        </div>
                                    </transition-group>
                                </draggable>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="drag-box-item">
                                <div class="item-title">11~12点</div>
                                <draggable v-model="classroomarrange.period4" :options="dragOptions" @remove="removeHandle">
                                    <transition-group id="11~12点" class="item-ul" tag="div">
                                        <div v-for="item in classroomarrange.period4" :key="item.id" class="drag-list">
                                            {{ item.content }}
                                        </div>
                                    </transition-group>
                                </draggable>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row style="width: 100%">
                        <el-col :span="6">
                            <div class="drag-box-item">
                                <div class="item-title">14~15点</div>
                                <draggable v-model="classroomarrange.period5" :options="dragOptions" @remove="removeHandle">
                                    <transition-group id="14~15点" class="item-ul" tag="div">
                                        <div v-for="item in classroomarrange.period5" :key="item.id" class="drag-list">
                                            {{ item.content }}
                                        </div>
                                    </transition-group>
                                </draggable>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="drag-box-item">
                                <div class="item-title">15~16点</div>
                                <draggable v-model="classroomarrange.period6" :options="dragOptions" @remove="removeHandle">
                                    <transition-group id="15~16点" class="item-ul" tag="div">
                                        <div v-for="item in classroomarrange.period6" :key="item.id" class="drag-list">
                                            {{ item.content }}
                                        </div>
                                    </transition-group>
                                </draggable>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="drag-box-item">
                                <div class="item-title">16~17点</div>
                                <draggable v-model="classroomarrange.period7" :options="dragOptions" @remove="removeHandle">
                                    <transition-group id="16~17点" class="item-ul" tag="div">
                                        <div v-for="item in classroomarrange.period7" :key="item.id" class="drag-list">
                                            {{ item.content }}
                                        </div>
                                    </transition-group>
                                </draggable>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="drag-box-item">
                                <div class="item-title">17~18点</div>
                                <draggable v-model="classroomarrange.period8" :options="dragOptions" @remove="removeHandle">
                                    <transition-group id="17~18点" class="item-ul" tag="div">
                                        <div v-for="item in classroomarrange.period8" :key="item.id" class="drag-list">
                                            {{ item.content }}
                                        </div>
                                    </transition-group>
                                </draggable>
                            </div>
                        </el-col>
                    </el-row>
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
                },
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
                },
            ],
            classroomarrange:{
                period1: [],
                period2: [],
                period3: [],
                period4: [],
                period5: [],
                period6: [],
                period7: [],
                period8: []
            }
        };
    },
    components: {
        draggable
    },
    methods: {
        removeHandle(event) {
            console.log(event);
            this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id} `);
            this.teacher = this.teacherCopy
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
    height: 140px;
    margin-bottom: 10px;
    background-color: #eff1f5;
    margin-right: 16px;
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
    height: 500px;
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
</style>
