modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
modules.button1.onEvent(jacdac.ButtonEvent.Up, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
