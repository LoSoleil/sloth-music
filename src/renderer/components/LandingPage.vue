<template>
  <div id="wrapper">
    <el-container style="height:100%">
      <el-header height="40px" style="text-align: right; font-size: 14px;background-color: salmon;">
        <div style="margin-top: 5px;">
          <i class="el-icon-arrow-left"></i>
          <i class="el-icon-arrow-right"></i>
          <i class="el-icon-refresh"></i>
          <el-input
            placeholder="请输入内容"
            size="mini"
            style="width: 158px; height: 10px; margin-right: 46%;"
            prefix-icon="el-icon-search"
            v-model="searchInput"
          ></el-input>
          <span>
            <i class="el-icon-user"></i>
          </span>
          <span style="margin-right: 10px" @click="login">登陆</span>
          <span>
            <i class="el-icon-chat-line-square" style="margin-right: 10px"></i>
          </span>
          <span>
            <i class="el-icon-setting" style="margin-right: 10px"></i>
          </span>
          <span>
            <i class="el-icon-copy-document"></i>
          </span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="190px" style="height:100%">
          <left-menu></left-menu>
        </el-aside>
        <el-container>
          <el-main>
            <div>
              <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in bannerList" :key="item.id">
                  <img :src="item.imgUrl" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-main>
        </el-container>
      </el-container>
      <el-footer></el-footer>
    </el-container>
    <el-dialog title="登录" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="50px">
        <el-form-item label="账号" prop="userName">
          <el-input v-model="loginForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input type="password" v-model="loginForm.passWord" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm(loginForm)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import LeftMenu from "./LeftMenu";
import { MessageBox } from "element-ui";
import {login} from '../server/api';
export default {
  name: "landing-page",
  components: { LeftMenu },
  data() {
      let validateUserName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      let validatePassWord = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
    return {
      searchInput: "",
      tableData: "",
      bannerList: [],
      dialogVisible: false,
      loginForm: {
        userName: "",
        passWord: ""
      },
      rules: {
        userName: [{ validator: validateUserName, trigger: "blur" }],
        passWord: [{ validator: validatePassWord, trigger: "blur" }]
      }
    };
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    login() {
      this.dialogVisible = true;
    },
    submitForm(data) {
      login(data).then((res)=>{
        debugger
      })
    },
    handleClose() {
      this.dialogVisible = false;
    }
  },
  mounted() {
    this.bannerList = [
      {
        id: "1",
        imgUrl: "src/renderer/assets/img/banner1.jpg"
      },
      {
        id: "2",
        imgUrl: "src/renderer/assets/img/banner2.jpg"
      },
      {
        id: "3",
        imgUrl: "src/renderer/assets/img/banner3.jpg"
      },
      {
        id: "4",
        imgUrl: "src/renderer/assets/img/banner4.jpg"
      },
      {
        id: "5",
        imgUrl: "src/renderer/assets/img/banner5.jpg"
      },
      {
        id: "6",
        imgUrl: "src/renderer/assets/img/banner6.jpg"
      }
    ];
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}

#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100vh;
  width: 100vw;
}

#logo {
  height: auto;
  margin-bottom: 20px;
  width: 420px;
}

main {
  display: flex;
  justify-content: space-between;
}

main > div {
  flex-basis: 50%;
}

.left-side {
  display: flex;
  flex-direction: column;
}

.welcome {
  color: #555;
  font-size: 23px;
  margin-bottom: 10px;
}

.title {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
}

.title.alt {
  font-size: 18px;
  margin-bottom: 10px;
}

.doc p {
  color: black;
  margin-bottom: 10px;
}

.doc button {
  font-size: 0.8em;
  cursor: pointer;
  outline: none;
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}

.doc button.alt {
  color: #42b983;
  background-color: transparent;
}
</style>
