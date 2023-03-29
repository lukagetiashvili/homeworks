let userLoggedIn = true
let videoCommentarable = true
const userCanComent = userLoggedIn&&videoCommentarable
console.log(userCanComent)

let userLoggedIn2 = true
let userIsBlocked = false
const userCanPost = (!(userLoggedIn2&&userIsBlocked))
console.log(userCanPost)

let balance=10
let userCartTotal=22
const paymentComplete=balance>userCartTotal
console.log(paymentComplete)

let userIsAdmin=true
let userIsModerator=false
let userIsCommentAuthor=false
const userCanDelete=userIsAdmin||userIsModerator||userIsCommentAuthor
console.log(userCanDelete)

let presidentKey=true
let primeMinisterKey=true
let generalOfArmyKey=false
let masterKey=true
const bombWillLunch=((presidentKey&&primeMinisterKey&&generalOfArmyKey)||masterKey)
console.log(bombWillLunch)