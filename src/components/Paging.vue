<!-- 分页组件 -->
<template>
  <!-- 只有分也数大于1才显示分页组件 -->
  <div class="lists-navigator clearfix" v-if="maxPage > 1">
    <ol class="page-navigator">
      <!-- 如果是第一页禁用“上一页”按钮 -->
      <li v-if="page !== 1"><a href="javascript:" @click="funPage(page-1)">←</a></li>
      <!-- 第一页 -->
      <li :class="{'current':page === 1}"><a href="javascript:" @click="funPage(1)">1</a></li>


      <!-- 如果当前页往前查3页不是第2页 -->
      <li v-if="(page-3)>1"><span>...</span></li>

      <!-- 当前页的前2页和后2页 -->
      <li v-for="index in grouplist" :key="index" :class="{'current': page === index}">
        <a v-if="(index > 1) && (index < maxPage)" href="javascript:" @click="funPage(index)">{{index}}</a>
      </li>

      <!-- 如果当前页往后查3页不是倒数第2页 -->
      <li v-if="(page+3)<(maxPage-1)"><span>...</span></li>
      <!-- 最后一页 -->
      <li :class="{'current':page === maxPage}"><a href="javascript:" @click="funPage(maxPage)">{{maxPage}}</a></li>
      <!-- 如果是最后一页禁用"下一页"按钮 -->
      <li v-if="page !== maxPage"><a href="javascript:" @click="funPage(page+1)">→</a></li>

    </ol>
  </div>
</template>
<script>
  import {range} from "../utils/common";
  export default {
        name: "Paging",

        props:{
          page:{ //当前页码
            type: Number,
            default:0
          },
          maxPage:{ //最大分页数
            type: Number,
            default: 0
          }
        },

        computed:{
          grouplist: function () { // 获取分页码
            //调用range函数生成页码数组
            return range(this.page-2,this.page+2,1);
          }
        },

        methods:{
          // 调用父组件的方法分页
          funPage(page){
            this.$emit('func',page)
          }
        }
    }
</script>

