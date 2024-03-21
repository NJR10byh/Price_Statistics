/**
 * @author baoyuhao
 * @date 2023/8/3 20:34:20
 * @description
 * @version 0.1.0
 */
export const BASE_URL = {
    queryList: "/reports/queryList",
    listCommodity: "/reports/listCommodity",
    examine: "/reports/examine"
};

export const WAIT_APPROVAL_TABLE_COLUMNS = [
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
        width: 140,
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
        width: 170,
        ellipsis: true
    },
    {
        title: "报单时间",
        align: "center",
        colKey: "reportTime",
        width: 170,
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
        width: 80
    },
    {
        title: "完成图",
        align: "center",
        colKey: "finishPic",
        width: 80
    },
    {
        title: "备注",
        align: "left",
        colKey: "notes",
        width: 80
    },
    {
        title: "操作",
        align: "left",
        colKey: "settings",
        fixed: "right",
        width: 240
    }
];