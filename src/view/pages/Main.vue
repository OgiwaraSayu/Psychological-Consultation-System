<template>
    <div style="overflow-x: hidden">
        <div v-if="loginvisible" class="login-div">
            <el-link href="/login">登陆</el-link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <el-link href="/register">注册</el-link>
        </div>
        <div v-if="!loginvisible" class="login-div">
            <el-link href="/person">{{ uname }}</el-link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <el-link @click="logout">退出</el-link>
        </div>
        <div class="block">
            <div>
                <div class="div01">
                    <el-carousel height="500px">
                        <el-carousel-item v-for="item in imagesBox" :key="item.id">
                            <img :src="item.idView" class="img">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div>
                    <div class="nav_bg" style="margin-right: 15%">
                        <ul class="nav0">
                            <li class="nav0_1"><a href="https://www.baidu.com">咨询中心</a></li>
                            <li class="nav0_2"><a href="https://www.baidu.com">专家美文</a></li>
                            <li class="nav0_3"><a href="https://www.baidu.com">心灵花园</a></li>
                            <li class="nav0_4"><a href="https://www.baidu.com">咨询方法</a></li>
                        </ul>
                    </div>
                </div>
                <el-row>
                    <el-col :span='4'><p>&nbsp;</p></el-col>
                    <el-col :span='4'>
                        <div>
                            <el-card body-style="padding: 10px" class="box-card" shadow="never" style="height: 802px">
                                <div>
                                    <div style="margin-top: -10px">
                                        <i class="el-icon-video-play" style="color: #A7C86B"></i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span class="span1"><a style="color:#A7C86B;font-weight: bold;font-size: large">最新活动</a></span>
                                    </div>
                                    <div>
                                        <el-image
                                            class="image"
                                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                            style="width: 230px">
                                        </el-image>
                                    </div>
                                    <div class="amap-page-container">
                                        <div style="margin-top: 5px">
                                            <i class="el-icon-video-play" style="color: #A7C86B"></i>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span class="span1"><a
                                                style="color:#A7C86B;font-weight: bold;font-size: large">在线地图</a></span>
                                        </div>
                                        <div :style="{width:'100%',height:'300px'}">
                                            <el-amap :center="center" :plugin="plugin" class="amap-demo" vid="amap">
                                            </el-amap>
                                        </div>
                                        <div style="margin-top: 20px">
                                            <el-button class="button1">
                                                <i class="el-icon-phone-outline i1"></i>
                                                <span class="font1">联系我们</span>
                                            </el-button>
                                            <el-link href="/questionnaire">
                                                <el-button class="button1" style="margin-top: 20px;margin-left: 0px">
                                                    <i class="el-icon-question i1"></i>
                                                    <span class="font1">在线测评</span>
                                                </el-button>
                                            </el-link>
                                        </div>
                                    </div>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span='12'>
                        <div>
                            <el-card body-style="padding: 0px" class="box-card" shadow="never"
                                     style="margin-left: 10px;margin-right: 10px;height: 320px">
                                <div class="linear">
                                    <i class="el-icon-video-play"
                                       style="color: #A7C86B;margin-top: 10px;margin-left: 10px"></i>
                                </div>
                                <span style="color: rgba(42,136,238,0.55)">觉察自我 舒展心灵 启迪智慧 重获幸福。我们的电话：</span>
                                <span style="color: orange;font-weight: bold;font-family: 微軟正黑體;font-size: large">028-85374385</span>
                                <br>
                                <el-row style="padding: 10px;color: rgba(238,25,14,0.55)">
                                    <el-col :span="8">
                                        <i class="el-icon-thumb icon"></i>&nbsp;&nbsp;
                                        朱锐老师专栏
                                    </el-col>
                                    <el-col :span="8">
                                        <i class="el-icon-thumb icon"></i>&nbsp;&nbsp;
                                        晏礼鹏老师专栏
                                    </el-col>
                                    <el-col :span="8">
                                        <i class="el-icon-thumb icon"></i>&nbsp;&nbsp;
                                        唐亚杰老师专栏
                                    </el-col>
                                </el-row>
                            </el-card>
                            <el-card body-style="padding: 0px" class="box-card" shadow="never"
                                     style="margin-left: 10px;margin-right: 10px">
                                <div>
                                    <div class="linear">
                                        <i class="el-icon-video-play"
                                           style="color: #A7C86B;margin-top: 10px;margin-left: 10px">
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <span style="font-size: large;font-weight: bold">中心介绍</span>
                                        </i>
                                    </div>
                                    <div style="width: 45%;float: left">
              <span style="font-size: 12.5px;font-weight: lighter">
               成都心启航心理咨询中心（028-85374385，18602846578/微信）可提供心理咨询、心理测评；婚恋情感咨询、婚姻危机干预、亲子关系、青少年教育咨询、企业EAP实施；焦虑症、抑郁症、恐惧症、疑病症、强迫症等各类神经症的辅助性治疗与咨询……前身为四川地区较早（2003年）一批成立的心理咨询机构——海灵格心理咨询中心。配…
                <router-link style="float: right;color: #66b1ff" to="www.baidu.com">浏览详情>></router-link>
              </span>
                                    </div>
                                    <div style="float: left;width: 55%">
                                        <img src="../../assets/about.jpg"
                                             style="width: 90%;height: 150px;margin-left: 25px">
                                    </div>
                                </div>
                                <div style="margin-top: 160px ">
                                    <hr color="#A7C86B">
                                </div>
                                <div>
                                    <i class="el-icon-video-play"
                                       style="color: #A7C86B;margin-top: 10px;margin-left: 10px">
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span style="font-size: large;font-weight: bold">专家团队</span>
                                    </i>
                                </div>
                                <div @mouseout="mouseout" @mouseover="mouseon">
                                    <el-row class="autoplay">
                                        <ul>

                                            <li v-for="item in imageProfessorBox1" :key="item.id"
                                                :style="{'left': leftDistance1+'px'}"
                                                style="overflow: hidden;float: left;position: relative">
                                                <router-link
                                                    :to="{path: '/professorpage',query: {professorname:item.professorname}}">
                                                    <el-card class="box-card" shadow="never"
                                                             style="padding: 0px;margin-right: 20px">
                                                        <img :src="item.idView" class="img2">
                                                    </el-card>
                                                    <span class="professor">{{ item.professorname }}</span>
                                                </router-link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li v-for="item in imageProfessorBox2" :key="item.id"
                                                :style="{'left': leftDistance2+'px'}"
                                                style="overflow: hidden;float: left;position: relative">
                                                <router-link
                                                    :to="{path: '/professorpage',query: {professorname:item.professorname}}">
                                                    <el-card class="box-card" shadow="never"
                                                             style="padding: 0px;margin-right: 20px">
                                                        <img :src="item.idView" class="img2">
                                                    </el-card>
                                                    <span class="professor">{{ item.professorname }}</span>
                                                </router-link>
                                            </li>
                                        </ul>
                                    </el-row>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div>
                <el-row>
                    <el-col :span='4'><p>&nbsp;</p></el-col>
                    <el-col :span="16" style="overflow: hidden;float: left;position: relative">
                        <el-image :src="require('../../assets/img/bg/bg1.png')"
                                  style="margin-top: 10px;height: 780px"></el-image>
                        <el-image :src="require('../../assets/img/bg/bg2.png')"
                                  style="margin-top: 10px;height: 650px"></el-image>
                        <el-row class="autoplay">
                            <ul>
                                <li v-for="item in imageSceneBox1" :key="item.id" :style="{'left': leftDistance3+'px'}"
                                    style="overflow: hidden;float: left;position: relative">
                                    <el-card class="box-card" shadow="never" style="padding: 0px;margin-right: 20px">
                                        <img :src="item.idView" class="img2">
                                    </el-card>
                                </li>
                            </ul>
                            <ul>
                                <li v-for="item in imageSceneBox2" :key="item.id" :style="{'left': leftDistance4+'px'}"
                                    style="overflow: hidden;float: left;position: relative">
                                    <el-card class="box-card" shadow="never" style="padding: 0px;margin-right: 20px">
                                        <img :src="item.idView" class="img2">
                                    </el-card>
                                </li>
                            </ul>
                            <ul>
                                <li v-for="item in imageSceneBox3" :key="item.id" :style="{'left': leftDistance5+'px'}"
                                    style="overflow: hidden;float: left;position: relative">
                                    <el-card class="box-card" shadow="never" style="padding: 0px;margin-right: 20px">
                                        <img :src="item.idView" class="img2">
                                    </el-card>
                                </li>
                            </ul>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginvisible: false,
            uname: localStorage.getItem('ms_username'),
            imagesBox: [{ id: 0, idView: require('../../assets/1.jpg') },
                { id: 1, idView: require('../../assets/2.jpg') },
                { id: 2, idView: require('../../assets/3.jpg') },
                { id: 3, idView: require('../../assets/4.jpg') }],
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0,
            leftDistance1: this.num1,
            leftDistance2: this.num2,
            leftDistance3: this.num3,
            leftDistance4: this.num4,
            leftDistance5: this.num5,
            autoplaySwitch: true,
            imageProfessorBox1: [
                { id: 1, idView: require('../../assets/img/Professor/P1.jpg'), professorname: '罗红心理专家' },
                { id: 2, idView: require('../../assets/img/Professor/P2.png'), professorname: '蒋旭伟心理咨询师' },
                { id: 3, idView: require('../../assets/img/Professor/P3.png'), professorname: '青松心理咨询师' }
            ],
            imageProfessorBox2: [
                { id: 1, idView: require('../../assets/img/Professor/P4.png'), professorname: '游建国先生' },
                { id: 2, idView: require('../../assets/img/Professor/P5.png'), professorname: '唐亚杰老师' },
                { id: 3, idView: require('../../assets/img/Professor/P6.jpg'), professorname: '侯盛炜心理咨询师' },
                { id: 4, idView: require('../../assets/img/Professor/P7.jpg'), professorname: '付挺心理咨询师' }
            ],
            imageSceneBox1: [
                { id: 1, idView: require('../../assets/img/scene/scene1.jpg') },
                { id: 2, idView: require('../../assets/img/scene/scene2.png') },
                { id: 3, idView: require('../../assets/img/scene/scene3.png') }
            ],
            imageSceneBox2: [
                { id: 1, idView: require('../../assets/img/scene/scene4.png') },
                { id: 2, idView: require('../../assets/img/scene/scene5.jpg') },
                { id: 3, idView: require('../../assets/img/scene/scene6.png') }
            ],
            imageSceneBox3: [
                { id: 1, idView: require('../../assets/img/scene/scene8.png') },
                { id: 2, idView: require('../../assets/img/scene/scene7.jpg') }
            ],
            center: [104.06, 30.67],
            lng: 0,
            lat: 0,
            loaded: false,
            autoplayValue:0,
            plugin: [{
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 100,          //超过10秒后停止定位，默认：无穷大
                maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                showButton: true,        //显示定位按钮，默认：true
                buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
                showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                zoomToAccuracy: true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                extensions: 'all',
                pName: 'Geolocation',
                events: {
                    init(o) {
                        // o 是高德地图定位插件实例
                        o.getCurrentPosition((status, result) => {
                            console.log(result);
                            if (result && result.position) {
                                self.lng = result.position.lng;
                                self.lat = result.position.lat;
                                self.center = [self.lng, self.lat];
                                self.loaded = true;
                                self.$nextTick();
                            }
                        });
                    }
                }
            }]
        };
    },
    methods: {
        autoplay() {
            if (this.autoplaySwitch) {
                this.num1--;
                this.num2--;
                this.num3--;
                this.num4--;
                this.num5--;
                this.leftDistance1 = this.num1;
                this.leftDistance2 = this.num2;
                this.leftDistance3 = this.num3;
                this.leftDistance4 = this.num4;
                this.leftDistance5 = this.num5;
                if (this.num1 === -650) {
                    this.num1 = 835;
                }
                if (this.num2 === -1470) {
                    this.num2 = 15;
                }
                if (this.num3 === -650) {
                    this.num3 = 1045;
                }
                if (this.num4 === -1300) {
                    this.num4 = 395;
                }
                if (this.num5 === -1800) {
                    this.num5 = -105;
                }
            }
        },
        mouseout() {
            this.autoplaySwitch = true;
        },
        mouseon() {
            this.autoplaySwitch = false;
        },
        logout() {
            localStorage.removeItem('ms_username');
            this.$router.go(0);
        }
    },
    // created() {
    //     var url = this.Host + '/teacherinfo/teacherinfoget'
    //     this.$axios.get(url).then(res =>{
    //         this.msg = res.data
    //     })
    // },
    mounted() {
        this.$nextTick(() => {
            this.autoplayValue = setInterval(this.autoplay, 10);
        });
        if (this.uname !== null) {
            this.loginvisible = false;
        } else {
            this.loginvisible = true;
        }
    },
    beforeDestroy() {
        clearInterval(this.autoplayValue);
    }
};
</script>

<style scoped>
.autoplay {
    position: relative;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 3000px;
}

.button1 {
    background: rgba(123, 238, 29, 0.71);
    border-color: rgba(123, 238, 29, 0.71);
    height: 70px;
    width: 230px;
}

.button1:focus {
    background: rgba(123, 238, 29, 0.71);
    border-color: rgba(123, 238, 29, 0.71);
    height: 70px;
    width: 230px;
}

/*点击不变色*/
.button1:hover {
    background: rgba(123, 238, 29, 0.71);
    border-color: rgba(123, 238, 29, 0.71);
    height: 70px;
    width: 230px;
}

/*hover 鼠标悬浮不变色*/
.i1 {
    font-size: 50px;
    color: white;
    position: relative;
    left: -15px;
}

.font1 {
    font-size: 30px;
    color: white;
    position: relative;
    bottom: 10px;
}

.img {
    height: 100%;
    width: 100%;
}

.img2 {
    height: 150px;
    width: 150px;
}

.div01 {
    position: relative;
    z-index: -1;
}

.linear {
    background-image: linear-gradient(to bottom, rgba(204, 238, 109, 0.55), white);
    height: 40px;
}

.box-card {
    border-radius: 5px;
    margin-top: 15px;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.icon {
    color: rgba(11, 238, 65, 0.66);
}

a {
    color: black;
    text-decoration: none;
}

li {
    list-style-type: none;
    float: left
}

.nav_bg {
    background: url("../../assets/skin2.png") 0 -154px;
    width: 697px;
    height: 131px;
    position: absolute;
    right: -50px;
    top: 15px;
    z-index: 0
}

.nav0 {
    position: absolute;
    right: -10px;
    top: 56px;
    width: 624px;
    height: 22px;
}

.nav0 li {
    width: 126px;
    height: 22px;
    margin-right: 30px;
    float: left;
    list-style-type: none
}

.nav0 li a {
    display: inline-block;
    color: white;
    text-indent: 0.6em;
    font-size: 15px;
    text-decoration: none
}

.nav0 li a:hover {
    color: white;
    text-decoration: none;
}

.professor {
    margin-left: 25%;
    font-size: small;
    font-weight: bold;
    color: rgba(136, 238, 25, 0.82);
}

.login-div {
    position: relative;
    left: 90%;
    font-weight: bold;
}

.el-link {
    font-size: large;
    color: green;
}
</style>