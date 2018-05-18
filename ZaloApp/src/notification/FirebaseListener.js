import { Platform, AsyncStorage, AppState } from 'react-native';

import firebase from 'react-native-firebase';

function displayNotificationFromCustomData(message){
  if(message.data && message.data.title){
    let notification = new firebase.notifications.Notification();
      notification = notification
      .setTitle(message.data.title)
      .setBody(message.data.body)
      .setData(message.data)
      notification.android.setPriority(firebase.notifications.Android.Priority.High)
      notification.android.setChannelId("test-channel")
    firebase.notifications().displayNotification(notification);
  }
}

export async function registerHeadlessListener(message){
  await AsyncStorage.setItem('headless', new Date().toISOString());
  displayNotificationFromCustomData(message);
}

// these callback will be triggered only when app is foreground or background
export function registerAppListener(){
  this.notificationListener = firebase.notifications().onNotification(notification => {
    firebase.notifications().displayNotification(notification);
  })
  
  this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
    const notif = notificationOpen.notification;

    
    setTimeout(()=>{
      alert(`User tapped notification\n${notif.notificationId}`)
    }, 500)
  });

  this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(token => {
    alert("TOKEN (refreshUnsubscribe)", token);
  });

  this.messageListener = firebase.messaging().onMessage((message) => {
    displayNotificationFromCustomData(message);
  });

}

// FCM.setNotificationCategories([
//   {
//     id: 'com.myidentifi.fcm.text',
//     actions: [
//       {
//         type: NotificationActionType.TextInput,
//         id: 'reply',
//         title: 'Quick Reply',
//         textInputButtonTitle: 'Send',
//         textInputPlaceholder: 'Say something',
//         intentIdentifiers: [],
//         options: NotificationActionOption.AuthenticationRequired
//       },
//       {
//         type: NotificationActionType.Default,
//         id: 'view',
//         title: 'View in App',
//         intentIdentifiers: [],
//         options: NotificationActionOption.Foreground
//       },
//       {
//         type: NotificationActionType.Default,
//         id: 'dismiss',
//         title: 'Dismiss',
//         intentIdentifiers: [],
//         options: NotificationActionOption.Destructive
//       }
//     ],
//     options: [NotificationCategoryOption.CustomDismissAction, NotificationCategoryOption.PreviewsShowTitle]
//   }
// ])