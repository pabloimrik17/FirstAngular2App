/**
 * Created by Etherless on 01/07/2017.
 */


class Greeter {
    saySomething(message: string = "whats up!") {
        return message + ' something';
    }
}

var greeter = new Greeter();
greeter.saySomething("hello");