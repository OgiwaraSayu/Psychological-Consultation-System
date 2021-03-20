<template>
    <div class="sidebar">
        <el-menu
            :collapse="collapse"
            :default-active="onRoutes"
            active-text-color="#9a0ff"
            background-color="#324157"
            class="sidebar-el-menu"
            router
            text-color="#bfcbd9"
            unique-opened
        >
            <div style="height: 80px;">
                <el-button style="position:relative;top: 10%;height: 70px;left: 8%;width: 80%;" type="primary">
                <span style="color: white;font-size: 25px;">
                    <i class="el-icon-setting"></i>
                    <span v-if="!collapse">后台管理系统</span>
                </span>
                </el-button>
            </div>
            <template v-for="i in public">
                <template>
                    <el-menu-item :key="i.index" :index="i.index">
                        <i :class="i.icon"></i>
                        <span slot="title">{{ i.title }}</span>
                    </el-menu-item>
                </template>
            </template>
            <template v-for="item in items" v-if="username==='admin'">
                <template v-if="item.subs">
                    <el-submenu :key="item.index" :index="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :key="subItem.index"
                                :index="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :key="subItem.index"
                                :index="subItem.index"
                            >{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :key="item.index" :index="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>

            <template v-for="item in items2" v-if="username==='visitor'">
                <template v-if="item.subs">
                    <el-submenu :key="item.index" :index="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :key="subItem.index"
                                :index="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :key="subItem.index"
                                :index="subItem.index"
                            >{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :key="item.index" :index="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>

            <template v-for="item in items3" v-if="username==='assistant'">
                <template v-if="item.subs">
                    <el-submenu :key="item.index" :index="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :key="subItem.index"
                                :index="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :key="subItem.index"
                                :index="subItem.index"
                            >{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :key="item.index" :index="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>

            <template v-for="item in items4" v-if="username==='student'">
                <template v-if="item.subs">
                    <el-submenu :key="item.index" :index="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :key="subItem.index"
                                :index="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :key="subItem.index"
                                :index="subItem.index"
                            >{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :key="item.index" :index="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>

            <template v-for="item in items5" v-if="username==='counselor'">
                <template v-if="item.subs">
                    <el-submenu :key="item.index" :index="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :key="subItem.index"
                                :index="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :key="subItem.index"
                                :index="subItem.index"
                            >{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :key="item.index" :index="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
            <!--            <template v-for="i in items2" v-if="username==='chufang'">-->
            <!--                <template>-->
            <!--                    <el-menu-item :index="i.index" :key="i.index">-->
            <!--                        <i :class="i.icon"></i>-->
            <!--                        <span slot="title">{{ i.title }}</span>-->
            <!--                    </el-menu-item>-->
            <!--                </template>-->
            <!--            </template>-->
            <!--            <template v-for="i in items3" v-if="username==='zhuli'">-->
            <!--                <template>-->
            <!--                    <el-menu-item :index="i.index" :key="i.index">-->
            <!--                        <i :class="i.icon"></i>-->
            <!--                        <span slot="title">{{ i.title }}</span>-->
            <!--                    </el-menu-item>-->
            <!--                </template>-->
            <!--            </template>-->
            <!--            <template v-for="i in items3" v-if="username==='xuesheng'">-->
            <!--                <template>-->
            <!--                    <el-menu-item :index="i.index" :key="i.index">-->
            <!--                        <i :class="i.icon"></i>-->
            <!--                        <span slot="title">{{ i.title }}</span>-->
            <!--                    </el-menu-item>-->
            <!--                </template>-->
            <!--            </template>-->
            <!--            <template v-for="i in items3" v-if="username==='zixun'">-->
            <!--                <template>-->
            <!--                    <el-menu-item :index="i.index" :key="i.index">-->
            <!--                        <i :class="i.icon"></i>-->
            <!--                        <span slot="title">{{ i.title }}</span>-->
            <!--                    </el-menu-item>-->
            <!--                </template>-->
            <!--            </template>-->
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';

export default {
    data() {
        return {
            username: localStorage.getItem('ms_username'),
            collapse: false,
            public: [
                {
                    icon: 'el-icon-user',
                    index: 'person',
                    title: '个人中心'
                }
            ],
            items: [
                {
                    icon: 'el-icon-folder',
                    index: '1',
                    title: '预约管理',
                    subs: [
                        {
                            index: 'firstvisitmanage',
                            title: '初访预约管理'
                        },
                        {
                            index: 'reservesucess',
                            title: '预约成功列表'
                        }
                    ]
                },
                {
                    icon: 'el-icon-folder',
                    index: '2',
                    title: '咨询师管理',
                    subs: [
                        {
                            index: 'consultantmanage',
                            title: '用户管理'
                        },
                        {
                            index: '2-2',
                            title: '咨询师列表',
                            subs: [
                                {
                                    index: 'scheduletime',
                                    title: '配置咨询时间'
                                }
                            ]
                        }, {
                            index: '2-3',
                            title: '初访员列表',
                            subs: [
                                {
                                    index: 'scheduletime',
                                    title: '配置初访时间'
                                }
                            ]
                        }
                    ]
                },
                {
                    icon: 'el-icon-folder',
                    index: '3',
                    title: '咨询管理',
                    subs: [
                        {
                            index: '3-1',
                            title: '咨询列表-初访列表',
                            subs: [
                                {
                                    index: '3-1-1',
                                    title: '咨询列表-心理咨询列表'
                                }
                            ]
                        }
                    ]
                },
                {
                    icon: 'el-icon-s-tools',
                    index: 'advancedsettings',
                    title: '高级配置'
                },
                {
                    icon: 'el-icon-lx-warn',
                    index: '4',
                    title: '错误处理',
                    subs: [
                        {
                            index: 'permission',
                            title: '权限测试'
                        },
                        {
                            index: '404',
                            title: '404页面'
                        }
                    ]
                }
            ],
            items2: [
                //初访员
                {
                    icon: 'el-icon-folder',
                    index: '5',
                    title: '初访管理',
                    subs: [
                        {
                            index: 'firstvisitlist',
                            title: '录入初访信息'
                        },
                        {
                            index: 'firstvisitresult',
                            title: '查看初访结果'
                        }
                    ]
                }
            ],
            items3: [
                //心理助理
                {
                    icon: 'el-icon-folder',
                    index: 'consultationarrange',
                    title: '咨询安排'
                },
                {
                    icon: 'el-icon-folder',
                    index: '7',
                    title: '预约时间表'
                },
                {
                    icon: 'el-icon-folder',
                    index: 'firstvisitresult',
                    title: '查看初访结果'
                }
            ],
            items4: [
                //学生
                {
                    icon: 'el-icon-folder',
                    index: '8',
                    title: '初访预约',
                    subs: [
                        {
                            index: 'reserveinformation',
                            title: '初访预约-须知'
                        },
                        {
                            index: 'firstvisitquestiontable',
                            title: '初访预约-首访登记表'
                        }
                    ]
                },
                {
                    icon: 'el-icon-folder',
                    index: 'myreservation',
                    title: '我的预约'
                },
                {
                    icon: 'el-icon-s-custom',
                    index: 'mycounselor',
                    title: '我的咨询师'  //学生查看自己的咨询师
                }
            ],
            items5: [
                //咨询师
                {
                    icon: 'el-icon-folder',
                    index: '9',
                    title: '咨询师',
                    subs: [
                        {
                            index: '9-1',
                            title: '咨询管理',
                            subs: [
                                {
                                    index: 'editrecord',
                                    title: '编辑咨询记录'
                                },
                                {
                                    index: 'browseresult',
                                    title: '查看咨询结果-结案/脱落'
                                },
                                {
                                    index: '9-1-3',
                                    title: '追加咨询时段'
                                },
                                {
                                    index: 'finalreport',
                                    title: '咨询结案报告'
                                }
                            ]
                        }

                    ]
                }
            ]
        };
    },

    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 0px;
    bottom: 0;
    overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
    width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}

.sidebar > ul {
    height: 100%;
}
</style>
