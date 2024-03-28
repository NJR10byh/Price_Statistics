/**
 * @author baoyuhao
 * @date 2023/8/3 20:33:54
 * @description
 * @version 0.1.0
 */
export const BASE_URL = {
    fileUpload: "/file/upload",
    getCommodityList: "/commodity/getCommodityList",
};

export const MAIN_INFO_TABLE_COLUMNS = [
    // { colKey: "row-select", type: "multiple", width: 10, fixed: "left" },
    {
        title: '产品信息',
        align: "center",
        colKey: 'products',
        width: 100,
        children: [
            {
                align: "center",
                colKey: 'index',
                title: '序号',
                width: 50,
                ellipsis: true
            },
            {
                align: "center",
                colKey: 'brand',
                title: '品牌',
                width: 100,
                ellipsis: true
            },
            {
                align: "center",
                colKey: 'category',
                title: '品类',
                width: 80,
                ellipsis: true
            },
            {
                align: "left",
                colKey: 'model',
                title: '型号',
                width: 150,
                ellipsis: true
            },
            {
                align: "center",
                colKey: 'channel_price',
                title: '渠道价',
                width: 80,
            },
            {
                align: "center",
                colKey: 'retail_price',
                title: '零售定价',
                width: 80,
            },
            {
                align: "center",
                colKey: 'recommended_retail_price',
                title: '建议零售价',
                width: 90,
            },
        ],
    },
    {
        title: '近90天最低',
        align: "center",
        colKey: 'lowest_90',
        width: 100,
        children: [
            {
                align: "center",
                colKey: 'lowest_90_price',
                title: '价格',
                width: 80,
            },
            {
                align: "center",
                colKey: 'lowest_90_time',
                title: '时间',
                width: 180,
            },
            {
                align: "center",
                colKey: 'lowest_90_time_supplier',
                title: '供应商',
                width: 100,
                ellipsis: true
            },
        ],
    },
    {
        title: '最近更新',
        align: "center",
        colKey: 'recent_update',
        width: 100,
        children: [
            {
                align: "center",
                colKey: 'recent_update_price',
                title: '价格',
                width: 80,
            },
            {
                align: "center",
                colKey: 'recent_update_time',
                title: '时间',
                width: 180,
            },
            {
                align: "center",
                colKey: 'recent_update_supplier',
                title: '供应商',
                width: 100,
                ellipsis: true
            },
        ],
    },
    {
        title: '当日更新',
        align: "center",
        colKey: 'daily_update',
        width: 100,
        children: [
            {
                align: "center",
                colKey: 'daily_update_lowest_price',
                title: '最低价',
                width: 80,
            },
            {
                align: "center",
                colKey: 'daily_update_lowest_supplier',
                title: '供应商',
                width: 100,
                ellipsis: true
            },
            {
                align: "center",
                colKey: 'daily_update_second_lowest_price',
                title: '次低价',
                width: 80,
            },
            {
                align: "center",
                colKey: 'daily_update_second_lowest_supplier',
                title: '供应商',
                width: 100,
                ellipsis: true
            },
        ],
    },
    {
        title: '昨日更新',
        align: "center",
        colKey: 'yesterday_update',
        width: 100,
        children: [
            {
                align: "center",
                colKey: 'yesterday_update_lowest_price',
                title: '最低价',
                width: 80,
            },
            {
                align: "center",
                colKey: 'yesterday_update_lowest_supplier',
                title: '供应商',
                width: 100,
                ellipsis: true
            },
            {
                align: "center",
                colKey: 'yesterday_update_second_lowest_price',
                title: '次低价',
                width: 80,
            },
            {
                align: "center",
                colKey: 'yesterday_update_second_lowest_supplier',
                title: '供应商',
                width: 100,
                ellipsis: true
            },
        ],
    },
    {
        title: '前日更新',
        align: "center",
        colKey: 'third_day_update',
        width: 100,
        children: [
            {
                align: "center",
                colKey: 'third_day_update_lowest_price',
                title: '最低价',
                width: 80,
            },
            {
                align: "center",
                colKey: 'third_day_update_lowest_supplier',
                title: '供应商',
                width: 100,
                ellipsis: true
            },
            {
                align: "center",
                colKey: 'third_day_update_second_lowest_price',
                title: '次低价',
                width: 80,
            },
            {
                align: "center",
                colKey: 'third_day_update_second_lowest_supplier',
                title: '供应商',
                width: 100,
                ellipsis: true
            },
        ],
    },
];