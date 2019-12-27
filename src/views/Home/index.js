import React from 'react';
import './style.css';

class home extends React.Component{
    constructor(props){
      super(props);
      this.state={
      
      }
    }
  render() {
  return (
    <div className="home">
        <header>
            <div className="heads">
                <span>北京</span>
                <span><input type="input" placeholder="请输入商家名丶品类或者商圈…"/></span>
                <span>登录</span>
            </div>
            
            <div className="banner">
                <span>
                    <dl>
                        <dt><img src="1.jpg"/></dt>
                        <dd>
                            <p>省钱利器 购物超划算</p>
                            <p>吃喝玩乐尽在美团</p>
                        </dd>
                    </dl>
                </span>
                
                <span>
                    <span>下载APP</span>
                </span>
            </div>
        </header>
        
        <section>
            <div className="box">
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>美食</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>美食</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>美食</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>美食</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>美食</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>美食</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>美食</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>美食</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>美食</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="2.jpg" alt=""/>
                    </dt>
                    <dd>美食</dd>
                </dl>
            </div>
            <hr className="xian"/>
            <div className="links">
                <p>猜你喜欢</p>
                <div className="shoping">
                    <dl>
                        <dt><img src="3.jpg" alt=""/></dt>
                        <dd>
                            <p>小城外婆肴私房菜</p>
                            <p>[上地]2-3人虾锅豪华套餐</p>
                            <p>
                                <span><span>98</span><b>元</b>门市价：243元</span>
                                <span>已售9472</span>
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt><img src="3.jpg" alt=""/></dt>
                        <dd>
                            <p>小城外婆肴私房菜</p>
                            <p>[上地]2-3人虾锅豪华套餐</p>
                            <p>
                                <span><span>98</span><b>元</b>门市价：243元</span>
                                <span>已售9472</span>
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt><img src="3.jpg" alt=""/></dt>
                        <dd>
                            <p>小城外婆肴私房菜</p>
                            <p>[上地]2-3人虾锅豪华套餐</p>
                            <p>
                                <span><span>98</span><b>元</b>门市价：243元</span>
                                <span>已售9472</span>
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt><img src="3.jpg" alt=""/></dt>
                        <dd>
                            <p>小城外婆肴私房菜</p>
                            <p>[上地]2-3人虾锅豪华套餐</p>
                            <p>
                                <span><span>98</span><b>元</b>门市价：243元</span>
                                <span>已售9472</span>
                            </p>
                        </dd>
                    </dl>
                    
                </div>
            </div>
        </section>
        
    </div>
  );
}
}

export default home;
