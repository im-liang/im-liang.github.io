## Take Screenshot and output to current dir

`adb exec-out screencap -p > {{filename}}.png`

## Install APK from Computer

`adb install {{apk file path}}`

## Send broadcast using adb

`adb shell am broadcast -a {{ broadcast action }} {{ extras(optional) }}` 

#### extras

`--es {{ title }} {{ content }}` add string as extra


## Grant/Revoke a permission of the app

`adb shell pm grant {{ packageName }} {{ Permission }}`  // Grant a permission to an app. 
`adb shell pm revoke {{ packageName }} {{ Permission }}`   // Revoke a permission from an app.

## Emulate Key Event

`adb shell input keyevent 3` // Home btn  
`adb shell input keyevent 4` // Back btn  
`adb shell input keyevent 5` // Call  
`adb shell input keyevent 6` // End call  
`adb shell input keyevent 26` // Turn Android device ON and OFF. It will toggle device to on/off status  
`adb shell input keyevent 27` // Camera  
`adb shell input keyevent 64` // Open browser  
`adb shell input keyevent 66` // Enter  
`adb shell input keyevent 67` // Delete (backspace)  
`adb shell input keyevent 207` // Contacts  

More key event please go to the [link](https://developer.android.com/reference/android/view/KeyEvent.html)

## Files

`adb push [source] [destination]`    // Copy files from your computer to your phone  
`adb pull [device file location] [local file location]` // Copy files from your phone to your computer

