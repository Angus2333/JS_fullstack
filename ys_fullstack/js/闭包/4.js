function test() {
    var food = 'apple'

    function a() {
        console.log(food);
        food = 'banna'
    }
    a()

    function b() {
        console.log(food);
    }
    b()
}
test()