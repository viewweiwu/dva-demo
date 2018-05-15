import React from 'react'
import { connect } from 'dva'
import { Input, List, Button } from 'antd' 
import style from './index.less'

class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: 'hello',
      list: [
        '试着输入东西，敲回车'
      ]
    }
  }

  render () {
    let state = this.state
    return <div className={style.page}>
      <h1>Todo List</h1>
      <Input value={state.keyword} onChange={this.onChange.bind(this)} onPressEnter={this.addItem.bind(this)} />
      <List
        className={style.list}
        dataSource={state.list}
        itemLayout={'vertical'}
        split
        renderItem={(item, i) => (
        <List.Item extra={<Button type="primary" shape="circle" icon="close" onClick={() => this.deleteItem(i)} />}>
          <span className="list item">{item}</span>
        </List.Item>)}
      />
    </div>
  }

  onChange (e) {
    this.setState({
      ...this.state,
      keyword: e.target.value
    })
  }

  addItem (e) {
    let { keyword, list } = this.state
    list.push(keyword)
    keyword = ''

    this.setState({
      keyword,
      list
    })
  }

  deleteItem (i) {
    let { list } = this.state
    list.splice(i, 1)
    this.setState({
      list
    })
  }
}


export default connect()(IndexPage);
