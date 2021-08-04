import { strict as assert } from 'assert'
import { buildEvent, buildTypeAEvent, buildTypeBEvent } from '../src/factories'
import { EventTypes } from '../src/types'

describe('event test suite', () => {
    describe('building events', () => {
        it('should build an event given a type and payload', () => {
            const payload = {
                message: 'this is an event',
                timestamp: 12312312345
            }
            const event = buildEvent(EventTypes.TypeA, payload)
            assert.strictEqual(event.eventType, EventTypes.TypeA)
            assert.strictEqual('message' in event, true)
        })
        it('should build a typeA event given a payload', () => {
            const payload = {
                message: 'this is an event',
                timestamp: 12312312345
            }
            const event = buildTypeAEvent(payload)
            assert.strictEqual(event.eventType, EventTypes.TypeA)
            assert.strictEqual('message' in event, true)
        })
        it('should build a typeB event given a payload', () => {
            const payload = {
                message: 'this is an event',
                timestamp: 12312312345
            }
            const event = buildTypeBEvent(payload)
            assert.strictEqual(event.eventType, EventTypes.TypeB)
            assert.strictEqual('message' in event, true)
        })
    })
})
