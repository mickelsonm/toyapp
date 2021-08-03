import { strict as assert } from 'assert'
import { buildNotification } from '../src/factories'

describe('notifications test suite', () => {
    describe('email notifications', () => {
        it('should not send if there are no valid emails', () => {
            const emailNotification = buildNotification('Email', {
                tos: [''],
                from: 'notifications@mastery.net',
                subject: 'Hello World',
                body: 'Hey there'
            })
            const resp = emailNotification.send()

            assert.strictEqual(resp, false)
        })

        it('should not send if there is no subject', () => {
            const emailNotification = buildNotification('Email', {
                tos: ['test@unit.test'],
                from: 'notifications@mastery.net',
                subject: '',
                body: 'Hey there'
            })
            const resp = emailNotification.send()

            assert.strictEqual(resp, false)
        })

        it('should be a valid email that can be sent', () => {
            const emailNotification = buildNotification('Email', {
                tos: ['user1@mastery.net', 'user2@mastery.net'],
                from: 'notifications@mastery.net',
                subject: 'Hello World',
                body: 'Hey there'
            })
            const resp = emailNotification.send()

            assert.strictEqual(resp, true)
        })
    })

    describe('slack notifications', () => {
        it('should end if the payload is good', () => {
            const slackNotification = buildNotification('Slack', {
                channel: 'General',
                message: 'Slackity slack slack'
            })

            const resp = slackNotification.send()

            assert.strictEqual(resp, true)
        })

        it('should not send if the payload is malformed', () => {
            const slackNotification = buildNotification('Slack', {
                channel: '',
                message: ''
            })

            const resp = slackNotification.send()

            assert.strictEqual(resp, false)
        })
    })
})
