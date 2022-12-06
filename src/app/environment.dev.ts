const apiServer = {
    host: 'localhost:8080',
    prefix: ''
};

export const environment = {
    production: false,
    appPrefix: 'app_cdp_reporting_',
    baseHref: '/',
    administratorPrefix: 'administrator',
    locale: {
        default: 'en',
        version: '20220629200000'
    },
    google: {
        authRequest: 'http://localhost:4000/api/v1/auth/google/request',
        recaptcha: {
            siteKey: 'xxx'
        },
        app: {
            clientId: '903853944346-6brpj6rpcd55btb8uj86p5fknof0ptqc.apps.googleusercontent.com'
        }
    },
    facebook: {
        apiUrl: 'http://localhost:4200',
        appId: '792873957566769' // Admicro Manage Page App
    },
    apiServer: {
        ssl: false,
        host: apiServer.host,
        prefix: apiServer.prefix,
        paths: {
            auth: {
                login: 'admicro/auth/login',
                logout: 'auth/logout',
                google: {
                    request: 'auth/google/request',
                    callback: 'auth/google/callback'
                }
            },
            administrator: {
                role: {
                    list: 'core/role/list',
                    create: 'core/role/store',
                    update: {
                        info: 'core/role/update/info',
                        name: 'core/role/update/name'
                    }
                },
                user: {
                    list: 'core/user/list',
                    create: 'core/user/create',
                    update: 'core/user/update'
                },
                route: {
                    list: 'core/route/list',
                    import: 'core/route/import',
                    update: {
                        name: 'core/route/update/name'
                    }
                },
                permission: {
                    details: 'core/permission',
                    set: 'core/permission/set',
                    setUserRole: 'core/permission/set-role/user'
                }
            },
            connector: {
                getAll: 'connector/get-all',
                getFieldAds: 'connector/get-fields-ads',
                userConnector: {
                    addFb: 'user-connector/add/facebook',
                    addGoogle: 'user-connector/add/google',
                    addMysql: 'user-connector/add/mysql',
                    editMysql: 'user-connector/edit/mysql',
                    addFile: 'user-connector/file-upload',
                    getAll: 'user-connector/get-all',
                    getById: 'user-connector/get-by-id/{id}',
                }
            },
            source: {
                getAll: 'source/get-all',
                getById: 'source/get-by-id/{id}',
                checkingExist: 'source/checking-exist',
                delete: 'source/delete/{id}',
                update: 'source/update',
                syncData: 'source/sync-data',
                sourceConnector: {
                    create: 'source-connector/create',
                    getById: 'source-connector/get-by-id/{id}',
                    confirm: 'source-connector/confirm-schema'
                },
                checkDimension: 'source/check-dimension',
                addDimensionDetail: 'source/add-dimension/{source_id}',
                deleteDimension: 'source/remove-dimension/{source_id}'
            },
            report: {
                create: 'report/create',
                getAll: 'report/get-all',
                getById: 'report/get-by-id/{id}',
                update: 'report/update',
                checkingExist: 'report/checking-exist',
                delete: 'report/delete/{id}',
                getUserPermission: '/report/permission/get/{id}',
                grantPermission: '/report/permission/grant/{id}',
                removePermission: '/report/permission/remove/{id}'
            },
            chart: {
                add: 'chart/add',
                getById: 'chart/get-by-id/{id}',
                update: 'chart/update',
                queryData: 'chart/query-data/{id}',
                queryDataTable: 'chart/query-data/table/{id}',
                queryDataDemo: 'chart/query-data/demo/{reportId}',
                delete: 'chart/delete/{id}'
            },
            template: {
                add: 'template/add',
                getAll: 'template/get-all',
                getById: 'template/get-by-id/{id}',
                delete: 'template/delete/{id}',
            }
        }
    },
    statusesSource: [
        {id: -1, name: 'Failed'},
        {id: 0, name: 'None confirm'},
        {id: 1, name: 'Prepare'},
        {id: 2, name: 'Processing'},
        {id: 3, name: 'Success'},
    ],
    sorts: [
        {id: 0, name: 'Desc'},
        {id: 1, name: 'Asc'},
    ],
    dataTypes: [
        {id: 0, value: 'text', name: 'Text'},
        {id: 1, value: 'float', name: 'Float'},
        {id: 2, value: 'int', name: 'Int'},
        {id: 3, value: 'long', name: 'Long'},
        {id: 4, value: 'datetime', name: 'Datetime'},
        {id: 5, value: 'date', name: 'Date'},
    ],
    reportTypes: [
        {id: 0, value: false, name: 'Owner'},
        {id: 1, value: true, name: 'Share with me'}
    ],
    reportPermissions: [
        {id: 1, name: 'Viewer'},
        {id: 2, name: 'Editor'}
    ],
    visualizations: [
        {
            id: 1,
            name: 'Data table',
            type: 'table',
            class: 'fas fa-table',
            svg: '<svg aria-hidden="true" style="width: 20px; height: 20px;"><use href="#icon-chart-table"></use></svg>',
            tooltip: `<div>
                        <img src="./assets/default/images/visualizations/table.svg" />
                        <div class="d-flex font-weight-bold mt-2">Data Table</div>
                        <div class="text-dark">To quickly view your raw data or to compare several variables.</div>
                    </div>`
        },
        {
            id: 2,
            name: 'Area Chart',
            type: 'chart-area',
            class: 'fas fa-chart-area',
            svg: '<svg aria-hidden="true" style="width: 20px; height: 20px;"><use href="#icon-chart-area"></use></svg>',
            tooltip: `<div>
                        <img src="./assets/default/images/visualizations/chart-area.svg" />
                        <div class="d-flex font-weight-bold mt-2">Area Chart</div>
                        <div class="text-dark">To display the trend of values over a dimension or how categories contributed to a whole.</div>
                        <div class="text-dark mt-2"><span class="font-weight-bold">X-axis *:</span> dimension to display your data along.</div>
                        <div class="text-dark mt-1"><span class="font-weight-bold">Legend:</span> categories to breakdown your value</div>
                        <div class="text-dark mt-1"><span class="font-weight-bold">Y-axis *:</span> value</div>
                        <div class="text-muted mt-2">* required</div>
                    </div>`
        },
        {
            id: 3,
            name: 'Line Chart',
            type: 'chart-line',
            class: 'fas fa-chart-line',
            svg: '<svg aria-hidden="true" style="width: 20px; height: 20px;"><use href="#icon-chart-line"></use></svg>',
            tooltip: `<div>
                        <img src="./assets/default/images/visualizations/chart-line.svg" />
                        <div class="d-flex font-weight-bold mt-2">Line Chart</div>
                        <div class="text-dark">To display the trend of values over a dimension or how categories contributed to a whole.</div>
                        <div class="text-dark mt-2"><span class="font-weight-bold">X-axis *:</span> dimension to display your data along.</div>
                        <div class="text-dark mt-1"><span class="font-weight-bold">Legend:</span> categories to breakdown your value</div>
                        <div class="text-dark mt-1"><span class="font-weight-bold">Y-axis *:</span> value</div>
                        <div class="text-muted mt-2">* required</div>
                    </div>`
        },
        {
            id: 4,
            name: 'Column Chart',
            type: 'chart-column',
            class: 'fas fa-chart-bar',
            svg: '<svg aria-hidden="true" style="width: 20px; height: 20px;"><use href="#icon-chart-column"></use></svg>',
            tooltip: `<div>
                        <img src="./assets/default/images/visualizations/chart-column.svg" />
                        <div class="d-flex font-weight-bold mt-2">Column Chart</div>
                        <div class="text-dark">To compare values across categories.</div>
                        <div class="text-dark mt-2"><span class="font-weight-bold">X-axis *:</span> dimension to display your data along.</div>
                        <div class="text-dark mt-1"><span class="font-weight-bold">Legend:</span> categories to breakdown your value</div>
                        <div class="text-dark mt-1"><span class="font-weight-bold">Y-axis *:</span> value</div>
                        <div class="text-muted mt-2">* required</div>
                    </div>`
        },
        {
            id: 5,
            name: 'Bar Chart',
            type: 'chart-bar',
            class: 'fas fa-chart-bar',
            svg: '<svg aria-hidden="true" style="width: 20px; height: 20px;"><use href="#icon-chart-bar"></use></svg>',
            tooltip: `<div>
                        <img src="./assets/default/images/visualizations/chart-column.svg" />
                        <div class="d-flex font-weight-bold mt-2">Bar Chart</div>
                        <div class="text-dark">To compare values across categories.</div>
                        <div class="text-dark mt-2"><span class="font-weight-bold">X-axis *:</span> dimension to display your data along.</div>
                        <div class="text-dark mt-1"><span class="font-weight-bold">Legend:</span> categories to breakdown your value</div>
                        <div class="text-dark mt-1"><span class="font-weight-bold">Y-axis *:</span> value</div>
                        <div class="text-muted mt-2">* required</div>
                    </div>`
        },
        {
            id: 6,
            name: 'Pie Chart',
            type: 'chart-pie',
            class: 'fas fa-chart-pie',
            svg: '<svg aria-hidden="true" style="width: 20px; height: 20px;"><use href="#icon-chart-pie"></use></svg>',
            tooltip: `<div>
                        <img src="./assets/default/images/visualizations/table.svg" />
                        <div class="d-flex font-weight-bold mt-2">Pie Chart</div>
                        <div class="text-dark">To present the contribution of each value to a total.</div>
                        <div class="text-dark mt-2"><span class="font-weight-bold">Legend:</span> categories to breakdown your value</div>
                        <div class="text-dark mt-1"><span class="font-weight-bold">Y-axis *:</span> value</div>
                        <div class="text-muted mt-2">* required</div>
                    </div>`
        }
    ],
    aggregations: [
        {id: 1, label: 'None', value: 'none', types: ['text', 'float', 'int', 'long', 'datetime', 'date'], isCount: false},
        {id: 2, label: 'Count', value: 'count', types: ['text', 'float', 'int', 'long', 'datetime', 'date'], isCount: true},
        {id: 3, label: 'Count Distinct', value: 'count_distinct', types: ['text', 'float', 'int', 'long', 'datetime', 'date'], isCount: true},
        {id: 4, label: 'Average', value: 'average', types: ['float', 'int', 'long'], isCount: true},
        {id: 5, label: 'Sum', value: 'sum', types: ['float', 'int', 'long'], isCount: true},
        {id: 6, label: 'Min', value: 'min', types: ['float', 'int', 'long'], isCount: true},
        {id: 7, label: 'Max', value: 'max', types: ['float', 'int', 'long'], isCount: true}
    ],
    operators : [
        /* text */
        {id: 1, label: 'is', value: 'is', valueSize: 'multi' , type: ['text']},
        {id: 2, label: 'is not', value: 'is_not', valueSize: 'multi', type: ['text']},
        {id: 3, label: 'contains', value: 'contains', valueSize: 'no', type: ['text']},
        {id: 4, label: 'not contain', value: 'not_contain', valueSize: 'no', type: ['text']},
        {id: 5, label: 'startwith', value: 'startwith', valueSize: 'no', type: ['text']},
        {id: 6, label: 'not startwith', value: 'not_startwith', valueSize: 'no', type: ['text']},
        {id: 7, label: 'endwith', value: 'endwith', valueSize: 'no', type: ['text']},
        {id: 8, label: 'not endwith', value: 'not_endwith', valueSize: 'no', type: ['text']},
        /* int, float, long */
        {id: 9, label: 'equal', value: 'equal', valueSize: 'multi' , type: ['float', 'int', 'long']},
        {id: 10, label: 'not equal', value: 'not_equal', valueSize: 'multi' , type: ['float', 'int', 'long']},
        {id: 11, label: 'less than', value: 'less_than', valueSize: 'no' , type: ['float', 'int', 'long']},
        {id: 12, label: 'greater than', value: 'greater_than', valueSize: 'no' , type: ['float', 'int', 'long']},
        {id: 13, label: 'between', value: 'between', valueSize: 'multi' , type: ['float', 'int', 'long']},
        /* data, dateTime */
        {id: 14, label: 'before', value: 'before', valueSize: 'no' , type: ['date', 'datetime']},
        {id: 15, label: 'after', value: 'after', valueSize: 'no' , type: ['date', 'datetime']},
        {id: 16, label: 'between date', value: 'between_date', valueSize: 'multi' , type: ['date', 'datetime']},
        {id: 17, label: 'current', value: 'current', valueSize: 'multi' , type: ['date', 'datetime']},
        {id: 18, label: 'on', value: 'on', valueSize: 'multi' , type: ['date', 'datetime']},
        {id: 19, label: 'previous', value: 'previous', valueSize: 'multi' , type: ['date', 'datetime']},
        /* all data type */
        {id: 20, label: 'is null', value: 'is_null', valueSize: 'no', type: ['text', 'float', 'int', 'long', 'date', 'datetime']},
        {id: 21, label: 'is not null', value: 'is_not_null', valueSize: 'no', type: ['text', 'float', 'int', 'long', 'date', 'datetime']}
    ],
    functions: [
        {id: 2, label: 'by Year', display: "Year", value: 'year', types: ['datetime', 'date']},
        {id: 3, label: 'by Month', display: "Month", value: 'month', types: ['datetime', 'date']},
        {id: 4, label: 'by Week', display: "Week", value: 'week', types: ['datetime', 'date']},
        {id: 5, label: 'by Day', display: "Day", value: 'day', types: ['datetime', 'date']},
        {id: 6, label: 'by Hour', display: "Hour", value: 'hour', types: ['datetime']},
        {id: 7, label: 'by Minute', display: "Minute", value: 'minute', types: ['datetime']},
        {id: 8, label: 'by Second', display: "Second", value: 'second', types: ['datetime']}
    ],
    joinType: [
        {id: 1, label: 'Left join', value: 'left_join', image: './assets/default/images/join/join-left.png'},
        {id: 2, label: 'Right join', value: 'right_join', image: './assets/default/images/join/join-right.png'},
        {id: 3, label: 'Inner join', value: 'inner_join', image: './assets/default/images/join/inner-join.png'},
        {id: 4, label: 'Full outer join', value: 'fullouter_join', image: './assets/default/images/join/outer-join.png'},
    ],
    typeDimensions: [
        {id: 1, name: 'Formula', value: 'formula'},
        {id: 2, name: 'Function', value: 'function'}
    ],
    aggregationOfDimensions: [
        {id: 1, label: 'SQRT ( Căn bậc hai )', value: 'sqrt', types: ['float', 'int', 'long']},
        {id: 2, label: 'ABS ( Giá trị tuyệt đối )', value: 'abs', types: ['float', 'int', 'long']},
        {id: 3, label: 'ROUND ( Làm tròn )', value: 'round', types: ['float', 'int', 'long']},
        {id: 4, label: 'YEAR ( Năm )', value: 'year', types: ['datetime', 'date']},
        {id: 5, label: 'MONTH ( Tháng )', value: 'month', types: ['datetime', 'date']},
        {id: 6, label: 'DAY ( Ngày )', value: 'day', types: ['datetime', 'date']},
        {id: 7, label: 'HOUR ( Giờ )', value: 'hour', types: ['datetime', 'date']},
        {id: 8, label: 'MINUTE ( Phút )', value: 'minute', types: ['datetime', 'date']},
        {id: 9, label: 'LENGTH ( Độ dài của chuỗi )', value: 'length', types: ['text']},
        {id: 10, label: 'UPPER ( Chữ hoa )', value: 'upper', types: ['text']},
        {id: 11, label: 'LOWER ( Chữ thường )', value: 'lower', types: ['text']}
    ],
    levelCampaigns: [
        {id: 1, name: 'Campaign', value: 'campaign'},
        {id: 2, name: 'Adset', value: 'adset'},
        {id: 3, name: 'Ad', value: 'ad'}
    ],
    operatorOfFormula: [
        {value: '(', types: "operator", typeButton: "button"},
        {value: ')', types: "operator", typeButton: "button"},
        {value: '+', types: "operator", typeButton: "button"},
        {value: '-', types: "operator", typeButton: "button"},
        {value: '*', types: "operator", typeButton: "button"},
        {value: '/', types: "operator", typeButton: "button"},
    ],
};
