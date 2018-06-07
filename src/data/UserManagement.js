export const Columns1 = [
    {
		type: 'index',
		width:120,
        align:'center'
    },
    {
        title: '管理员用户名',
        key: 'userName',
        align:'center',
        editable: true
    },
    {
        title: '用户类别',
        key: 'userType',
        align:'center',
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 220,
        key: 'handle',
        handle: ['edit','delete']
    }
];

const tableData = {
    
    Columns1: Columns1
    
};

export default tableData;