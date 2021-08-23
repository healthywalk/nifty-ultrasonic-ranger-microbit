## nifty-ultrasonic-ranger-microbit


> Open this page at [https://healthywalk.github.io/nifty-ultrasonic-ranger-microbit/](https://healthywalk.github.io/nifty-ultrasonic-ranger-microbit/)

## Summary
This extension supports the Ultrasonic Rangers in __Microbit MakeCode__ programming.  
Available at both Microbit V1.5 and Microbit V2.0.  
This extension automatically fixes the pulse width measurement bug in Microbit V1.5.  
* Grove Ultrasonic Ranger (initialize with single pin)
* HC-SR04 (initialize with triger pin and echo pin)

## Methods
* Initialization    (Always run at the beginning)
```
NiftyUltrasonicRanger.initializeSinglePinUltrasonicRanger(DigitalPin.P1) 
```
-- P1 is for Triger and echo. 

* alternative Initialization 
```
NiftyUltrasonicRanger.initializeUltrasonicRanger(DigitalPin.P1, DigitalPin.P2)
```
-- P1 is for triger, and P2 is for echo.  

* Get Distance in cm
```
NiftyUltrasonicRanger.measureincm()
```

## Example
```blocks
NiftyUltrasonicRanger.initializeSinglePinUltrasonicRanger(DigitalPin.P1)
basic.forever(function () {
    serial.writeLine(convertToText(NiftyUltrasonicRanger.measureincm()))
})
```
```blocks
NiftyUltrasonicRanger.initializeUltrasonicRanger(DigitalPin.P1, DigitalPin.P2)
basic.forever(function () {
    serial.writeLine(convertToText(NiftyUltrasonicRanger.measureincm()))
})
```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/healthywalk/nifty-ultrasonic-ranger-microbit**  and import


## Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
