# bee-dialog
基于weui的移动端弹出框

### 引入
- npm
```
npm install bee-dialog
```
```javascript
import 'bee-dialog'
```
- script
```html
<script src="https://unpkg.com/bee-dialog"></script>
```

### 使用
```javascript
BeeDialog({
  title: '重要操作',
  text: '确定要删除此页面吗？'
}).then(action => {
  // todo
})
```
### 参数
属性 | 类型 | 默认值 | 解释
---|---|---|---
title   | string  |      '提示'      | 弹出框标题
text    | string  | '确认执行此操作？' | 提示内容
buttons | array   | ['取消', '确认']  | 按钮

### 说明
```javascript
BeeDialog({
  title: '重要操作',
  text: '确定要删除此页面吗？',
  buttons: ['取消', '确认']
}).then(action => {
  /**
   * @action {number} @buttons 中值的索引 index
   *
   * action === 0  >>取消
   * action === 1  >>确定
   */
})
```

### 案例
[example](https://codepen.io/dasoncheng/pen/JrXqvR)

### 更多
需要添加功能或者存在 `bug` 请提交 `issues`，在空余时间会尽快处理。
