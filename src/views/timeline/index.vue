<template>
  <div id="Index">
    <!-- 加载动画组件 -->
    <app-loading v-if="dataLoading" />
    <div class="main-content archive-page clearfix">
      <div v-for="(t,index) in times" :key="index" class="categorys-item">
        <div class="categorys-title">{{ t.month }}</div>
        <div class="post-lists">
          <div class="post-lists-body">
            <template v-for="(item,num) in list">
              <div v-if="item.month === t.month" :key="num" class="post-list-item">
                <div class="post-list-item-container">
                  <div class="item-label">
                    <div class="item-title">
                      <router-link :to="{'path':'/article/'+item.id }">{{ item.title }}</router-link>
                    </div>
                    <div class="item-meta clearfix">
                      <div class="item-meta-date"> {{ item.created | dateFormat }} </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { archives } from '@/api/article'
import { dateFormat } from '@/utils/common'

export default {
  name: 'TimeLine',
  filters: { // 时间的格式化过滤器
    dateFormat(time) {
      return dateFormat(time)
    }
  },

  data() {
    return {
      dataLoading: true,
      times: {},
      list: {}
    }
  },
  mounted() {
    document.getElementsByTagName('body')[0].className = 'bg-grey'
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.dataLoading = true
      archives().then(response => {
        this.times = response.time
        this.list = response.item
        this.dataLoading = false
      })
    }
  }
}
</script>

