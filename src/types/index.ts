
/**
 * @method validate {Boolean} - The validation on a notfication.
 * @method send {Boolean} - The means of sending the notification.
 */
export interface INotification {
  validate: () => Boolean
  send: () => Boolean
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
