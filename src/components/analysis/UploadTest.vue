<template>
  <el-container style="height: 100%;width: 100%">
    <!-- 顶栏 -->
    <el-header height="80px">
      <home-header></home-header>
    </el-header>
    <!-- 嵌套容器 -->
    <el-container >
      <el-header>
        <navigation></navigation>
      </el-header>
      <el-main>
        <div>
          <el-upload
            class="upload-demo"
            ref="upload"
            action="http://localhost:8000/api/upload_excel/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-exceed="handleExceed"
            :on-success="handleSuccess"
            :file-list="fileList"
            accept=".xls,.xlsx"
            name="file"
            limit="1"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
        <div>
          <div>
              <el-table
                :data="fileList"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>

</template>
<script>
  import HomeHeader from '@/components/analysis/HomeHeader'
  import Navigation from '@/components/analysis/Navigation'
  export default {
    name: 'UploadTest',
    components: {Navigation, HomeHeader},
    data() {
      return {
        fileList: [],
        checklist:'',
        checked1: false,
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();

        filelist.clearFiles();
        dialogFormVisible = false
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleSuccess(response,file,filelist){

          console.log("清空")
          console.log("清空")
          console.log("清空")
          console.log("清空")
          console.log("清空")
          console.log(response.data)

          console.log(file)
          console.log(file.response)
          console.log(filelist)
          this.checklist = response.data
          console.log(this.checklist)
      },

      //超出最大上传文件数量时的处理方法
      handleExceed(){
        this.$message({
          type:'warning',
          message:'超出最大上传文件数量的限制！'
        })
        return;
      },
    }
  }
</script>
<style scoped>

</style>
