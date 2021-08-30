/**
 * Nifty Ultrasonic Ranger Blocks for both Grove UltrasonocRanger and HC-SR04
 * Available at both Microbit V1.5 and Microbit V2.0
 */
//% weight=90 color=#1eb0f0 icon="\u2972"
namespace NiftyUltrasonicRanger {
    let factor = 0
    let factorMicrobitV2 = 344 / 10000 / 2
    let factorMicrobitV1 = 1.53 * factorMicrobitV2 //correction
    let _trig: DigitalPin = 0
    let _echo: DigitalPin = 0
    /**
     * initialize Ultrasonic Ranger
     */
    //% blockId=initializeUltrasonicRanger
    //% block="initialize sensor trigerpin=$trig echopin=$echo"
    export function initializeUltrasonicRanger(trig: DigitalPin, echo: DigitalPin): void {
        _trig = trig
        _echo = echo
        factor = factorMicrobitV2
        if (isMicrobitV1()) factor = factorMicrobitV1
    }

    //% blockId=initializeUltrasonicRanger2
    //% block="initialize single pin sensor pin=$pin"
    export function initializeSinglePinUltrasonicRanger(pin: DigitalPin): void {
        _trig = pin
        _echo = pin
        factor = factorMicrobitV2
        if (isMicrobitV1()) factor = factorMicrobitV1
    }

    function isMicrobitV1(): boolean {
        let time0 = control.millis()
        let time1 = 0
        for (let index = 0; index < 10000; index++) {
            time1 = 0
        }
        time1 = control.millis()
        serial.writeLine(convertToText(time1 - time0))
        if (15 < time1 - time0) {
            return true
        } else {
            return false
        }
    }

    let oldRangeInCentimeters = 0
    /**
     * measure Range in cm
     */
    //% blockId="rangeincm"
    //% block="range in cm"
    export function measureincm(): number {
        let duration = 0
        let RangeInCentimeters = 0

        pins.digitalWritePin(_trig, 0)
        control.waitMicros(2)
        pins.digitalWritePin(_trig, 1)
        control.waitMicros(20)
        pins.digitalWritePin(_trig, 0)
        duration = pins.pulseIn(_echo, PulseValue.High, 50000) // Max duration 50 ms
        pins.digitalWritePin(_trig, 0)

        RangeInCentimeters = duration * factor

        basic.pause(50)

        return RangeInCentimeters
    }

}
