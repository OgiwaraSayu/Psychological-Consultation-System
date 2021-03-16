<template>
  <div>
    <el-row>
        <el-col :span="4">
            &nbsp;
        </el-col>
        <el-col :span="16">
            <el-card class="persontheme">
                <div>
                    {{uname}}的个人空间
                </div>
            </el-card>
            <el-row style="margin-top: 20px">
                <el-col :span="7">
                    <el-card body-style="padding: 0px">
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
                                <input class="crop-input" type="file" name="image" accept="image/*" @change="setImage"/>
                            </div>
                        </div>
                    </el-card>

                    <el-dialog title="裁剪图片" :visible.sync="dialogVisible" width="30%">
                        <vue-cropper ref='cropper' :src="imgSrc" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage"
                                     style="width:100%;height:300px;"></vue-cropper>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="cancelCrop">取 消</el-button>
                            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                        </span>
                    </el-dialog>
                </el-col>
                <el-col :span="16" style="margin-left: 4.1%" >
                    <el-card body-style="padding:0px">
                        <div class="cardheader">
                            <span class="fontheader">个人资料</span>
                            <span class="fontheader" style="position:relative;left: 70%">编辑我的个人资料</span>
                        </div>
                        <div class="fontbody">
                            <p>姓名： {{uname}}</p>
                            <p>性别： male</p>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
  </div>
</template>
<script>
import VueCropper  from 'vue-cropperjs';
export default {
    name: 'upload',
    data: function(){
        return {
            defaultSrc: require('../../assets/img/profile.jpg'),
            uname:localStorage.getItem('ms_username'),
            fileList: [],
            imgSrc: '',
            cropImg: '',
            dialogVisible: false,
            imageUrl: '',
            teacher:"老师",
            group:"小组",
            leader:"组长",
        }
    },
    components: {
        VueCropper
    },
    methods:{
        setImage(e){
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
        cropImage () {
            this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
        },
        cancelCrop(){
            this.dialogVisible = false;
            this.cropImg = this.defaultSrc;
        },
        imageuploaded(res) {
            console.log(res)
        },
        handleError(){
            this.$notify.error({
                title: '上传失败',
                message: '图片上传接口上传失败，可更改为自己的服务器接口'
            });
        },
    },
    created(){
        this.cropImg = this.defaultSrc;
    }
}

</script>

<style scoped>
.avatar-uploader :hover {
  border-color: #409EFF;
}
.pre-img{
    width: 150px;
    height: 150px;
    background: #f8f8f8;
    border: 1px solid #eee;
    border-radius: 5px;
}
.crop-demo{
    display: flex;
    align-items: flex-end;
}
.crop-demo-btn{
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
.crop-input{
    position: absolute;
    width: 100px;
    height: 40px;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
}
.persontheme{
    background: url("../../../src/assets/img/personthemeimg.jpg") no-repeat center center;
    opacity: 50%;
    background-size: cover;
    height: 150px;
    width: 100%;
}
.cardheader{
    background-image: linear-gradient(to bottom, rgba(110,219,255,0.35), white);
    height: 50px;
}
.fontheader{
    position: relative;
    top: 10px;
    left: 15px;
    font-size: small;
    color: rgba(33,87,227,0.81);
    font-weight: bold;
}
.fontbody{
    position: relative;
    left: 5px;
    font-size: small;
}
p{
    padding: 10px;
}
</style>

