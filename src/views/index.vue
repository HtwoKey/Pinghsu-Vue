<template>
  <!-- 中间主体开始 -->
  <div id="Index">
    <!-- 加载动画组件 -->
    <app-loading v-if="listLoading" />
    <div class="main-content index-page clearfix ">
      <div class="post-lists">
        <div class="post-lists-body">
          <!-- 单个文章显示开始-->
          <div v-for="(article,index) in item" :key="index" class="post-list-item">
            <div class="post-list-item-container">
              <div class="item-thumb bg-deepgrey" :style="getThumbs(article.imageCover,index)" />
              <router-link :to="{'path':'/article/'+article.id}">
                <div class="item-desc">
                  <p>{{ article.slug }}</p>
                </div>
              </router-link>
              <div class="item-slant reverse-slant bg-deepgrey" />
              <div class="item-slant" />
              <div class="item-label">
                <div class="item-title">
                  <router-link :to="{'path':'/article/'+article.id}">{{ article.title }}</router-link>
                </div>
                <div class="item-meta clearfix">
                  <div
                    class="item-meta-ico"
                    :class="getTag(article.cname)"
                    :style="{backgroundImage: 'url('+bgico+')'}"
                  />
                  <div class="item-meta-cat"><router-link :to="{'path':'/category/'+article.category}">{{ article.cname }}</router-link></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- 分页组件 -->
      <app-page v-if="totalPage > 1" :page="page" :max-page="totalPage" @func="fetchData" />
    </div>
    <!-- 中间主体结束 -->
  </div>
</template>

<script>
// article Api
import { list } from '@/api/article.js'
import { addAccess } from '@/api/accessLog.js'
export default {
  name: 'Index',
  data() {
    return {
      item: [],
      listLoading: true,
      size: null,
      page: null,
      total: null,
      totalPage: null,
      bgico: require('@/assets/bg-ico.png')
    }
  },
  mounted() {
    document.getElementsByTagName('body')[0].className = 'bg-grey'
  },
  created() {
    // 获取数据
    this.fetchData(1)
    // 添加用户访问记录a
    addAccess()
  },

  methods: {
    // 获取数据
    fetchData(page) {
      this.listLoading = true
      list(page).then(response => {
        this.item = response.data
        this.size = response.size
        this.total = response.count
        this.page = response.page
        this.totalPage = response.totalPage
        this.listLoading = false
      })
    },
    // 设置文章图片
    getThumbs(image, index) {
      if (image !== null && image !== '') {
        return 'background:url(' + image + ');background-size:100%;'
      } else {
        return 'background:url('+require('@/assets/thumbs/' + index + '.jpg')+');background-size:100%;'
      }
    },
    // 设置文章标签
    getTag(cname) {
      return 'bg-ico-' + cname
    }
  }
}

</script>

