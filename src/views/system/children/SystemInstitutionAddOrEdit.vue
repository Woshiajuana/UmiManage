<template>
    <div class="container-wrap"
         v-loading="is_loading"
         element-loading-text="加载中~~~">
        <div class="container-inner system-inner">
            <crumb></crumb>
            <div class="add-con">
                <el-form ref="formName" :rules="rules" :model="form" label-width="80px">
                    <el-form-item label="机构分类名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="机构分组名称">
                        <el-input v-model="form.groupName"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="subData(formName)">确认</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    import Crumb from '../../../components/crumb.vue'
    import Util from '../../../assets/lib/Util'
    export default {
        name: 'system-institution-add-or-edit',
        data() {
            return {
                is_loading: false,
                bizId: this.$route.params.bizId,
                form: {
                    name: '',
                    groupName: ''
                },
                rules: {
                    name: [
                        { required: true, message: '机构分类名称', trigger: 'blur' }
                    ],
                    groupName: [
                        { required: true, message: '机构分组名称', trigger: 'change' }
                    ]
                }
            }
        },
        created () {
            if ( this.bizId ) this.queryData( this.bizId );
        },
        methods: {
            subData (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if ( this.bizId ) this.updateData( this.bizId );
                        else this.addData();
                    } else {
                        return false;
                    }
                });

            },
            /**获取数据*/
            queryData ( bizId ) {
                this.is_loading = true;
                Util.querySystemInstitutionList({
                    bizId:bizId
                }, ( result ) => {
                    setTimeout( () => {
                        if( result.respHeader.respCode === 'umi-00000' ) {
                            this.form = {
                                name: result.respBody.name,
                                groupName: result.respBody.groupName
                            }
                        }
                        this.is_loading = false;
                    },300);
                })
            },
            /**编辑数据*/
            updateData ( bizId ) {
                this.is_loading = true;
                this.form.bizId = bizId;
                Util.updateSystemInstitutionList(this.form, ( result ) => {
                    setTimeout( () => {
                        if( result.respHeader.respCode === 'umi-00000' ) {
                            this.$message({type: 'success', message: result.respHeader.respMessage});
                        } else {
                            this.$message({type: 'error', message: result.respHeader.respMessage});
                        }
                        this.is_loading = false;
                    },300);
                })
            },
            /**添加数据*/
            addData () {
                this.is_loading = true;
                Util.addSystemInstitutionList(this.form, ( result ) => {
                    setTimeout( () => {
                        if( result.respHeader.respCode === 'umi-00000' ) {
                            this.$message({type: 'success', message: result.respHeader.respMessage});
                        } else {
                            this.$message({type: 'error', message: result.respHeader.respMessage});
                        }
                        this.is_loading = false;
                    },300);
                })
            }
        },
        components: {
            Crumb
        }
    }
</script>
<style lang="scss">
    .system-inner{
        .el-form-item__label{
            width: 120px !important;
        }
        .el-form-item__content{
            margin-left: 120px !important;
        }
    }
</style>
