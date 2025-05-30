let menu_2 = 0
let radio_group = 0
input.onButtonPressed(Button.A, function () {
    if (menu_2 == 2) {
    	
    } else {
        radio_group += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (menu_2 == 2) {
        menu_2 = 1
    } else {
        radio_group += 1
    }
})
basic.forever(function () {
    radio.setGroup(0 + radio_group)
    if (menu_2 == 2) {
    	
    } else {
        basic.showString("" + (radio_group))
    }
})
