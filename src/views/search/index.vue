<template>
  <div class="main-content page-page" style="min-height: 777px;">
    <div class="search-page">
      <form id="searchForm" class="search-form" method="post" action="" role="search">
        <span class="search-box clearfix">
          <input v-model="keyword" type="text" class="input" placeholder="搜索..." maxlength="30" autocomplete="off" autocapitalize="off" autocorrect="off" @input="searchEvent">
          <button type="button" class="spsubmit"><i class="icon-search" /></button>
        </span>
        <ul v-if="state" id="searchdata">
          <li v-for="(item,key) in list" :key="key">
            <router-link :to="{'path':'/article/'+item.value }">{{ item.name }}</router-link>
          </li>
        </ul>
      </form>
      <div class="search-tags">
        <p>👇 The following tabs can help you!</p>
        <router-link v-for="(tag,key) in tagGroupList" :key="key" class=" bg-white" tag="a" :to="{ 'path':'/tag/'+tag.tid }"># {{ tag.name }}({{ tag.con }})</router-link>
        <div class="search-tags-hr bg-deepgrey" />
      </div>
    </div>
  </div>
</template>

<script>
import { search } from '@/api/article'
import { getEntryList } from '@/api/tags'

export default {
  name: 'Search',
  data() {
    return {
      keyword: null,
      state: false,
      list: [],
      tagGroupList: [],
      timer: null
    }
  },
  mounted() {
    document.getElementsByTagName('body')[0].className = 'bg-grey'
  },
  created() {
    this.EntryList()
  },

  methods: {
    // 动态搜索
    searchEvent() {
      this.clearTimer()
      if (this.keyword && this.keyword.length > 0) {
        // 获取当前延时函数的ID，便于后面clearTimeout清除该ID对应的延迟函数
        this.timer = setTimeout(() => {
          search(this.keyword).then(response => {
            if (response.data != null && response.data.length > 0) {
              this.list = response.data
              this.state = response.status
            }
          })
        }, 500)
      } else if (this.keyword === '') {
        this.state = false
        /* search(this.keyword).then(response => {
                if (response.data != null && response.data.length > 0){
                  this.list = response.data;
                  this.state = response.status;
                }
              })*/
      }
    },
    // 清除延时
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },

    // 获取词条列表
    EntryList() {
      getEntryList().then(response => {
        this.tagGroupList = response.data
      })
    }

  }
}
</script>

<style scoped>

</style>
