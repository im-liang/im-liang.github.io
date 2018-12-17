## Gain access to your android device

1. ```adb connect {your device id}``` to connect to your device
2. ```adb shell``` to get into your device
3. grant write access to /system folder ```sudo mount -o rw,remount /system```


## Hide the navigation bar
1. Add ```qemu.hw.mainkeys = 1``` at the end of the build.prop in /system
2. ```sudo mount -o ro,remount /system``` change /system back to read only
3. restart your device and you can see the navigation bar has disappeared~
