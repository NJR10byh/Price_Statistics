<!--
  * @author baoyuhao
  * @date 2023/8/4 13:55:41
  * @description 全部报单
  * @version 0.8.0
-->
<template>
  <t-card class="main-info-card">
    <t-row justify="start" class="cardTop">
      <t-input class="inputStyle" v-model="currRequestBody.orderId" placeholder="请输入订单号" clearable/>
      <t-input class="inputStyle" v-model="currRequestBody.reporter" placeholder="请输入报单人" clearable/>
      <t-date-range-picker class="inputStyle rangeInputStyle" v-model="reportDateRange"
                           :placeholder="['报单时间 起', '报单时间 止']" enable-time-picker clearable/>
      <t-button style="margin-left: 5px;width: 100px;">
        <template #icon>
          <t-icon name="search"></t-icon>
        </template>
        查询
      </t-button>
    </t-row>
  </t-card>
  <t-card class="main-info-card">
    <t-table
        class="tableStyle"
        row-key="index"
        :data="mainInfoTable.tableData"
        :columns="MAIN_INFO_TABLE_COLUMNS"
        bordered
        hover
        :loading="mainInfoTable.tableLoading"
        :pagination="mainInfoTable.pagination"
        :header-affix-props="{ offsetTop: 0 }"
        :header-affixed-top="{ offsetTop, container: getContainer }"
        :horizontal-scroll-affixed-bottom="{ offsetBottom: 64, container: getContainer }"
        :pagination-affixed-bottom="{ offsetBottom: 0,container: getContainer }"
        :scroll="{ type: 'virtual' }"
        lazy-load
        size="small"
    >
      <template #model="slotProps">
        <t-tag theme="default">
          <span style="font-weight: bold;">{{ isNotEmpty(slotProps.row.model) ? slotProps.row.model : "暂无" }}</span>
        </t-tag>
      </template>
    </t-table>
  </t-card>
</template>

<script setup lang="ts">
import {computed, onMounted, reactive, ref} from 'vue';
import {MAIN_INFO_TABLE_COLUMNS} from "./constants";
import {useSettingStore} from "@/store";
import {useRouter} from "vue-router";
import {prefix} from "@/config/global";
import {isNotEmpty} from "@/utils/validate";

const store = useSettingStore();
const router = useRouter();

/**
 * data
 */
// 根据是否使用多Tab页判断offsetTop
const offsetTop = computed(() => {
  return store.isUseTabsRouter ? 48 : 0;
});
// 获取当前容器
const getContainer = () => {
  return document.querySelector(`.${prefix}-layout`);
};

// 日期范围
const reportDateRange = ref([])

/**
 * 搜索相关
 */
const currRequestBody = reactive({
  pageNo: 1, // 页
  pageItems: 10, // 条数
  orderId: "", // 订单号
  commodityId: "",// 商品id
  commodity: "",// 商品
  reporter: "",// 报单人
  startTime: "",
  endTime: "",
  status: "" // 全部-不传 已报单-0 待审核-1
})

/**
 * 表格相关
 */
const mainInfoTable = reactive({
  tableLoading: false,// 表格加载
  tableData: [],// 表格数据
  // 表格分页
  pagination: {
    total: 0,
    current: 1,
    pageSize: 10
  }
});

/**
 * methods区
 */
/* 生命周期 */
// 组件挂载完成后执行
onMounted(async () => {
  mainInfoTable.pagination.current = currRequestBody.pageNo;
  mainInfoTable.pagination.pageSize = currRequestBody.pageItems;
  await getTableData();
});

const getTableData = async () => {
  mainInfoTable.tableData = [];
  mainInfoTable.tableLoading = true;
  let obj = {
    brand: "海尔",
    category: "冰箱",
    model: "BCD-526WGHTD14S8U1",
    channel_price: "6199",
    retail_price: "6599",
    recommended_retail_price: "6399"
  }
  mainInfoTable.tableData.push(obj);
  mainInfoTable.tableLoading = false;

}

</script>

<style scoped lang="less">
.main-info-card {
  margin-top: 10px;

  &:first-child {
    margin-top: 0;
  }

  .cardTop {
    //border: 1px solid red;
    align-items: center;
    flex-wrap: wrap;

    .cardTitle {
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 10px;
    }

    .inputStyle {
      width: 190px;
      margin: 5px;
    }

    .rangeInputStyle {
      width: 390px;
    }
  }

  .tableStyle {
    width: 100%;
    margin-top: 10px;

    .imageStyle {
      width: 100%;
      height: 100px;
      max-height: 200px;
      margin: 10px;

      :hover {
        cursor: pointer;
      }
    }

    .settingBtns {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow: auto;
    }
  }

}
</style>