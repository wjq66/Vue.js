 export const listColumns = [
	{
		type: 'index',
		width:60,
        align:'center'
    },
    {
        title: '主机名',
        key: 'name'
    },
    {
        title: '使用者',
        key: 'user'
    },
    {
        title: 'MAC地址',
        key: 'macAddress'
    },
    {
        title: 'ip地址',
        key: 'ipAddress'
    },
    {
        title: '检测得分',
        key: 'mark',
        width:100,
        align:'center'
    },
    {
        title: '编辑',
        align: 'center',
        width: 190,
        key: 'handle',
        handle: ['edit']
    },
    {
        title: '操作',
        align: 'center',
        width: 190,
        render: (h, params) => {
            return h('div', [
                h('Button', {
                    props: {
                        type: 'primary',
                        size: 'small'
                    },
                    style: {
                        marginRight: '5px'
                    },
                    on: {
                        click: () => {
                            this.toCurrentPage(params.index)
                        }
                    }
                }, '详细信息'),
                h('Button', {
                    props: {
                        type: 'error',
                        size: 'small'
                    }
                }, '未启动')
            ]);
        }
    }
];
const tableData = {
    
    listColumns: listColumns
    
};

export default tableData;

/*
columns2: [
					{
						type: 'index',
						width:60,
			            align:'center'
			        },
                    {
                        title: '主机名',
                        key: 'name'
                    },
                    {
                        title: '使用者',
                        key: 'user'
                    },
                    {
                        title: 'MAC地址',
                        key: 'macAddress'
                    },
                    {
                        title: 'ip地址',
                        key: 'ipAddress'
                    },
                    {
                        title: '检测得分',
			            key: 'mark',
			            width:100,
			            align:'center'
                    },
                    {
			            title: '基本操作',
			            key: 'action',
			            width: 300,
			            align: 'center',
			            render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                      
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.toCurrentPage(params.index)
                                        }
                                    }
                                }, '详细信息'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    }
                                }, '未启动')
                            ]);
			            }
			        }
                ]*/