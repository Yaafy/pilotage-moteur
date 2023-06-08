radio.onReceivedString(function (receivedString) {
    if (receivedString == "avancer") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
    } else if (receivedString == "reculer") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
    } else if (receivedString == "droite") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 40)
    } else if (receivedString == "gauche") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 40)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
    } else if (receivedString == "stop") {
        motor.motorStopAll()
    } else {
        motor.motorStopAll()
    }
})
radio.setGroup(5)
