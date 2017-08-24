import template from '../hbs/dialog.hbs'
let dialog_el = document.createElement('div')
dialog_el.className = 's-model'
let Dialog={

}
window.Dialog = (option = {}, action) => {
  option = Object.assign({
    title: '提示',
    message: '确定执行此操作？',
    buttons: ['取消', '确认']
  }, option)
  dialog_el.innerHTML = template(option)
  document.body.appendChild(dialog_el)
}
