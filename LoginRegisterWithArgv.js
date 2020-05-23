require('colors')

const usersInput = process.argv.slice(2)
const methodAvail = ['create', 'login']

const listMethodAvail = () => {
  let outputList = `-> Available method is : ${methodAvail.toString().replace(',', ', ').green.bold}`
  return outputList
}

const checkUserInput = () => {
  try {
    // Check method available or not
    if (methodAvail.filter(s => s.includes(usersInput[0])).length == 1) {

      // Check user & password parameters (format user:pass)
      if (usersInput[1].match(/:/gi).length == 1) {
        return Promise.resolve({
          method: usersInput[0],
          account: usersInput[1].split(':')
        })
      } else {
        console.log(`.. ERROR : parameter "${usersInput[1]}" is not valid, please check your input.`.red.bold)
      }
    } else {
      console.log(`.. ERROR : parameter "${usersInput[0]}" is not found.`.red.bold)
      console.log(listMethodAvail())
    }
  } catch(err) {
    return Promise.reject(err)
  }
}

const createAccount = (account) => {
  console.log(account)
}

const loginAccoutn = (account) => {
  console.log(account)
}

;(async () => {
  try {
    const resUsersInput = await checkUserInput()

    if (typeof resUsersInput !== 'undefined') {
      if (resUsersInput.method == 'create') {
        await createAccount(resUsersInput.account)
      } else {
        await loginAccoutn(resUsersInput.account)
      }
    }
  } catch(err) {
    console.log(err)
  }
})()