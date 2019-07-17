<template>
  <!-- 中间主体开始 -->
  <div id="Index">
    <!-- 加载动画组件 -->
    <app-loading v-if="listLoading"></app-loading>
    <div class="main-content index-page clearfix ">
      <div class="post-lists">
        <div class="post-lists-body">
          <!-- 单个文章显示开始-->
          <div class="post-list-item" v-for="(article,index) in item" :key="index" >
            <div class="post-list-item-container">
              <div class="item-thumb bg-deepgrey" :style="{ 'background': 'url(' + article.imageCover + ')','background-size':'100%'}"></div>
              <router-link :to="{'path':'/article/'+article.id}">
                <div class="item-desc">
                  <p>{{article.slug}}</p>
                </div>
              </router-link>
              <div class="item-slant reverse-slant bg-deepgrey"></div>
              <div class="item-slant"></div>
              <div class="item-label">
                <div class="item-title">
                  <router-link :to="{'path':'/article/'+article.id}">{{article.title}}</router-link>
                </div>
                <div class="item-meta clearfix">
                  <div class="item-meta-ico bg-ico-code" style="background: url(../../../static/img/bg-ico.png) no-repeat;background-size: 40px auto;"></div>
                  <div class="item-meta-cat"><router-link :to="{'path':'/category/'+article.category}">{{article.cname}}</router-link></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- 分页组件 -->
      <app-page :page="page" :max-page="totalPage" @func="fetchData" v-if="totalPage > 1"></app-page>
    </div>
    <!-- 中间主体结束 -->
  </div>
</template>

<script>
  //article Api
  import {getitem} from '../api/article'
  import {addAccess} from "../api/access";
  export default {
    name: "Index",

    data() {
      return {
        item: [],
        listLoading: true,
        size:null,
        page:null,
        total:null,
        totalPage:null,
      }
    },
    mounted(){
      document.getElementsByTagName("body")[0].className="bg-grey";
    },
    created() {
      //获取数据
      this.fetchData(1);
      //添加用户访问记录
      addAccess()
    },

    methods: {

      fetchData(page) {
        this.listLoading = true;
        getitem(page).then(response => {
          this.item = response.data;
          this.size = response.size;
          this.total = response.count;
          this.page = response.page;
          this.totalPage = response.totalPage;
          this.listLoading = false
        })
      },
    }
  }

</script>

