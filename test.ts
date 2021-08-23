NiftyUltrasonicRanger.initializeUltrasonicRanger(DigitalPin.P1, DigitalPin.P2)
basic.forever(function () {
    serial.writeLine(convertToText(NiftyUltrasonicRanger.measureincm()))
})
