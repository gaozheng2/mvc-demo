import './app4.css'
import $ from 'jquery'

const $square = $('#app4 .square')
$square
  .on('mouseenter', () => {
    $square.addClass('active')
  })
  .on('mouseleave', () => {
    $square.removeClass('active')
  })
