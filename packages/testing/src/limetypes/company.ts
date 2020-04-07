import { getBackreference, getLimetype } from '.';

export const company = {
    name: 'company',
    localname: {
        singular: 'Company',
        plural: 'Companies',
    },
    sort_order: 1,
    label: 'company',
    properties: {
        name: {
            name: 'name',
            required: true,
            label: 'name',
            fieldorder: 1,
            defaultvalue: '',
            localname: 'Company name',
            type: 'string',
            has_sql: false,
            length: 200,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        phone: {
            name: 'phone',
            required: false,
            label: 'businesstelephonenumber',
            fieldorder: 2,
            defaultvalue: '',
            localname: 'Telephone',
            type: 'phone',
            has_sql: false,
            length: 32,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        www: {
            name: 'www',
            required: false,
            label: 'businesshomepage',
            fieldorder: 3,
            defaultvalue: '',
            localname: 'Homepage',
            type: 'link',
            has_sql: false,
            length: 100,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        postaladdress1: {
            name: 'postaladdress1',
            required: false,
            label: 'streetaddress',
            fieldorder: 4,
            defaultvalue: '',
            localname: 'Postal address 1',
            type: 'string',
            has_sql: false,
            length: 72,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        visitingaddress1: {
            name: 'visitingaddress1',
            required: false,
            label: 'visitingaddress-streetaddress',
            fieldorder: 5,
            defaultvalue: '',
            localname: 'Visiting address 1',
            type: 'string',
            has_sql: false,
            length: 72,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        registrationno: {
            name: 'registrationno',
            required: false,
            label: 'companynumber',
            fieldorder: 16,
            defaultvalue: '',
            localname: 'Registration number',
            type: 'string',
            has_sql: false,
            length: 16,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        document: {
            name: 'document',
            required: false,
            label: 'none',
            fieldorder: 22,
            defaultvalue: '',
            localname: 'Documents',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('document', 'company'),
                getLimetype: () => getLimetype('document'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        person: {
            name: 'person',
            required: false,
            label: 'none',
            fieldorder: 19,
            defaultvalue: '',
            localname: 'Persons',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('person', 'company'),
                getLimetype: () => getLimetype('person'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        coworker: {
            name: 'coworker',
            required: false,
            label: 'responsiblecoworker',
            fieldorder: 17,
            defaultvalue: null,
            localname: 'Responsible',
            type: 'belongsto',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('coworker', 'company'),
                getLimetype: () => getLimetype('coworker'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        postalzipcode: {
            name: 'postalzipcode',
            required: false,
            label: 'zipcode',
            fieldorder: 8,
            defaultvalue: '',
            localname: 'Postal zipcode',
            type: 'string',
            has_sql: false,
            length: 10,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        postalcity: {
            name: 'postalcity',
            required: false,
            label: 'city',
            fieldorder: 9,
            defaultvalue: '',
            localname: 'Postal city',
            type: 'string',
            has_sql: false,
            length: 72,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        visitingzipcode: {
            name: 'visitingzipcode',
            required: false,
            label: 'visitingaddress-zipcode',
            fieldorder: 10,
            defaultvalue: '',
            localname: 'Visiting zipcode',
            type: 'string',
            has_sql: false,
            length: 10,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        visitingcity: {
            name: 'visitingcity',
            required: false,
            label: 'visitingaddress-city',
            fieldorder: 11,
            defaultvalue: '',
            localname: 'Visiting city',
            type: 'string',
            has_sql: false,
            length: 72,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        postaladdress2: {
            name: 'postaladdress2',
            required: false,
            label: 'streetaddress2',
            fieldorder: 6,
            defaultvalue: '',
            localname: 'Postal address 2',
            type: 'string',
            has_sql: false,
            length: 72,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        visitingaddress2: {
            name: 'visitingaddress2',
            required: false,
            label: 'visitingaddress-streetaddress2',
            fieldorder: 7,
            defaultvalue: '',
            localname: 'Visiting address 2',
            type: 'string',
            has_sql: false,
            length: 72,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        country: {
            name: 'country',
            required: false,
            label: 'country',
            fieldorder: 12,
            defaultvalue: '',
            localname: 'Country',
            type: 'string',
            has_sql: false,
            length: 64,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        inactive: {
            name: 'inactive',
            required: false,
            label: 'none',
            fieldorder: 15,
            defaultvalue: false,
            localname: 'Inactive',
            type: 'yesno',
            has_sql: false,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        buyingstatus: {
            name: 'buyingstatus',
            required: false,
            label: 'category',
            fieldorder: 18,
            defaultvalue: {
                key: 'empty',
                text: '',
                inactive: false,
            },
            localname: 'Buying status',
            type: 'option',
            has_sql: false,
            options: [
                {
                    key: 'empty',
                    text: '',
                    inactive: false,
                },
                {
                    key: 'active',
                    text: 'Active',
                    inactive: false,
                },
                {
                    key: 'notinterested',
                    text: 'Not interested',
                    inactive: false,
                },
                {
                    key: 'excustomer',
                    text: 'Former customer',
                    inactive: false,
                },
                {
                    key: 'prospect',
                    text: 'Prospect',
                    inactive: false,
                },
            ],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        helpdesk: {
            name: 'helpdesk',
            required: false,
            label: 'none',
            fieldorder: 24,
            defaultvalue: '',
            localname: 'Helpdesk',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('helpdesk', 'company'),
                getLimetype: () => getLimetype('helpdesk'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        deal: {
            name: 'deal',
            required: false,
            label: 'none',
            fieldorder: 20,
            defaultvalue: '',
            localname: 'Deals',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('deal', 'company'),
                getLimetype: () => getLimetype('deal'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        todo: {
            name: 'todo',
            required: false,
            label: 'none',
            fieldorder: 23,
            defaultvalue: '',
            localname: 'To-dos',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('todo', 'company'),
                getLimetype: () => getLimetype('todo'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        history: {
            name: 'history',
            required: false,
            label: 'none',
            fieldorder: 21,
            defaultvalue: '',
            localname: 'History',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('history', 'company'),
                getLimetype: () => getLimetype('history'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        fullpostaladdress: {
            name: 'fullpostaladdress',
            required: false,
            label: 'none',
            fieldorder: 13,
            defaultvalue: '',
            localname: 'Complete postal address',
            type: 'text',
            has_sql: false,
            length: 256,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        fullvisitingaddress: {
            name: 'fullvisitingaddress',
            required: false,
            label: 'businessaddress',
            fieldorder: 14,
            defaultvalue: '',
            localname: 'Complete visiting address',
            type: 'text',
            has_sql: false,
            length: 256,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        id: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'id',
            localname: 'Record ID (System)',
            name: 'id',
            required: false,
            type: 'system',
            ui: {},
        },
        createduser: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'createduser',
            localname: 'Created by (System)',
            name: 'createduser',
            required: false,
            type: 'system',
            ui: {},
        },
        createdtime: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'createdtime',
            localname: 'Created (System)',
            name: 'createdtime',
            required: false,
            type: 'system',
            ui: {},
        },
        timestamp: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'timestamp',
            localname: 'Last updated (System)',
            name: 'timestamp',
            required: false,
            type: 'system',
            ui: {},
        },
        updateduser: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'updateduser',
            localname: 'Last updated by (System)',
            name: 'updateduser',
            required: false,
            type: 'system',
            ui: {},
        },
    },
    acl: {
        read: true,
        update: true,
        create: true,
        delete: true,
    },
    ui: {
        icon: 'organization',
        color: 'lime-blue',
        create: true,
        descriptive: ['name'],
    },
};
