var Start = React.createClass({
    
    getInitialState: function() {
        return {
            bannerClasses: "banner"
        };
    },
    
    removeAlert: function() {
        this.setState( {
            bannerClasses: "banner"
        });
    },
    
    onPayInsideClicked: function() {
        this.refs.myAlert.raise();
    },
    
    on1Clicked: function() {
        this.props.onChangeStep("prepay");
    },
    
    on5Clicked: function() {
        this.props.onChangeStep("prepay");
    },
    
    on10Clicked: function() {
        this.props.onChangeStep("prepay");
    },
    
    on20Clicked: function() {
        this.props.onChangeStep("prepay");
    },
 
    on50Clicked: function() {
        this.props.onChangeStep("prepay");
    },
    
    onCreditClicked: function() {
        this.props.onChangeStep("zip");
    },
    
    onDebitClicked: function() {
        this.props.onChangeStep("pin");
    },
    
    onLoyaltyClicked: function() {
        this.refs.myBanner.raise();
        this.props.onChangeStep("loyalty");
    },
    
    onGiftcardClicked: function() {
        this.props.onChangeStep("giftcard");
    },
    
    render: function() {
        return (
            <div className="start">
                <div className="start--column start--left">
                    <div className="credit image" />
                    <div className="start--label center">
                        Pay By Card
                    </div>
                    <div className="start--subtext center">
                        <span onClick={this.onCreditClicked}>Credit</span> / <span onClick={this.onDebitClicked}>Debit</span> / <span onClick={this.onLoyaltyClicked}>Loyalty</span> / <span onClick={this.onGiftcardClicked}>Gift Card</span>
                    </div>
                    <div className="start--directions">
                        <div className="col arrows-down" />
                        <div className="col start--directions-label">
                            Insert Card Below
                        </div>
                    </div>
                </div>
                <div className="start--column start--middle">
                    <div className="store image" />
                    <div className="start--label center">
                        Pay Inside
                    </div>
                    <div className="start--subtext center">
                        <span onClick={this.onCreditClicked}>Credit</span> / <span onClick={this.onDebitClicked}>Debit</span> / <span onClick={this.onLoyaltyClicked}>Loyalty</span> / <span onClick={this.onGiftcardClicked}>Gift Card</span>
                    </div>
                    <div className="start--button-container">
                        <div className="start--button-pay-inside center" onClick={this.onPayInsideClicked}>
                            Tap to Pay Inside
                        </div>
                    </div>
                </div>
                <div className="start--column start--right">
                    <div className="cash image">
                    </div>
                    <div className="start--label center">
                        Pay By Cash
                    </div>
                    <div className="start--subtext center">
                        <span onClick={this.on1Clicked}>$1</span> / <span onClick={this.on5Clicked}>$5</span> / <span onClick={this.on10Clicked}>$10</span> / <span onClick={this.on20Clicked}>$20</span> / <span onClick={this.on50Clicked}>$50</span>
                    </div>
                    <div className="start--directions">
                        <div className="col start--directions-label start--directions-label-right">
                            Insert Cash Below
                        </div>
                        <div className="col arrows-down" />
                    </div>    
                </div>
                <Alert ref="myAlert" label="Please proceed inside to pay" />
                <Banner ref="myBanner" title="Hello Loyal Customer!" label="Your loyalty discount is $.30 per gallon" /> 
            </div>
        );
    }
});