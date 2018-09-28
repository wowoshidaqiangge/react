import React from "react";
import Header from '../../../../component/header/header';
import SubBanner from '../../../../component/subBanner/subBanner'
import Footer from '../../../../component/footer/footer';
import BackTop from '../../../../component/backTop/backTop';
import "./law.scss";

export default class Law1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="law">
                <Header />
                <SubBanner />
                <div className="page law">
                    <h5>《网络借贷风险认知书》</h5>
                    <p>
                        在投资网络借贷时，可能会获得较高的投资收益，但同时也存在着较大的投资风险。为了使您能更好地了解其中的风险，根据国家颁布的有关网络借贷法律法规规定，特提供本风险提示书，请认真详细阅读。投资者从事网络借贷存在如下风险：
                    </p>
                    <p>
                        1.信用风险:
                        如债务人发生资金状况或经营状况的风险，您将可能无法按时足额获得投资本金及收益。
                    </p>
                    <p>
                        2.流动性风险:
                        借贷存在一定的存续期，投资者无提前终止权，可能导致您需要资金时无法随时变现，并可能使您丧失其他投资机会。
                    </p>
                    <p>
                        3.技术风险:
                        由于交易撮合及资金划转等过程是通过电子通讯技术和电脑技术来实现的，这些技术存在着被网络黑客和计算机病毒攻击的可能，同时通讯技术、电脑技术和相关软件具有存在缺陷的可能，这些风险可能给您带来损失或转账资金不能即时到账。
                    </p>
                    <p>
                        4.政策风险:
                        因国家金融监管政策、财政政策、货币政策、行业政策、地区发展、法律法规等因素引起的风险，您将可能无法按时足额获得投资本金及收益。
                    </p>
                    <p>
                        5.不可抗力因素导致的风险:
                        由于战争、动乱、自然灾害、公共网络瘫痪等不可抗力因素的出现而可能导致您无法按时足额获得投资本金及收益。
                    </p>
                    <p>
                        6.其他风险
                        由于您密码失密、操作不当、投资决策失误等原因可能会使您发生损失；网上委托、热键操作完毕后未及时退出，他人进行恶意操作而造成的损失；网上交易未及时退出还可能遭遇黑客攻击，从而造成损失；委托他人代理投资，致使他人恶意操作而造成的损失；其他意外事件造成的损失；上述损失都将由您自行承担。杭州华赢宝网络科技有限公司在此郑重提示：在投资前，投资者应确保自己完全理解该项投资的性质和所涉及的风险，详细了解和审慎评估该项目的资金流向、风险类型及预期收益等基本情况。杭州华赢宝网络科技有限公司提醒用户应本着“充分了解风险、自主选择投资”的原则，谨慎决策，自愿出借其合法所有的资金，在慎重考虑后自行决定投资与自身风险承受能力和资产管理需求相匹配的项目；在投资项目后，随时关注该项目的信息披露情况，及时获取相关信息。
                    </p>
                    <p>
                        出借人在华赢宝平台出借前，应当充分了解借款项目的信息及风险，审慎评估自身的经济状况和财务能力，考虑是否适合参与出借，具体包括:
                    </p>
                    <p>
                        一、出借人出借前，应当进行风险评估能力测试，确定自己的风险承受能力类型，并结合自身经济状况及财务能力来判断是否适合进行投资出借。
                    </p>
                    <p>
                        二、出借人出借前，应认真阅读拟出借的借款项目的全部协议及有关的信息披露文件，对借款项目信息披露的真实性、准确性、完整性和及时性进行独立分析，并据    以独立判断借款项目的出借价值，自行承担出借风险。
                    </p>
                    <p>
                        三、出借人出借前，出借人应当认真阅读《出借咨询服务协议》列明的风险揭示条款，充分关注借款人的经营风险以及可能的还本付息风险。
                    </p>
                    <p>
                        四、本风险认知书的风险揭示事项未能详尽列明借款项目可能产生的所有风险，出借人应对其它相关风险因素也有所了解和掌握，并确信自己已做好足够的风险评估与财务安排，避免因参与出借项目而遭受难以承受的损失。
                    </p>
                    <p>
                        五、出借人应使用来源合法的自有资金进行出借，如因出借资金的权属或合法性等问题发生纠纷，由出借人承担一切经济和法律责任。
                    </p>
                    <p>
                        风险提示方：杭州华赢宝网络科技有限公司
                    </p>
                </div>
                <Footer />
                <BackTop />
            </div>
        );
    }
}