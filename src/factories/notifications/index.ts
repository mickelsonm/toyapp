import {
    INotification,
    NotificationTypes,
    NotificationPayloads,
    SlackNotificationPayload,
    EmailNotificationPayload
} from '../../types'

import { validate as validEmail } from 'email-validator'

export function buildEmailNotification (payload: EmailNotificationPayload): INotification {
    const notification: INotification = {
        validate (): Boolean {
            if (payload === null || payload === undefined) return false
            if (!payload.subject.length) return false
            if (!payload.body.length) return false
            for (const email of payload.tos) {
                if (!validEmail(email)) {
                    return false
                }
            }
            return true
        },
        send (): Boolean {
            if (this.validate()) {
                return true
            }
            return false
        }
    }
    return Object.assign(notification, payload)
}

export function buildSlackNotification (payload: SlackNotificationPayload): INotification {
    const notification: INotification = {
        validate (): Boolean {
            if (payload === null || payload === undefined) return false
            if (!payload.channel.length) return false
            if (!payload.message.length) return false

            return true
        },
        send (): Boolean {
            if (this.validate()) {
                return true
            }
            return false
        }
    }
    return Object.assign(notification, payload)
}

/**
 * @description createNotification creates a notification given a valid notification type and payload.
 * @param notificationType {NotificationTypes} - The Notification type.
 * @param payload {NotificationPayloads} - The payload that reflects the given type.
 * @returns The built notification.
 */
export function buildNotification (notificationType: NotificationTypes, payload: NotificationPayloads): INotification {
    switch (notificationType) {
      case NotificationTypes.Email:
        return buildEmailNotification(payload as EmailNotificationPayload)
      case NotificationTypes.Slack:
        return buildSlackNotification(payload as SlackNotificationPayload)
      default:
        throw new Error('Illegal notification type')
    }
}
