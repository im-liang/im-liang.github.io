<h4 style="color:red;">
Using trusted Wi-Fi only!  
By opening the option means anyone in the network can connect to the device in debug mode.
</h4>

## Enable debugging

Connect the device via USB.

Make sure USB debugging of the device is working. To verify that, you can run ```adb devices``` to see if the device shows up.

## open the port

Using the command to open port at 5555:  
`$ adb tcpip 5555`

## Get the ip address of the device

In Settings -> About phone -> Status, you can find out your IP address, or type ```adb shell ifconfig``` to find out.

## Disconnect USB

Remove the usb cable.

## Connect the device wirelessly

```$ adb connect <IP>:5555```


[Inspiration](https://stackoverflow.com/questions/4893953/run-install-debug-android-applications-over-wi-fi)
