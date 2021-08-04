import {
    IEvent,
    EventTypes
} from '../../types'

export function buildTypeAEvent (payload: any): IEvent {
    const event: IEvent = {
        eventType: EventTypes.TypeA
    }
    return Object.assign(event, payload)
}

export function buildTypeBEvent (payload: any): IEvent {
    const event: IEvent = {
        eventType: EventTypes.TypeB
    }
    return Object.assign(event, payload)
}

/**
 * @description This method builds an event provided a type and payload.
 * @param eventType {EventTypes} - The event type to be built.
 * @param payload {any} - The payload to be tied to this event.
 * @returns The built event or an error if the type is unsupported.
 */
export function buildEvent (eventType: EventTypes, payload: any): IEvent {
    switch (eventType) {
        case EventTypes.TypeA:
            return buildTypeAEvent(payload)
        case EventTypes.TypeB:
            return buildTypeBEvent(payload)
        default:
            throw new Error('Illegal event type')
    }
}
