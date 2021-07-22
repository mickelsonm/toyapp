import {
    INotification,
    NotificationTypes,
    NotificationPayloads,
    SlackNotificationPayload,
    EmailNotificationPayload
} from '../../types'

export function buildEmailNotification(payload : EmailNotificationPayload) : INotification {
    //TODO: send implementation should be build out more
    const notification : INotification = {
        send(data?: any) : Boolean { 
            console.log('email send called')
            return false
        }
    }
    return Object.assign(notification, payload)
}

export function buildSlackNotification(payload : SlackNotificationPayload) : INotification {
    //TODO: send implementation should be build out more
    const notification : INotification = {
        send(data?: any) : Boolean {
            console.log('slack send called')
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
export function buildNotification(notificationType: NotificationTypes, payload: NotificationPayloads): INotification {
    switch(notificationType){
      case 'Email':
        return buildEmailNotification(payload as EmailNotificationPayload)
      case 'Slack':
        return buildSlackNotification(payload as SlackNotificationPayload)
      default:
        throw new Error('Illegal notification type')
    }
}