
/**
 * @method send {Boolean} - The means of sending the notification.
 */
export interface INotification {
    send(data?: any) : Boolean
}

export interface EmailNotificationPayload {
  tos: string[]
  from: string
  subject: string
  body: string
}

export interface SlackNotificationPayload {
  channel: string
  message: string
}

export type NotificationPayloads = EmailNotificationPayload | SlackNotificationPayload

export type NotificationTypes = 'Email' | 'Slack'