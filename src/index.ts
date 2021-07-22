import { buildNotification } from './factories/notifications'

async function main (){
  console.log('we can process individual notifications')

  const emailNotification = buildNotification('Email', {
    tos: ['user1@mastery.net', 'user2@mastery.net'],
    from: 'notifications@mastery.net',
    subject: 'Hello World',
    body: 'Hey there'
  })
  console.log(emailNotification)
  emailNotification.send()

  const slackNotification = buildNotification('Slack', {
    channel: 'General',
    message: 'Slackity slack slack'
  })

  console.log('we can processs many notifications')
  const notifications = [emailNotification, slackNotification]
  for(const notification of notifications){
    console.log(notification)
    notification.send()
  }

  //const badNotification = createNotification('Trick', {
  //  test: 'blah'
  //})
  //badNotification.send()
}
main()