<template>
  <!-- 评论开始 -->
  <div id="respond-post-288" class="comment-container">
    <div id="comments" class="clearfix">
  			<span class="response">发表评论
  				<a id="cancel-comment-reply-link" rel="nofollow" style="display: none" @click="cancelReply"> / 取消回复</a>
  			</span>
      <form id="comment-form" class="comment-form" role="form" @submit.prevent="postComm">
        <input type="hidden" name="pid" v-model="pid">
        <input type="hidden" name="article" :value="aid">


        <input type="text" id="name"  maxlength="12" v-model="name" class="form-control input-control clearfix" placeholder="名称 (*)" value="" required>
        <input type="email" v-model="email" class="form-control input-control clearfix" placeholder="邮箱 (*)" value="" required>
        <input type="url" v-model="url" class="form-control input-control clearfix" placeholder="个人站点地址(选填) (http://)" value="" >
        <textarea v-model="content" class="form-control" placeholder="你的评论很Cool" required ></textarea>
        <button  class="submit" type="submit" >提交</button>
      </form>

      <ol class="comment-list">
        <li id="li-comment" v-for="(comm, index) in commlist" :key="index" v-if="comm.pid === 0" class="comment-body comment-parent comment-odd">
          <div id="comment" >
            <div class="comment-view" onclick="">
              <div class="comment-header">
                <img class="avatar" v-avatar="comm.name" src="#" width="80" height="80" />
                <span class="comment-author">
									<a :href="comm.url" target="_blank" rel="external nofollow">{{comm.name}}</a>
								</span>
                <!-- 设备机型 -->
                <span class="comment-equipment">
                  <img class="comment-equipmentImg" :src="'/static/icon/'+comm.osGroup+'.svg'">
                  {{comm.osName}}
                </span>
              </div>
              <div class="comment-content">
                <span class="comment-author-at"></span>
                <pre v-html="comm.content"></pre>
              </div>
              <div class="comment-meta">
                <time class="comment-time">{{comm.time | dateFormat}}</time>
                <span class="comment-reply">
					  				<a rel="nofollow" @click="replayComm(comm.id,comm.name)" >回复</a>
					  			</span>
              </div>
            </div>
          </div>

          <div class="comment-children">
            <ol class="comment-list">
              <li v-for="(child, index) in commlist" :key="index" v-if="child.pid === comm.id" class="comment-body comment-child comment-level-odd comment-even" id="li-comment-2608">
                <div id="comment-2608">
                  <div class="comment-view" onclick="">
                    <div class="comment-header">
                      <img width="80" height="80" class="avatar" src="#" v-avatar="child.name">
                      <span class="comment-author">
                        <a :href="child.url" target="_blank" rel="external nofollow">{{child.name}}</a>
                      </span>
                      <span class="comment-equipment">
                        <img class="comment-equipmentImg" :src="'/static/icon/'+child.osGroup+'.svg'">
                        {{child.osName}}
                      </span>
                    </div>
                    <div class="comment-content">
                    <span class="comment-author-at"></span>
                      <pre v-html="child.content"></pre>
                    </div>
                    <div class="comment-meta">
                      <time class="comment-time">{{child.time | dateFormat}}</time>
                      <span class="comment-reply">
                      <a @click="replayComm(comm.id,child.name)" href="#" rel="nofollow">回复</a>
                    </span>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </li>
      </ol>
      <div class="lists-navigator clearfix"> </div>
    </div>
  </div>
  <!-- 评论结束 -->
</template>

<script>
    import {dateFormat} from "../utils/common";
    import {str_md5,hex_md5} from '../../static/lib/md5';
    import {addComm,commList} from '../api/comments';
    import {addLinks,applyList} from '../api/links';
    import Identicon from 'identicon.js'
    export default {
        name: "Comments",

        data(){
          return{
            name:'',
            email:'',
            url:'',
            content:'',
            pid:0,
            commlist:[]
          }
        },

        props:{
          aid:{//文章id
            default:0
          }
        },
        filters:{ //时间的格式化过滤器
          dateFormat(time){
            return dateFormat(time)
          }
        },
        created(){
           this.initData(this.aid)
        },

        directives: {
          avatar:{
            bind : function (el,binding) {
              // 计算用户名的MD5值
              var hash = hex_md5(binding.value)
              var options = {
                  background: [255, 255, 255, 255],         // rgba white
                  margin: 0.2,                              // 20% margin
                  size: 420,                                // 420px square
                  format: 'svg'                             // use SVG instead of PNG
                };

              // create a base64 encoded SVG
              var data = new Identicon(hash, options).toString();

              el.src = 'data:image/svg+xml;base64,'+data;
            }
            
          }
        },

        methods:{


          initData(id){
            if(id === 0){
              applyList().then(response=>{
                if (response.data != null) {
                this.commlist = response.data;
                }
              })
            }
            else{
              commList(id).then(response => {
                if (response.data != null) {
                  this.commlist = response.data;
                }
              })
            }
          },
          //提交评论
          postComm(){
            let params = new URLSearchParams();
            params.append('name',this.name);
            params.append('email',this.email);
            params.append('url',this.url);
            params.append('content',this.content);
            params.append('article',this.aid);
            params.append('pid',this.pid);

            if(this.aid === 0){
              addLinks(params).then(response =>{
                if (response.status === true){
                  this.cancelReply();
                  //发表评论成功刷新评论列表
                  this.initData();
                }
              })
            }else{
              addComm(params).then(response =>{
                if (response.status === true){
                  this.cancelReply();
                  //发表评论成功刷新评论列表
                  this.initData(this.aid)
                }
              })
            }

          },

          //回复评论
          replayComm(id,name){
            this.pid = id;
            this.content = '回复@'+name+'：';
            //显示取消回复按钮
            document.getElementById("cancel-comment-reply-link").setAttribute('style', 'display:');
            //定位到表单
            document.getElementById("respond-post-288").scrollIntoView();
            this.$nextTick(function () {
              // 输入框获取焦点
              document.getElementById("name").focus();
            })
          },
          //取消回复
          cancelReply(){
            //清空表单
            this.name = '';
            this.email = '';
            this.url = '';
            this.content = '';
            this.pid = 0;
            document.getElementById("cancel-comment-reply-link").setAttribute('style', 'display:none');
          }
      }
    }
</script>

<style>

</style>
