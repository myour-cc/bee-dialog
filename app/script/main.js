let Dialog = async(el, options) => {
  this.options = Object.assign({
    title: "提示",
    message: "确定执行此操作？",
    ctrls: ["取消", "确定"],
  }, options)

}
