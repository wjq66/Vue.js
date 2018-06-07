export const Columns1 = [
    {
		type: 'index',
		width:120,
        align:'center'
    },
    {
        title: '配置名称',
        key: 'configureName',
        align:'center',
        editable: true
    },
    {
        title: '配置值',
        key: 'configureValue',
        align:'center',
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 190,
        key: 'handle',
        handle: ['edit']
    }
];

const tableData = {
    
    Columns1: Columns1
    
};

export default tableData;