import { getBackreference, getLimetype } from '.';

export const document = {
    name: 'document',
    localname: {
        singular: 'Document',
        plural: 'Documents',
    },
    sort_order: 8,
    label: 'document',
    properties: {
        comment: {
            name: 'comment',
            required: false,
            label: 'description',
            fieldorder: 1,
            defaultvalue: '',
            localname: 'Description',
            type: 'string',
            has_sql: false,
            length: 256,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        type: {
            name: 'type',
            required: true,
            label: 'category',
            fieldorder: 2,
            defaultvalue: {
                key: 'empty',
                text: '',
                inactive: false,
            },
            localname: 'Document type',
            type: 'option',
            has_sql: false,
            options: [
                {
                    key: 'empty',
                    text: '',
                    inactive: false,
                },
                {
                    key: 'email',
                    text: 'Email',
                    inactive: false,
                },
                {
                    key: 'tender',
                    text: 'Quote',
                    inactive: false,
                },
                {
                    key: 'agreement',
                    text: 'Agreement',
                    inactive: false,
                },
                {
                    key: 'other',
                    text: 'Other',
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
        document: {
            name: 'document',
            required: false,
            label: 'none',
            fieldorder: 5,
            defaultvalue: null,
            localname: 'Document',
            type: 'file',
            has_sql: false,
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
            fieldorder: 7,
            defaultvalue: null,
            localname: 'Deal',
            type: 'belongsto',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('deal', 'document'),
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
        campaign: {
            name: 'campaign',
            required: false,
            label: 'none',
            fieldorder: 8,
            defaultvalue: null,
            localname: 'Marketing activity',
            type: 'belongsto',
            has_sql: false,
            relation: {
                getBackreference: () =>
                    getBackreference('campaign', 'document'),
                getLimetype: () => getLimetype('campaign'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        company: {
            name: 'company',
            required: false,
            label: 'none',
            fieldorder: 3,
            defaultvalue: null,
            localname: 'Company',
            type: 'belongsto',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('company', 'document'),
                getLimetype: () => getLimetype('company'),
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
            fieldorder: 6,
            defaultvalue: null,
            localname: 'Coworker',
            type: 'belongsto',
            has_sql: false,
            relation: {
                getBackreference: () =>
                    getBackreference('coworker', 'document'),
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
        person: {
            name: 'person',
            required: false,
            label: 'none',
            fieldorder: 4,
            defaultvalue: null,
            localname: 'Person',
            type: 'belongsto',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('person', 'document'),
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
        helpdesk: {
            name: 'helpdesk',
            required: false,
            label: 'none',
            fieldorder: 9,
            defaultvalue: null,
            localname: 'Helpdesk',
            type: 'belongsto',
            has_sql: false,
            relation: {
                getBackreference: () =>
                    getBackreference('helpdesk', 'document'),
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
        successplan: {
            name: 'successplan',
            required: false,
            label: 'none',
            fieldorder: 10,
            defaultvalue: null,
            localname: 'Success plan',
            type: 'belongsto',
            has_sql: false,
            relation: {
                getBackreference: () =>
                    getBackreference('successplan', 'document'),
                getLimetype: () => getLimetype('successplan'),
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
            fieldorder: 11,
            defaultvalue: '',
            localname: 'History',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('history', 'document'),
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
        icon: 'attach',
        color: 'lime-dark-blue',
        create: true,
        descriptive: ['comment'],
    },
};
