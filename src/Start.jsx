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
        this.props.onChangeStep("loyalty");
    },
    
    onGiftcardClicked: function() {
        this.props.onChangeStep("giftcard");
    },
    
    render: function() {
        return (
            <div className="start">
                <div className="col start--left">
                    <div className="label center">
                        Insert Card
                    </div>
                    <div className="start--subtext center">
                        <span onClick={this.onCreditClicked}>Credit</span> / <span onClick={this.onDebitClicked}>Debit</span> / <span onClick={this.onLoyaltyClicked}>Loyalty</span> / <span onClick={this.onGiftcardClicked}>Gift Card</span>
                    </div>
                    <div className="credit image">
                    </div>
                </div>
                <div className="col start--right">
                    <div className="label center">
                        Insert Cash
                    </div>
                    <div className="start--subtext center">
                        <span onClick={this.on1Clicked}>$1</span> / <span onClick={this.on5Clicked}>$5</span> / <span onClick={this.on10Clicked}>$10</span> / <span onClick={this.on20Clicked}>$20</span> / <span onClick={this.on50Clicked}>$50</span>
                    </div>
                    <div className="cash image">
                    </div>
                    <div className="start--subtext center">
                        OR
                    </div>
                    <Button value="Pay Inside" onClick={this.onPayInsideClicked}/>
                </div>
                <Alert ref="myAlert" label="Please proceed inside to pay" />
            </div>
        );
    }
});