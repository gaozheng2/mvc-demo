import './app1.css'
import $ from 'jquery'

const $btn1 = $('#btnAdd')
const $btn2 = $('#btnMinus')
const $btn3 = $('#btnMul')
const $btn4 = $('#btnDivide')
const $number = $('#number')
let n = parseInt(localStorage.getItem('n'))
n = n || 100
$number.text(n)

$btn1.on('click', () => {
  n += 1
  $number.text(n)
  localStorage.setItem('n', n)
})

$btn2.on('click', () => {
  n -= 1
  $number.text(n)
  localStorage.setItem('n', n)
})

$btn3.on('click', () => {
  n *= 2
  $number.text(n)
  localStorage.setItem('n', n)
})

$btn4.on('click', () => {
  n /= 2
  $number.text(n)
  localStorage.setItem('n', n)
})
