var PrePay = React.createClass({
    
    onDoneClicked: function() {
        this.props.onChangeStep("grade");
    },
    
    onCancelClicked: function() {
        this.props.onChangeStep("start");
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
    
    render: function() {
        return (
            <div className="prepay">
                <div className="col prepay--left">
                    <div className="label center">
                        Prepaid Amount
                    </div>
                    <div className="prepay--amount center">
                        $10
                    </div>
                    <Button value="Done with Prepay" onClick={this.onDoneClicked}/>
                </div>
                <div className="col prepay--right">
                    <div className="label center">
                        Insert Cash
                    </div>
                    <div className="start--subtext center">
                        <span onClick={this.on1Clicked}>$1</span> / <span onClick={this.on5Clicked}>$5</span> / <span onClick={this.on10Clicked}>$10</span> / <span onClick={this.on20Clicked}>$20</span> / <span onClick={this.on50Clicked}>$50</span>
                    </div>
                    <div className="cash image">
                    </div>
                    <div className="row">
                        <Button value="Cancel" onClick={this.onCancelClicked} />
                    </div>
                </div>
            </div>
        );
    }
});