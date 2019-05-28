import { StateOptions } from '@limetech/lime-web-components-interfaces';
import { createStateDecorator, StateDecoratorConfig } from '../index';

/**
 * Get the application session
 */
export function Session(options: StateOptions = {}) {
    const config: StateDecoratorConfig = {
        name: 'application'
    }
    options.map = [getSession, ...options.map || []];

    return createStateDecorator(options, config);
}

function getSession(applicationData: any) {
    return applicationData.session;
}