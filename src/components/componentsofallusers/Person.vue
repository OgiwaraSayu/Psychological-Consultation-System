<template>
    <div>
        <el-row>
            <el-col :span="4">
                &nbsp;
            </el-col>
            <el-col :span="16">
                <el-card class="persontheme">
                    <div>
                        {{ uname }}的个人空间
                    </div>
                </el-card>
                <el-row style="margin-top: 20px">
                    <el-col :span="7">
                        <el-card body-style="padding: 0px;height:280px">
                            <div class="cardheader">
                            <span class="fontheader">
                                头像
                            </span>
                            </div>
                            <div style="margin-left: 18%">
                                <div class="crop-demo">
                                    <img :src="cropImg" class="pre-img">
                                </div>
                                <div class="crop-demo-btn" style="margin-top: 20px">选择图片
                                    <input accept="image/*" class="crop-input" name="image" type="file"
                                           @change="setImage" />
                                </div>
                            </div>
                        </el-card>

                        <el-dialog :visible.sync="dialogVisible" title="裁剪图片" width="30%">
                            <vue-cropper ref='cropper' :cropmove="cropImage" :ready="cropImage" :src="imgSrc"
                                         :zoom="cropImage"
                                         style="width:100%;height:300px;"></vue-cropper>
                            <span slot="footer" class="dialog-footer">
                            <el-button @click="cancelCrop">取 消</el-button>
                            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                        </span>
                        </el-dialog>
                    </el-col>
                    <el-col :span="16" style="margin-left: 4.1%">
                        <el-card body-style="padding:0px" style="height: 280px">
                            <div class="cardheader">
                                <span class="fontheader">个人资料</span>
                                <el-link class="fontheader" style="position:relative;left: 70%;text-underline: none"
                                         @click="editPermission = true">编辑我的个人资料
                                </el-link>
                            </div>
                            <div class="fontbody">
                                <p>学号/工号：
                                    <span v-if="!editPermission">
                                    {{ stujobnumber }}
                                </span>
                                    <input v-else v-model="stujobnumber"></input>
                                </p>
                                <p>姓名： <span v-if="!editPermission">
                                    {{ uname }}
                                </span>
                                    <input v-else v-model="uname"></input></p>
                                <p>性别： <span v-if="!editPermission">
                                    {{ sex }}
                                </span>
                                    <input v-else v-model="sex"></input></p>
                                <p>年龄： <span v-if="!editPermission">
                                    {{ age }}
                                </span>
                                    <input v-else v-model="age"></input></p>
                                <p>电话： <span v-if="!editPermission">
                                    {{ phone }}
                                </span>
                                    <input v-else v-model="phone"></input></p>
                                <p>权限： {{ role }}</p>
                            </div>
                            <el-button v-if="editPermission" style="position: absolute;right: 5%;bottom: 10px"
                                       type="primary"
                                       @click="editPermission = false">保存
                            </el-button>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import VueCropper from 'vue-cropperjs';

export default {
    name: 'upload',
    data: function() {
        return {
            editPermission: false,
            defaultSrc: require('../../assets/img/profile.jpg'),
            stujobnumber: 21801,//学号、工号
            uname: localStorage.getItem('ms_username'),
            sex: 'male',
            age: '18',
            role: '管理员',
            phone: '1518161',
            fileList: [],
            imgSrc: '',
            cropImg: '',
            dialogVisible: false,
            imageUrl: '',
            teacher: '老师',
            group: '小组',
            leader: '组长'
        };
    },
    components: {
        VueCropper
    },
    methods: {
        setImage(e) {
            const file = e.target.files[0];
            if (!file.type.includes('image/')) {
                return;
            }
            const reader = new FileReader();
            reader.onload = (event) => {
                this.dialogVisible = true;
                this.imgSrc = event.target.result;
                this.$refs.cropper && this.$refs.cropper.replace(event.target.result);
            };
            reader.readAsDataURL(file);
        },
        cropImage() {
            this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
        },
        cancelCrop() {
            this.dialogVisible = false;
            this.cropImg = this.defaultSrc;
        },
        imageuploaded(res) {
            console.log(res);
        },
        handleError() {
            this.$notify.error({
                title: '上传失败',
                message: '图片上传接口上传失败，可更改为自己的服务器接口'
            });
        }
    },
    created() {
        this.cropImg = this.defaultSrc;
    }
};

</script>

<style scoped>
.avatar-uploader :hover {
    border-color: #409EFF;
}

.pre-img {
    width: 150px;
    height: 150px;
    background: #f8f8f8;
    border: 1px solid #eee;
    border-radius: 5px;
}

.crop-demo {
    display: flex;
    align-items: flex-end;
}

.crop-demo-btn {
    position: relative;
    width: 100px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    margin-left: 30px;
    background-color: #409eff;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    box-sizing: border-box;
}

.crop-input {
    position: absolute;
    width: 100px;
    height: 40px;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
}

.persontheme {
    background: url("../../../src/assets/img/personthemeimg.jpg") no-repeat center center;
    opacity: 50%;
    background-size: cover;
    height: 150px;
    width: 100%;
}

.cardheader {
    background-image: linear-gradient(to bottom, rgba(110, 219, 255, 0.35), white);
    height: 50px;
}

.fontheader {
    position: relative;
    top: 10px;
    left: 15px;
    font-size: small;
    color: rgba(33, 87, 227, 0.81);
    font-weight: bold;
}

.fontbody {
    position: relative;
    left: 5px;
    font-size: small;
}

p {
    padding: 10px;
}

input {
    width: 20%;
    border: 0.5px solid #378888
}
</style>

