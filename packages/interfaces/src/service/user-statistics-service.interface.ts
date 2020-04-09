/**
 * Service for tracking user statistics to `Segment`: https://segment.com/
 */
export interface UserStatisticsService {
    /**
     * Tie a user to their actions and record traits about them.
     *
     * Could be user for example when a user logs in.
     *
     * @param {number} userId the ID for the user.
     */
    sendIdentifyEvent(userId: number);

    /**
     * Record the actions your users perform.
     *
     * The user will be recognized based on server name, database name and user id from current application.
     *
     * @param {string} trackName the name of the event you are tracking.
     * @param {any} properties optional. Dictionary of properties, for example if the event was "Deal Created", it might have a property "price".
     */
    sendTrackEvent(trackName: TrackEventType | string, properties?: any);
}

/**
 * These are the track events that are being used by default in the web client.
 */
export enum TrackEventType {
    /**
     * Tracks when a user clicks on the global search.
     *
     * Properties that are sent together with this track event in the web client:
     *
     * ```json
     * None
     * ```
     */
    GlobalSearchClicked = 'GLOBAL_SEARCH_CLICKED',

    /**
     * Tracks when a user uses the global search.
     *
     * Properties that are sent together with this track event in the web client:
     *
     * ```json
     * properties: {
     *      limetype: string,  (limetype of the chosen object)
     *      character_count: number, (number of characters in the search)
     *      top_10: boolean, (if the object was on top 10 in the search)
     *      origin: string (where the event was triggered from, e.g. header or related)
     * }
     * ```
     */
    GlobalSearchUsed = 'GLOBAL_SEARCH_USED',

    /**
     * Tracks when a user creates an object.
     *
     * Properties that are sent together with this track event in the web client:
     *
     * ```json
     * properties: {
     *      limetype: string, (limetype of the created object)
     *      origin: string (where the event was triggered from, e.g. header or related)
     * }
     * ```
     */
    ObjectCreated = 'OBJECT_CREATED',

    /**
     * Tracks when an table a user clicks on a table view.
     *
     * Properties that are sent together with this track event in the web client:
     *
     * ```json
     * properties: {
     *      limetype: string, (which table view that is clicked)
     *      origin: string (where the event was triggered from, e.g. header or related)
     * }
     * ```
     */
    TableViewClicked = 'TABLE_VIEW_CLICKED',
}
