input.onButtonPressed(Button.A, function () {
    NumberSent = 0
    if (LoudLimit == 255 || LoudLimit == 100) {
        LoudLimit = 40
        basic.showNumber(LoudLimit)
    } else {
        LoudLimit = LoudLimit + 10
        basic.showNumber(LoudLimit)
    }
    basic.pause(1000)
    basic.clearScreen()
    if (LastNumberSent == 255) {
        for (let index = 0; index < 2; index++) {
            PauseCode()
        }
    } else {
        led.plotBarGraph(
        LastNumberSent,
        100
        )
    }
    basic.pause(1000)
})
function PauseCode () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 2)
        basic.pause(100)
    }
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
}
input.onButtonPressed(Button.AB, function () {
    NumberSent = 0
    LoudLimit = 255
    basic.showNumber(LoudLimit)
    basic.pause(1000)
    basic.clearScreen()
    if (LastNumberSent == 255) {
        for (let index = 0; index < 2; index++) {
            PauseCode()
        }
    } else {
        led.plotBarGraph(
        LastNumberSent,
        100
        )
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    NumberSent = 1
    LastNumberSent = LoudLimit
    radio.sendNumber(LoudLimit)
    basic.showNumber(LoudLimit)
    basic.pause(2000)
    basic.clearScreen()
    if (LoudLimit == 255) {
        while (NumberSent == 1) {
            PauseCode()
        }
    } else {
        led.plotBarGraph(
        LoudLimit,
        100
        )
    }
})
let LastNumberSent = 0
let NumberSent = 0
let LoudLimit = 0
radio.setGroup(255)
// Sound level range 0 and 255.  40 is good at home test.
LoudLimit = 40
NumberSent = 1
LastNumberSent = 10
