<template>
  <div>
  <article class="main-content page-page" itemscope itemtype="http://schema.org/Article">
    <!-- 文章标题和发布时间 -->
    <div class="post-header">
      <h1 class="post-title" itemprop="name headline"> {{entity.title}} </h1>
      <div class="post-data">
        发布于<time datetime="" itemprop="datePublished">{{entity.created | dateFormat}}</time>
        |分类：<router-link :to="{'path':'/category/'+entity.category }">{{entity.cname}}</router-link>
        | {{entity.hits}}次浏览 | {{entity.commentsnum}}条评论
      </div>
    </div>

    <!-- 文章主要类容 -->
    <div id="post-content" class="post-content" itemprop="articleBody">
      <!-- 循环文章标签 -->
      <p class="post-tags" >
        <router-link tag="a" :to="{ 'path':'/tag/'+tag.id }" v-for="(tag, index) in tagList" :key="index">
            {{ tag.name }}
        </router-link>
      </p>
      <!-- 文章的正文 -->
      <div ref="content" v-html="entity.contentHtml"></div>
      <p class="post-info"> 本文由 <a href="#">HTwoKey</a> 创作，采用 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="external nofollow">知识共享署名4.0</a> 国际许可协议进行许可<br>
        本站文章除注明转载/出处外，均为本站原创或翻译，转载前请务必署名<br>
        最后编辑时间为: {{entity.modified | dateFormat}} </p>
    </div>
  </article>

  <!-- 文章目录树显示 -->
  <div id="directory-content" class="directory-content">
    <div class="directory" id ="directory"> 
      <ul>
      <li><a href="#directory00120909989096421591">1 目录1</a></li>
      <li><a href="#directory00120909989096421592">2 目录2</a></li>
      </ul>
    </div>
  </div>
  <!-- 分享 -->
  <div id="post-bottom-bar" class="post-bottom-bar">
    <div class="bottom-bar-inner">
      <div  class="bottom-bar-items right">
				<span   class="bottom-bar-item">
				  <a v-if="up.id !=='#'" :href="'/article/'+up.id" :title="up.title">←</a>
				</span>
        <span  class="bottom-bar-item">
					<a v-if="down.id !== '#'" :href="'/article/'+down.id" :title="down.title">→</a>
				</span>
        <span class="bottom-bar-item">
					<a @click="toBottom(50)">↓</a>
				</span>
        <span class="bottom-bar-item">
					<a @click="toTOP(50)">↑</a>
				</span>
      </div>
    </div>
  </div>
    <app-comments :aid="id" v-if="entity.comment_switch === 'true'"></app-comments>
    <!-- 评论组件 -->
  </div>
</template>

<script>
import Headroom from "../../static/lib/headroom.min";
import { getArticle,findNext } from "../api/article";
import { dateTimeFormat } from "../utils/common";
import { getArticle_tag } from "../api/tags";
import "../style/xcode.min.css";
export default {
  name: "info",

  data() {
    return {
      id: this.$route.params.id,
      entity: [], //文章
      tagList: [], //标签
      directoryList: [],//目录
      up:{ 
        id:'#',
        title:''
      },// 上一篇文章
      down:{
        id:'#',
        title:''
      } //下一篇文章
    };
  },
  
  created() {
    // 初始化数据
    this.initData(this.id)
  },
  // 设置标题
  metaInfo () {
      return {
        title: this.entity.title+'-HTwoKey',
        meta: []
      }
  },

  mounted() {
    // 目录显示隐藏设置
    var postDirectory = new Headroom(
      document.getElementById("directory-content"),
      {
        tolerance: 0,
        offset: 90,
        classes: { initial: "initial", pinned: "pinned", unpinned: "unpinned" }
      }
    );
    // 底部分享条显示隐藏设置
    var postSharer = new Headroom(document.getElementById("post-bottom-bar"), {
      tolerance: 0,
      offset: 70,
      classes: { initial: "animated", pinned: "pinned", unpinned: "unpinned" }
    });
    
    postDirectory.init();
    postSharer.init();

    // 设置背景色
    document.getElementsByTagName("body")[0].className = "bg-whitle";
    // 创建目录
    
    //this.createPostDirectory(document.getElementById('post-content'), document.getElementById('directory'), true);
    
     
  },

  methods: {

    getDom(){
      console.log(this.$refs.content);
    },

    initData (id){
      getArticle(id).then(response => {
        this.entity = response;
      });
      getArticle_tag(id).then(response => {
        if (response.data != null) {
          this.tagList = response.data;
        }
      });
      findNext(id).then(response =>{
        if(response.data != null){
          response.data.forEach(element => {
            if(element.sort === 'up'){
              this.up.id = element.id;
              this.up.title = element.title;
            }else{
              this.down.id = element.id;
              this.down.title = element.title;
            }
          });
        }
      });
    },

    // 滚动条 回到顶部
    toTOP(i) {
      document.documentElement.scrollTop -= i;
      if (document.documentElement.scrollTop > 0) {
        var c = setTimeout(() => this.toTOP(i), 16);
      } else {
        clearTimeout(c);
      }
    },
    tolerance(i) {},

    // 滚动条 回答底部
    toBottom(i) {
      var clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight = document.documentElement.scrollHeight;
      var height = scrollHeight - clientHeight; //超出窗口上界的值就是底部的scrolTop的值
      document.documentElement.scrollTop += i;
      if (document.documentElement.scrollTop < height) {
        var c = setTimeout(() => this.toBottom(i), 16);
      } else {
        clearTimeout(c);
      }
    },


    createPostDirectory(article, directory, isDirNum) {
      let contentArr = [],titleId = [],levelArr, root, level, currentList, list, li, link, i, len;
      levelArr = this.getLevelArr(article,contentArr,titleId);
      console.log(levelArr);
      currentList = root = document.createElement('ul');
      let dirNum = [0];
        for (i = 0, len = levelArr.length; i < len; i++) {
          level = levelArr[i];
          if (level === 1) {
            list = document.createElement('ul');
            if (!currentList.lastElementChild) {
              currentList.appendChild(document.createElement('li'));
            }
            currentList.lastElementChild.appendChild(list);
            currentList = list;
            dirNum.push(0);
          } else if (level < 0) {
            level *= 2;
              while (level++) {
                if (level % 2) dirNum.pop();
                  currentList = currentList.parentNode;
              }
          }
          dirNum[dirNum.length - 1]++;
          li = document.createElement('li');
          link = document.createElement('a');
          link.href = '#' + titleId[i];
          link.innerHTML = !isDirNum ? contentArr[i] : dirNum.join('.') + ' ' + contentArr[i];
          li.appendChild(link);
          currentList.appendChild(li);
        }
      directory.appendChild(root);
    },
     

    getLevelArr(article, contentArr, titleId){
      var titleElem = this.children(article.childNodes.children, /^h\d$/),
          levelArr = [],
          lastNum = 1,
          lastRevNum = 1,
          count = 0,
          guid = 1,
          id = 'directory' + (Math.random() + '').replace(/\D/, ''),
          lastRevNum, num, elem;
          while (titleElem.length) {
            elem = titleElem.shift();
            contentArr.push(elem.innerHTML);
            num = +elem.tagName.match(/\d/)[0];
              if (num > lastNum) {
                levelArr.push(1);
                lastRevNum += 1;
              } else if (num === lastRevNum || num > lastRevNum && num <= lastNum) {
                levelArr.push(0);
                lastRevNum = lastRevNum;
              } else if (num < lastRevNum) {
                levelArr.push(num - lastRevNum);
                lastRevNum = num;
              }
              count += levelArr[levelArr.length - 1];
              lastNum = num;
              elem.id = elem.id || (id + guid++);
              titleId.push(elem.id);
          }
          if (count !== 0 && levelArr[0] === 1) 
            levelArr[0] = 0;
      return levelArr;
    },
    children(childNodes, reg) {
        let result = [],
            isReg = typeof reg === 'object',
            isStr = typeof reg === 'string',
            node, i, len;
        for (i = 0, len = childNodes.length; i < len; i++) {
            node = childNodes[i];
            if ((node.nodeType === 1 || node.nodeType === 9) && (!reg || isReg && reg.test(node.tagName.toLowerCase()) || isStr && node.tagName.toLowerCase() === reg)) {
                result.push(node);
            }
        }
        return result;
    },

  },

  
  filters: {
    //时间的格式化过滤器
    dateFormat(time) {
      return dateTimeFormat(time);
    }
  }
};
</script>

<style scoped>
</style>
