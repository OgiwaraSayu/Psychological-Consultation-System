<template>
    <div id="time-line">
        <div v-for="item in items" :key="item.date" class="item">
            <div class="item-date">{{ item.date }}</div>
            <div class="item-content" :style="item.content==='结束'?'color:red':'color:#91c2fc'">{{ item.content }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimeLine',
    data() {
        return {
            items: []
        };
    }
};
</script>


<style scoped>
.item {
    margin-left: 30px; /*用左边margin显示时间线*/
    width: calc(100% - 30px); /*因为左边部分用于显示时间线，所以右边部分减去30px*/
    height: auto; /*高度由内容决定*/
    position: relative;
    margin-bottom: 10px;
    cursor: pointer;
}

.item::before {
    z-index: 2;
    content: "";
    width: 11px;
    height: 11px;
    border-radius: 100%;
    background-color: #91c2fc;
    position: absolute;
    left: -15px;
}

.item::after {
    z-index: 1;
    content: "";
    width: 3px;
    height: calc(100% + 10px); /*加上10px是item底部的margin*/
    background-color: #91c2fc;
    position: absolute;
    top: 0;
    left: -11px;
}

.item-date {
    line-height: 12px;
    font-size: 12px;
    position: relative;
    color: #656565;
}

.item-content {
    width: 100%;
    height: auto; /*由内容决定*/
    position: relative;
    white-space: pre-wrap; /*保留空白符序列，但是正常地进行换行*/
    word-wrap: break-word; /*在长单词或 URL 地址内部进行换行*/
}

.item:hover::before {
    transform: scale3d(1.2, 1.2, 1);
    background-color: #569ffb;
}

.item:hover::after {
    transform: scale3d(1.1, 1, 1);
    background-color: #569ffb;
}

.item:hover .item-date {
    transform: scale3d(1.01, 1.01, 1);
    color: #343434;
}
</style>