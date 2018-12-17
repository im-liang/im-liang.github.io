The home screen you see on your Android device after boot is a standard application that reacts to a home event. When Android finishes booting and is ready to start the home activity, the home event is sent and qualifying applications identify themselves as bootable candidates.

The system sends out the android.intent.category.HOME and android.intent.category.DEFAULT intents when it is done initializing.

Android looks for application manifests with these intent filters when it starts up. If there is more than one, Android lists all of them and allows you to select the one to launch.

In order to designate your application as a home application, follow these steps:

Add the intent filters to AndroidManifest.xml. Copy these two lines into the intent filter of your application main activity:
<category android:name="android.intent.category.HOME" />
<category android:name="android.intent.category.DEFAULT" />
Your main activity definition should look similar to the following:

AndroidManifest.xml
<activity
    android:name=".MyActivity"
    android:label="@string/app_name">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.HOME" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>
Install your application in the device. On the next startup, Android displays a dialog box that allows you to choose between the default Android launcher and the application you just modified:

Note You can set your selection as the default home application for the future.