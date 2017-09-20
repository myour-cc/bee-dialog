import template from '../views/component/dialog.pug'

let BeeDialog = (options) => {
  let config = {
    el: document.createElement('div')
  }
  config.el.className = 'bee mask'
  config.options = Object.assign({
    title: '提示',
    text: '确认执行此操作？',
    buttons: ['取消', '确认'],
  }, options)
  config.el.innerHTML = template(config.options)
  document.body.appendChild(config.el)
  return new Promise((resolve, reject) => {
    config.el.querySelectorAll('.bee.dialog-buttom').forEach((btn, index) => {
      btn.addEventListener('click', () => {
        document.body.removeChild(config.el)
        resolve(index)
      })
    })
  })
}
window.BeeDialog = BeeDialog
