var passed = 0
var failed = 0
var $pCount = $('#p_count')
var $fCount = $('#f_count')
var $passedList = $('#passed_tests')
var $failedList = $('#failed_tests')
var $btn = $('#run')

// Functions
function makeLi(text) {
  return '<li>' + text + '</li>'
}

function addPass(name){
  $pCount.text(++passed)
  $passedList.append(makeLi(name))
}

function addFail(name, err){
  $fCount.text(++failed)
  $failedList.append(makeLi(name + ' - ' + err))
}

function runTest(name, actual, expected){
  try{
    expect(actual).toEqual(expected)
    addPass(name)
  } catch (err) {
    addFail(name, err.message)
  }
}

function run(){
  runTest('sum', sum(6,3), 5)
}

function sum(x,y){
  return x + y
}

// Listeners
$btn.on('click', function(){
  passed = 0
  failed = 0
  $pCount.text(passed)
  $fCount.text(failed)
  $failedList.empty()
  $passedList.empty()
  run()
})