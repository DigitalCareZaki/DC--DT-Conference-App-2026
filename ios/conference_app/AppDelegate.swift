import UIKit
import React_RCTAppDelegate
import ReactAppDependencyProvider

import FirebaseCore
import FirebaseMessaging
import UserNotifications
import RNCPushNotificationIOS

@main
class AppDelegate: RCTAppDelegate, UNUserNotificationCenterDelegate {

  // MARK: - RN bootstrap + SDKs
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil
  ) -> Bool {
    // Firebase
    FirebaseApp.configure()

    // React Native 0.79 bootstrap
    self.moduleName = "conference_app"        // ⚠️ Must match AppRegistry name in index.js
    self.initialProps = [:]
    self.dependencyProvider = RCTAppDependencyProvider()

    // Notifications
    UNUserNotificationCenter.current().delegate = self
    application.registerForRemoteNotifications()

    // Let RN finish setup
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  // MARK: - Required by RCTAppDelegate (Debug packager / Release bundle)
  override func bundleURL() -> URL? {
#if DEBUG
    #if targetEnvironment(simulator)
      let host = "localhost"           // Simulator pe chalega
    #else
      let host = "192.168.1.42"         // ⚡ Your Mac’s IP for real iPhone
    #endif
    return URL(string: "http://\(host):8081/index.bundle?platform=ios&dev=true")
#else
    return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }

  // MARK: - APNs registration
  override func application(
    _ application: UIApplication,
    didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data
  ) {
    RNCPushNotificationIOS.didRegisterForRemoteNotifications(withDeviceToken: deviceToken)
    Messaging.messaging().apnsToken = deviceToken
  }

  override func application(
    _ application: UIApplication,
    didFailToRegisterForRemoteNotificationsWithError error: Error
  ) {
    print("❌ Failed to register for remote notifications:", error)
  }

  // MARK: - UNUserNotificationCenterDelegate
  func userNotificationCenter(
    _ center: UNUserNotificationCenter,
    willPresent notification: UNNotification,
    withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void
  ) {
    // 👇 This makes sure notifications show while app is foreground
    completionHandler([ .banner, .sound, .badge ])
  }

  func userNotificationCenter(
    _ center: UNUserNotificationCenter,
    didReceive response: UNNotificationResponse,
    withCompletionHandler completionHandler: @escaping () -> Void
  ) {
    RNCPushNotificationIOS.didReceive(response)
    completionHandler()
  }
}
