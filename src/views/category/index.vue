<template>
  <div id="Index">
    <!-- 加载动画组件 -->
    <app-loading v-if="dataLoading" />
    <div class="main-content common-page clearfix">
      <div class="common-item">
        <div class="common-title"> 分类 : {{ category }} </div>
        <div class="post-lists">
          <div class="post-lists-body">

            <div v-for="item in list" :key="item.id" class="post-list-item">
              <div class="post-list-item-container ">
                <div class="item-label ">
                  <div class="item-title">
                    <!--<a href="#">{{item.title}}</a>-->
                    <router-link :to="{'path':'/article/'+item.id }">{{ item.title }}</router-link>
                  </div>
                  <div class="item-meta clearfix">
                    <div class="item-meta-ico bg-ico-note" :style="{backgroundImage: 'url('+bgico+')'}" />
                    <div class="item-meta-date">{{ item.created | dateFormat }} </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from '@/utils/common'
import { categoty } from '@/api/article'
export default {
  name: 'Category',
  filters: { // 时间的格式化过滤器
    dateFormat(time) {
      return dateFormat(time)
    }
  },
  data() {
    return {
      dataLoading: true,
      list: [],
      category: '',
      cid: this.$route.params.id,
      bgico: require('@/assets/bg-ico.png')
    }
  },
  metaInfo() {
    return {
      title: '分类：' + this.category,
      meta: []
    }
  },
  mounted() {
    document.getElementsByTagName('body')[0].className = 'bg-grey'
  },
  created() {
    this.initData(this.cid)
  },
  methods: {
    initData(id) {
      categoty(id).then(response => {
        this.list = response.data
        this.category = response.data[0].cname
        this.dataLoading = false
      })
    }
  }
}
</script>

<style scoped>

</style>
