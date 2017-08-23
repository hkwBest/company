
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Transfer from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
*
* @title 这是标题
* @description 这是描述
*
*/

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const targetKeys = mockData
        .filter(item => +item.key % 3 > 1)
        .map(item => item.key);

class Demo1 extends React.Component {
  state = {
    targetKeys,
    selectedKeys: [],
  }

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });

    console.log('targetKeys: ', targetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  }

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  }

  handleScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  }

  render() {
    const state = this.state;
    return (
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        targetKeys={state.targetKeys}
        selectedKeys={state.selectedKeys}
        onChange={this.handleChange}
        onSelectChange={this.handleSelectChange}
        onScroll={this.handleScroll}
        render={item => item.title}
      />
    );
  }
}
class Demo2 extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  }
  componentDidMount() {
    this.getMock();
  }
  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  }
  filterOption = (inputValue, option) => {
    return option.title.indexOf(inputValue) > -1;
  }
  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  }
  render() {
    return (
      <Transfer
        dataSource={this.state.mockData}
        showSearch
        filterOption={this.filterOption}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        render={item => item.title}
      />
    );
  }
}
class Demo3 extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  }
  componentDidMount() {
    this.getMock();
  }
  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  }
  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  }
  renderFooter = () => {
    return (
      <Button
        size="sm"
        style={{ float: 'right', margin: 5 }}
        onClick={this.getMock}
      >
        reload
      </Button>
    );
  }
  render() {
    return (
      <Transfer
        dataSource={this.state.mockData}
        showSearch
        listStyle={{
          width: 250,
          height: 300,
        }}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        render={item => `${item.title}-${item.description}`}
        footer={this.renderFooter}
      />
    );
  }
}
var DemoArray = [{"example":<Demo1 />,"title":" 这是标题","code":"/**\n*\n* @title 这是标题\n* @description 这是描述\n*\n*/\n\nconst mockData = [];\nfor (let i = 0; i < 20; i++) {\n  mockData.push({\n    key: i.toString(),\n    title: `content${i + 1}`,\n    description: `description of content${i + 1}`,\n    disabled: i % 3 < 1,\n  });\n}\n\nconst targetKeys = mockData\n        .filter(item => +item.key % 3 > 1)\n        .map(item => item.key);\n\nclass Demo1 extends React.Component {\n  state = {\n    targetKeys,\n    selectedKeys: [],\n  }\n\n  handleChange = (nextTargetKeys, direction, moveKeys) => {\n    this.setState({ targetKeys: nextTargetKeys });\n\n    console.log('targetKeys: ', targetKeys);\n    console.log('direction: ', direction);\n    console.log('moveKeys: ', moveKeys);\n  }\n\n  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {\n    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });\n\n    console.log('sourceSelectedKeys: ', sourceSelectedKeys);\n    console.log('targetSelectedKeys: ', targetSelectedKeys);\n  }\n\n  handleScroll = (direction, e) => {\n    console.log('direction:', direction);\n    console.log('target:', e.target);\n  }\n\n  render() {\n    const state = this.state;\n    return (\n      <Transfer\n        dataSource={mockData}\n        titles={['Source', 'Target']}\n        targetKeys={state.targetKeys}\n        selectedKeys={state.selectedKeys}\n        onChange={this.handleChange}\n        onSelectChange={this.handleSelectChange}\n        onScroll={this.handleScroll}\n        render={item => item.title}\n      />\n    );\n  }\n}\n","desc":" 这是描述"},{"example":<Demo2 />,"title":"Demo2","code":"class Demo2 extends React.Component {\n  state = {\n    mockData: [],\n    targetKeys: [],\n  }\n  componentDidMount() {\n    this.getMock();\n  }\n  getMock = () => {\n    const targetKeys = [];\n    const mockData = [];\n    for (let i = 0; i < 20; i++) {\n      const data = {\n        key: i.toString(),\n        title: `content${i + 1}`,\n        description: `description of content${i + 1}`,\n        chosen: Math.random() * 2 > 1,\n      };\n      if (data.chosen) {\n        targetKeys.push(data.key);\n      }\n      mockData.push(data);\n    }\n    this.setState({ mockData, targetKeys });\n  }\n  filterOption = (inputValue, option) => {\n    return option.title.indexOf(inputValue) > -1;\n  }\n  handleChange = (targetKeys) => {\n    this.setState({ targetKeys });\n  }\n  render() {\n    return (\n      <Transfer\n        dataSource={this.state.mockData}\n        showSearch\n        filterOption={this.filterOption}\n        targetKeys={this.state.targetKeys}\n        onChange={this.handleChange}\n        render={item => item.title}\n      />\n    );\n  }\n}\n","desc":""},{"example":<Demo3 />,"title":"Demo3","code":"class Demo3 extends React.Component {\n  state = {\n    mockData: [],\n    targetKeys: [],\n  }\n  componentDidMount() {\n    this.getMock();\n  }\n  getMock = () => {\n    const targetKeys = [];\n    const mockData = [];\n    for (let i = 0; i < 20; i++) {\n      const data = {\n        key: i.toString(),\n        title: `content${i + 1}`,\n        description: `description of content${i + 1}`,\n        chosen: Math.random() * 2 > 1,\n      };\n      if (data.chosen) {\n        targetKeys.push(data.key);\n      }\n      mockData.push(data);\n    }\n    this.setState({ mockData, targetKeys });\n  }\n  handleChange = (targetKeys) => {\n    this.setState({ targetKeys });\n  }\n  renderFooter = () => {\n    return (\n      <Button\n        size=\"sm\"\n        style={{ float: 'right', margin: 5 }}\n        onClick={this.getMock}\n      >\n        reload\n      </Button>\n    );\n  }\n  render() {\n    return (\n      <Transfer\n        dataSource={this.state.mockData}\n        showSearch\n        listStyle={{\n          width: 250,\n          height: 300,\n        }}\n        targetKeys={this.state.targetKeys}\n        onChange={this.handleChange}\n        render={item => `${item.title}-${item.description}`}\n        footer={this.renderFooter}\n      />\n    );\n  }\n}\n","desc":""}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));