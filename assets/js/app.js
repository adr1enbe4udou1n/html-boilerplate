/**
 * jQuery and Bootstrap loading
 */
import 'bootstrap'

// Plugins
import './plugins/bootstrap'
import './plugins/fontawesome'

/**
 * Axios loading
 */
import axios from 'axios'

/**
 * Vue Init
 */
import Vue from 'vue'

/**
 * Frontend plugins loading
 */
import 'slick-carousel'
import swal from 'sweetalert2'

window.axios = axios

new Vue().$mount('#app')
;(function($) {
  /**
   * Bind all bootstrap tooltips
   */
  $('[data-toggle="tooltip"]').tooltip()

  /**
   * Bind all bootstrap popovers
   */
  $('[data-toggle="popover"]').popover()

  $('.slider')
    .not('.slick-initialized')
    .removeAttr('hidden')
    .slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1
    })

  $('button.sweet').click(() => {
    swal({
      title: 'Yo!',
      text: 'Yeaaah!',
      type: 'success',
      confirmButtonText: 'Cool'
    })
  })
})(window.jQuery)
