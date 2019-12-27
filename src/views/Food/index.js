import React from 'react';
import './style.css';

class food extends React.Component{
    constructor(props){
      super(props);
      this.state={
      
      }
    }
  render() {
  return (
    <div className="food">
        <headers>
            <div className="headss">
                <span>北京</span>
                <span><input type="input" placeholder="请输入店家名.品类或商圈"/></span>
                <span>登录</span>
            </div>
        </headers>
        
        <section>
            <div className="logo">
                <img src="4.jpg"/ >
            </div>
            <div className="shops">
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>
                        登录
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>
                        登录
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>
                        登录
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>
                        登录
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>
                        登录
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>
                        登录
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>
                        登录
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>
                        登录
                    </dd>
                </dl>
            </div>
            <hr className="xian"/>
            <div className="zl">
                <span>全部类目</span>
                <span>附近商家</span>
                <span>智能排序</span>
                <span>筛选</span>
            </div>
            
            <div class="shopin">
                <dl>
                    <dt>
                        <img src="3.jpg" alt=""/>
                    </dt>
                    <dd>
                        <p>小城外婆肴私房菜（上地店）</p>
                        <p>★★★★★￥46/人</p>
                        <p>私房菜上地美食第3名包间可定</p>
                        <p>支持外卖丨预定</p>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="3.jpg" alt=""/>
                    </dt>
                    <dd>
                        <p>小城外婆肴私房菜（上地店）</p>
                        <p>★★★★★￥46/人</p>
                        <p>私房菜上地美食第3名包间可定</p>
                        <p>支持外卖丨预定</p>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="3.jpg" alt=""/>
                    </dt>
                    <dd>
                        <p>小城外婆肴私房菜（上地店）</p>
                        <p>★★★★★￥46/人</p>
                        <p>私房菜上地美食第3名包间可定</p>
                        <p>支持外卖丨预定</p>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="3.jpg" alt=""/>
                    </dt>
                    <dd>
                        <p>小城外婆肴私房菜（上地店）</p>
                        <p>★★★★★￥46/人</p>
                        <p>私房菜上地美食第3名包间可定</p>
                        <p>支持外卖丨预定</p>
                    </dd>
                </dl>
            </div>
        </section>
    </div>
  );
}
}

export default food;
