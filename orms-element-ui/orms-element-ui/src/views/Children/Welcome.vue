<template>
  <div class="we">
    <el-row>
      <el-col :span="5">账户名称</el-col>
      <el-col :span="14"
        ><el-input
          v-model="form.accountName"
          placeholder="请输入账户名称"
        ></el-input
      ></el-col>
    </el-row>

    <el-row>
      <el-col :span="5">单个用户发放数量</el-col>
      <el-col :span="14">
        <el-input v-model="form.perSendCount" disabled></el-input>
      </el-col>
      <el-col :span="5">
        <el-button
          type="info"
          icon="el-icon-remove"
          circle
          @click="subPer"
        ></el-button>
        <el-button
          type="info"
          icon="el-icon-circle-plus"
          circle
          @click="addPer"
        ></el-button>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="5">发放时间</el-col>
      <el-col :span="14">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.deleteTime"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="5">发放状态</el-col>
      <el-col :span="14">
        <el-radio v-model="form.status" label="1">待发放</el-radio>
        <el-radio v-model="form.status" label="2">已发放</el-radio>
        <el-radio v-model="form.status" label="3">已终止</el-radio>
      </el-col>
      <el-col :span="5"></el-col>
    </el-row>
    {{ this.form.status }}

    <el-row>
      <el-col :span="5">备注</el-col>
      <el-col :span="14">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入备注"
          v-model="form.remark"
        >
        </el-input>
      </el-col>
      <el-col :span="5"></el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-table :data="requestForm" border style="width: 100%">
        <el-table-column prop="accountName" label="账号名称" width="180">
        </el-table-column>
        <el-table-column prop="perSendCount" label="发放数量" width="180">
        </el-table-column>
        <el-table-column prop="status" label="状态"> </el-table-column>
        <el-table-column prop="deleteTime" label="日期"> </el-table-column>
        <el-table-column prop="remark" label="备注"> </el-table-column>
      </el-table>
      </el-col>
    </el-row>

    <div class="btn">
      <el-button type="primary" @click="addMessage">增加按钮</el-button>
      <el-button type="warning" @click="alterMessage">修改按钮</el-button>
      <el-button type="primary" @click="queryMessage">查询按钮</el-button>
      <el-button type="danger" @click="deleteMessage">删除按钮</el-button>
      
    </div>
    
    
    
  </div>
</template>

  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      form: {
        // 名称
        accountName: "安安",
        id: 0,
        mark: 0,
        // 数量
        perSendCount: 1,
        // 备注
        remark: "",
        // 时间
        deleteTime: "2020-15-15",
        // 状态
        status: 1,
        versionnub: 0,
        voucherId: 0,
      },
      requestForm: [
        {
        // 名称
        accountName: "安安",
        id: 0,
        mark: 0,
        // 数量
        perSendCount: 1,
        // 备注
        remark: "",
        // 时间
        deleteTime: "2020-15-15",
        // 状态
        status: 1,
        versionnub: 0,
        voucherId: 0,
      },
      {
      // 名称
        accountName: "安安",
        id: 0,
        mark: 0,
        // 数量
        perSendCount: 1,
        // 备注
        remark: "",
        // 时间
        deleteTime: "2020-15-15",
        // 状态
        status: 1,
        versionnub: 0,
        voucherId: 0,
      },
      ]
    };
  },
  methods: {
    // 加用户个数
    addPer() {
      if (this.form.perSendCount < 10) {
        this.form.perSendCount++;
      } else {
        alert("最多发放10个");
        this.form.perSendCount = 10;
      }
    },
    // 减用户个数
    subPer() {
      if (this.form.perSendCount > 1) {
        this.form.perSendCount--;
      } else {
        alert("最少发放1个");
        this.form.perSendCount = 1;
      }
    },

    // 添加
    addMessage() {
      this.$axios
        .post("/test/add", this.form)
        .then((res) => {
          cnsole.log(res, "000");
        })
        .catch((err) => {
          console.log("error");
        });
    },
    // 修改
    addMessage() {
      this.$axios
        .post("/test/add", this.form)
        .then((res) => {
          cnsole.log(res, "000");
        })
        .catch((err) => {
          console.log("error");
        });
    },
    //查询
    queryMessage() {
      this.$axios
        .get("/test/find?syspromotionId=78")
        .then((res) => {
          cnsole.log(res, "000");
        })
        .catch((err) => {
          console.log("error");
        });
    },
    //删除
    deleteMessage() {
      this.$axios
        .post("/test/delete?syspromotionId=78")
        .then((res) => {
          cnsole.log(res, "000");
        })
        .catch((err) => {
          console.log("error");
        });
    },
  },
};
</script>

<style scoped>
.we {
  position: relative;
}
.el-row {
  font-size: 14px;
  line-height: 40px;
  text-align: right;
  margin-top: 3px;
}
.btn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 3px;
}


</style>