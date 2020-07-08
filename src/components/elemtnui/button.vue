<template>
  <el-row>
    <el-button>默认按钮</el-button> 
  </el-row> 
</template> 
<script> 
export default { 
    props:{  
        data:{ 
            dafault(){    
                   
            },
            type:Array
        }
    },
    data(){
        return{

        }
    }
}
</script>