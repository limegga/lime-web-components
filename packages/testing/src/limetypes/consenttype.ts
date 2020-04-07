import { getBackreference, getLimetype } from '.';

export const consenttype = {
    name: 'consenttype',
    localname: {
        singular: 'Consent type',
        plural: 'Consent type',
    },
    sort_order: 19,
    label: null,
    properties: {
        title: {
            name: 'title',
            required: true,
            label: 'none',
            fieldorder: 1,
            defaultvalue: '',
            localname: 'Title',
            type: 'string',
            has_sql: false,
            length: 512,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        active: {
            name: 'active',
            required: false,
            label: 'none',
            fieldorder: 2,
            defaultvalue: false,
            localname: 'Active',
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
        readonly: {
            name: 'readonly',
            required: false,
            label: 'none',
            fieldorder: 3,
            defaultvalue: false,
            localname: 'Readonly',
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
        default: {
            name: 'default',
            required: false,
            label: 'none',
            fieldorder: 4,
            defaultvalue: false,
            localname: 'Default when new',
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
        description: {
            name: 'description',
            required: false,
            label: 'none',
            fieldorder: 5,
            defaultvalue: '',
            localname: 'Description',
            type: 'text',
            has_sql: false,
            length: 4000,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        consent: {
            name: 'consent',
            required: false,
            label: 'none',
            fieldorder: 6,
            defaultvalue: '',
            localname: 'Consent',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () =>
                    getBackreference('person', 'consenttype'),
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
        icon: 'decision',
        color: 'lime-light-grey',
        create: false,
        descriptive: ['_id'],
    },
};
