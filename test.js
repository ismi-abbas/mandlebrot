const number = parseInt(`${Math.floor(10000 + Math.random() * 90000)}`)
console.log(number)

function getRandomNumber(userId) {
  var headerObj
  try {
    var currentDate = new Date(),
      environment = process.env['NODE_ENV']
    var date = currentDate.getDate()
    var month = currentDate.getMonth()
    var yyyy = currentDate.getFullYear()
    var hours = currentDate.getHours()
    var minutes = currentDate.getMinutes()
    var seconds = currentDate.getSeconds()
    var dd = date < 10 ? '0' + date : date.toString()
    var mon = month < 9 ? '0' + (month + 1) : (month + 1).toString() //January is 0!
    var hh = hours < 10 ? '0' + hours : hours.toString()
    var mm = minutes < 10 ? '0' + minutes : minutes.toString()
    var ss = seconds < 10 ? '0' + seconds : seconds.toString()

    var headerObj = {}
    var randomId = parseInt(Math.random() * 1000000)
    var yr = new Date().getFullYear().toString().substr(-2)
    headerObj['requesterId'] = userId || 'SFStaff' // PF No
    headerObj['txnDateTime'] = yyyy + mon + dd + '-' + hh + mm + ss
    headerObj['msgId'] = 'SFA' + yr + mon + dd + hh + mm + ss + randomId //Max 30 characters
    console.log(headerObj['msgId'])
    return headerObj
  } catch (err) {
    logger.error({
      path: 'salesforce/wolocCommunication/headerFormation/catch',
      message: 'Error in calculating header for WOLOC Call',
      stack: err && err.stack,
    })
    return

  }
}


getRandomNumber('00130052')
