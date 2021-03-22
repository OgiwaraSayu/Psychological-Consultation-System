import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/homepage'
        },
        {
            path: '/',
            component: () => import('../components/common/Home.vue'),
            children: [
                //预约时间表
                {
                    path: '/scheduletime',
                    component: () => import('../components/componentsofadmin/counselormanage/counselorlist/ScheduleTime'),
                    meta: { title: '预约时间表', permission: 'admin' }
                },
                //咨询师管理
                {
                    path: '/consultantmanage',
                    component: () => import('../components/componentsofadmin/counselormanage/CouselorManage'),
                    meta: { title: '咨询师管理', permission: 'admin' }
                },
                //高级设置
                {
                    path: '/advancedsettings',
                    component: () => import('../components/componentsofadmin/AdvancedSettings'),
                    meta: { title: '高级设置', permission: 'admin' }
                },
                //初访预约管理
                {
                    path: '/firstvisitmanage',
                    component: () => import('../components/componentsofadmin/reservemanage/FirstVisitManage'),
                    meta: { title: '初访预约管理', permission: 'admin' }
                },
                //预约成功列表
                {
                    path: '/reservesucess',
                    component: () => import('../components/componentsofadmin/reservemanage/ReserveSucess'),
                    meta: { title: '预约成功', permission: 'admin' }
                },


                //初访员
                //初访列表
                {
                    path: '/firstvisitlist',
                    component: () => import('../components/componentsofvisitor/firstvisitmanage/FirstVisitList'),
                    meta: { title: '录入初访信息', permission: 'visitor' }
                },
                //录入初访信息
                {
                    path: '/recordfirstvisit',
                    component: () => import('../components/componentsofvisitor/firstvisitmanage/RecordFisrtVisit'),
                    meta: { title: '录入初访信息', permission: 'visitor' }
                },
                //查看初访结果
                {
                    path: '/firstvisitresult',
                    component: () => import('../components/componentsofvisitor/firstvisitmanage/FirstVisitResult'),
                    meta: { title: '录入初访信息', permission: 'visitor' }
                },

                //学生
                //登记表查看
                {
                    path: '/firstvisitquestiontable',
                    component: () => import('../components/componentsofstudents/firstvisitreserve/FirstVisitQuestionTable'),
                    meta: { title: '登记表', permission: 'student' }
                },
                //预约须知
                {
                    path: '/reserveinformation',
                    component: () => import('../components/componentsofstudents/firstvisitreserve/ReserveInformation'),
                    meta: { title: '预约须知', permission: 'student' }
                },
                //我的咨询师
                {
                    path: '/mycounselor',
                    component: () => import('../components/componentsofstudents/MyCounselor'),
                    meta: { title: '我的咨询师', permission: 'student' }
                },
                //我的预约
                {
                    path: '/myreservation',
                    component: () => import('../components/componentsofstudents/MyReservation'),
                    meta: { title: '选择时间段', permission: 'student' }
                },


                //咨询师
                //学生详情
                {
                    path: '/editrecord',
                    component: () => import('../components/componentsofcounselors/counselmanage/EditRecord'),
                    meta: { title: '学生详情', permission: 'counselor' }
                },
                //编辑咨询记录
                {
                    path: '/editrecorddetails',
                    component: () => import('../components/componentsofcounselors/counselmanage/EditRecordDetails'),
                    meta: { title: '编辑咨询记录', permission: 'counselor' }
                },
                //编辑个人结案报告
                {
                    path: '/finalreport',
                    component: () => import('../components/componentsofcounselors/counselmanage/FinalReport'),
                    meta: { title: '个人结案报告', permission: 'counselor'}
                },
                //编辑个人结案报告
                {
                    path: '/browseresult',
                    component: () => import('../components/componentsofcounselors/counselmanage/BrowseResult'),
                    meta: { title: '查看咨询结果', permission: 'counselor'}
                },


                //心理助理
                //咨询安排
                {
                    path: '/consultationarrange',
                    component: () => import('../components/componentsofassistants/ConsultationArrange'),
                    meta: { title: '咨询安排', permission: 'assistant' }
                },
                //查看初访结果
                {
                    path: '/firstvisitresultcopy',
                    component: () => import('../components/componentsofassistants/FirstVisitResultCopy'),
                    meta: { title: '查看初访结果', permission: 'assistant' }
                },
                //预约时间表
                {
                    path: '/reserveschedule',
                    component: () => import('../components/componentsofassistants/ReserveSchedule'),
                    meta: { title: '预约时间表', permission: 'assistant' }
                },



                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../view/pages/Permission.vue'),
                    meta: { title: '权限测试', permission: 'admin' }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../view/pages/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../view/pages/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/person',
                    component: () => import('../components/componentsofallusers/Person'),
                    meta: { title: '个人资料' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../view/pages/Login.vue'),
            meta: { title: '登录' }
        },
        //首页
        {
            path: '/homepage',
            component: () => import('../view/pages/Main'),
            meta: { title: '首页' }
        },
        //问卷
        {
            path: '/questionnaire',
            component: () => import('../view/pages/Questionnaire'),
            meta: { title: '问卷' }
        },
        //注册
        {
            path: '/register',
            component: () => import('../view/pages/Register'),
            meta: { title: '注册' }
        },
        //专家页面
        {
            path: '/professorpage',
            component: () => import('../view/pages/ProfessorPage'),
            meta: { title: '专家' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});

