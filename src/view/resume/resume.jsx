import React, { Component } from "react";
import "./resume.css";
// import "../../libs/bounce";
class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div className="box">
                {/* <p className="tit">简历</p> */}
                <p className="information clearfix"><span className="name">李天福</span><span className="position">前端开发工程师</span> </p>
                <p className="information clearfix"><span className="tel">TEL:18223070173</span><span className="email">E-Mail：1182930079@qq.com</span></p>
                <p className="information"><span className="module">教育背景</span></p>
                <hr />
                <div className="information">
                    <p className="school">
                        <span>时间：2015~2019</span>
                        <span>学校：重庆邮电大学</span>
                        <span>学院：软件工程学院</span>
                        <span>专业：软件工程专业</span>
                    </p>
                    <p>主修：
                        <span>C++程序设计，java 平台程序设计，计算机网络，操作系统，数据库，软件工程，数字媒体设计与开发等</span>
                    </p>
                </div>
                <p className="information"><span className="module">个人能力</span></p>
                <hr />
                <ul className="information">
                    <li>熟悉 web 标准 HTML CSS JavaScript 等前端基础知识</li>
                    <li>熟悉 HTML5 CSS3 jQuery Bootstrap Layui等库</li>
                    <li>熟悉 AJAX，JSON 前后端交互，JavaWeb 开发流程</li>
                    <li>熟悉 VUE全家桶开发，熟练使用iview和element-ui库</li>
                    <li>熟悉 微信小程序开发，熟练使用mpvue和vant</li>
                    <li>熟练使用 github 代码协同工具，webpack 打包工具</li>
                </ul>
                <p className="information"><span className="module">项目经历</span></p>
                <hr />
                <ol className="information">
                    <li>
                        <p>树洞-你的心情驿站网：</p>
                        <p>负责模块：前端登录，注册以及首页界面等，使用 ajax 对数据进行请求，实现响应式布局。项目主要是一个可以匿名分享自己秘密的地方。</p>
                        <p>收获：该项目是大三在校学生团队开发，开发使用了 js,jq,canvas,ajax，bootstrap，对前端框架的使用有了进一步理解，以及对javaweb开发流程的了解。</p>
                    </li>                    
                    <li>
                        <p>途强2.0：</p>
                        <p>负责模块：参与该项目的统计报表模块的开发，项目使用VUE全家桶和iview库进行开发，从原型了解项目需求，通过ui设计实现界面，和后台联调接口，自测整个开发过程。
                            统计报表模块分运动统计，告警统计等。项目是对公司的途强硬件设备进行统一管理。
                        </p>
                        <p>收获：第一次在公司参与团队项目，熟悉公司开发流程，熟悉了vue模块化开发。</p>
                    </li>
                    <li>
                        <p>重庆几米内部管理系统：</p>
                        <p>负责模块：负责机型管理模块和电量电压模板的开发，项目使用VUE模块化开发。该项目是公司内部的项目管理系统，主要是对公司产品以及平台的统一管理。</p>
                        <p>收获：熟悉了VUE全家桶开发，了解了WebSocket。</p>
                    </li>
                    <li>
                        <p>几米挪车定位：</p>
                        <p>负责模块：项目为微信小程序，使用mpvue和vant库开发，一个人负责前端开发和后台联调接口并成功上线。该项目主要功能是扫描二维码通过虚拟号码打电话联系车主
                            ，以及通过硬件设备返回数据查看自己车子的轨迹以及定位功能
                        </p>
                        <p>收获：第一次接触微信小程序开发，熟悉了微信小程序的开发流程。</p>
                    </li>
                </ol>
                <p className="information"><span className="module">职场经历</span></p>
                <hr />
                <div className="information">
                    <p className="clearfix">
                        <span className="time">2018-11-12———至今</span>
                        <span className="corporation">深圳市几米物联有限公司</span>
                    </p>
                </div>
            </div>
        )
    }
}


export default Resume