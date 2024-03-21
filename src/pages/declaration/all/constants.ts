/**
 * @author baoyuhao
 * @date 2023/8/3 20:33:54
 * @description
 * @version 0.1.0
 */
export const BASE_URL = {
    queryList: "/reports/queryList",
    listCommodity: "/reports/listCommodity",
    edit: "/reports/edit",
    downloadExcel: "/reports/downloadExcel",
    downloadPic: "/reports/downloadPic"
};

export const ALL_DECLARATION_TABLE_COLUMNS = [
    // { colKey: "row-select", type: "multiple", width: 10, fixed: "left" },
    {
        title: "序号",
        align: "center",
        colKey: "index",
        width: 50
    },
    {
        title: "订单号",
        align: "center",
        colKey: "orderId",
        width: 120,
        ellipsis: true
    },
    {
        title: "物流单号",
        align: "center",
        colKey: "trackNum",
        width: 130,
        ellipsis: true
    },
    {
        title: "商品",
        align: "left",
        colKey: "commodity",
        width: 120,
        ellipsis: true
    },
    {
        title: "方案",
        align: "center",
        colKey: "schemeName",
        width: 80,
        ellipsis: true
    },
    {
        title: "报单人",
        align: "center",
        colKey: "reporter",
        width: 80,
        ellipsis: true
    },
    {
        title: "实付金额",
        align: "center",
        colKey: "payAmount",
        width: 80,
        ellipsis: true
    },
    {
        title: "预计返款金额",
        align: "center",
        colKey: "expectPayback",
        width: 120,
        ellipsis: true
    },
    {
        title: "实际返款金额",
        align: "center",
        colKey: "actualPayback",
        width: 120,
        ellipsis: true
    },
    {
        title: "申请返款时间",
        align: "center",
        colKey: "applyPaybackTime",
        width: 160,
        ellipsis: true
    },
    {
        title: "报单时间",
        align: "center",
        colKey: "reportTime",
        width: 160,
        ellipsis: true
    },
    {
        title: "订单状态",
        align: "center",
        colKey: "status",
        width: 80,
        ellipsis: true
    },
    {
        title: "下单图",
        align: "center",
        colKey: "orderPic",
        width: 120
    },
    {
        title: "完成图",
        align: "center",
        colKey: "finishPic",
        width: 120
    },
    {
        title: "操作",
        align: "left",
        colKey: "settings",
        fixed: "right",
        width: 100
    }
];