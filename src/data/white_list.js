export const whiteOneColumns = [
   {
        title: '序号',
        key: 'serialNumber',
        width:120,
        align:'center'
    },
    {
        title: '文件MD5值',
        key: 'MD5',
        align:'center'
    },
    {
        title: '操作',
        align: 'center',
        width: 190,
        key: 'handle',
        handle: ['delete']
//        handle: ['edit', 'delete']
    }
];
export const whiteTwoColumns = [
   {
        title: '序号',
        key: 'serialNumber',
        width:120,
        align:'center'
    },
    {
        title: '进程名',
        key: 'processName',
        align:'center'
    },
    {
        title: 'ip协议',
        key: 'ipProtocol',
        align:'center'
    },
    {
        title: '是否控制',
        key: 'control',
        align:'center'
    },
    {
        title: '起始ip',
        key: 'startIp',
        align:'center'
    },
    {
        title: '终止ip',
        key: 'endIp',
        align:'center'
    },
    {
        title: '操作',
        align: 'center',
        width: 190,
        key: 'handle',
        handle: ['delete']
    }
];
export const whiteThreeColumns = [
    {
        title: '序号',
        key: 'serialNumber',
        width:120,
        align:'center'
    },
    {
        title: '设备serialID',
        key: 'serialID',
        align:'center'
    },
    {
        title: '操作',
        align: 'center',
        width: 190,
        key: 'handle',
        handle: ['delete']
    }
];

const tableData = {
    
    whiteOneColumns: whiteOneColumns,
    whiteTwoColumns: whiteTwoColumns, 
    whiteThreeColumns: whiteThreeColumns, 
    
};

export default tableData;
